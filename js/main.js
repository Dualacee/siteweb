(function () {
  "use strict";

  var yearEl = document.getElementById("ii2-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var head = document.querySelector(".ii2-head");
  var headScrollRaf = null;
  function updateHeadScrolled() {
    headScrollRaf = null;
    if (!head) return;
    head.classList.toggle("ii2-head--scrolled", (window.scrollY || window.pageYOffset) > 10);
  }
  function onHeadScroll() {
    if (headScrollRaf !== null) return;
    headScrollRaf = window.requestAnimationFrame(updateHeadScrolled);
  }
  if (head) {
    window.addEventListener("scroll", onHeadScroll, { passive: true });
    updateHeadScrolled();
  }

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
      {
        root: null,
        rootMargin: "0px 0px 14% 0px",
        threshold: [0, 0.06, 0.12],
      }
    );

    document.querySelectorAll("[data-ii2-reveal]").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll("[data-ii2-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* Bandeau logos : assez de copies pour couvrir la largeur du viewport, boucle sans trou */
  var marquee = document.querySelector(".ii2-marquee");
  var track = marquee && marquee.querySelector(".ii2-marquee__track");
  var baseGroup = track && track.querySelector(".ii2-marquee__group");
  if (track && baseGroup) {
    var MARQUEE_MAX_GROUPS = 18;
    var marqueeRaf = null;
    function syncMarqueeRepeats() {
      marqueeRaf = null;
      if (!marquee || !track || !baseGroup) return;
      var w = baseGroup.offsetWidth;
      var v = marquee.clientWidth;
      if (!w || !v) return;
      var needed = Math.ceil(1 + v / w);
      if (needed < 2) needed = 2;
      if (needed > MARQUEE_MAX_GROUPS) needed = MARQUEE_MAX_GROUPS;
      var n = track.querySelectorAll(".ii2-marquee__group").length;
      while (n > needed) {
        var last = track.lastElementChild;
        if (last && last.getAttribute("data-ii2-marquee-clone") === "1") {
          last.remove();
          n -= 1;
        } else {
          break;
        }
      }
      while (n < needed) {
        var clone = baseGroup.cloneNode(true);
        clone.setAttribute("data-ii2-marquee-clone", "1");
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
        n += 1;
      }
      track.style.setProperty("--ii2-marquee-repeats", String(n));
    }
    function scheduleMarqueeSync() {
      if (marqueeRaf !== null) return;
      marqueeRaf = window.requestAnimationFrame(function () {
        syncMarqueeRepeats();
      });
    }
    scheduleMarqueeSync();
    window.addEventListener("resize", scheduleMarqueeSync, { passive: true });
    if ("ResizeObserver" in window) {
      new window.ResizeObserver(scheduleMarqueeSync).observe(track);
    }
    baseGroup.querySelectorAll("img").forEach(function (img) {
      if (!img.complete) {
        img.addEventListener("load", scheduleMarqueeSync, { passive: true });
      }
    });
  }
})();
