(function () {
  "use strict";

  var SLUG_ORDER = ["maison-verdier", "atelier-rivage", "studio-calame"];
  var FILE_BY_SLUG = {
    "maison-verdier": "maison-verdier.html",
    "atelier-rivage": "atelier-rivage.html",
    "studio-calame": "studio-calame.html",
  };

  function appendListSection(container, title, items) {
    if (!items || !items.length) return;
    var sec = document.createElement("section");
    sec.className = "ii2-real-panel";
    sec.setAttribute("data-ii2-reveal-real", "");
    sec.setAttribute("data-ii2-delay", "60");
    var h = document.createElement("h2");
    h.className = "ii2-real-panel__title";
    h.textContent = title;
    sec.appendChild(h);
    var ul = document.createElement("ul");
    ul.className = "ii2-real-panel__list";
    items.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    container.appendChild(sec);
  }

  function initRevealMotion() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = document.querySelectorAll("[data-ii2-reveal-real]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    var seen = new WeakSet();
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);
          var d = parseInt(entry.target.getAttribute("data-ii2-delay") || "0", 10) || 0;
          window.setTimeout(function () {
            entry.target.classList.add("is-in");
          }, d);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 12% 0px",
        threshold: [0, 0.08, 0.15],
      }
    );
    nodes.forEach(function (el) {
      io.observe(el);
    });
  }

  function initHeadScroll() {
    var head = document.querySelector(".ii2-head");
    if (!head) return;
    var raf = null;
    function tick() {
      raf = null;
      head.classList.toggle("ii2-head--scrolled", (window.scrollY || window.pageYOffset) > 10);
    }
    function onScroll() {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(tick);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
  }

  function year() {
    var y = document.getElementById("ii2-year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function buildGallerySection(gallery, projectTitle) {
    if (!gallery || !gallery.length) return null;
    var sec = document.createElement("section");
    sec.className = "ii2-real-gal";
    sec.setAttribute("aria-label", "Visuels du projet");
    var wrap = document.createElement("div");
    wrap.className = "ii2-wrap";
    var label = document.createElement("p");
    label.className = "ii2-real-gal__label";
    label.setAttribute("data-ii2-reveal-real", "");
    label.setAttribute("data-ii2-delay", "0");
    label.textContent = "Visuels & détails";
    wrap.appendChild(label);

    var layout = document.createElement("div");
    layout.className = "ii2-real-gal__layout";

    var first = gallery[0];
    var feat = document.createElement("figure");
    feat.className = "ii2-real-gal__feat";
    feat.setAttribute("data-ii2-reveal-real", "");
    feat.setAttribute("data-ii2-delay", "40");
    var img1 = document.createElement("img");
    img1.src = first.src;
    img1.alt = first.alt || projectTitle;
    img1.width = 1200;
    img1.height = 800;
    img1.loading = "lazy";
    img1.decoding = "async";
    feat.appendChild(img1);
    if (first.alt) {
      var cap = document.createElement("figcaption");
      cap.className = "ii2-real-gal__cap";
      cap.textContent = first.alt;
      feat.appendChild(cap);
    }
    layout.appendChild(feat);

    var rest = gallery.slice(1);
    if (rest.length) {
      var mos = document.createElement("div");
      mos.className = "ii2-real-gal__mos";
      rest.forEach(function (item, i) {
        var fig = document.createElement("figure");
        fig.className = "ii2-real-gal__cell";
        fig.setAttribute("data-ii2-reveal-real", "");
        fig.setAttribute("data-ii2-delay", String(80 + i * 50));
        var im = document.createElement("img");
        im.src = item.src;
        im.alt = item.alt || "";
        im.width = 720;
        im.height = 540;
        im.loading = "lazy";
        im.decoding = "async";
        fig.appendChild(im);
        mos.appendChild(fig);
      });
      layout.appendChild(mos);
    }

    wrap.appendChild(layout);
    sec.appendChild(wrap);
    return sec;
  }

  function buildNavRow(slug, data) {
    var idx = SLUG_ORDER.indexOf(slug);
    var prevSlug = idx > 0 ? SLUG_ORDER[idx - 1] : null;
    var nextSlug = idx >= 0 && idx < SLUG_ORDER.length - 1 ? SLUG_ORDER[idx + 1] : null;
    var nav = document.createElement("nav");
    nav.className = "ii2-real-nav";
    nav.setAttribute("aria-label", "Navigation entre réalisations");

    var back = document.createElement("a");
    back.className = "ii2-real-nav__back ii2-real-pill";
    back.href = "../index.html#ii2-strip";
    back.textContent = "← Réalisations";

    var inner = document.createElement("div");
    inner.className = "ii2-real-nav__sibs";

    if (prevSlug && window.PROJECTS[prevSlug]) {
      var a = document.createElement("a");
      a.className = "ii2-real-nav__sib";
      a.href = FILE_BY_SLUG[prevSlug];
      a.textContent = "Précédent";
      inner.appendChild(a);
    }
    if (nextSlug && window.PROJECTS[nextSlug]) {
      var b = document.createElement("a");
      b.className = "ii2-real-nav__sib";
      b.href = FILE_BY_SLUG[nextSlug];
      b.textContent = "Suivant";
      inner.appendChild(b);
    }

    nav.appendChild(back);
    if (inner.childNodes.length) nav.appendChild(inner);
    return nav;
  }

  function buildPage(slug, data) {
    var mount = document.getElementById("ii2-real-mount");
    if (!mount) return;

    document.title = data.title + " — Réalisation — Théotime Laffont";
    var md = document.querySelector('meta[name="description"]');
    if (md && data.summary) md.setAttribute("content", data.summary);

    mount.textContent = "";

    mount.appendChild(buildNavRow(slug, data));

    var hero = document.createElement("header");
    hero.className = "ii2-real-hero";
    var media = document.createElement("div");
    media.className = "ii2-real-hero__media";
    var himg = document.createElement("img");
    himg.className = "ii2-real-hero__img";
    himg.src = data.image;
    himg.alt = data.title ? "Couverture — " + data.title : "";
    himg.width = 1920;
    himg.height = 1000;
    himg.fetchPriority = "high";
    himg.decoding = "async";
    var scrim = document.createElement("div");
    scrim.className = "ii2-real-hero__scrim";
    scrim.setAttribute("aria-hidden", "true");
    media.appendChild(himg);
    media.appendChild(scrim);
    var hc = document.createElement("div");
    hc.className = "ii2-wrap ii2-real-hero__content";
    var kick = document.createElement("p");
    kick.className = "ii2-real-hero__kicker";
    kick.textContent = data.meta;
    var h1 = document.createElement("h1");
    h1.className = "ii2-real-hero__title";
    h1.id = "ii2-real-title";
    h1.textContent = data.title;
    hc.appendChild(kick);
    hc.appendChild(h1);
    if (data.url && String(data.url).trim()) {
      var heroBtn = document.createElement("a");
      heroBtn.className = "ii2-real-hero__link";
      heroBtn.href = data.url;
      heroBtn.target = "_blank";
      heroBtn.rel = "noopener noreferrer";
      heroBtn.textContent = "Voir le projet";
      heroBtn.setAttribute("aria-label", "Voir le projet sur le web (nouvel onglet)");
      hc.appendChild(heroBtn);
    }
    hero.appendChild(media);
    hero.appendChild(hc);
    mount.appendChild(hero);

    var intro = document.createElement("section");
    intro.className = "ii2-real-intro";
    var introInner = document.createElement("div");
    introInner.className = "ii2-wrap ii2-real-intro__inner";
    (data.body || []).forEach(function (text, i) {
      var p = document.createElement("p");
      p.className = "ii2-real-lead";
      p.setAttribute("data-ii2-reveal-real", "");
      p.setAttribute("data-ii2-delay", String(i * 70));
      p.textContent = text;
      introInner.appendChild(p);
    });
    intro.appendChild(introInner);
    mount.appendChild(intro);

    var galSec = buildGallerySection(data.gallery, data.title);
    if (galSec) mount.appendChild(galSec);

    var split = document.createElement("section");
    split.className = "ii2-real-split";
    var splitInner = document.createElement("div");
    splitInner.className = "ii2-wrap ii2-real-split__grid";
    var colA = document.createElement("div");
    colA.className = "ii2-real-split__col";
    appendListSection(colA, "Livrables", data.livrables);
    var colB = document.createElement("div");
    colB.className = "ii2-real-split__col";
    appendListSection(colB, "Ajustements et itérations", data.ajustements);
    splitInner.appendChild(colA);
    splitInner.appendChild(colB);
    split.appendChild(splitInner);
    mount.appendChild(split);
  }

  var slug = document.body.getAttribute("data-ii2-project");
  if (!slug || typeof window.PROJECTS === "undefined") return;
  var data = window.PROJECTS && window.PROJECTS[slug];
  if (!data) {
    var m = document.getElementById("ii2-real-mount");
    if (m) {
      m.innerHTML =
        '<div class="ii2-wrap"><p class="ii2-real-error">Ce projet est introuvable. <a href="../index.html#ii2-strip">Retour aux réalisations</a>.</p></div>';
    }
    return;
  }

  year();
  initHeadScroll();
  buildPage(slug, data);
  initRevealMotion();
})();
