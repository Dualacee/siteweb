(function () {
  "use strict";

  var yearEl = document.getElementById("ii2-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hero = document.querySelector(".ii2-hero__stage");
  var bezel = document.querySelector(".ii2-hero__viz");

  if (!reduceMotion && hero && bezel && window.matchMedia("(min-width: 900px)").matches) {
    var raf = null;
    hero.addEventListener(
      "pointermove",
      function (e) {
        if (raf !== null) return;
        raf = window.requestAnimationFrame(function () {
          raf = null;
          var rect = hero.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width - 0.5;
          var py = (e.clientY - rect.top) / rect.height - 0.5;
          var max = 5;
          bezel.style.transition = "none";
          bezel.style.transform =
            "perspective(880px) rotateY(" +
            px * max +
            "deg) rotateX(" +
            -py * max +
            "deg)";
        });
      },
      { passive: true }
    );
    hero.addEventListener("pointerleave", function () {
      bezel.style.transition = "transform 520ms cubic-bezier(0.23, 1, 0.32, 1)";
      bezel.style.transform = "";
    });
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
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
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll("[data-ii2-reveal]").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll("[data-ii2-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
