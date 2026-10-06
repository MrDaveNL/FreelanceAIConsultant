/* Logo-carrousel: gedrag bij de markup uit src/components/LogoCarousel.astro. */
(function () {
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)');

  function el(tag, cls) {
    var n = document.createElement(tag);
    n.className = cls;
    return n;
  }

  // Vervangt het woordmerk door het logo zodra het bestand geladen is. Lukt dat niet, dan blijft het woordmerk staan.
  function laadLogos(sectie) {
    var mono = sectie.getAttribute('data-mono') !== 'false';
    var perBestand = {};
    Array.prototype.forEach.call(sectie.querySelectorAll('.aimerken__logo[data-logo]'), function (houder) {
      var src = houder.getAttribute('data-logo');
      (perBestand[src] = perBestand[src] || []).push(houder);
    });
    Object.keys(perBestand).forEach(function (src) {
      var test = new Image();
      test.onload = function () {
        perBestand[src].forEach(function (houder) {
          var naam = houder.getAttribute('data-naam');
          var logo;
          if (mono) {
            logo = el('span', 'aimerken__logo-svg');
            logo.style.setProperty('--src', 'url("' + src + '")');
            logo.setAttribute('role', 'img');
            logo.setAttribute('aria-label', naam);
          } else {
            logo = el('img', 'aimerken__logo-kleur');
            logo.src = src;
            logo.alt = naam;
          }
          houder.replaceChild(logo, houder.querySelector('.aimerken__woordmerk'));
        });
      };
      test.src = src;
    });
  }

  function start(sectie) {
    var baan = sectie.querySelector('.aimerken__baan');
    var lijst = baan && baan.querySelector('.aimerken__lijst');
    if (!lijst) return;

    // Tweede, verborgen lijst voor de naadloze loop. Die wordt overgeslagen door schermlezers en het toetsenbord.
    var kopie = lijst.cloneNode(true);
    kopie.setAttribute('aria-hidden', 'true');
    Array.prototype.forEach.call(kopie.querySelectorAll('a'), function (a) { a.tabIndex = -1; });
    baan.appendChild(kopie);
    baan.style.setProperty('--duur', lijst.children.length * 5 + 's');

    laadLogos(sectie);

    // Start pas als de sectie in beeld komt en pauzeer als het tabblad verborgen is.
    var inBeeld = !('IntersectionObserver' in window);
    function werkBij() {
      sectie.classList.toggle('is-lopend', inBeeld && !document.hidden);
    }
    if (!inBeeld) {
      new IntersectionObserver(function (entries) {
        inBeeld = entries[entries.length - 1].isIntersecting;
        werkBij();
      }).observe(sectie);
    }
    document.addEventListener('visibilitychange', werkBij);
    werkBij();

    // Bij prefers-reduced-motion is de baan een horizontale scroller. Die moet met het toetsenbord bereikbaar zijn.
    function werkScrollerBij() {
      if (stil.matches) {
        baan.tabIndex = 0;
        baan.setAttribute('role', 'group');
        baan.setAttribute('aria-labelledby', sectie.getAttribute('aria-labelledby'));
      } else {
        baan.removeAttribute('tabindex');
        baan.removeAttribute('role');
        baan.removeAttribute('aria-labelledby');
      }
    }
    if (stil.addEventListener) stil.addEventListener('change', werkScrollerBij);
    werkScrollerBij();

    var knop = sectie.querySelector('.aimerken__pauze');
    if (knop) {
      knop.addEventListener('click', function () {
        var uit = sectie.classList.toggle('is-gepauzeerd');
        knop.setAttribute('aria-pressed', String(uit));
        knop.textContent = uit ? 'Speel af' : 'Pauzeer';
      });
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('.aimerken'), start);
})();
