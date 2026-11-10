// Which language to show. Pure, so it can be tested (exposed as window.__langPick).
//  - "/"          : a saved choice, else the first browser language whose primary subtag is
//                   en or tr, else English
//  - "/en/" "/tr/": that language is forced; a saved choice does not override it
export const SUPPORTED = ["en", "tr"];
export const STORAGE_KEY = "furkanzt.lang";

function fromBrowser(languages) {
  for (let i = 0; i < languages.length; i++) {
    const primary = String(languages[i] || "").toLowerCase().split("-")[0];
    if (SUPPORTED.indexOf(primary) !== -1) return primary;
  }
  return "en";
}

/** Forced beats saved beats the browser. */
export function pick(forced, saved, languages) {
  if (forced && SUPPORTED.indexOf(forced) !== -1) return forced;
  if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
  return fromBrowser(languages || []);
}
