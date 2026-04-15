/**
 * Page index2 — GSAP + ScrollTrigger (transitions uniquement, pas de WebGL).
 * Requiert gsap + ScrollTrigger en global.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });

  var hero = document.querySelector(".ii2-hero");
  var mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", function () {
    var kills = [];
    var heroGrid = hero ? hero.querySelector(".ii2-hero__grid") : null;
    var heroCopy = hero ? hero.querySelector(".ii2-hero__grid > div:first-child") : null;
    var orbs = hero ? hero.querySelector(".ii2-hero__orbs") : null;

    if (hero && heroGrid) {
      kills.push(
        ScrollTrigger.create({
          trigger: hero,
          start: "top top",
          end: "+=135%",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: function (self) {
            var p = self.progress;
            gsap.set(heroGrid, {
              y: -48 * p,
              scale: 1 - 0.06 * p,
              transformOrigin: "50% 45%",
            });
            if (orbs) {
              gsap.set(orbs, { opacity: 0.4 - 0.34 * p, scale: 1 - 0.08 * p, transformOrigin: "50% 40%" });
            }
            if (heroCopy) {
              gsap.set(heroCopy, {
                y: -22 * p,
                opacity: 1 - 0.35 * p,
                filter: "blur(" + 5 * p + "px)",
              });
            }
          },
        })
      );
    }

    gsap.utils.toArray(".ii2-scene").forEach(function (section, index) {
      var wrap = section.querySelector(".ii2-wrap");
      var fromX = index % 2 === 0 ? -28 : 28;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 86%",
          end: "top 28%",
          scrub: 0.65,
        },
      });

      tl.fromTo(
        section,
        {
          y: 100,
          x: fromX,
          opacity: 0.12,
          rotateX: 6,
          transformOrigin: "50% 0%",
          clipPath: "inset(0% 5% 14% 5%)",
          filter: "blur(8px)",
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotateX: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          ease: "none",
        },
        0
      );

      if (wrap) {
        tl.fromTo(
          wrap,
          { y: 36, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: "none", duration: 0.35 },
          0.06
        );
      }

      kills.push(tl);
    });

    return function () {
      kills.forEach(function (item) {
        item.kill();
      });
    };
  });

  mm.add("(max-width: 767px)", function () {
    var kills = [];
    gsap.utils.toArray(".ii2-scene").forEach(function (section, index) {
      var wrap = section.querySelector(".ii2-wrap");
      var fromX = index % 2 === 0 ? -14 : 14;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 48%",
          scrub: 0.85,
        },
      });

      tl.fromTo(
        section,
        {
          y: 56,
          x: fromX,
          opacity: 0.25,
          filter: "blur(4px)",
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
        0
      );

      if (wrap) {
        tl.fromTo(wrap, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 0.4 }, 0.05);
      }

      kills.push(tl);
    });
    return function () {
      kills.forEach(function (tw) {
        tw.kill();
      });
    };
  });

  window.addEventListener(
    "load",
    function () {
      ScrollTrigger.refresh();
    },
    { once: true }
  );
})();
