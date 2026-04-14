(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");
  var navEl = document.querySelector(".nav");
  var navBackdrop = document.getElementById("nav-backdrop");

  function setMenuOpen(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    menu.classList.toggle("is-open", open);
    if (navEl) {
      navEl.classList.toggle("nav--open", open);
    }
    if (navBackdrop) {
      navBackdrop.setAttribute("aria-hidden", open ? "false" : "true");
    }
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    if (navBackdrop) {
      navBackdrop.addEventListener("click", function () {
        setMenuOpen(false);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var heroEl = document.querySelector(".hero");
  var headerEl = document.querySelector(".header");
  var scrollRaf = null;
  function applyScrollFrame() {
    scrollRaf = null;
    var y = window.scrollY || window.pageYOffset;
    if (headerEl) {
      headerEl.classList.toggle("header--scrolled", y > 10);
    }
    if (!reduceMotion && heroEl) {
      heroEl.style.setProperty("--hero-parallax", (y * 0.065).toFixed(2) + "px");
    }
  }
  function onScroll() {
    if (scrollRaf !== null) return;
    scrollRaf = window.requestAnimationFrame(applyScrollFrame);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  applyScrollFrame();

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll("[data-reveal]");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.1 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (
    !reduceMotion &&
    window.matchMedia("(min-width: 900px)").matches &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    var heroVis = document.querySelector(".hero__visual");
    var heroBezel = document.querySelector(".hero__bezel");
    if (heroVis && heroBezel) {
      var tiltRaf = null;
      var tiltEase = "cubic-bezier(0.23, 1, 0.32, 1)";
      heroVis.addEventListener(
        "pointermove",
        function (e) {
          if (tiltRaf !== null) return;
          tiltRaf = window.requestAnimationFrame(function () {
            tiltRaf = null;
            var rect = heroVis.getBoundingClientRect();
            var px = (e.clientX - rect.left) / rect.width - 0.5;
            var py = (e.clientY - rect.top) / rect.height - 0.5;
            var maxDeg = 6.5;
            heroBezel.style.transition = "none";
            heroBezel.style.transform =
              "perspective(760px) rotateY(" +
              px * maxDeg +
              "deg) rotateX(" +
              -py * maxDeg +
              "deg)";
          });
        },
        { passive: true }
      );
      heroVis.addEventListener("pointerleave", function () {
        heroBezel.style.transition = "transform 480ms " + tiltEase;
        heroBezel.style.transform = "perspective(760px) rotateY(0deg) rotateX(0deg)";
      });
    }
  }

  var copyBtn = document.getElementById("copy-email");
  var emailAddr = "bonjour@theotimelaffont.fr";
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      function done(ok) {
        copyBtn.textContent = ok ? "Copié" : "Réessayer";
        copyBtn.classList.toggle("is-copied", ok);
        copyBtn.setAttribute(
          "aria-label",
          ok ? "Adresse e-mail copiée dans le presse-papiers" : "La copie a échoué, réessayer"
        );
        window.setTimeout(function () {
          copyBtn.textContent = "Copier";
          copyBtn.classList.remove("is-copied");
          copyBtn.setAttribute("aria-label", "Copier l’adresse e-mail");
        }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailAddr).then(function () {
          done(true);
        }).catch(function () {
          done(false);
        });
      } else {
        done(false);
      }
    });
  }

  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");
  var fields = [
    { id: "name", err: "name-error", msg: "Indiquez votre nom." },
    { id: "email", err: "email-error", msg: "Une adresse e-mail valide est nécessaire." },
    { id: "message", err: "message-error", msg: "Ajoutez un court message." },
  ];

  function clearFieldErrors() {
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var errEl = document.getElementById(f.err);
      if (input) {
        input.removeAttribute("aria-invalid");
      }
      if (errEl) {
        errEl.textContent = "";
      }
    });
    if (feedback) {
      feedback.textContent = "";
    }
  }

  function validateForm() {
    var ok = true;
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var errEl = document.getElementById(f.err);
      if (!input || !errEl) return;
      var valid = input.checkValidity();
      if (!valid) {
        ok = false;
        input.setAttribute("aria-invalid", "true");
        errEl.textContent = f.msg;
      } else {
        input.removeAttribute("aria-invalid");
        errEl.textContent = "";
      }
    });
    return ok;
  }

  if (form) {
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      if (!input) return;
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true" && input.checkValidity()) {
          input.removeAttribute("aria-invalid");
          var errEl = document.getElementById(f.err);
          if (errEl) errEl.textContent = "";
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearFieldErrors();
      if (!validateForm()) {
        if (feedback) {
          feedback.textContent = "Corrigez les champs indiqués ci-dessous.";
        }
        var firstBad = form.querySelector("[aria-invalid='true']");
        if (firstBad) {
          firstBad.focus();
        }
        return;
      }
      var data = new FormData(form);
      var name = data.get("name");
      var email = data.get("email");
      var message = data.get("message");
      var subject = encodeURIComponent("Prise de contact — " + name);
      var body = encodeURIComponent(message + "\n\n—\n" + email);
      window.location.href = "mailto:" + emailAddr + "?subject=" + subject + "&body=" + body;
      if (feedback) {
        feedback.textContent =
          "Votre client mail devrait s’ouvrir. Sinon, écrivez directement à " + emailAddr + ".";
      }
    });
  }
})();
