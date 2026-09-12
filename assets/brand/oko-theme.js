/* OKO shared theme control.
 *
 * ONE implementation for the whole estate. The first version of this lived
 * inline in the homepage; copying it into six more pages would have created
 * seven implementations of one behaviour, which drift apart the moment any of
 * them is fixed.
 *
 * Load in <head> with `defer` alongside the pre-paint snippet below. The
 * snippet must run BEFORE paint or a chosen theme flashes the other ground;
 * this file only builds the control, so it can wait.
 *
 *   <script>(function(){try{var t=localStorage.getItem('oko-theme');
 *     if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
 *   <script defer src="/assets/brand/oko-theme.js"></script>
 *
 * THREE STATES. No stored choice means no attribute, which leaves
 * prefers-color-scheme in charge. The button reports what it will switch TO,
 * and follows the system while the reader has expressed no preference.
 *
 * localStorage can throw outright — a private window, or site data blocked —
 * so every access is guarded. A theme control that breaks the page when
 * storage is unavailable is worse than one that forgets.
 */
(function () {
  "use strict";

  var MARK =
    '<svg width="20" height="20" viewBox="0 0 88 88" aria-hidden="true"><defs>' +
    '<linearGradient id="oko-bolt-t" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="#FFEB3B"/><stop offset="50%" stop-color="#FFC107"/>' +
    '<stop offset="100%" stop-color="#FF9800"/></linearGradient></defs>' +
    '<circle cx="17" cy="19" r="3.1" fill="#e6b477"/><circle cx="71" cy="19" r="3.1" fill="#e6b477"/>' +
    '<circle cx="17" cy="29" r="3.1" fill="#dc8f78"/><circle cx="71" cy="29" r="3.1" fill="#dc8f78"/>' +
    '<circle cx="17" cy="39" r="3.1" fill="#cc869b"/><circle cx="71" cy="39" r="3.1" fill="#cc869b"/>' +
    '<circle cx="17" cy="49" r="3.1" fill="#a291bd"/><circle cx="71" cy="49" r="3.1" fill="#a291bd"/>' +
    '<circle cx="17" cy="59" r="3.1" fill="#879ab9"/><circle cx="71" cy="59" r="3.1" fill="#879ab9"/>' +
    '<circle cx="17" cy="69" r="3.1" fill="#7eacaf"/><circle cx="71" cy="69" r="3.1" fill="#7eacaf"/>' +
    '<circle cx="44" cy="7" r="3.1" fill="#ead1a7"/><circle cx="44" cy="81" r="3.1" fill="#7eacaf"/>' +
    '<path d="M49 20 30 47h12l-4 22 21-30H46z" fill="url(#oko-bolt-t)"/></svg>';

  function stored() {
    try {
      var v = localStorage.getItem("oko-theme");
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function current() {
    var a = document.documentElement.getAttribute("data-theme");
    if (a === "dark" || a === "light") return a;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function build() {
    if (document.getElementById("okoTheme")) return;

    var css = document.createElement("style");
    css.textContent =
      ".oko-theme-toggle{position:fixed;bottom:18px;right:18px;z-index:9999;" +
      "display:flex;align-items:center;gap:9px;background:var(--oko-bg-2);" +
      "color:var(--oko-ink);border:1px solid var(--oko-hair);border-radius:999px;" +
      "padding:9px 15px;font:13px/1 Arial,Helvetica,sans-serif;cursor:pointer;" +
      "box-shadow:0 2px 14px rgba(0,0,0,.28)}" +
      ".oko-theme-toggle:focus-visible{outline:2px solid var(--oko-accent);outline-offset:2px}" +
      ".oko-theme-toggle svg{display:block}" +
      "@media print{.oko-theme-toggle{display:none}}";
    document.head.appendChild(css);

    var b = document.createElement("button");
    b.id = "okoTheme";
    b.type = "button";
    b.className = "oko-theme-toggle";
    b.setAttribute("aria-label", "Switch between the dark and light ground");
    b.innerHTML = MARK + '<span id="okoThemeLabel"></span>';
    document.body.appendChild(b);

    var label = b.querySelector("#okoThemeLabel");
    function paint() {
      label.textContent = current() === "dark" ? "Light" : "Dark";
    }
    paint();

    b.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("oko-theme", next);
      } catch (e) {
        /* Storage refused. The theme still applies for this page view; it
           simply will not be remembered. Failing loudly here would break a
           working control over a preference. */
      }
      paint();
    });

    // Follow the system only while the reader has chosen nothing.
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () {
      if (!stored()) paint();
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
