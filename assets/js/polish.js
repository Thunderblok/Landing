/*!
 * OKO Shared Polish Layer — Runtime (assets/js/polish.js)
 * Paired stylesheet: /assets/css/polish.css
 *
 * Plain-script IIFE (no module bundler required).
 * Coordinates Lenis smooth scrolling with GSAP + ScrollTrigger + Flip,
 * respecting prefers-reduced-motion: reduce out of the box.
 */
(function (window, document) {
  "use strict";

  var prefersReducedMotion = false;
  try {
    prefersReducedMotion =
      !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  } catch (e) {
    prefersReducedMotion = false;
  }

  function toElements(selectorOrEls) {
    if (!selectorOrEls) return [];
    if (typeof selectorOrEls === "string") {
      return Array.prototype.slice.call(document.querySelectorAll(selectorOrEls));
    }
    if (selectorOrEls instanceof Element) {
      return [selectorOrEls];
    }
    if (selectorOrEls.length !== undefined) {
      return Array.prototype.slice.call(selectorOrEls);
    }
    return [];
  }

  function showAtRest(selectorOrEls) {
    var els = toElements(selectorOrEls || ".fade-up, .reveal");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      el.style.opacity = "1";
      el.style.transform = "none";
      el.classList.add("visible", "is-revealed");
    }
  }

  function swapNodesInstant(fromEl, toEl) {
    var a = typeof fromEl === "string" ? document.querySelector(fromEl) : fromEl;
    var b = typeof toEl === "string" ? document.querySelector(toEl) : toEl;
    if (!a || !b) return null;
    var aHidden = a.hasAttribute("hidden") || a.style.display === "none";
    var bHidden = b.hasAttribute("hidden") || b.style.display === "none";
    if (!aHidden && bHidden) {
      a.setAttribute("hidden", "");
      a.style.display = "none";
      b.removeAttribute("hidden");
      b.style.display = "";
    } else if (a.parentNode && b.parentNode && a.parentNode === b.parentNode) {
      var nextA = a.nextSibling;
      var parent = a.parentNode;
      if (nextA === b) {
        parent.insertBefore(b, a);
      } else {
        parent.insertBefore(a, b);
        parent.insertBefore(b, nextA);
      }
    }
    return null;
  }

  /* -------------------------------------------------------------------------
   * Global Nav Controller (>48px scroll state + mobile drawer A11y + scroll-lock)
   * Runs regardless of prefers-reduced-motion.
   * ----------------------------------------------------------------------- */
  function initGlobalNav() {
    var nav = document.querySelector(".oko-nav");
    if (!nav || nav.__okoNavBound) return;
    nav.__okoNavBound = true;

    function updateScrollState() {
      var y = window.scrollY !== undefined ? window.scrollY : window.pageYOffset || 0;
      if (y > 48) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    var toggle = nav.querySelector(".oko-nav-toggle");
    var drawer = document.getElementById("oko-mobile-drawer") || nav.querySelector(".oko-mobile-drawer");
    if (!toggle || !drawer) return;

    function setDrawer(open, restoreFocus) {
      document.body.classList.toggle("oko-nav-open", open);
      drawer.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
      if (window.lenis) {
        if (open && typeof window.lenis.stop === "function") {
          window.lenis.stop();
        } else if (!open && typeof window.lenis.start === "function") {
          window.lenis.start();
        }
      }
      if (!open && restoreFocus) {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setDrawer(!isOpen, false);
    });

    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        setDrawer(false, false);
      });
    }

    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && document.body.classList.contains("oko-nav-open")) {
        e.preventDefault();
        setDrawer(false, true);
      }
    });

    try {
      var desktopMq = window.matchMedia("(min-width: 961px)");
      var onMq = function (ev) {
        if (ev.matches && document.body.classList.contains("oko-nav-open")) {
          setDrawer(false, false);
        }
      };
      if (desktopMq.addEventListener) desktopMq.addEventListener("change", onMq);
      else if (desktopMq.addListener) desktopMq.addListener(onMq);
    } catch (err) {
      /* ignore matchMedia error */
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGlobalNav);
  } else {
    initGlobalNav();
  }

  /* -------------------------------------------------------------------------
   * Reduced-motion branch: skip Lenis + scroll-driven motion, show reveal
   * targets at rest, and export a safe no-op API on window.OKOPolish.
   * ----------------------------------------------------------------------- */
  if (prefersReducedMotion) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        showAtRest(".fade-up, .reveal");
      });
    } else {
      showAtRest(".fade-up, .reveal");
    }

    window.OKOPolish = {
      reducedMotion: true,
      lenis: null,
      initNav: initGlobalNav,
      reveal: function (selector) {
        showAtRest(selector || ".fade-up");
        return [];
      },
      parallax: function () {
        return [];
      },
      morph: function (fromEl, toEl) {
        return swapNodesInstant(fromEl, toEl);
      },
      hover: function () {
        return [];
      }
    };
    return;
  }

  /* -------------------------------------------------------------------------
   * Active motion branch: initialize Lenis + GSAP (ScrollTrigger, Flip)
   * ----------------------------------------------------------------------- */
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var Flip = window.Flip;
  var LenisCtor = window.Lenis;

  var lenis = null;

  if (gsap && ScrollTrigger && Flip) {
    gsap.registerPlugin(ScrollTrigger, Flip);
  } else if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  } else if (gsap && Flip) {
    gsap.registerPlugin(Flip);
  }

  if (LenisCtor) {
    lenis = new LenisCtor({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false
    });
    window.lenis = lenis;

    if (ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);

      var rootScroller = document.documentElement;
      ScrollTrigger.scrollerProxy(rootScroller, {
        scrollTop: function (value) {
          if (arguments.length && lenis) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis ? lenis.scroll : window.pageYOffset || rootScroller.scrollTop || 0;
        },
        getBoundingClientRect: function () {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: rootScroller.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.defaults({ scroller: rootScroller });
      ScrollTrigger.addEventListener("refresh", function () {
        if (lenis && typeof lenis.resize === "function") {
          lenis.resize();
        }
      });
    }

    if (gsap && gsap.ticker) {
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      (function rafLoop(now) {
        lenis.raf(now);
        window.requestAnimationFrame(rafLoop);
      })(window.performance ? window.performance.now() : Date.now());
    }
  }

  /* -------------------------------------------------------------------------
   * Public API — window.OKOPolish
   * ----------------------------------------------------------------------- */

  /**
   * Fade-up reveal on scroll via ScrollTrigger.batch.
   * @param {string|Element|NodeList|Array} selector
   * @param {Object} [opts]
   */
  function reveal(selector, opts) {
    var options = opts || {};
    var targets = gsap
      ? gsap.utils.toArray(selector || ".fade-up")
      : toElements(selector || ".fade-up");

    if (!targets.length) return [];

    if (!gsap || !ScrollTrigger) {
      showAtRest(targets);
      return targets;
    }

    var yOffset = options.y !== undefined ? options.y : 24;
    var duration = options.duration !== undefined ? options.duration : 0.75;
    var stagger = options.stagger !== undefined ? options.stagger : 0.1;
    var ease = options.ease || "power3.out";
    var start = options.start || "top 88%";
    var once = options.once !== undefined ? options.once : true;

    gsap.set(targets, { opacity: 0, y: yOffset });

    return ScrollTrigger.batch(targets, {
      interval: options.interval || 0.08,
      batchMax: options.batchMax || 6,
      start: start,
      once: once,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: duration,
          stagger: stagger,
          ease: ease,
          overwrite: true,
          onComplete: function () {
            for (var i = 0; i < batch.length; i++) {
              batch[i].classList.add("visible", "is-revealed");
            }
          }
        });
      }
    });
  }

  /**
   * Vertical parallax translation via ScrollTrigger scrub.
   * @param {string|Element|NodeList|Array} selector
   * @param {number} [speed=0.2]
   */
  function parallax(selector, speed) {
    var targets = gsap
      ? gsap.utils.toArray(selector || ".parallax")
      : toElements(selector || ".parallax");

    if (!targets.length || !gsap || !ScrollTrigger) return [];

    var triggers = [];
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      var rawSpeed =
        typeof speed === "number"
          ? speed
          : parseFloat(el.getAttribute("data-speed") || "0.2");
      if (isNaN(rawSpeed)) rawSpeed = 0.2;

      var deltaY = Math.abs(rawSpeed) <= 2 ? rawSpeed * 100 : rawSpeed;

      var tween = gsap.fromTo(
        el,
        { y: -deltaY },
        {
          y: deltaY,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
      if (tween && tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    }
    return triggers;
  }

  /**
   * Layout / state transition via GSAP Flip (Flip.getState -> DOM swap -> Flip.from).
   * @param {string|Element} fromEl
   * @param {string|Element} toEl
   * @param {Object} [opts]
   */
  function morph(fromEl, toEl, opts) {
    var a = typeof fromEl === "string" ? document.querySelector(fromEl) : fromEl;
    var b = typeof toEl === "string" ? document.querySelector(toEl) : toEl;
    if (!a || !b) return null;

    if (!gsap || !Flip) {
      return swapNodesInstant(a, b);
    }

    var options = opts || {};
    var sharedId =
      a.getAttribute("data-flip-id") ||
      b.getAttribute("data-flip-id") ||
      "oko-morph-" + Date.now();
    a.setAttribute("data-flip-id", sharedId);
    b.setAttribute("data-flip-id", sharedId);

    var state = Flip.getState([a, b], {
      props: options.props || "opacity,borderRadius,boxShadow"
    });

    swapNodesInstant(a, b);

    return Flip.from(state, {
      duration: options.duration !== undefined ? options.duration : 0.6,
      ease: options.ease || "power2.inOut",
      absolute: options.absolute !== undefined ? options.absolute : true,
      fade: true,
      scale: options.scale !== undefined ? options.scale : true
    });
  }

  /**
   * Elevation lift on mouseenter / mouseleave.
   * @param {string|Element|NodeList|Array} selector
   */
  function hover(selector) {
    var targets = toElements(selector || ".hover-lift");
    for (var i = 0; i < targets.length; i++) {
      (function (el) {
        if (el.__okoHoverBound) return;
        el.__okoHoverBound = true;
        el.classList.add("hover-lift");

        el.addEventListener("mouseenter", function () {
          el.classList.add("is-hovered");
          if (gsap) {
            gsap.to(el, {
              y: -4,
              duration: 0.26,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
        });

        el.addEventListener("mouseleave", function () {
          el.classList.remove("is-hovered");
          if (gsap) {
            gsap.to(el, {
              y: 0,
              duration: 0.34,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
        });
      })(targets[i]);
    }
    return targets;
  }

  window.OKOPolish = {
    reducedMotion: false,
    lenis: lenis,
    initNav: initGlobalNav,
    reveal: reveal,
    parallax: parallax,
    morph: morph,
    hover: hover
  };
})(window, document);
