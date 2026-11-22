// Kopieert .env.example naar .env als die laatste ontbreekt (nieuwe clone, nieuwe git worktree).
// .env.example bevat geen secrets (alleen de publieke GTM-container-ID, zie CookieConsent.astro),
// dus dit is een veilige default. Zonder dit stond GTM/de cookiebanner in een verse worktree altijd
// uit, wat een lokale build structureel liet afwijken van de nulmeting-baseline (die is vastgelegd
// tegen de site met GTM aan) op elke pagina, in plaats van alleen op de pagina's die echt wijzigen.
import fs from 'node:fs';

if (!fs.existsSync('.env') && fs.existsSync('.env.example')) {
  fs.copyFileSync('.env.example', '.env');
  console.log('ensure-env: .env ontbrak, aangemaakt vanuit .env.example.');
}
