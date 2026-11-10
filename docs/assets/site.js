/* Language handling for furkanzt.github.io. No network requests, no cookies.
 *  - "/"        : saved choice, else the browser's first English or Turkish language, else English
 *  - "/en/" "/tr/": that language is forced (a saved choice does not override it)
 *  - the EN/TR toggle is on every path; on /en/ and /tr/ it also updates the address.
 */
(function () {
  "use strict";

  var KEY = "furkanzt.lang";
  var SUPPORTED = ["en", "tr"];

  function fromBrowser(languages) {
    for (var i = 0; i < languages.length; i++) {
      var primary = String(languages[i]).slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(primary) !== -1) return primary;
    }
    return "en";
  }

  /* Pure, so it can be tested: forced beats saved beats the browser. */
  function pick(forced, saved, languages) {
    if (forced && SUPPORTED.indexOf(forced) !== -1) return forced;
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    return fromBrowser(languages || []);
  }
  window.__langPick = pick;

  var dictEl = document.getElementById("i18n");
  if (!dictEl) return;
  var dict = JSON.parse(dictEl.textContent);

  function readSaved() {
    try {
      return window.localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function save(lang) {
    try {
      window.localStorage.setItem(KEY, lang);
    } catch (e) {
      /* private mode or blocked storage: the page still works */
    }
  }

  function setAddress(lang) {
    if (!/^https?:$/.test(window.location.protocol)) return;
    var match = window.location.pathname.match(/^(.*\/)(en|tr)\/?(?:index\.html)?$/);
    if (!match) return;
    var next = match[1] + lang + "/" + window.location.search + window.location.hash;
    if (next !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(null, "", next);
    }
  }

  function apply(lang) {
    var strings = dict[lang];
    if (!strings) return;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-k]");
    for (var i = 0; i < nodes.length; i++) {
      var value = strings[nodes[i].getAttribute("data-k")];
      if (typeof value === "string") nodes[i].textContent = value;
    }

    var labelled = document.querySelectorAll("[data-k-label]");
    for (var j = 0; j < labelled.length; j++) {
      var label = strings[labelled[j].getAttribute("data-k-label")];
      if (typeof label === "string") labelled[j].setAttribute("aria-label", label);
    }

    if (strings.title) document.title = strings.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && strings.description) meta.setAttribute("content", strings.description);

    var buttons = document.querySelectorAll("button[data-lang]");
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].setAttribute("aria-pressed", buttons[k].getAttribute("data-lang") === lang ? "true" : "false");
    }
  }

  /* Email addresses are assembled here so they are not plain text in the page source. */
  var mails = document.querySelectorAll("a[data-mail-user]");
  for (var m = 0; m < mails.length; m++) {
    var address = mails[m].getAttribute("data-mail-user") + "@" + mails[m].getAttribute("data-mail-domain");
    mails[m].setAttribute("href", "mailto:" + address);
    mails[m].textContent = address;
  }

  var toggle = document.querySelector(".lang");
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", function (event) {
      var button = event.target.closest ? event.target.closest("button[data-lang]") : null;
      if (!button) return;
      var lang = button.getAttribute("data-lang");
      save(lang);
      apply(lang);
      setAddress(lang);
    });
  }

  var forced = document.body.getAttribute("data-force");
  var languages = window.navigator.languages && window.navigator.languages.length
    ? window.navigator.languages
    : [window.navigator.language || "en"];
  apply(pick(forced, forced ? null : readSaved(), languages));
})();
