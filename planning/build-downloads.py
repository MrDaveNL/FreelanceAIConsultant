"""Zet planning/downloads/*.md om naar public/downloads/*.pdf (eenvoudige Markdown: #, ##, ###, -, - [ ], 1., tabellen, **vet**).

Gebruik: python planning/build-downloads.py
"""
import re
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "planning" / "downloads"
OUT = ROOT / "public" / "downloads"
BURGUNDY = HexColor("#4A1F2A")
INK = HexColor("#2A1720")

styles = {
    "h1": ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=BURGUNDY, spaceAfter=10),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=14, leading=18, textColor=BURGUNDY, spaceBefore=12, spaceAfter=6),
    "h3": ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=BURGUNDY, spaceBefore=8, spaceAfter=4),
    "p": ParagraphStyle("p", fontName="Helvetica", fontSize=10, leading=14, textColor=INK, spaceAfter=6),
    "li": ParagraphStyle("li", fontName="Helvetica", fontSize=10, leading=14, textColor=INK),
    "foot": ParagraphStyle("foot", fontName="Helvetica-Oblique", fontSize=8.5, leading=12, textColor=HexColor("#685A55")),
}


def inline(text: str) -> str:
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1 (\2)", text)


def convert(md_path: Path) -> Path:
    story, items, kind, rows = [], [], None, []

    def flush_table():
        nonlocal rows
        if rows:
            cols = len(rows[0])
            data = [[Paragraph(inline(c), styles["li"]) for c in r] for r in rows]
            if len(rows) == 1:  # alleen een kop: lege invulregels toevoegen
                rows += [[""] * cols for _ in range(4)]
                data += [[Paragraph("", styles["li"]) for _ in range(cols)] for _ in range(4)]
            # Lege regels krijgen schrijfruimte.
            heights = [22 if i and not any(c.strip() for c in r) else None for i, r in enumerate(rows)]
            table = Table(data, colWidths=[(A4[0] - 40 * mm) / cols] * cols, rowHeights=heights, repeatRows=1)
            table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, 0), HexColor("#DCC29A")),
                ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#B9A48A")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]))
            story.extend([table, Spacer(1, 8)])
        rows = []

    def flush():
        nonlocal items, kind
        flush_table()
        if items:
            bullet = {"check": "\u2610", "bullet": "\u2022"}.get(kind, None)
            flow = ListFlowable(
                [ListItem(Paragraph(inline(i), styles["li"]), leftIndent=14) for i in items],
                bulletType="1" if kind == "num" else "bullet",
                start=bullet if bullet else 1,
                leftIndent=14,
                bulletFontName="DejaVu" if kind == "check" else "Helvetica",
            )
            story.extend([flow, Spacer(1, 6)])
        items, kind = [], None

    for line in md_path.read_text(encoding="utf-8").splitlines():
        s = line.strip()
        if s.startswith("|"):
            cells = [c.strip() for c in s.strip("|").split("|")]
            if not all(re.fullmatch(r":?-{2,}:?", c) for c in cells):
                if items and not rows:
                    flush()  # lopende lijst eerst afsluiten
                rows.append(cells)
            continue
        if rows:
            flush_table()
        if not s or s.startswith("<!--") or re.fullmatch(r"-{3,}|\*{3,}", s):
            flush()
            continue
        m = re.match(r"^(#{1,3}) (.+)", s)
        if m:
            flush()
            story.append(Paragraph(inline(m.group(2)), styles[f"h{len(m.group(1))}"]))
            continue
        for pattern, k in ((r"^- \[ \] (.+)", "check"), (r"^[-*] (.+)", "bullet"), (r"^\d+\. (.+)", "num")):
            m = re.match(pattern, s)
            if m:
                if kind != k:
                    flush()
                kind = k
                items.append(m.group(1))
                break
        else:
            flush()
            story.append(Paragraph(inline(s), styles["p"]))
    flush()
    story += [Spacer(1, 14), Paragraph("Dave Willemstein · onafhankelijk AI-adviseur · freelanceaiconsultant.com", styles["foot"])]

    OUT.mkdir(parents=True, exist_ok=True)
    pdf = OUT / f"{md_path.stem}.pdf"
    SimpleDocTemplate(
        str(pdf), pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=18 * mm, bottomMargin=18 * mm,
        title=md_path.stem.replace("-", " ").capitalize(), author="Dave Willemstein",
    ).build(story)
    return pdf


if __name__ == "__main__":
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont

    # Lettertype met het ☐-teken voor afvinklijsten; valt terug op Helvetica als het ontbreekt.
    for candidate in ("C:/Windows/Fonts/seguisym.ttf", "C:/Windows/Fonts/arial.ttf"):
        if Path(candidate).exists():
            pdfmetrics.registerFont(TTFont("DejaVu", candidate))
            break
    for md in sorted(SRC.glob("*.md")):
        print("PDF:", convert(md).relative_to(ROOT))
