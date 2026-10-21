(function(){
'use strict';
document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','ar');
/* ================= CORE: utils, state, storage, audio, speech, AI ================= */
const C = window.COURSE;
const IS_FRAMED = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
const HAS_CLAUDE = !!(window.claude && typeof window.claude.use === "function");
const IS_PWA_CONTEXT = !HAS_CLAUDE && /^https?:$/.test(location.protocol);

/* ---------- DOM helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
function el(tag, props, ...kids) {
  const n = document.createElement(tag);
  if (props) {
    for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (k === "style" && typeof v === "object") Object.assign(n.style, v);
      else if (k === "dataset") Object.assign(n.dataset, v);
      else if (v === true) n.setAttribute(k, "");
      else n.setAttribute(k, v);
    }
  }
  addKids(n, kids);
  return n;
}
function addKids(n, kids) {
  for (const k of kids) {
    if (k == null || k === false) continue;
    if (Array.isArray(k)) addKids(n, k);
    else if (k instanceof Node) n.appendChild(k);
    else n.appendChild(document.createTextNode(String(k)));
  }
}
function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

/* Rich text: ‹German›, {m|der}, **bold**, newlines */
function fmt(s) {
  if (s == null) return "";
  let t = esc(fillPH(String(s)));
  t = t.replace(/\{([mfnp])\|([^}]+)\}/g, (_, g, w) => `<span class="g-${g}">${w}</span>`);
  t = t.replace(/‹([^›]+)›/g, (_, w) => `<span class="de" lang="de" dir="ltr">${w}</span>`);
  t = t.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  t = t.replace(/\n/g, "<br>");
  return t;
}
function deSpan(text, cls) { return el("span", { class: "de" + (cls ? " " + cls : ""), lang: "de", dir: "ltr" }, fillPH(text)); }
function deHTML(text) { // German text with **bold** support
  const t = esc(fillPH(String(text))).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/\{([mfnp])\|([^}]+)\}/g, (_, g, w) => `<span class="g-${g}">${w}</span>`).replace(/\n/g, "<br>");
  return el("span", { class: "de", lang: "de", dir: "ltr", html: t });
}

/* ---------- misc utils ---------- */
const rnd = (n) => Math.floor(Math.random() * n);
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function sample(a, n) { return shuffle(a).slice(0, n); }
function uniq(a) { return Array.from(new Set(a)); }
function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
function pad2(n) { return String(n).padStart(2, "0"); }
function dayKey(d = new Date()) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
function dayNum(d = new Date()) { return Math.floor((new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() - new Date(2020, 0, 1).getTime()) / 86400000 + 0.5); }
function dateFromNum(n) { const d = new Date(2020, 0, 1); d.setDate(d.getDate() + n); return d; }
function fmtMin(sec) { const m = Math.round(sec / 60); if (m < 60) return m + " د"; const h = Math.floor(m / 60), r = m % 60; return h + " س" + (r ? " " + r + " د" : ""); }
const AR_DAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const AR_DAYS_SHORT = ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];
const AR_MONTHS = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"];
function arDate(d = new Date()) { return AR_DAYS[d.getDay()] + " " + d.getDate() + " " + AR_MONTHS[d.getMonth()]; }
function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

/* ---------- text normalisation & comparison ---------- */
function canon(s) {
  return String(s).toLowerCase()
    .replace(/[„“”"«»‹›‚‘’'`´]/g, "")
    .replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/[.,!?;:()\[\]…–—\-\/]/g, " ")
    .replace(/\s+/g, " ").trim();
}
function canonKeepCase(s) {
  return String(s)
    .replace(/[„“”"«»‹›‚‘’'`´]/g, "")
    .replace(/[.,!?;:()\[\]…–—\-\/]/g, " ")
    .replace(/\s+/g, " ").trim();
}
function lev(a, b) {
  if (a === b) return 0; if (!a.length) return b.length; if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length];
}
function sim(a, b) { a = canon(a); b = canon(b); const m = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / m; }
function patRegex(p) {
  const parts = canon(fillPH(p)).split("*").map((x) => x.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp("^" + parts.join(" ?(.+?) ?") + "$");
}
/* compare typed answer against accepted list. Returns {ok, level, best, note} */
function judge(input, accepted, opt = {}) {
  const raw = String(input || "").trim();
  if (!raw) return { ok: false, level: "empty", best: accepted[0] };
  const ci = canon(raw);
  const typedUmlautAlt = /ae|oe|ue|ss/i.test(raw) && !/[äöüß]/i.test(raw);
  for (const a of accepted) {
    const ca = canon(fillPH(a));
    if (ci === ca) {
      const caseSame = canonKeepCase(raw).replace(/ß/g, "ss") === canonKeepCase(fillPH(a)).replace(/ß/g, "ss");
      const umlNote = typedUmlautAlt && /[äöüß]/.test(fillPH(a));
      if (umlNote) return { ok: true, level: "umlaut", best: a, note: "صحيح! لكن اكتب الحروف الخاصة: ä ö ü ß (استعمل الأزرار تحت الخانة)." };
      if (!caseSame && !opt.ignoreCase) return { ok: true, level: "case", best: a, note: "صحيح، لكن انتبه للأحرف الكبيرة والصغيرة (الأسماء تبدأ بحرف كبير)." };
      return { ok: true, level: "exact", best: a };
    }
  }
  let best = accepted[0], bs = -1;
  for (const a of accepted) { const s = sim(raw, a); if (s > bs) { bs = s; best = a; } }
  if (opt.typo && ci.length >= 5) {
    const d = lev(ci, canon(fillPH(best)));
    if (d === 1) return { ok: true, level: "typo", best, note: "قريب جدًا! هناك خطأ إملائي صغير — انظر الكتابة الصحيحة." };
  }
  return { ok: false, level: "wrong", best, score: bs };
}
function judgePatterns(input, patterns, model) {
  const ci = canon(input || "");
  if (!ci) return { ok: false, level: "empty" };
  if (ci === canon(fillPH(model))) return { ok: true, level: "exact" };
  for (const p of patterns || []) {
    if (!p.includes("*") && ci === canon(fillPH(p))) return { ok: true, level: "exact" };
  }
  for (const p of patterns || []) {
    if (p.includes("*")) { try { if (patRegex(p).test(ci)) return { ok: true, level: "pattern" }; } catch (e) { } }
  }
  const s = Math.max(sim(input, model), ...(patterns || []).filter((p) => !p.includes("*")).map((p) => sim(input, p)), 0);
  if (s >= 0.9) return { ok: true, level: "close", score: s };
  return { ok: false, level: "wrong", score: s };
}
/* word-level diff for display */
function wordDiff(user, target) {
  const u = canon(user).split(" ").filter(Boolean), t = fillPH(target).split(/\s+/).filter(Boolean);
  const tc = t.map((w) => canon(w));
  const used = new Array(u.length).fill(false);
  return t.map((w, i) => {
    const k = u.findIndex((x, j) => !used[j] && x === tc[i]);
    if (k >= 0) { used[k] = true; return { w, ok: true }; }
    return { w, ok: false };
  });
}

/* ---------- placeholders (personal data for dialogues) ---------- */
function fillPH(s) {
  if (!s || typeof s !== "string" || s.indexOf("{") < 0) return s;
  const p = (window.S && S.profile) || {};
  const first = p.first || "Karim", last = p.last || "Amri";
  return s.replace(/\{NAME\}/g, first + (p.last ? " " + p.last : ""))
    .replace(/\{FIRST\}/g, first)
    .replace(/\{LAST\}/g, last)
    .replace(/\{SPELL\}/g, last.toUpperCase().split("").filter((c) => c.trim()).join("-"))
    .replace(/\{LAND\}/g, p.land || "Marokko")
    .replace(/\{CITY\}/g, p.city || "Errachidia");
}

/* ---------- German grammar helpers ---------- */
const UML = { a: "ä", o: "ö", u: "ü", A: "Ä", O: "Ö", U: "Ü" };
function umlautize(w) {
  for (let i = w.length - 1; i >= 0; i--) {
    const c = w[i];
    if ("aouAOU".includes(c)) {
      if ((c === "u" || c === "U") && i > 0 && (w[i - 1] === "a" || w[i - 1] === "A")) return w.slice(0, i - 1) + (w[i - 1] === "A" ? "Ä" : "ä") + "u" + w.slice(i + 1);
      if ((c === "a" || c === "A") && w[i + 1] === "a") return w.slice(0, i) + UML[c] + w.slice(i + 2);
      return w.slice(0, i) + UML[c] + w.slice(i + 1);
    }
  }
  return w;
}
function pluralOf(word, p) {
  if (!p) return null;
  p = p.trim();
  if (p === "Sg." ) return null;
  if (p === "Pl.") return word;
  if (p.startsWith("=")) return p.slice(1);
  const code = p.split(" ")[0];
  if (code === "-") return word;
  if (code === "¨") return umlautize(word);
  if (code.startsWith("¨-")) return umlautize(word) + code.slice(2);
  if (code.startsWith("-")) return word + code.slice(1);
  return null;
}
function genderHint(word, art) {
  const w = word.toLowerCase();
  const rules = [
    ["f", /(ung|heit|keit|schaft|ion|tät|ik|ur|ie|ei|enz|anz)$/, "الكلمات المنتهية بـ ‑ung و‑heit و‑keit و‑schaft و‑ion و‑tät و‑ik و‑ie غالبًا مؤنثة (die)."],
    ["f", /in$/, "الأسماء المنتهية بـ ‑in للمؤنث (die Lehrerin)."],
    ["n", /(chen|lein)$/, "التصغير بـ ‑chen و‑lein دائمًا محايد (das)."],
    ["n", /(um|ment|ma)$/, "الكلمات المنتهية بـ ‑um و‑ment غالبًا محايدة (das)."],
    ["n", /^ge/, "كثير من الكلمات التي تبدأ بـ Ge‑ محايدة (das Gespräch, das Gemüse)."],
    ["m", /(ling|ismus|ist|ent|ant|or|eur)$/, "الكلمات المنتهية بـ ‑ist و‑ent و‑or و‑ling غالبًا مذكرة (der)."],
    ["m", /(tag|montag|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember|frühling|sommer|herbst|winter)$/, "الأيام والأشهر والفصول مذكرة (der)."],
    ["f", /e$/, "كثير من الكلمات المنتهية بـ ‑e مؤنثة (die) — لكن ليس كلها!"],
    ["m", /er$/, "كثير من الأشخاص والأدوات المنتهية بـ ‑er مذكرة (der)."]
  ];
  const g = { der: "m", die: "f", das: "n" }[art];
  for (const [rg, re, txt] of rules) if (re.test(w)) return rg === g ? "💡 " + txt : "⚠ هذه الكلمة استثناء من القاعدة الشائعة — احفظها مع أداتها.";
  return "احفظ الكلمة دائمًا مع أداتها: " + art + " " + word + ".";
}
const ART_CLASS = { der: "g-m", die: "g-f", das: "g-n" };

/* ---------- course index ---------- */
const UNITS = []; const UNIT = {}; const LESSON = {}; const ITEMS = {}; const WORDS = []; const WORD = {};
function buildIndex() {
  for (const L of C.lessons) {
    LESSON[L.id] = L;
    L.units.forEach((u, ui) => {
      u.lesson = L.id; u.index = ui; UNITS.push(u); UNIT[u.id] = u;
      u.ex.forEach((x, i) => { x.id = u.id + ":e" + i; ITEMS[x.id] = x; x.unit = u.id; if (x.items) x.items.forEach((s, j) => { s.tag = s.tag || x.tag || "lesen"; }); });
      u.listen.forEach((x, i) => { x.id = u.id + ":l" + i; ITEMS[x.id] = x; x.unit = u.id; x.tag = x.tag || "hoeren"; });
      u.words = u.vocab.map((v, i) => {
        const w = { t: v[0], art: v[1], w: v[2], p: v[3], ar: v[4], ex: v[5], exAr: v[6], unit: u.id, lesson: L.id };
        w.id = u.id + ":" + w.w; w.pl = w.t === "n" ? pluralOf(w.w, w.p) : null;
        WORDS.push(w); WORD[w.id] = w; return w;
      });
    });
    if (L.phon) L.phon.drills.forEach((x, i) => { x.id = "P" + L.id + ":" + i; x.tag = "sprechen"; ITEMS[x.id] = x; });
  }
  C.exam.parts.forEach((p) => (p.items || []).forEach((x, i) => { x.id = "X" + p.id + ":" + i; ITEMS[x.id] = x; }));
}
function wordLabel(w) { return (w.art && w.t !== "c" ? w.art + " " : "") + w.w; }

/* ---------- STATE ---------- */
const STORE_KEY = "deutschstunde.v1";
function defaultState() {
  return {
    v: 1, createdAt: Date.now(), updatedAt: 0,
    profile: { name: "محسن", first: "Mouhsine", last: "", land: "Marokko", city: "Errachidia", onboarded: false },
    settings: { studyTime: "19:00", goalMin: 60, days: [0, 1, 2, 3, 4, 5, 6], rate: 0.95, voice: "", aiCheck: true, remind: true, notify: false },
    progress: { units: {}, lessons: {}, exam: {}, last: null },
    srs: {}, mist: {}, tags: {}, log: {}, ach: {}, dlg: {}, sounds: {}
  };
}
window.S = defaultState();
function mergeDefaults(s) {
  const d = defaultState();
  const out = Object.assign({}, d, s || {});
  out.profile = Object.assign({}, d.profile, (s && s.profile) || {});
  out.settings = Object.assign({}, d.settings, (s && s.settings) || {});
  out.progress = Object.assign({}, d.progress, (s && s.progress) || {});
  for (const k of ["srs", "mist", "tags", "log", "ach", "dlg", "sounds"]) out[k] = (s && s[k]) || {};
  return out;
}
const Store = {
  db: null, uid: null, docRef: null, writing: false, pending: false, cloudReady: false, listeners: [],
  loadLocal() {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) return JSON.parse(raw); } catch (e) { }
    return null;
  },
  saveLocal() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } },
  async initCloud(onRemote) {
    if (!HAS_CLAUDE) return;
    try {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      if (!db || !user) return;
      const uid = await user.id();
      if (!uid) return;
      this.db = db; this.uid = uid; this.docRef = db.doc("data/users/" + uid + "/state");
      const snap = await this.docRef.get();
      this.cloudReady = true;
      if (snap.exists) {
        const remote = snap.data();
        const data = remote && remote.json ? JSON.parse(remote.json) : null;
        if (data && (data.updatedAt || 0) > (S.updatedAt || 0)) { window.S = mergeDefaults(data); this.saveLocal(); onRemote && onRemote(); }
        else if ((S.updatedAt || 0) > ((data && data.updatedAt) || 0)) this.pushCloud();
      } else if (S.updatedAt) this.pushCloud();
      UI && UI.setSync && UI.setSync("cloud");
    } catch (e) { console.warn("cloud init", e); }
  },
  async pushCloud() {
    if (!this.docRef) return;
    if (this.writing) { this.pending = true; return; }
    this.writing = true;
    try { await this.docRef.set({ json: JSON.stringify(S), updatedAt: S.updatedAt || Date.now() }); UI && UI.setSync && UI.setSync("cloud"); }
    catch (e) { console.warn("cloud save", e); UI && UI.setSync && UI.setSync("local"); }
    this.writing = false;
    if (this.pending) { this.pending = false; this.pushCloud(); }
  },
  touch() { S.updatedAt = Date.now(); this.saveLocal(); this.cloudLater(); IDBKV.syncReminder(); },
  cloudLater: debounce(function () { Store.pushCloud(); }, 4000),
  flush() { this.saveLocal(); if (this.docRef) this.pushCloud(); }
};
const save = debounce(() => Store.touch(), 800);

/* IndexedDB key-value (used by the service worker for reminders in the installed app) */
const IDBKV = {
  open() {
    return new Promise((res, rej) => {
      if (!("indexedDB" in window) || HAS_CLAUDE) return rej("no idb");
      const r = indexedDB.open("deutschstunde", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("kv");
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
  },
  async put(k, v) { try { const db = await this.open(); const tx = db.transaction("kv", "readwrite"); tx.objectStore("kv").put(v, k); } catch (e) { } },
  syncReminder: debounce(function () {
    if (HAS_CLAUDE) return;
    IDBKV.put("reminder", { time: S.settings.studyTime, days: S.settings.days, goal: S.settings.goalMin, remind: S.settings.remind && S.settings.notify, today: dayKey(), todaySec: (S.log[dayKey()] || {}).s || 0 });
  }, 3000)
};

/* ---------- progress & learning records ---------- */
function todayLog() { const k = dayKey(); if (!S.log[k]) S.log[k] = { s: 0, x: 0, k: 0, w: 0, u: [] }; return S.log[k]; }
function unitP(id) { if (!S.progress.units[id]) S.progress.units[id] = {}; return S.progress.units[id]; }
function lessonP(id) { if (!S.progress.lessons[id]) S.progress.lessons[id] = {}; return S.progress.lessons[id]; }
const STEPS = [
  { k: "g", ar: "الشرح", icon: "book" },
  { k: "v", ar: "المفردات", icon: "cards" },
  { k: "e", ar: "التمارين", icon: "pencil" },
  { k: "d", ar: "الحوار", icon: "chat" },
  { k: "l", ar: "الاستماع", icon: "ear" },
  { k: "s", ar: "النطق", icon: "mic" },
  { k: "q", ar: "الاختبار", icon: "flag" }
];
function stepDone(uid, k) { const p = S.progress.units[uid]; return !!(p && p[k]); }
function unitPct(uid) { const p = S.progress.units[uid] || {}; return Math.round(STEPS.filter((s) => p[s.k]).length / STEPS.length * 100); }
function unitDone(uid) { const p = S.progress.units[uid]; return !!(p && p.q && p.q.pass); }
function markStep(uid, k, data) {
  const p = unitP(uid); const was = !!p[k];
  p[k] = Object.assign({}, typeof p[k] === "object" ? p[k] : {}, data || {}, { ts: Date.now() });
  if (k === "q" && data && data.pass && !p.done) { p.done = Date.now(); const L = todayLog(); if (!L.u.includes(uid)) L.u.push(uid); }
  S.progress.last = { unit: uid, step: k };
  save(); checkAchievements();
  return !was;
}
function lessonDone(lid) { return LESSON[lid].units.every((u) => unitDone(u.id)); }
function nextUnit() { return UNITS.find((u) => !unitDone(u.id)) || null; }
function levelLabel() {
  const n = C.lessons.filter((L) => lessonDone(L.id)).length;
  if (n >= 8) return "A1 مكتمل";
  if (n >= 4) return "A1.2";
  return "A1.1";
}

function recordAnswer(item, ok, meta) {
  if (!item) return;
  const tag = item.tag || (meta && meta.tag) || "wortschatz";
  const t = S.tags[tag] || [0, 0, 0.5];
  t[0]++; if (ok) t[1]++; t[2] = Math.round((t[2] * 0.75 + (ok ? 1 : 0) * 0.25) * 1000) / 1000;
  S.tags[tag] = t;
  const L = todayLog(); L.x++; if (ok) L.k++;
  const id = item.id; const today = dayNum();
  if (id) {
    const m = S.mist[id];
    if (!ok) {
      S.mist[id] = { n: ((m && m.n) || 0) + 1, s: 0, due: today + 1, tag, d: today };
      const keys = Object.keys(S.mist);
      if (keys.length > 600) keys.sort((a, b) => (S.mist[a].d || 0) - (S.mist[b].d || 0)).slice(0, keys.length - 600).forEach((k) => delete S.mist[k]);
    }
    else if (m) { m.s = (m.s || 0) + 1; if (m.s >= 2) delete S.mist[id]; else m.due = today + 3; }
  }
  if (meta && meta.wid) srsTouch(meta.wid, ok);
  save();
}
function mastery(tag) { const t = S.tags[tag]; if (!t || t[0] < 4) return 0.5; return t[2]; }
function skillStats() {
  const out = {}; for (const k in C.skills) out[k] = { n: 0, ok: 0 };
  for (const tag in S.tags) { const sk = (C.tags[tag] && C.tags[tag].skill) || "grammatik"; const t = S.tags[tag]; if (!out[sk]) out[sk] = { n: 0, ok: 0 }; out[sk].n += t[0]; out[sk].ok += t[1]; }
  return out;
}

/* ---------- SRS (Leitner with day intervals) ---------- */
const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64];
function srsRate(wid, rating) { // rating: 0 again, 1 hard, 2 good
  const today = dayNum();
  const r = S.srs[wid] || [0, today, 0, 0, today];
  if (!S.srs[wid]) todayLog().w++;
  if (rating === 0) { r[0] = 0; r[1] = today; r[3]++; }
  else if (rating === 1) { r[0] = Math.max(1, r[0]); r[1] = today + 1; }
  else { r[0] = Math.min(7, r[0] + 1); r[1] = today + INTERVALS[r[0]]; }
  r[2]++; r[4] = today; S.srs[wid] = r; save();
}
function srsTouch(wid, ok) {
  const r = S.srs[wid]; const today = dayNum();
  if (!r) { srsRate(wid, ok ? 2 : 0); return; }
  if (!ok) srsRate(wid, 0);
  else if (r[1] <= today) srsRate(wid, 2);
}
function wordState(wid) { const r = S.srs[wid]; if (!r) return "new"; if (r[0] >= 3) return "known"; return "learning"; }
function dueWords() { const t = dayNum(); return WORDS.filter((w) => S.srs[w.id] && S.srs[w.id][1] <= t).sort((a, b) => S.srs[a.id][1] - S.srs[b.id][1]); }
function knownCount() { return Object.values(S.srs).filter((r) => r[0] >= 3).length; }
function seenCount() { return Object.keys(S.srs).length; }
function dueMistakes() { const t = dayNum(); return Object.keys(S.mist).filter((id) => ITEMS[id] && S.mist[id].due <= t); }

/* ---------- streak & time ---------- */
function streak() {
  let n = 0; const d = new Date();
  const active = (k) => { const L = S.log[k]; return L && (L.s >= 300 || L.x >= 5); };
  if (!active(dayKey(d))) d.setDate(d.getDate() - 1);
  while (active(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function totalSec() { return Object.values(S.log).reduce((a, L) => a + (L.s || 0), 0); }

/* ---------- achievements ---------- */
const ACH = [
  { id: "first", ar: "أول خطوة", d: "أنجزت أول تمرين", test: () => Object.values(S.log).some((L) => L.x > 0) },
  { id: "unit", ar: "وحدة مكتملة", d: "اجتزت اختبار أول وحدة", test: () => UNITS.some((u) => unitDone(u.id)) },
  { id: "lesson", ar: "درس كامل", d: "أكملت درسًا كاملًا", test: () => C.lessons.some((L) => lessonDone(L.id)) },
  { id: "s3", ar: "3 أيام متتالية", d: "دراسة 3 أيام متتالية", test: () => streak() >= 3 },
  { id: "s7", ar: "أسبوع كامل", d: "دراسة 7 أيام متتالية", test: () => streak() >= 7 },
  { id: "s30", ar: "شهر من الالتزام", d: "دراسة 30 يومًا متتاليًا", test: () => streak() >= 30 },
  { id: "w100", ar: "100 كلمة", d: "100 كلمة في المراجعة", test: () => seenCount() >= 100 },
  { id: "w400", ar: "400 كلمة", d: "400 كلمة في المراجعة", test: () => seenCount() >= 400 },
  { id: "h5", ar: "5 ساعات", d: "5 ساعات دراسة", test: () => totalSec() >= 5 * 3600 },
  { id: "h25", ar: "25 ساعة", d: "25 ساعة دراسة", test: () => totalSec() >= 25 * 3600 },
  { id: "perfect", ar: "علامة كاملة", d: "100% في اختبار", test: () => Object.values(S.progress.units).some((p) => p.q && p.q.best === 100) || Object.values(S.progress.lessons).some((p) => p.test && p.test.best === 100) },
  { id: "dlg", ar: "متحدّث", d: "أكملت 10 حوارات", test: () => Object.values(S.dlg).reduce((a, d) => a + (d.n || 0), 0) >= 10 },
  { id: "a1", ar: "A1 مكتمل", d: "أنهيت الكتاب كاملًا", test: () => C.lessons.every((L) => lessonDone(L.id)) }
];
function checkAchievements() {
  for (const a of ACH) if (!S.ach[a.id] && a.test()) { S.ach[a.id] = Date.now(); UI && UI.toast && UI.toast("وسام جديد: " + a.ar, "star"); }
}

/* ---------- AUDIO: text-to-speech ---------- */
const TTS = {
  ok: "speechSynthesis" in window, voices: [], voice: null, speaking: false, queue: 0,
  init() {
    if (!this.ok) return;
    const load = () => {
      try { this.voices = speechSynthesis.getVoices().filter((v) => /^de(-|_|$)/i.test(v.lang)); } catch (e) { this.voices = []; }
      this.pick();
    };
    load();
    try { speechSynthesis.addEventListener("voiceschanged", load); } catch (e) { speechSynthesis.onvoiceschanged = load; }
    setTimeout(load, 800); setTimeout(load, 2500);
  },
  pick() {
    const want = S.settings.voice;
    this.voice = this.voices.find((v) => v.name === want)
      || this.voices.find((v) => /de-DE/i.test(v.lang) && /google/i.test(v.name))
      || this.voices.find((v) => /de-DE/i.test(v.lang) && /(anna|helena|katja|petra|marlene|vicki|hedda)/i.test(v.name))
      || this.voices.find((v) => /de-DE/i.test(v.lang))
      || this.voices[0] || null;
  },
  clean(t) {
    return fillPH(String(t)).replace(/\*\*/g, "").replace(/[‹›„“”"«»]/g, "").replace(/\s*[–—]\s*/g, ", ").replace(/…/g, ", ").replace(/\s\/\s/g, ", ").replace(/\{[mfnp]\|([^}]+)\}/g, "$1").replace(/[↗↘⚠]/g, "");
  },
  speak(text, o = {}) {
    if (!this.ok) { UI.toast("الصوت غير متاح في هذا المتصفح", "warn"); return Promise.resolve(); }
    Activity.ping();
    const t = this.clean(text); if (!t.trim()) return Promise.resolve();
    if (!o.keep) { try { speechSynthesis.cancel(); } catch (e) { } }
    const parts = t.match(/[^.!?;]+[.!?;]*/g) || [t];
    const id = ++this.queue;
    return new Promise((resolve) => {
      let i = 0;
      const next = () => {
        if (id !== this.queue && !o.keep) return resolve();
        if (i >= parts.length) { this.speaking = false; o.onend && o.onend(); return resolve(); }
        const txt = parts[i++].trim();
        const u = new SpeechSynthesisUtterance(txt);
        u.lang = (this.voice && this.voice.lang) || "de-DE";
        if (this.voice) u.voice = this.voice;
        u.rate = clamp((o.rate || S.settings.rate || 0.95) * (o.slow ? 0.72 : 1), 0.4, 1.5);
        u.pitch = o.pitch || 1;
        let fired = false;
        const fin = () => { if (fired) return; fired = true; clearTimeout(guard); next(); };
        const guard = setTimeout(fin, 1800 + txt.length * 120 / u.rate);
        u.onend = fin; u.onerror = fin;
        this.speaking = true;
        try { speechSynthesis.resume(); speechSynthesis.speak(u); } catch (e) { fin(); }
      };
      next();
    });
  },
  stop() { this.queue++; try { speechSynthesis.cancel(); } catch (e) { } this.speaking = false; },
  async sequence(lines) { // [{text, pitch}]
    this.stop(); const id = this.queue;
    for (const l of lines) { if (id !== this.queue) break; await this.speak(l.text, { pitch: l.pitch, keep: true }); await new Promise((r) => setTimeout(r, 350)); }
  }
};
function playBtn(text, o = {}) {
  const b = el("button", { class: "icon-btn play" + (o.small ? " sm" : ""), type: "button", "aria-label": "استمع", title: "استمع" }, icon(o.slow ? "turtle" : "volume"));
  b.addEventListener("click", (e) => { e.stopPropagation(); b.classList.add("on"); TTS.speak(text, { slow: o.slow }).then(() => b.classList.remove("on")); });
  return b;
}

/* ---------- MICROPHONE: speech recognition ---------- */
const SR = {
  Ctor: window.SpeechRecognition || window.webkitSpeechRecognition || null,
  blocked: false,
  available() { return !!this.Ctor && !this.blocked; },
  listen(onResult, onError, onStart) {
    if (!this.Ctor) { onError && onError("unsupported"); return null; }
    let r;
    try { r = new this.Ctor(); } catch (e) { onError && onError("unsupported"); return null; }
    r.lang = "de-DE"; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
    let got = false;
    r.onstart = () => onStart && onStart();
    r.onresult = (e) => { got = true; const alts = []; for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript); onResult(alts); };
    r.onerror = (e) => { if (e.error === "not-allowed" || e.error === "service-not-allowed") this.blocked = true; onError && onError(e.error); };
    r.onend = () => { if (!got) onError && onError("no-speech"); };
    try { r.start(); } catch (e) { onError && onError("start"); }
    return r;
  },
  score(alts, target) {
    let best = { s: 0, text: alts[0] || "" };
    for (const a of alts) { const s = sim(a, target); if (s > best.s) best = { s, text: a }; }
    return best;
  }
};

/* ---------- AI tutor (Claude via the artifact runtime) ---------- */
const AI = {
  fn: null, state: "unknown", // unknown | ready | off | denied
  async init() {
    if (!HAS_CLAUDE) { this.state = "off"; return; }
    try { this.fn = await window.claude.use("sample"); this.state = this.fn ? "ready" : "off"; } catch (e) { this.state = "off"; }
    UI && UI.refreshAI && UI.refreshAI();
  },
  available() { return this.state === "ready" && !!this.fn; },
  errText(e) {
    const c = e && e.code;
    if (c === "not_granted") { this.state = "denied"; UI.refreshAI && UI.refreshAI(); return "لم يتم السماح للمدرس الذكي. يمكنك تفعيله من قائمة أذونات هذه الصفحة."; }
    if (c === "rate_limited") return "طلبات كثيرة في وقت قصير. انتظر قليلًا ثم حاول مرة أخرى.";
    if (c === "cancelled") return "";
    if (c === "invalid_json") return "لم أفهم رد المدرس. حاول مرة أخرى.";
    if (c === "sampling_disabled") { this.state = "off"; return "المدرس الذكي غير متاح لحسابك حاليًا."; }
    return "تعذّر الاتصال بالمدرس الذكي الآن. حاول لاحقًا.";
  },
  learnerContext() {
    const done = C.lessons.filter((L) => L.units.some((u) => stepDone(u.id, "g"))).map((L) => L.id);
    const cur = (nextUnit() || UNITS[UNITS.length - 1]);
    const weak = Object.keys(S.tags).filter((t) => S.tags[t][0] >= 4 && S.tags[t][2] < 0.6).map((t) => C.tags[t] ? C.tags[t].ar : t).slice(0, 4);
    return `Learner: Arabic speaker (Morocco), also speaks French. Level: A1 beginner using the textbook "DaF kompakt neu A1". Currently at Lektion ${cur.lesson} (${LESSON[cur.lesson].de}), unit ${cur.id} "${cur.de}". Lessons started: ${done.join(", ") || "1"}. Weak topics: ${weak.join("، ") || "none yet"}. Learner's name: ${S.profile.first || "Karim"}.`;
  },
  async checkReply(ctx) {
    const prompt = `You are a warm, precise German teacher for an Arabic-speaking A1 learner.
${this.learnerContext()}
Role-play situation (explained to the learner in Arabic): ${ctx.scene}
The other person just said (German): "${ctx.prev}"
The learner's task (Arabic): ${ctx.task}
A model answer: "${ctx.model}"
The learner wrote: "${ctx.input}"

Judge whether the learner's reply is acceptable German that fulfils the task (A1 level; ignore missing final punctuation and small capitalisation slips in the first word). Be encouraging but honest: grammar mistakes (verb ending, article, word order, case) make it not ok.
Reply with ONLY a JSON object:
{"ok": true|false, "corrected": "the learner's sentence corrected minimally (same idea)", "natural": "a natural alternative a native speaker would say (A1 level)", "explain_ar": "1-2 short sentences in Arabic explaining the main mistake or praising", "tags": ["one or two of: praesens, sein, haben, wortstellung, artikel, akkusativ, dativ, possessiv, modal, trennbar, perfekt, imperativ, negation, plural, wortschatz"]}`;
    return await this.fn.json(prompt, { modelTier: "quick", cache: false });
  },
  async chat(scenario, turns) {
    const rules = `You are role-playing to help an Arabic-speaking learner practise German at A1 level.
${this.learnerContext()}
Your role: ${scenario.role}. Conversation goal: ${scenario.goal}.
Rules: Speak ONLY simple German (A1, short sentences, max 2 sentences, vocabulary and grammar of DaF kompakt A1 up to the learner's current lesson). Stay in role and keep the conversation going with a question. Then correct the learner's LAST message.
Reply with ONLY a JSON object:
{"reply": "your next line in German", "reply_ar": "Arabic translation of your line", "ok": true|false (was the learner's last message correct German?), "corrected": "corrected version of the learner's last message (or the same if correct)", "explain_ar": "short Arabic explanation of the mistake, or a short praise", "tip_ar": "optional short Arabic tip or a useful phrase, may be empty"}
The conversation so far follows. The learner's messages are marked LEARNER, yours TUTOR.`;
    const transcript = turns.map((t) => (t.role === "user" ? "LEARNER: " : "TUTOR: ") + t.content).join("\n");
    return await this.fn.json([{ role: "user", content: rules + "\n\n" + transcript + "\n\nNow answer as TUTOR in the JSON format." }], { modelTier: "quick", cache: false });
  },
  async correctWriting(task, text) {
    const prompt = `You are a German teacher correcting a short text by an Arabic-speaking A1 learner.
${this.learnerContext()}
Task given to the learner (Arabic): ${task.ar}
German task: ${task.de}
Checklist: ${(task.check || []).join(" | ")}
Learner's text:
"""${text}"""
Reply with ONLY a JSON object:
{"score": 0-10, "corrected": "the full text corrected (keep the learner's ideas, minimal changes)", "mistakes": [{"wrong": "...", "right": "...", "why_ar": "short Arabic explanation"}], "good_ar": "what was good, in Arabic, 1 sentence", "next_ar": "one concrete tip in Arabic for next time"}`;
    return await this.fn.json(prompt, { modelTier: "default", cache: false });
  },
  async ask(question, onText, signal) {
    const prompt = `You are a patient German teacher. Answer in clear Modern Standard Arabic for a Moroccan learner at A1 level (textbook DaF kompakt neu A1). Use short German examples with Arabic translation. Be concise (max ~180 words). Use simple formatting: short paragraphs, examples on their own lines.
${this.learnerContext()}
Question: ${question}`;
    return await this.fn(prompt, { onText, signal, cache: false });
  }
};

/* ---------- activity / study timer ---------- */
const Activity = {
  last: Date.now(), tickMs: 5000,
  ping() { this.last = Date.now(); },
  start() {
    ["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) => window.addEventListener(ev, () => this.ping(), { passive: true }));
    setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - this.last > 120000 && !TTS.speaking) return;
      const L = todayLog(); L.s += this.tickMs / 1000;
      if (Math.round(L.s) % 60 === 0) { save(); }
      UI && UI.tick && UI.tick();
    }, this.tickMs);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") Store.flush(); else this.ping(); });
  }
};

/* ================= UI: icons, shell, router, shared components ================= */
const ICONS = {
  home: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  book: "M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11",
  review: "M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7",
  chat: "M4 5h16v11H9l-5 4z",
  chart: "M5 20V11M11 20V5M17 20v-6M3 20h18",
  gear: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
  volume: "M11 5L6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13",
  turtle: "M4 15a8 8 0 1 1 16 0M12 15l-4-4M3 19h18",
  mic: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
  check: "M20 6L9 17l-5-5",
  x: "M18 6L6 18M6 6l12 12",
  back: "M9 18l6-6-6-6",
  next: "M15 18l-6-6 6-6",
  flame: "M12 22c4 0 7-3 7-7.5 0-4-3-6-4-10-2.5 1.5-4.5 4-4.5 7-1-.8-1.8-2-2-3.5C6.5 9.5 5 11.8 5 14.5 5 19 8 22 12 22z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7v5l3.5 2",
  star: "M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.8L12 17.6 6 21l1.3-6.8-5-4.7 6.8-.8z",
  cards: "M3 8h13v12H3zM7 4h14v12",
  pencil: "M16.5 3.5l4 4L8 20H4v-4z",
  ear: "M6 9.5a6 6 0 1 1 12 0c0 3-1.8 4-3 5.2-1 1-1 3-3 3.8-2 .8-4-.3-4-2.3M9.3 9.5a2.7 2.7 0 0 1 5.4 0",
  flag: "M5 22V3M5 4h12l-2.5 4L17 12H5",
  bulb: "M9 18h6M10 21.5h4M12 2.5a6.5 6.5 0 0 0-3.8 11.8V16h7.6v-1.7A6.5 6.5 0 0 0 12 2.5z",
  bell: "M18 8.5a6 6 0 0 0-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5M13.7 20.5a2 2 0 0 1-3.4 0",
  calendar: "M3.5 5.5h17v15h-17zM16 3v5M8 3v5M3.5 10.5h17",
  download: "M12 3v12M7 10l5 5 5-5M4 20.5h16",
  upload: "M12 21V9M7 14l5-5 5 5M4 3.5h16",
  play: "M7 4.5l13 7.5-13 7.5z",
  stop: "M6.5 6.5h11v11h-11z",
  sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
  search: "M10.5 18.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.8-4.8",
  train: "M7 3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 10h16M8.5 21l1.5-4M15.5 21L14 17M8 13.5h.01M16 13.5h.01",
  warn: "M12 3.5l9.5 17h-19zM12 10v4.5M12 17.5h.01",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 11v6M12 7.5h.01",
  trophy: "M8 21h8M12 17v4M7 3.5h10v5.5a5 5 0 0 1-10 0zM7 5.5H4v1.5a3.5 3.5 0 0 0 3.5 3.5M17 5.5h3v1.5a3.5 3.5 0 0 1-3.5 3.5",
  plus: "M12 5v14M5 12h14",
  trash: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",
  shuffle: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
  list: "M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01",
  type: "M4 7V4h16v3M9 20h6M12 4v16",
  route: "M6 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8.5 16.5h7a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H15",
  phone: "M7 2.5h10a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1zM11 18.5h2",
  cloud: "M7 18.5a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9.5z",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2c3 3.2 3 16.8 0 20M12 2c-3 3.2-3 16.8 0 20"
};
function icon(name, cls) {
  const ns = "http://www.w3.org/2000/svg";
  const s = document.createElementNS(ns, "svg");
  s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
  s.setAttribute("class", "ic" + (cls ? " " + cls : ""));
  const p = document.createElementNS(ns, "path"); p.setAttribute("d", ICONS[name] || ICONS.info);
  s.appendChild(p); return s;
}

/* ---------- shared components ---------- */
function btn(label, o = {}) {
  const b = el("button", { class: "btn " + (o.kind || "primary") + (o.cls ? " " + o.cls : ""), type: "button", id: o.id, disabled: o.disabled ? true : null, "aria-label": o.aria }, o.icon ? icon(o.icon) : null, label ? el("span", null, label) : null);
  if (o.on) b.addEventListener("click", o.on);
  return b;
}
function ring(pct, size = 64, stroke = 7, label) {
  const ns = "http://www.w3.org/2000/svg";
  const s = document.createElementNS(ns, "svg"); s.setAttribute("viewBox", `0 0 ${size} ${size}`); s.setAttribute("class", "ring"); s.setAttribute("width", size); s.setAttribute("height", size);
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const bg = document.createElementNS(ns, "circle"); bg.setAttribute("cx", size / 2); bg.setAttribute("cy", size / 2); bg.setAttribute("r", r); bg.setAttribute("class", "ring-bg"); bg.setAttribute("stroke-width", stroke); bg.setAttribute("fill", "none");
  const fg = document.createElementNS(ns, "circle"); fg.setAttribute("cx", size / 2); fg.setAttribute("cy", size / 2); fg.setAttribute("r", r); fg.setAttribute("class", "ring-fg"); fg.setAttribute("stroke-width", stroke); fg.setAttribute("fill", "none");
  fg.setAttribute("stroke-dasharray", c); fg.setAttribute("stroke-dashoffset", c * (1 - clamp(pct, 0, 1))); fg.setAttribute("transform", `rotate(-90 ${size / 2} ${size / 2})`); fg.setAttribute("stroke-linecap", "round");
  s.appendChild(bg); s.appendChild(fg);
  if (label != null) { const t = document.createElementNS(ns, "text"); t.setAttribute("x", "50%"); t.setAttribute("y", "50%"); t.setAttribute("dominant-baseline", "central"); t.setAttribute("text-anchor", "middle"); t.setAttribute("class", "ring-t"); t.textContent = label; s.appendChild(t); }
  return s;
}
function bar(pct, cls) { return el("div", { class: "bar" + (cls ? " " + cls : ""), role: "progressbar", "aria-valuenow": Math.round(pct * 100), "aria-valuemin": 0, "aria-valuemax": 100 }, el("i", { style: { width: Math.round(clamp(pct, 0, 1) * 100) + "%" } })); }
function sectionTitle(t, sub, extra) { return el("div", { class: "sec-h" }, el("div", null, el("h2", null, t), sub ? el("p", { class: "muted" }, sub) : null), extra || null); }
function umlautBar(getInput) {
  const wrap = el("div", { class: "uml", role: "group", "aria-label": "حروف ألمانية خاصة" });
  for (const ch of ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"]) {
    const b = el("button", { type: "button", class: "uml-k", tabindex: "-1" }, ch);
    b.addEventListener("pointerdown", (e) => e.preventDefault());
    b.addEventListener("click", () => {
      const inp = getInput(); if (!inp) return;
      const s = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? inp.value.length;
      inp.value = inp.value.slice(0, s) + ch + inp.value.slice(e);
      inp.focus(); inp.setSelectionRange(s + 1, s + 1); inp.dispatchEvent(new Event("input"));
    });
    wrap.appendChild(b);
  }
  return wrap;
}
function deInput(o = {}) {
  return el(o.area ? "textarea" : "input", { class: "inp de-inp" + (o.cls ? " " + o.cls : ""), id: o.id, type: o.area ? null : "text", dir: "ltr", lang: "de", autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: "false", placeholder: o.ph || "", rows: o.area ? (o.rows || 3) : null, "aria-label": o.aria || "إجابتك" });
}
function wordChip(w, o = {}) {
  const c = el("span", { class: "wchip" });
  if (w.t === "n" && w.art) c.appendChild(el("span", { class: ART_CLASS[w.art] + " art" }, w.art + " "));
  c.appendChild(deSpan(w.w));
  return c;
}
function emptyState(ic, title, text, action) {
  return el("div", { class: "empty" }, icon(ic, "big"), el("h3", null, title), text ? el("p", { class: "muted" }, text) : null, action || null);
}
function cardLink(o) {
  const b = el("button", { class: "clink" + (o.cls ? " " + o.cls : ""), type: "button" },
    o.icon ? el("span", { class: "clink-ic" }, icon(o.icon)) : null,
    el("span", { class: "clink-t" }, el("b", null, o.title), o.sub ? el("small", { class: "muted" }, o.sub) : null),
    o.badge != null ? el("span", { class: "badge" + (o.badgeCls ? " " + o.badgeCls : "") }, o.badge) : null,
    icon("next", "chev"));
  b.addEventListener("click", o.on);
  return b;
}

/* ---------- UI shell ---------- */
var UI = {
  view: null, stack: [], cur: null,
  init() {
    const app = $("#app");
    clear(app);
    const tabs = [
      { v: "home", ar: "اليوم", ic: "home" },
      { v: "course", ar: "الدروس", ic: "book" },
      { v: "review", ar: "المراجعة", ic: "review" },
      { v: "tutor", ar: "المدرّس", ic: "chat" },
      { v: "stats", ar: "تقدّمي", ic: "chart" }
    ];
    this.tabs = tabs;
    const side = el("aside", { id: "side" },
      el("div", { class: "brand" }, el("span", { class: "brand-mark", "aria-hidden": "true" }, "D"), el("span", null, el("b", null, "Deutschstunde"), el("small", null, "مدرّسك الألماني · A1"))),
      el("nav", { class: "side-nav", "aria-label": "التنقل" }, tabs.map((t) => this.navBtn(t)), this.navBtn({ v: "words", ar: "قاموسي", ic: "search" }), this.navBtn({ v: "sounds", ar: "الأصوات الصعبة", ic: "ear" }), this.navBtn({ v: "exam", ar: "امتحان Start Deutsch 1", ic: "trophy" }), this.navBtn({ v: "settings", ar: "الإعدادات والتنبيهات", ic: "gear" })),
      el("div", { class: "side-today", id: "sideToday" })
    );
    const top = el("header", { id: "top" },
      el("button", { class: "icon-btn", id: "backBtn", type: "button", "aria-label": "رجوع", hidden: true, onclick: () => this.back() }, icon("back")),
      el("div", { class: "top-brand" }, el("span", { class: "brand-mark sm", "aria-hidden": "true" }, "D"), el("b", { id: "topTitle" }, "Deutschstunde")),
      el("div", { class: "top-r" },
        el("span", { class: "chip timer", id: "timerChip", title: "وقت الدراسة اليوم" }, icon("clock"), el("span", { id: "timerTxt" }, "0 د")),
        el("span", { class: "chip streak", id: "streakChip", title: "أيام متتالية" }, icon("flame"), el("span", { id: "streakTxt" }, "0")),
        el("span", { class: "sync", id: "syncDot", title: "الحفظ" }),
        el("button", { class: "icon-btn", type: "button", "aria-label": "الإعدادات", onclick: () => this.go("settings") }, icon("gear"))
      )
    );
    const view = el("main", { id: "view", tabindex: "-1" });
    const main = el("div", { id: "main" }, top, el("div", { id: "banner" }), view);
    const bottom = el("nav", { id: "tabs", "aria-label": "التنقل الرئيسي" }, tabs.map((t) => this.navBtn(t, true)));
    app.append(side, main, bottom, el("div", { id: "overlay", hidden: true, role: "dialog", "aria-modal": "true" }), el("div", { id: "toasts", "aria-live": "polite" }), el("div", { id: "modal", hidden: true }));
    this.view = view;
    if (!IS_FRAMED && history.pushState) {
      window.addEventListener("popstate", () => {
        if (this.ignorePop > 0) { this.ignorePop--; return; }
        if (!$("#overlay").hidden) { Overlay.close(true); return; }
        if (this.stack.length > 1) { TTS.stop(); this.stack.pop(); this.render(); }
      });
    }
    this.tick();
  },
  navBtn(t, bottom) {
    const b = el("button", { class: bottom ? "tab" : "nav-i", type: "button", dataset: { v: t.v } }, icon(t.ic), el("span", null, t.ar));
    b.addEventListener("click", () => this.go(t.v, null, { root: true }));
    return b;
  },
  go(name, params, o = {}) {
    TTS.stop();
    if (o.root) this.stack = [];
    if (!o.replace || !this.stack.length) this.stack.push({ name, params }); else this.stack[this.stack.length - 1] = { name, params };
    if (!IS_FRAMED && !o.root && history.pushState) { try { history.pushState({ n: this.stack.length }, ""); } catch (e) { } }
    this.render();
  },
  ignorePop: 0,
  back() {
    TTS.stop();
    if (this.stack.length > 1) {
      if (!IS_FRAMED && history.state && history.state.n) { try { history.back(); return; } catch (e) { } }
      this.stack.pop(); this.render();
    } else this.go("home", null, { root: true });
  },
  render() {
    const cur = this.stack[this.stack.length - 1] || { name: "home" };
    this.cur = cur;
    const fn = VIEWS[cur.name] || VIEWS.home;
    clear(this.view);
    let node;
    try { node = fn(cur.params || {}); } catch (e) { console.error(e); node = emptyState("warn", "حدث خطأ في عرض هذه الصفحة", String(e && e.message || e), btn("العودة إلى اليوم", { on: () => this.go("home", null, { root: true }) })); }
    if (node) this.view.appendChild(node);
    $("#backBtn").hidden = this.stack.length <= 1;
    const root = this.stack[0] ? this.stack[0].name : "home";
    $$(".tab, .nav-i").forEach((b) => b.classList.toggle("on", b.dataset.v === root));
    window.scrollTo(0, 0); this.view.scrollTop = 0;
    this.banner();
    if (cur.name === "home" || cur.name === "unit") S.progress.lastView = cur;
  },
  refresh() { const y = window.scrollY; this.render(); window.scrollTo(0, y); },
  tick() {
    const L = S.log[dayKey()] || { s: 0 };
    const t = $("#timerTxt"); if (t) t.textContent = Math.floor(L.s / 60) + " د";
    const st = $("#streakTxt"); if (st) st.textContent = streak();
    const side = $("#sideToday");
    if (side) {
      const pct = (L.s / 60) / (S.settings.goalMin || 60);
      clear(side).append(ring(pct, 56, 6, Math.floor(L.s / 60) + "′"), el("div", null, el("b", null, "اليوم"), el("small", { class: "muted" }, Math.floor(L.s / 60) + " من " + S.settings.goalMin + " دقيقة")));
    }
    Reminder.check();
  },
  setSync(mode) { const d = $("#syncDot"); if (!d) return; d.className = "sync " + mode; d.title = mode === "cloud" ? "يُحفظ تقدّمك تلقائيًا في حسابك (متزامن بين أجهزتك)" : "يُحفظ تقدّمك تلقائيًا على هذا الجهاز"; },
  refreshAI() { if (this.cur && (this.cur.name === "tutor" || this.cur.name === "home")) this.refresh(); },
  toast(msg, ic = "check") {
    const t = el("div", { class: "toast" }, icon(ic), el("span", null, msg));
    $("#toasts").appendChild(t);
    setTimeout(() => t.classList.add("out"), 2600); setTimeout(() => t.remove(), 3100);
  },
  confirm(title, text, okLabel = "تأكيد", danger) {
    return new Promise((res) => {
      const m = $("#modal"); clear(m); m.hidden = false;
      const done = (v) => { m.hidden = true; clear(m); res(v); };
      m.appendChild(el("div", { class: "modal-card", role: "alertdialog", "aria-modal": "true" },
        el("h3", null, title), text ? el("p", { class: "muted" }, text) : null,
        el("div", { class: "row end" }, btn("إلغاء", { kind: "ghost", on: () => done(false) }), btn(okLabel, { kind: danger ? "danger" : "primary", on: () => done(true) }))));
      m.onclick = (e) => { if (e.target === m) done(false); };
    });
  },
  banner() {
    const b = $("#banner"); if (!b) return; clear(b);
    if (Reminder.due() && this.cur && this.cur.name !== "settings") {
      b.appendChild(el("div", { class: "remind" }, icon("bell"), el("span", null, el("b", null, "حان موعد درس اليوم! "), "هدفك " + S.settings.goalMin + " دقيقة — لنبدأ."), btn("ابدأ الآن", { kind: "accent", on: () => startToday() }), el("button", { class: "icon-btn sm", type: "button", "aria-label": "إخفاء", onclick: () => { Reminder.dismissed = dayKey(); this.banner(); } }, icon("x"))));
    }
  }
};

/* ---------- overlay (full-screen activities) ---------- */
const Overlay = {
  onClose: null,
  open(node, onClose) {
    const o = $("#overlay"); clear(o); o.appendChild(node); o.hidden = false; document.body.classList.add("ov");
    this.onClose = onClose || null;
    if (!IS_FRAMED && history.pushState) { try { history.pushState({ ov: 1 }, ""); } catch (e) { } }
    o.scrollTop = 0;
  },
  close(fromPop) {
    TTS.stop();
    const o = $("#overlay"); o.hidden = true; clear(o); document.body.classList.remove("ov");
    const cb = this.onClose; this.onClose = null;
    if (!fromPop && !IS_FRAMED && history.state && history.state.ov) { try { UI.ignorePop++; history.back(); } catch (e) { UI.ignorePop = 0; } }
    cb && cb();
    UI.tick();
  }
};
function ovHeader(title, sub, o = {}) {
  return el("div", { class: "ov-h" },
    el("button", { class: "icon-btn", type: "button", "aria-label": "إغلاق", onclick: () => { if (o.onX) o.onX(); else Overlay.close(); } }, icon("x")),
    el("div", { class: "ov-t" }, el("b", null, title instanceof Node ? title : String(title)), sub ? el("small", { class: "muted" }, sub) : null),
    o.right || el("span", { class: "sp" }));
}

/* ================= EXERCISES: generators, session runner, flashcards ================= */

/* ---------- generated vocabulary items ---------- */
function isLatin(s) { return /[A-Za-zÄÖÜäöüß]/.test(s) && !/[؀-ۿ]/.test(s); }
function fakePlurals(w) {
  const base = w.w, set = new Set([base + "e", base + "en", base + "n", umlautize(base) + "e", base + "er", base + "s", umlautize(base) + "er", base]);
  set.delete(w.pl);
  return shuffle(Array.from(set)).filter((x) => x !== w.pl).slice(0, 2);
}
function distractWords(w, n = 3) {
  let pool = WORDS.filter((x) => x.lesson === w.lesson && x.t === w.t && x.ar !== w.ar && x.w !== w.w);
  if (pool.length < n) pool = pool.concat(WORDS.filter((x) => x.t === w.t && x.ar !== w.ar && x.w !== w.w && x.lesson !== w.lesson));
  const seen = new Set([w.ar]); const out = [];
  for (const x of shuffle(pool)) { if (seen.has(x.ar)) continue; seen.add(x.ar); out.push(x); if (out.length >= n) break; }
  return out;
}
function canArt(w) { return w.t === "n" && ["der", "die", "das"].includes(w.art) && w.p !== "Pl."; }
function genVocab(w, kind) {
  if (!w) return null;
  const id = "v|" + w.id + "|" + kind;
  const base = { id, gen: true, wid: w.id, w, tag: kind === "art" ? "artikel" : kind === "plural" ? "plural" : kind === "listen" ? "hoeren" : "wortschatz" };
  if (kind === "art") return Object.assign(base, { t: "vart" });
  if (kind === "plural") return Object.assign(base, { t: "mc", q: "ما صيغة الجمع؟", s: wordLabel(w), o: ["die " + w.pl].concat(fakePlurals(w).map((x) => "die " + x)), a: 0, why: "جمع ‹" + wordLabel(w) + "› هو ‹die " + w.pl + "› (علامة الجمع في القاموس: " + w.p + ")." });
  if (kind === "de2ar") { const d = distractWords(w); return Object.assign(base, { t: "mc", say: wordLabel(w), q: "ما معنى هذه الكلمة؟", s: wordLabel(w), sWord: true, o: [w.ar].concat(d.map((x) => x.ar)), a: 0, why: "‹" + wordLabel(w) + "› = " + w.ar + ". مثال: ‹" + w.ex + "› — " + w.exAr }); }
  if (kind === "ar2de") { const d = distractWords(w); return Object.assign(base, { t: "mc", q: "كيف تقول بالألمانية: «" + w.ar + "»؟", o: [wordLabel(w)].concat(d.map((x) => wordLabel(x))), a: 0, why: "«" + w.ar + "» = ‹" + wordLabel(w) + "›." }); }
  if (kind === "listen") { const d = distractWords(w); return Object.assign(base, { t: "listen", say: wordLabel(w), q: "استمع: ما معنى الكلمة؟", o: [w.ar].concat(d.map((x) => x.ar)), a: 0, why: "سمعت ‹" + wordLabel(w) + "› = " + w.ar + "." }); }
  if (kind === "write") return Object.assign(base, { t: "vwrite" });
  return null;
}
function getItem(id) {
  if (ITEMS[id]) return ITEMS[id];
  if (id.startsWith("v|")) { const parts = id.split("|"); return genVocab(WORD[parts[1]], parts[2]); }
  return null;
}
function vocabKinds(w) {
  const typing = mastery("wortschatz") > 0.72;
  const k = [];
  if (canArt(w)) k.push("art");
  k.push(Math.random() < 0.5 ? "de2ar" : "ar2de");
  if (w.t === "n" && w.pl && w.pl !== w.w && w.p !== "Pl." && Math.random() < 0.4) k.push("plural");
  if (typing || Math.random() < 0.25) k.push("write");
  if (Math.random() < 0.3) k.push("listen");
  return k;
}
function vocabQuiz(words, n = 12) {
  const items = [];
  for (const w of shuffle(words)) { const ks = vocabKinds(w); items.push(genVocab(w, ks[rnd(ks.length)])); if (items.length >= n) break; }
  return items.filter(Boolean);
}
function unitQuiz(u) {
  const ex = sample(u.ex.filter((x) => x.t !== "read"), 4);
  const voc = vocabQuiz(u.words, 2);
  const ls = sample(u.listen, 2);
  return shuffle(ex.concat(voc)).concat(ls);
}
function weakFirst(items) { return items.slice().sort((a, b) => mastery(a.tag) - mastery(b.tag)); }
function lessonTest(L) {
  let ex = [], ls = [], words = [];
  for (const u of L.units) { ex = ex.concat(u.ex.filter((x) => x.t !== "read")); ls = ls.concat(u.listen); words = words.concat(u.words); }
  const exPick = weakFirst(shuffle(ex)).slice(0, 10);
  return shuffle(exPick.concat(vocabQuiz(words, 6))).concat(sample(ls, 4));
}

/* ---------- renderers ---------- */
function blankSentence(s) {
  const w = el("div", { class: "sent", dir: "ltr", lang: "de" });
  fillPH(s).split("___").forEach((part, i, arr) => { w.appendChild(document.createTextNode(part)); if (i < arr.length - 1) w.appendChild(el("span", { class: "blank" }, "…")); });
  return w;
}
const R = {};
R.mc = (x, ctx) => {
  let chosen = null;
  const order = shuffle(x.o.map((t, i) => i));
  const opts = el("div", { class: "opts" + (x.o.every((o) => o.length < 26) ? " grid" : "") });
  const btns = order.map((i, k) => {
    const t = x.o[i];
    const b = el("button", { class: "opt", type: "button", dir: isLatin(t) ? "ltr" : null, dataset: { i } }, el("span", { class: "k" }, String(k + 1)), isLatin(t) ? deHTML(t) : el("span", { html: fmt(t) }));
    b.addEventListener("click", () => { if (ctx.locked) return; chosen = i; btns.forEach((z) => z.classList.toggle("sel", z === b)); ctx.ready(true); if (ctx.autoCheck) ctx.check(); });
    opts.appendChild(b); return b;
  });
  const node = el("div", { class: "it" },
    x.q ? el("p", { class: "q", html: fmt(x.q) }) : null,
    x.say && !x.sWord ? el("div", { class: "row" }, playBtn(x.say)) : null,
    x.s ? el("div", { class: "row center" }, x.sWord ? el("div", { class: "bigword" }, renderLabel(x.s)) : blankSentence(x.s), x.sWord ? playBtn(x.s) : null) : null,
    opts);
  if (x.sWord && x.s) setTimeout(() => TTS.speak(x.s), 250);
  return {
    node,
    key(e) { const n = parseInt(e.key, 10); if (n >= 1 && n <= btns.length) btns[n - 1].click(); },
    check() {
      const ok = chosen === x.a;
      btns.forEach((b) => { const i = +b.dataset.i; if (i === x.a) b.classList.add("good"); else if (i === chosen) b.classList.add("bad"); b.disabled = true; });
      const wr = !ok && x.wrong && x.wrong[x.o[chosen]];
      return { ok, user: x.o[chosen], correct: x.o[x.a], why: wr || x.why };
    }
  };
};
R.tf = (x, ctx) => R.mc(Object.assign({}, x, { q: x.q || "صحيح أم خطأ؟", o: ["صحيح (richtig)", "خطأ (falsch)"], a: x.a ? 0 : 1 }), ctx);
R.gap = (x, ctx) => {
  const inputs = [];
  const sent = el("div", { class: "sent gapline", dir: "ltr", lang: "de" });
  fillPH(x.s).split("___").forEach((part, i, arr) => {
    sent.appendChild(document.createTextNode(part));
    if (i < arr.length - 1) {
      const a0 = [].concat(x.a[i])[0] || "";
      const inp = el("input", { class: "gap-inp", type: "text", dir: "ltr", lang: "de", autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: "false", size: Math.max(3, a0.length + 1), "aria-label": "الفراغ " + (i + 1) });
      inp.addEventListener("input", () => ctx.ready(inputs.some((z) => z.value.trim())));
      inp.addEventListener("focus", () => { ctx.lastInput = inp; });
      inputs.push(inp); sent.appendChild(inp);
    }
  });
  const node = el("div", { class: "it" },
    x.q ? el("p", { class: "q", html: fmt(x.q) }) : null,
    x.hint ? el("div", { class: "hint" }, "الفعل: ", deSpan(x.hint)) : null,
    sent, umlautBar(() => ctx.lastInput || inputs[0]));
  setTimeout(() => inputs[0] && inputs[0].focus({ preventScroll: true }), 120);
  return {
    node,
    check() {
      let allOk = true; const notes = []; let wr = null;
      inputs.forEach((inp, i) => {
        const acc = [].concat(x.a[i]);
        const r = judge(inp.value, acc, { typo: false });
        inp.disabled = true;
        inp.classList.add(r.ok ? "good" : "bad");
        if (!r.ok) { allOk = false; if (x.wrong) { const k = Object.keys(x.wrong).find((kk) => canon(kk) === canon(inp.value)); if (k) wr = x.wrong[k]; } }
        if (r.note) notes.push(r.note);
      });
      return { ok: allOk, user: inputs.map((z) => z.value || "—").join(" / "), correct: x.a.map((a) => [].concat(a)[0]).join(" / "), why: wr || x.why, note: notes[0], full: x.s.split("___").reduce((acc, p, i) => acc + (i ? [].concat(x.a[i - 1])[0] : "") + p, "") };
    }
  };
};
R.order = (x, ctx) => {
  let a = fillPH(x.a).trim(); let end = "";
  const m = a.match(/[.!?]+$/); if (m) { end = m[0]; a = a.slice(0, -end.length); }
  const toks = a.split(/\s+/);
  let pool = shuffle(toks.map((t, i) => ({ t, i })));
  if (toks.length > 1 && pool.every((p, k) => p.i === k)) pool = pool.reverse();
  const built = [];
  const line = el("div", { class: "order-line", dir: "ltr", lang: "de" });
  const poolEl = el("div", { class: "order-pool", dir: "ltr", lang: "de" });
  const draw = () => {
    clear(line); clear(poolEl);
    if (!built.length) line.appendChild(el("span", { class: "muted ph", dir: "rtl" }, "اضغط على الكلمات بالترتيب الصحيح"));
    built.forEach((p, k) => { const c = el("button", { class: "tok in", type: "button" }, p.t); c.onclick = () => { if (ctx.locked) return; built.splice(k, 1); pool.push(p); draw(); }; line.appendChild(c); });
    pool.forEach((p, k) => { const c = el("button", { class: "tok", type: "button" }, p.t); c.onclick = () => { if (ctx.locked) return; pool.splice(k, 1); built.push(p); draw(); }; poolEl.appendChild(c); });
    if (end) line.appendChild(el("span", { class: "end" }, end));
    ctx.ready(pool.length === 0);
  };
  draw();
  return {
    node: el("div", { class: "it" }, x.q ? el("p", { class: "q", html: fmt(x.q) }) : null, line, poolEl),
    check() {
      const s = built.map((p) => p.t).join(" ");
      const ok = [x.a].concat(x.alt || []).some((alt) => canon(fillPH(alt)) === canon(s));
      line.classList.add(ok ? "good" : "bad");
      return { ok, user: s + end, correct: fillPH(x.a), why: x.why };
    }
  };
};
R.match = (x, ctx) => {
  const left = x.pairs.map((p, i) => ({ t: p[0], i })), right = shuffle(x.pairs.map((p, i) => ({ t: p[1], i })));
  const pairOf = {}; let selL = null;
  const colors = ["c1", "c2", "c3", "c4", "c5", "c6"];
  const L = el("div", { class: "mcol" }), Rr = el("div", { class: "mcol" });
  const lb = left.map((p) => { const b = el("button", { class: "mt", type: "button" }, isLatin(p.t) ? deSpan(p.t) : el("span", { html: fmt(p.t) })); b.onclick = () => { if (ctx.locked) return; if (pairOf[p.i] != null) { delete pairOf[p.i]; } selL = p.i; paint(); }; L.appendChild(b); return b; });
  const rb = right.map((p) => { const b = el("button", { class: "mt", type: "button" }, isLatin(p.t) ? deSpan(p.t) : el("span", { html: fmt(p.t) })); b.onclick = () => { if (ctx.locked) return; const owner = Object.keys(pairOf).find((k) => pairOf[k] === p.i); if (owner != null) { delete pairOf[owner]; selL = +owner; } else if (selL != null) { pairOf[selL] = p.i; selL = null; const nextFree = left.find((q) => pairOf[q.i] == null); if (nextFree) selL = nextFree.i; } paint(); }; Rr.appendChild(b); return b; });
  const paint = () => {
    lb.forEach((b, k) => { const i = left[k].i; b.className = "mt" + (selL === i ? " sel" : "") + (pairOf[i] != null ? " " + colors[Object.keys(pairOf).indexOf(String(i)) % 6] + " paired" : ""); });
    rb.forEach((b, k) => { const i = right[k].i; const owner = Object.keys(pairOf).find((kk) => pairOf[kk] === i); b.className = "mt" + (owner != null ? " " + colors[Object.keys(pairOf).indexOf(owner) % 6] + " paired" : ""); });
    ctx.ready(Object.keys(pairOf).length === x.pairs.length);
  };
  selL = 0; paint();
  return {
    node: el("div", { class: "it" }, el("p", { class: "q", html: fmt(x.q || "صِل كل عنصر بما يناسبه") }), el("p", { class: "muted sm" }, "اختر من العمود الأول ثم ما يقابله في العمود الثاني."), el("div", { class: "match" }, L, Rr)),
    check() {
      let good = 0;
      left.forEach((p, k) => { const ok = pairOf[p.i] === p.i; if (ok) good++; lb[k].classList.add(ok ? "good" : "bad"); });
      rb.forEach((b) => (b.disabled = true)); lb.forEach((b) => (b.disabled = true));
      const ok = good === x.pairs.length;
      return { ok, frac: good / x.pairs.length, user: good + " من " + x.pairs.length + " صحيحة", correct: x.pairs.map((p) => p[0] + " = " + p[1]).join(" · "), why: ok ? null : "راجع الأزواج الصحيحة أعلاه." };
    }
  };
};
R.listen = (x, ctx) => {
  const mc = R.mc(Object.assign({}, x, { say: null, s: null }), ctx);
  const tools = el("div", { class: "row center listen-tools" },
    el("button", { class: "btn big-play", type: "button", onclick: () => TTS.speak(x.say) }, icon("volume"), el("span", null, "استمع")),
    el("button", { class: "btn ghost", type: "button", onclick: () => TTS.speak(x.say, { slow: true }) }, icon("turtle"), el("span", null, "ببطء")));
  mc.node.insertBefore(tools, mc.node.children[1] || null);
  setTimeout(() => TTS.speak(x.say), 300);
  const chk = mc.check;
  mc.check = () => { const r = chk(); r.transcript = x.say; return r; };
  return mc;
};
R.dict = (x, ctx) => {
  const long = x.say.length > 28;
  const inp = deInput({ area: long, ph: "اكتب ما تسمعه بالألمانية…" });
  inp.addEventListener("input", () => ctx.ready(!!inp.value.trim()));
  ctx.lastInput = inp;
  const node = el("div", { class: "it" },
    el("p", { class: "q" }, x.q || "استمع واكتب ما تسمعه (إملاء)"),
    el("div", { class: "row center listen-tools" },
      el("button", { class: "btn big-play", type: "button", onclick: () => TTS.speak(x.say) }, icon("volume"), el("span", null, "استمع")),
      el("button", { class: "btn ghost", type: "button", onclick: () => TTS.speak(x.say, { slow: true }) }, icon("turtle"), el("span", null, "ببطء"))),
    inp, umlautBar(() => inp));
  setTimeout(() => { TTS.speak(x.say); inp.focus({ preventScroll: true }); }, 300);
  return {
    node, enterOk: !long,
    check() {
      const acc = x.ans || [x.say];
      const r = judge(inp.value, acc, { typo: true });
      inp.disabled = true; inp.classList.add(r.ok ? "good" : "bad");
      const diff = wordDiff(inp.value, acc[0]);
      return { ok: r.ok, user: inp.value, correct: acc[0], note: r.note, diff, why: r.ok ? null : "الكلمات المظللة بالأحمر لم تكتبها بشكل صحيح. استمع مرة أخرى وانتبه لها." };
    }
  };
};
R.tr = (x, ctx) => {
  const inp = deInput({ area: true, rows: 2, ph: "اكتب الترجمة بالألمانية…" });
  inp.addEventListener("input", () => ctx.ready(!!inp.value.trim()));
  ctx.lastInput = inp;
  setTimeout(() => inp.focus({ preventScroll: true }), 120);
  return {
    node: el("div", { class: "it" }, el("p", { class: "q", html: fmt(x.q || "ترجم إلى الألمانية") }), el("div", { class: "arline" }, x.ar), inp, umlautBar(() => inp)),
    async check() {
      inp.disabled = true;
      if (!inp.value.trim()) { inp.classList.add("bad"); return { ok: false, user: "—", correct: x.a[0], why: x.why || null }; }
      const r = judge(inp.value, x.a, { typo: false });
      if (r.ok) { inp.classList.add("good"); return { ok: true, user: inp.value, correct: r.best, note: r.note, why: x.a.length > 1 ? "صيغ أخرى صحيحة: " + x.a.filter((a) => a !== r.best).slice(0, 2).join(" / ") : null }; }
      if (AI.available() && S.settings.aiCheck) {
        try {
          ctx.busy("المدرس الذكي يراجع ترجمتك…");
          const res = await AI.checkReply({ scene: "تمرين ترجمة من العربية إلى الألمانية.", prev: "", task: "ترجم: " + x.ar, model: x.a[0], input: inp.value });
          ctx.busy(null);
          if (res && typeof res.ok === "boolean") {
            inp.classList.add(res.ok ? "good" : "bad");
            return { ok: res.ok, user: inp.value, correct: res.ok ? (res.natural || x.a[0]) : (res.corrected || x.a[0]), why: res.explain_ar, ai: true, natural: res.natural, aiTags: res.tags };
          }
        } catch (e) { ctx.busy(null); const m = AI.errText(e); if (m) UI.toast(m, "warn"); }
      }
      inp.classList.add("bad");
      const diff = wordDiff(inp.value, x.a[0]);
      return { ok: false, user: inp.value, correct: x.a[0], diff, why: x.why || "قارن جملتك بالإجابة النموذجية: انتبه لترتيب الكلمات ونهايات الأفعال والأدوات." };
    }
  };
};
R.read = (x, ctx) => {
  const answers = {};
  const subs = x.items.map((s, j) => {
    const opts = s.t === "tf" ? [["صحيح", true], ["خطأ", false]] : s.o.map((o, i) => [o, i]);
    const row = el("div", { class: "rq" }, el("div", { class: "rq-s" }, s.t === "tf" ? deSpan(s.s) : el("span", { html: fmt(s.q || s.s) })));
    const bs = el("div", { class: "rq-b" });
    const bl = opts.map(([lab, val]) => { const b = el("button", { class: "opt sm", type: "button" }, lab); b.onclick = () => { if (ctx.locked) return; answers[j] = val; bl.forEach((z) => z.classList.toggle("sel", z === b)); ctx.ready(Object.keys(answers).length === x.items.length); }; bs.appendChild(b); return b; });
    row.appendChild(bs); return { row, bl, s, opts };
  });
  const trBox = el("div", { class: "tr-box", hidden: true }, x.tr);
  const node = el("div", { class: "it" },
    el("div", { class: "read-h" }, el("b", null, deSpan(x.title || "")), el("div", { class: "row" }, playBtn(x.text), playBtn(x.text, { slow: true }), el("button", { class: "btn ghost sm", type: "button", onclick: () => (trBox.hidden = !trBox.hidden) }, icon("eye"), el("span", null, "الترجمة")))),
    el("div", { class: "read-t", dir: "ltr", lang: "de" }, fillPH(x.text)), trBox,
    el("p", { class: "q" }, "أجب حسب النص:"), subs.map((z) => z.row));
  return {
    node,
    check() {
      let good = 0; const whys = [];
      subs.forEach((z, j) => {
        const right = z.s.t === "tf" ? z.s.a : z.s.a;
        const ok = answers[j] === right; if (ok) good++;
        z.bl.forEach((b, k) => { const val = z.opts[k][1]; if (val === right) b.classList.add("good"); else if (val === answers[j]) b.classList.add("bad"); b.disabled = true; });
        if (!ok && z.s.why) whys.push("• " + z.s.why);
        recordAnswer({ id: x.id + "." + j, tag: z.s.tag || x.tag || "lesen" }, ok);
      });
      trBox.hidden = false;
      return { ok: good === x.items.length, frac: good / x.items.length, user: good + " من " + x.items.length, correct: null, why: whys.join("\n") || null, recorded: true };
    }
  };
};
R.vart = (x, ctx) => {
  const w = x.w; let chosen = null;
  const bs = ["der", "die", "das"].map((a) => { const b = el("button", { class: "artbtn " + ART_CLASS[a], type: "button" }, a); b.onclick = () => { if (ctx.locked) return; chosen = a; ctx.check(); }; return b; });
  setTimeout(() => TTS.speak(w.w), 250);
  return {
    auto: true,
    node: el("div", { class: "it" }, el("p", { class: "q" }, "ما أداة هذا الاسم؟"), el("div", { class: "row center" }, el("div", { class: "bigword" }, deSpan(w.w)), playBtn(w.w)), el("p", { class: "muted center" }, w.ar), el("div", { class: "artrow" }, bs)),
    key(e) { const k = { "1": 0, "2": 1, "3": 2 }[e.key]; if (k != null) bs[k].click(); },
    check() {
      const ok = chosen === w.art;
      bs.forEach((b) => { if (b.textContent === w.art) b.classList.add("good"); else if (b.textContent === chosen) b.classList.add("bad"); b.disabled = true; });
      TTS.speak(w.art + " " + w.w);
      return { ok, user: chosen + " " + w.w, correct: w.art + " " + w.w + (w.pl ? "  ·  الجمع: die " + w.pl : ""), why: genderHint(w.w, w.art) };
    }
  };
};
R.vwrite = (x, ctx) => {
  const w = x.w; const inp = deInput({ ph: w.t === "n" && w.art ? "مثال: der Tisch" : "اكتب الكلمة بالألمانية" });
  inp.addEventListener("input", () => ctx.ready(!!inp.value.trim())); ctx.lastInput = inp;
  setTimeout(() => inp.focus({ preventScroll: true }), 120);
  return {
    node: el("div", { class: "it" }, el("p", { class: "q" }, w.t === "n" && w.art ? "اكتب الكلمة بالألمانية مع أداة التعريف:" : "اكتب الكلمة بالألمانية:"), el("div", { class: "arline" }, w.ar), w.ex ? el("p", { class: "muted sm" }, "تلميح: تبدأ بحرف ", deSpan(w.w[0])) : null, inp, umlautBar(() => inp)),
    enterOk: true,
    check() {
      inp.disabled = true;
      const target = wordLabel(w);
      const r = judge(inp.value, [target], { typo: true });
      let why = null;
      if (!r.ok && w.t === "n" && w.art) {
        const parts = inp.value.trim().split(/\s+/);
        const typedArt = parts[0] && ["der", "die", "das"].includes(parts[0].toLowerCase()) ? parts[0].toLowerCase() : null;
        const typedWord = typedArt ? parts.slice(1).join(" ") : inp.value.trim();
        if (canon(typedWord) === canon(w.w) && typedArt !== w.art) why = typedArt ? "الكلمة صحيحة لكن الأداة خطأ: " + w.art + " " + w.w + ". " + genderHint(w.w, w.art) : "لا تنسَ الأداة: " + w.art + " " + w.w + ".";
      }
      inp.classList.add(r.ok ? "good" : "bad");
      TTS.speak(target);
      return { ok: r.ok, user: inp.value, correct: target, note: r.note, why: why || (r.ok ? null : "مثال: ‹" + w.ex + "› — " + w.exAr) };
    }
  };
};
function renderLabel(label) {
  const m = String(label).match(/^(der|die|das)\s+(.+)$/);
  if (m) return el("span", { dir: "ltr", lang: "de", class: "de" }, el("span", { class: ART_CLASS[m[1]] }, m[1] + " "), m[2]);
  return deSpan(label);
}

/* ---------- session runner ---------- */
const Session = {
  start(o) {
    const items = (o.items || []).filter(Boolean);
    if (!items.length) { UI.toast("لا توجد عناصر للتدريب هنا بعد", "info"); return; }
    const st = { i: 0, score: 0, results: [], t0: Date.now() };
    const wrap = el("div", { class: "session" });
    const prog = bar(0, "thin");
    const counter = el("small", { class: "muted" });
    const head = ovHeader(o.title || "تمرين", o.sub, { right: counter, onX: async () => { if (st.i > 0 && st.i < items.length && !(await UI.confirm("إنهاء التمرين؟", "سيُحفظ ما أنجزته حتى الآن.", "إنهاء"))) return; finish(true); } });
    const body = el("div", { class: "s-body" });
    const fb = el("div", { class: "fb", hidden: true, "aria-live": "polite" });
    const checkB = btn("تحقّق", { kind: "primary", cls: "wide", disabled: true });
    const skipB = btn("لا أعرف", { kind: "ghost" });
    const foot = el("div", { class: "s-foot" }, skipB, checkB);
    wrap.append(head, prog, body, fb, foot);
    Overlay.open(wrap, () => { document.removeEventListener("keydown", onKey); });
    let cur = null, ctx = null, phase = "answer";
    const show = () => {
      phase = "answer"; fb.hidden = true; clear(fb);
      const x = items[st.i];
      counter.textContent = (st.i + 1) + " من " + items.length;
      prog.firstChild.style.width = Math.round(st.i / items.length * 100) + "%";
      ctx = { locked: false, ready: (v) => { checkB.disabled = !v; }, check: () => doCheck(), lastInput: null, autoCheck: false, busy: (m) => { if (m) { checkB.disabled = true; checkB.lastChild.textContent = m; } else checkB.lastChild.textContent = "تحقّق"; } };
      checkB.disabled = true; checkB.lastChild.textContent = "تحقّق"; skipB.hidden = false;
      const r = R[x.t] || R.mc;
      cur = r(x, ctx);
      checkB.hidden = !!cur.auto;
      clear(body).appendChild(cur.node);
      body.scrollTop = 0; wrap.scrollTop = 0;
    };
    const doCheck = async () => {
      if (phase !== "answer") return;
      phase = "checking"; ctx.locked = true; checkB.disabled = true; skipB.hidden = true;
      let res;
      try { res = await cur.check(); } catch (e) { console.error(e); res = { ok: false, why: "تعذّر التحقق." }; }
      const x = items[st.i];
      const frac = res.frac != null ? res.frac : res.ok ? 1 : 0;
      st.score += frac; st.results.push({ x, res });
      if (!res.recorded) recordAnswer(x, res.ok, { wid: x.wid });
      if (res.aiTags && !res.ok) res.aiTags.forEach((t) => { if (C.tags[t]) recordAnswer({ tag: t }, false); });
      showFb(res, x);
      phase = "feedback";
      checkB.hidden = false; checkB.disabled = false; checkB.lastChild.textContent = st.i + 1 < items.length ? "التالي" : "النتيجة";
      checkB.focus({ preventScroll: true });
    };
    const showFb = (res, x) => {
      clear(fb); fb.hidden = false; fb.className = "fb " + (res.ok ? "ok" : "no");
      fb.appendChild(el("div", { class: "fb-h" }, icon(res.ok ? "check" : "x"), el("b", null, res.ok ? pick(["أحسنت!", "ممتاز!", "صحيح!", "رائع!", "Sehr gut!"]) : pick(["ليس تمامًا", "انتبه", "خطأ صغير", "حاول أن تتذكّر"]))));
      if (!res.ok && res.user && x.t !== "read" && x.t !== "match") fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, "إجابتك: "), isLatin(res.user) ? deSpan(res.user) : el("span", null, res.user)));
      if (res.correct && (!res.ok || res.note || x.t === "vart")) fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, res.ok ? "الصحيح: " : "الإجابة الصحيحة: "), isLatin(res.correct) ? renderLabel(res.correct) : el("span", { html: fmt(res.correct) })));
      if (res.full && !res.ok) fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, "الجملة: "), deSpan(res.full), playBtn(res.full, { small: true })));
      if (res.diff && !res.ok) { const d = el("div", { class: "diff", dir: "ltr", lang: "de" }); res.diff.forEach((p) => d.appendChild(el("span", { class: p.ok ? "dw ok" : "dw no" }, p.w + " "))); fb.appendChild(d); }
      if (res.note) fb.appendChild(el("p", { class: "fb-note" }, icon("info"), el("span", null, res.note)));
      if (res.why) fb.appendChild(el("p", { class: "fb-why", html: fmt(res.why) }));
      if (res.natural && res.ai) fb.appendChild(el("p", { class: "fb-why" }, el("span", { class: "muted" }, "صياغة طبيعية: "), deSpan(res.natural)));
      if (res.transcript) fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, "النص المسموع: "), deSpan(res.transcript), playBtn(res.transcript, { small: true })));
      if (!res.ok && AI.available()) {
        const out = el("div", { class: "ai-out", hidden: true });
        const ab = btn("لماذا؟ اسأل المدرّس الذكي", { kind: "ghost", icon: "sparkle", cls: "sm" });
        ab.onclick = async () => {
          ab.disabled = true; out.hidden = false; out.textContent = "المدرّس يفكّر…";
          const qtxt = `تمرين: ${x.q || ""} ${x.s ? "الجملة: " + fillPH(x.s) : ""} ${x.ar ? "العربية: " + x.ar : ""}\nإجابتي: ${res.user}\nالإجابة الصحيحة: ${res.correct}\nاشرح لي لماذا إجابتي خطأ وما القاعدة، بإيجاز.`;
          try { await AI.ask(qtxt, ({ text }) => { out.innerHTML = fmtAI(text); }); } catch (e) { out.textContent = AI.errText(e) || ""; }
        };
        fb.append(ab, out);
      }
    };
    const next = () => { st.i++; if (st.i >= items.length) finish(false); else show(); };
    const finish = (aborted) => {
      document.removeEventListener("keydown", onKey);
      const n = st.results.length; const pct = n ? Math.round(st.score / n * 100) : 0;
      if (!n) { Overlay.close(); return; }
      if (o.onFinish) o.onFinish({ pct, n, total: items.length, results: st.results, aborted });
      clear(wrap);
      const wrong = st.results.filter((r) => !r.res.ok);
      const msg = pct >= 90 ? "ممتاز! أنت تتقن هذا." : pct >= 70 ? "جيد جدًا! واصل هكذا." : pct >= 50 ? "بداية جيدة — راجع الأخطاء أدناه." : "لا بأس، التعلّم يحتاج تكرارًا. راجع الشرح ثم أعد المحاولة.";
      wrap.append(ovHeader(o.title || "النتيجة", null),
        el("div", { class: "result" },
          ring(pct / 100, 120, 10, pct + "%"),
          el("h2", null, msg),
          el("p", { class: "muted" }, Math.round(st.score) + " من " + n + " إجابة صحيحة · " + fmtMin((Date.now() - st.t0) / 1000)),
          o.passMark ? el("p", { class: pct >= o.passMark ? "pass" : "fail" }, pct >= o.passMark ? "نجحت في الاختبار ✓" : "تحتاج " + o.passMark + "% للنجاح — حاول مرة أخرى بعد المراجعة.") : null),
        wrong.length ? el("div", { class: "mistakes" }, el("h3", null, "أخطاؤك وتصحيحها"), wrong.map((r) => mistakeRow(r))) : null,
        el("div", { class: "s-foot sticky" },
          wrong.length ? btn("أعد الأخطاء (" + wrong.length + ")", { kind: "ghost", icon: "review", on: () => { Overlay.close(); setTimeout(() => Session.start({ title: "تصحيح الأخطاء", items: wrong.map((r) => r.x.gen ? getItem(r.x.id) : r.x), onFinish: o.onRetryFinish }), 50); } }) : null,
          btn("إنهاء", { kind: "primary", cls: "wide", on: () => Overlay.close() })));
      wrap.scrollTop = 0;
      UI.tick();
    };
    checkB.onclick = () => { if (phase === "answer") doCheck(); else if (phase === "feedback") next(); };
    skipB.onclick = () => { if (phase !== "answer") return; ctx.ready(true); cur.forceWrong = true; doCheck(); };
    const onKey = (e) => {
      if ($("#overlay").hidden) return;
      if (e.key === "Enter" && !e.shiftKey) {
        const ta = e.target && e.target.tagName === "TEXTAREA";
        if (phase === "feedback") { e.preventDefault(); next(); }
        else if (phase === "answer" && !checkB.disabled && (!ta || (cur && cur.enterOk))) { e.preventDefault(); doCheck(); }
        else if (ta && phase === "answer" && !checkB.disabled && e.ctrlKey) { e.preventDefault(); doCheck(); }
      } else if (phase === "answer" && cur && cur.key && !(e.target && /INPUT|TEXTAREA/.test(e.target.tagName))) cur.key(e);
    };
    document.addEventListener("keydown", onKey);
    show();
  }
};
function pick(a) { return a[rnd(a.length)]; }
function mistakeRow(r) {
  const x = r.x, res = r.res;
  const prompt = x.t === "vart" ? "أداة: " + x.w.w : x.t === "vwrite" ? x.w.ar : x.t === "read" ? (x.title || "قراءة") : x.t === "tr" ? x.ar : x.t === "dict" ? "إملاء" : x.t === "match" ? (x.q || "توصيل") : (x.s ? fillPH(x.s) : x.q || "");
  return el("div", { class: "mrow" },
    el("div", { class: "mrow-q" }, isLatin(prompt) ? deSpan(prompt) : el("span", { html: fmt(prompt) })),
    res.user && x.t !== "read" && x.t !== "match" ? el("div", { class: "mrow-a bad" }, icon("x"), isLatin(res.user) ? deSpan(res.user) : el("span", null, res.user)) : null,
    res.correct ? el("div", { class: "mrow-a good" }, icon("check"), isLatin(res.correct) ? renderLabel(res.correct) : el("span", { html: fmt(res.correct) })) : null,
    res.why ? el("p", { class: "muted sm", html: fmt(res.why) }) : null);
}
function fmtAI(t) {
  return esc(t).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/^#+\s*(.+)$/gm, "<b>$1</b>").replace(/\n/g, "<br>");
}

/* ---------- flashcards ---------- */
const Flash = {
  start(words, o = {}) {
    if (!words.length) { UI.toast("لا توجد بطاقات الآن", "info"); return; }
    let queue = words.slice(); let i = 0, flipped = false; const rated = {}; let seen = 0;
    const wrap = el("div", { class: "session flash" });
    const counter = el("small", { class: "muted" });
    const prog = bar(0, "thin");
    const card = el("div", { class: "fcard", tabindex: "0", role: "button", "aria-label": "اقلب البطاقة" });
    const rateRow = el("div", { class: "rate", hidden: true },
      btn("لم أعرفها", { kind: "bad", on: () => rate(0) }), btn("صعبة", { kind: "ghost", on: () => rate(1) }), btn("عرفتها", { kind: "good", on: () => rate(2) }));
    const flipB = btn("اقلب البطاقة", { kind: "primary", cls: "wide", on: () => flip() });
    const foot = el("div", { class: "s-foot" }, flipB, rateRow);
    wrap.append(ovHeader(o.title || "بطاقات المفردات", "استمع، تذكّر المعنى، ثم اقلب", { right: counter }), prog, el("div", { class: "s-body" }, card), foot);
    const onKey = (e) => { if ($("#overlay").hidden) return; if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (!flipped) flip(); } else if (flipped && ["1", "2", "3"].includes(e.key)) rate(+e.key - 1); };
    document.addEventListener("keydown", onKey);
    Overlay.open(wrap, () => { document.removeEventListener("keydown", onKey); o.onFinish && o.onFinish({ seen, rated }); });
    const draw = () => {
      const w = queue[i]; flipped = false;
      counter.textContent = Math.min(i + 1, queue.length) + " من " + queue.length;
      prog.firstChild.style.width = Math.round(i / queue.length * 100) + "%";
      clear(card).append(
        el("div", { class: "fc-type" }, { n: "اسم", v: "فعل", a: "صفة", d: "ظرف", q: "أداة سؤال", p: "حرف / أداة", x: "عبارة", c: "بلد / لغة" }[w.t] || ""),
        el("div", { class: "fc-word" }, w.t === "n" && w.art ? el("span", { class: ART_CLASS[w.art] || "" }, w.art + " ") : null, deSpan(w.w)),
        el("div", { class: "row center" }, playBtn(wordLabel(w)), playBtn(wordLabel(w), { slow: true })),
        el("div", { class: "fc-back", hidden: true },
          el("div", { class: "fc-ar" }, w.ar),
          w.pl && w.pl !== w.w ? el("div", { class: "fc-pl" }, "الجمع: ", deSpan("die " + w.pl)) : w.p === "Sg." ? el("div", { class: "fc-pl muted" }, "بدون جمع") : w.t !== "n" && w.p ? el("div", { class: "fc-pl" }, deSpan(w.p)) : null,
          w.ex ? el("div", { class: "fc-ex" }, el("div", { class: "row" }, deSpan(w.ex), playBtn(w.ex, { small: true })), el("small", { class: "muted" }, w.exAr)) : null));
      rateRow.hidden = true; flipB.hidden = false;
      setTimeout(() => TTS.speak(wordLabel(w)), 200);
    };
    const flip = () => { if (flipped) return; flipped = true; $(".fc-back", card).hidden = false; rateRow.hidden = false; flipB.hidden = true; card.classList.add("flipped"); };
    card.addEventListener("click", (e) => { if (e.target.closest("button")) return; flip(); });
    const rate = (r) => {
      const w = queue[i]; srsRate(w.id, r); rated[w.id] = r; seen++;
      if (r === 0 && queue.slice(i + 1).indexOf(w) < 0) queue.splice(Math.min(queue.length, i + 4), 0, w);
      i++;
      if (i >= queue.length) return done();
      draw();
    };
    const done = () => {
      document.removeEventListener("keydown", onKey);
      const known = Object.values(rated).filter((r) => r === 2).length;
      clear(wrap).append(ovHeader(o.title || "بطاقات", null),
        el("div", { class: "result" }, ring(known / Math.max(1, Object.keys(rated).length), 120, 10, known + "/" + Object.keys(rated).length), el("h2", null, "أنهيت البطاقات!"), el("p", { class: "muted" }, "الكلمات التي لم تعرفها ستعود إليك قريبًا في المراجعة الذكية.")),
        el("div", { class: "s-foot sticky" }, o.quiz ? btn("تمرين على هذه الكلمات", { kind: "ghost", icon: "pencil", on: () => { Overlay.close(); setTimeout(() => o.quiz(), 50); } }) : null, btn("إنهاء", { kind: "primary", cls: "wide", on: () => Overlay.close() })));
    };
    draw();
  }
};

/* ================= PRACTICE: dialogues, pronunciation, AI tutor, writing ================= */
const MODES = { choose: "اختيار", build: "ترتيب", type: "كتابة حرة" };
const MODE_ORDER = ["choose", "build", "type"];
const MODE_DESC = { choose: "اختر الرد الصحيح من ثلاثة خيارات", build: "رتّب كلمات الرد بنفسك", type: "اكتب ردك بالألمانية بحرية" };

const Dialog = {
  recommend(uid) {
    const d = S.dlg[uid];
    if (d && d.mode) { const k = MODE_ORDER.indexOf(d.mode); if ((d.lastScore || 0) >= 80 && k < 2) return MODE_ORDER[k + 1]; return d.mode; }
    const m = mastery("dialog");
    return m >= 0.8 ? "type" : m >= 0.62 ? "build" : "choose";
  },
  start(u, mode) {
    const D = u.dialog; mode = mode || this.recommend(u.id);
    const userTurns = D.lines.filter((l) => l.s === "U").length;
    const st = { i: 0, good: 0, turn: 0, transcript: [] };
    const wrap = el("div", { class: "session dlg" });
    const log = el("div", { class: "dlg-log" });
    const panel = el("div", { class: "dlg-panel" });
    wrap.append(ovHeader(D.title ? deSpan(D.title) : "حوار", MODES[mode] + " · " + D.ar, { right: el("span", { class: "chip" }, MODES[mode]) }),
      el("div", { class: "scene" }, icon("info"), el("span", null, D.scene)), log, panel);
    Overlay.open(wrap);
    const pitch = (s) => (s === "B" ? 1.18 : 0.98);
    const addPartner = (ln) => {
      const tr = el("div", { class: "b-tr", hidden: true }, ln.ar || "");
      const b = el("div", { class: "bub them" },
        el("small", { class: "who" }, (D.who && D.who[ln.s]) || "Partner"),
        el("div", { class: "b-de" }, deSpan(ln.de)),
        tr,
        el("div", { class: "b-tools" }, playBtn(ln.de, { small: true }), el("button", { class: "icon-btn sm", type: "button", "aria-label": "الترجمة", title: "الترجمة", onclick: () => (tr.hidden = !tr.hidden) }, icon("globe"))));
      log.appendChild(b); st.transcript.push({ text: ln.de, pitch: pitch(ln.s) });
      b.scrollIntoView({ block: "end", behavior: "smooth" });
      return TTS.speak(ln.de, { pitch: pitch(ln.s) });
    };
    const addMine = (text, ok) => {
      const b = el("div", { class: "bub me " + (ok ? "ok" : "no") }, el("small", { class: "who" }, "أنت"), el("div", { class: "b-de" }, deSpan(text)), el("span", { class: "b-st" }, icon(ok ? "check" : "x")));
      log.appendChild(b); b.scrollIntoView({ block: "end", behavior: "smooth" }); return b;
    };
    const step = async () => {
      clear(panel);
      if (st.i >= D.lines.length) return end();
      const ln = D.lines[st.i];
      if (ln.s !== "U") { await addPartner(ln); st.i++; setTimeout(step, 300); return; }
      userTurn(ln);
    };
    const prevLine = (i) => { for (let k = i - 1; k >= 0; k--) if (D.lines[k].s !== "U") return D.lines[k].de; return ""; };
    const userTurn = (ln) => {
      st.turn++;
      const task = el("div", { class: "task" }, el("b", null, "دورك (" + st.turn + "/" + userTurns + "): "), ln.task);
      panel.appendChild(task);
      const model = fillPH(ln.m);
      let attempts = 0;
      const resolve = async (text, ok, extra = {}) => {
        attempts++;
        if (attempts === 1) { if (ok) st.good++; recordAnswer({ id: u.id + ":d" + st.i, tag: "dialog" }, ok); (extra.tags || []).forEach((t) => C.tags[t] && recordAnswer({ tag: t }, false)); }
        addMine(text, ok);
        clear(panel);
        const fb = el("div", { class: "fb " + (ok ? "ok" : "no") });
        fb.appendChild(el("div", { class: "fb-h" }, icon(ok ? "check" : "x"), el("b", null, ok ? pick(["أحسنت!", "Sehr gut!", "رد ممتاز!", "صحيح!"]) : "يمكن أن يكون أفضل")));
        if (extra.why) fb.appendChild(el("p", { class: "fb-why", html: fmt(extra.why) }));
        if (!ok || extra.corrected) fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, ok ? "الصيغة المصححة: " : "الرد الصحيح: "), deSpan(extra.corrected || model), playBtn(extra.corrected || model, { small: true })));
        const alts = uniq([extra.natural].concat((ln.ok || []).filter((p) => !p.includes("*")).map(fillPH)).filter(Boolean)).filter((a) => canon(a) !== canon(text)).slice(0, 2);
        if (ok && canon(text) !== canon(model)) alts.unshift(model);
        if (alts.length) fb.appendChild(el("div", { class: "fb-r" }, el("span", { class: "muted" }, "صيغ طبيعية أخرى: "), el("span", null, uniq(alts).slice(0, 2).map((a, k) => [k ? " · " : "", deSpan(a)]))));
        fb.appendChild(el("p", { class: "muted sm" }, "المعنى: " + (ln.ar || "")));
        const row = el("div", { class: "row end" });
        if (!ok && attempts < 2) row.appendChild(btn("حاول مرة أخرى", { kind: "ghost", icon: "review", on: () => { clear(panel); panel.appendChild(task); input(); } }));
        row.appendChild(btn("تابع", { kind: "primary", icon: "next", on: () => { st.i++; step(); } }));
        fb.appendChild(row);
        panel.appendChild(fb);
        fb.scrollIntoView({ block: "end", behavior: "smooth" });
      };
      const input = () => {
        if (mode === "choose") {
          const order = shuffle(ln.o.map((t, i) => i));
          const box = el("div", { class: "opts" });
          order.forEach((i) => { const b = el("button", { class: "opt", type: "button", dir: "ltr" }, deSpan(ln.o[i])); b.onclick = () => resolve(fillPH(ln.o[i]), i === 0, { why: i === 0 ? null : (ln.why && ln.why[i]) || null }); box.appendChild(b); });
          panel.appendChild(box);
        } else if (mode === "build") {
          let base = model.replace(/[.!?]+$/, ""); const end = (model.match(/[.!?]+$/) || [""])[0];
          const toks = base.split(/\s+/);
          const extraTok = uniq((fillPH(ln.o[1] || "")).replace(/[.!?,]/g, "").split(/\s+/).filter((w) => !toks.map(canon).includes(canon(w)))).slice(0, 2);
          let pool = shuffle(toks.concat(extraTok).map((t, i) => ({ t, i })));
          const built = [];
          const line = el("div", { class: "order-line", dir: "ltr", lang: "de" }), poolEl = el("div", { class: "order-pool", dir: "ltr", lang: "de" });
          const send = btn("أرسل", { kind: "primary", icon: "next", disabled: true });
          const draw = () => {
            clear(line); clear(poolEl);
            if (!built.length) line.appendChild(el("span", { class: "muted ph", dir: "rtl" }, "اضغط الكلمات بالترتيب (هناك كلمات زائدة)"));
            built.forEach((p, k) => { const c = el("button", { class: "tok in", type: "button" }, p.t.replace(/,$/, "")); c.onclick = () => { built.splice(k, 1); pool.push(p); draw(); }; line.appendChild(c); });
            pool.forEach((p, k) => { const c = el("button", { class: "tok", type: "button" }, p.t.replace(/,$/, "")); c.onclick = () => { pool.splice(k, 1); built.push(p); draw(); }; poolEl.appendChild(c); });
            send.disabled = built.length === 0;
          };
          draw();
          send.onclick = () => { const s = built.map((p) => p.t).join(" ") + end; const ok = canon(s) === canon(model) || (ln.ok || []).some((p) => !p.includes("*") && canon(fillPH(p)) === canon(s)); resolve(s, ok, { why: ok ? null : "قارن ترتيب الكلمات بالرد الصحيح: الفعل المصرّف في المكان الثاني." }); };
          panel.append(line, poolEl, el("div", { class: "row end" }, send));
        } else {
          const inp = deInput({ ph: "اكتب ردك بالألمانية…" });
          const send = btn("أرسل", { kind: "primary", icon: "next", disabled: true });
          inp.addEventListener("input", () => (send.disabled = !inp.value.trim()));
          inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !send.disabled) send.click(); });
          const hint = el("button", { class: "btn ghost sm", type: "button" }, icon("bulb"), el("span", null, "تلميح"));
          hint.onclick = () => { hint.replaceWith(el("span", { class: "muted sm" }, "يبدأ الرد بـ: ", deSpan(model.split(/\s+/).slice(0, 2).join(" ") + " …"))); };
          send.onclick = async () => {
            const text = inp.value.trim(); send.disabled = true; inp.disabled = true;
            const j = judgePatterns(text, ln.ok, ln.m);
            const needAI = AI.available() && S.settings.aiCheck && (!j.ok || j.level === "pattern" || j.level === "close");
            if (needAI) {
              const wait = el("p", { class: "muted thinking" }, icon("sparkle"), el("span", null, "المدرّس الذكي يراجع ردّك…"));
              panel.appendChild(wait);
              try {
                const r = await AI.checkReply({ scene: D.scene, prev: prevLine(st.i), task: ln.task, model, input: text });
                wait.remove();
                if (r && typeof r.ok === "boolean") return resolve(text, r.ok, { why: r.explain_ar, corrected: r.ok ? (canon(r.corrected || "") !== canon(text) ? r.corrected : null) : r.corrected, natural: r.natural, tags: r.tags });
              } catch (e) { wait.remove(); const m = AI.errText(e); if (m) UI.toast(m, "warn"); }
            }
            resolve(text, j.ok, { why: j.ok ? (j.level === "close" ? "قريب جدًا من الصيغة الصحيحة — قارن الكتابة." : null) : "ردّك لا يطابق المطلوب. انظر الرد الصحيح واستمع إليه، ثم حاول مرة أخرى." });
          };
          panel.append(inp, umlautBar(() => inp), el("div", { class: "row between" }, hint, send));
          setTimeout(() => inp.focus({ preventScroll: true }), 100);
        }
      };
      input();
      st.transcript.push({ text: model, pitch: 1.05 });
      panel.scrollIntoView({ block: "end" });
    };
    const end = () => {
      const pct = userTurns ? Math.round(st.good / userTurns * 100) : 100;
      const d = S.dlg[u.id] || { n: 0, best: 0 };
      d.n = (d.n || 0) + 1; d.best = Math.max(d.best || 0, pct); d.mode = mode; d.lastScore = pct; d.ts = Date.now(); S.dlg[u.id] = d;
      markStep(u.id, "d", { score: Math.max(pct, (unitP(u.id).d && unitP(u.id).d.score) || 0), mode });
      clear(panel);
      const nextMode = MODE_ORDER[Math.min(2, MODE_ORDER.indexOf(mode) + 1)];
      panel.appendChild(el("div", { class: "result small" },
        ring(pct / 100, 96, 9, pct + "%"),
        el("h3", null, pct >= 80 ? "حوار رائع!" : pct >= 50 ? "جيد! تدرّب مرة أخرى لتتقنه." : "أعد الحوار، ستتحسّن بسرعة."),
        pct >= 80 && mode !== "type" ? el("p", { class: "muted" }, "مستواك يسمح بالانتقال إلى وضع: " + MODES[nextMode]) : null,
        el("div", { class: "row center wrap" },
          btn("استمع للحوار كاملًا", { kind: "ghost", icon: "volume", on: () => TTS.sequence(dialogScript(D)) }),
          btn("أعد الحوار", { kind: "ghost", icon: "review", on: () => { Overlay.close(); setTimeout(() => Dialog.start(u, mode), 50); } }),
          mode !== "type" ? btn("مستوى أصعب: " + MODES[nextMode], { kind: "primary", icon: "next", on: () => { Overlay.close(); setTimeout(() => Dialog.start(u, nextMode), 50); } }) : null,
          AI.available() && LESSON[u.lesson].tutor ? btn("محادثة حرة مع المدرّس", { kind: "accent", icon: "sparkle", on: () => { Overlay.close(); setTimeout(() => Tutor.chat(LESSON[u.lesson].tutor[u.index % LESSON[u.lesson].tutor.length]), 50); } }) : null)));
      panel.scrollIntoView({ block: "end", behavior: "smooth" });
    };
    step();
  }
};
function dialogScript(D) { return D.lines.map((l) => ({ text: l.s === "U" ? fillPH(l.m) : l.de, pitch: l.s === "U" ? 1.05 : l.s === "B" ? 1.18 : 0.98 })); }

/* ---------- pronunciation practice ---------- */
const Pron = {
  list(sentences, o = {}) {
    const box = el("div", { class: "pron" });
    if (!SR.Ctor) box.appendChild(el("p", { class: "note" }, icon("info"), el("span", null, "تقييم النطق بالميكروفون يعمل في متصفح Chrome. هنا: استمع ثم كرّر بصوت عالٍ وقيّم نفسك.")));
    else if (HAS_CLAUDE) box.appendChild(el("p", { class: "note" }, icon("info"), el("span", null, "الميكروفون قد يكون محجوبًا داخل هذه الصفحة. إن لم يعمل، استعمل النسخة المثبّتة من التطبيق في Chrome لتقييم نطقك تلقائيًا، أو قيّم نفسك هنا.")));
    const auto = btn("ترديد تلقائي (استمع وكرّر)", { kind: "ghost", icon: "play", cls: "sm" });
    auto.onclick = async () => {
      if (auto.dataset.on) { TTS.stop(); delete auto.dataset.on; auto.lastChild.textContent = "ترديد تلقائي (استمع وكرّر)"; return; }
      auto.dataset.on = "1"; auto.lastChild.textContent = "إيقاف";
      for (const s of sentences) {
        if (!auto.dataset.on) break;
        await TTS.speak(s, { keep: true });
        await new Promise((r) => setTimeout(r, 900 + s.split(" ").length * 550));
      }
      delete auto.dataset.on; auto.lastChild.textContent = "ترديد تلقائي (استمع وكرّر)";
    };
    box.appendChild(el("div", { class: "row end" }, auto));
    sentences.forEach((s, k) => box.appendChild(this.row(s, o.idPrefix ? o.idPrefix + k : null, o.onPractice)));
    return box;
  },
  row(text, id, onPractice) {
    const res = el("div", { class: "pr-res", hidden: true });
    const mic = el("button", { class: "icon-btn mic", type: "button", "aria-label": "سجّل نطقك", title: "سجّل نطقك" }, icon("mic"));
    const rec = (ok, score) => { recordAnswer({ id: null, tag: "sprechen" }, ok); onPractice && onPractice(); };
    mic.onclick = () => {
      if (!SR.available()) { showSelf("التعرّف على الصوت غير متاح هنا. استمع، كرّر بصوت عالٍ، ثم قيّم نفسك:"); return; }
      res.hidden = false; clear(res).appendChild(el("p", { class: "muted thinking" }, icon("mic"), el("span", null, "تكلّم الآن…")));
      mic.classList.add("rec");
      let settled = false;
      const recog = SR.listen((alts) => {
        settled = true;
        mic.classList.remove("rec");
        const b = SR.score(alts, text); const pct = Math.round(b.s * 100);
        clear(res);
        const diff = wordDiff(b.text, text);
        const d = el("div", { class: "diff", dir: "ltr", lang: "de" }); diff.forEach((p) => d.appendChild(el("span", { class: p.ok ? "dw ok" : "dw no" }, p.w + " ")));
        res.append(el("div", { class: "row" }, el("b", { class: pct >= 85 ? "t-ok" : pct >= 65 ? "t-mid" : "t-no" }, pct + "%"), el("span", null, pct >= 85 ? "نطق ممتاز!" : pct >= 65 ? "جيد — انتبه للكلمات بالأحمر." : "حاول مرة أخرى ببطء.")),
          el("p", { class: "muted sm" }, "سمعتُ: ", deSpan(b.text || "—")), d, tipsFor(diff.filter((p) => !p.ok).map((p) => p.w)));
        rec(pct >= 75, pct);
      }, (err) => {
        if (settled) return; settled = true;
        mic.classList.remove("rec");
        if (err === "no-speech") { clear(res).appendChild(el("p", { class: "muted" }, "لم أسمع شيئًا. اضغط الميكروفون وتكلّم بوضوح.")); return; }
        showSelf(err === "not-allowed" || err === "service-not-allowed" ? "الميكروفون محجوب هنا. لتقييم نطقك تلقائيًا استعمل التطبيق المثبّت في Chrome واسمح بالميكروفون. الآن قيّم نفسك:" : "تعذّر استعمال الميكروفون. قيّم نفسك:");
      });
      setTimeout(() => { if (settled) return; settled = true; try { recog && recog.abort(); } catch (e) { } mic.classList.remove("rec"); showSelf("لم يصل أي صوت من الميكروفون. تحقّق من الإذن أو قيّم نفسك:"); }, 10000);
    };
    const showSelf = (msg) => {
      res.hidden = false; clear(res).append(el("p", { class: "muted sm" }, msg),
        el("div", { class: "row" }, btn("نطقتها جيدًا", { kind: "good", cls: "sm", on: () => { rec(true); clear(res).appendChild(el("p", { class: "t-ok" }, "رائع! واصل.")); } }), btn("أحتاج تدريبًا", { kind: "ghost", cls: "sm", on: () => { rec(false); TTS.speak(text, { slow: true }); clear(res).appendChild(el("p", { class: "muted" }, "استمع ببطء وكرّر مقطعًا مقطعًا.")); } })));
    };
    return el("div", { class: "pr-row" }, el("div", { class: "pr-top" }, deSpan(text, "pr-t"), el("div", { class: "pr-b" }, playBtn(text), playBtn(text, { slow: true }), mic)), res);
  }
};
function tipsFor(words) {
  const tips = [];
  const w = words.join(" ").toLowerCase();
  if (/ü/.test(w)) tips.push("ü: قل «إي» مع تدوير الشفتين.");
  if (/ö/.test(w)) tips.push("ö: قل «إيه» مع تدوير الشفتين.");
  if (/ch/.test(w)) tips.push("ch: بعد a/o/u = «خ»، وبعد e/i = صوت ناعم بين «هـ» و«ي».");
  if (/r/.test(w)) tips.push("r: من الحلق، خفيفة كـ«غ»؛ و‑er في الآخر ≈ «ا».");
  if (/p/.test(w)) tips.push("p: بدون اهتزاز الحنجرة ومع نفخة هواء — ليست b.");
  if (/w/.test(w)) tips.push("w = ڤ (v): الشفة السفلى على الأسنان مع اهتزاز.");
  if (/z/.test(w)) tips.push("z = «تس».");
  if (/ei|ie/.test(w)) tips.push("ei = «آي»، ie = «إي» طويلة.");
  if (/(sp|st)/.test(w)) tips.push("sp/st في بداية الكلمة = «شپ/شت».");
  return tips.length ? el("ul", { class: "tips" }, tips.slice(0, 3).map((t) => el("li", null, t))) : null;
}

/* ---------- AI tutor chat ---------- */
const Tutor = {
  chat(sc) {
    if (!AI.available()) { UI.toast("المدرّس الذكي غير متاح في هذه النسخة", "warn"); return; }
    const turns = [{ role: "assistant", content: sc.start }];
    const wrap = el("div", { class: "session dlg chat" });
    const logEl = el("div", { class: "dlg-log" });
    const inp = deInput({ ph: "اكتب بالألمانية…" });
    const send = btn("أرسل", { kind: "primary", icon: "next", disabled: true });
    inp.addEventListener("input", () => (send.disabled = !inp.value.trim()));
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !send.disabled) send.click(); });
    const panel = el("div", { class: "dlg-panel" }, inp, umlautBar(() => inp), el("div", { class: "row between" }, el("small", { class: "muted" }, "اكتب جملًا قصيرة. سيصحّح المدرّس كل رسالة."), send));
    wrap.append(ovHeader(sc.title, sc.ar + " · محادثة حرة", { right: el("span", { class: "chip ai" }, icon("sparkle"), "AI") }),
      el("div", { class: "scene" }, icon("info"), el("span", null, "المدرّس يلعب دور: " + sc.ar + ". تكلّم معه بالألمانية؛ سيرد بمستواك ويصحّح أخطاءك بالعربية.")), logEl, panel);
    Overlay.open(wrap);
    const tutorBubble = (de, ar) => {
      const tr = el("div", { class: "b-tr", hidden: true }, ar || "");
      const b = el("div", { class: "bub them" }, el("small", { class: "who" }, "المدرّس"), el("div", { class: "b-de" }, deSpan(de)), tr,
        el("div", { class: "b-tools" }, playBtn(de, { small: true }), ar ? el("button", { class: "icon-btn sm", type: "button", "aria-label": "الترجمة", onclick: () => (tr.hidden = !tr.hidden) }, icon("globe")) : null));
      logEl.appendChild(b); b.scrollIntoView({ block: "end", behavior: "smooth" }); TTS.speak(de);
    };
    tutorBubble(sc.start, "");
    send.onclick = async () => {
      const text = inp.value.trim(); if (!text) return;
      inp.value = ""; send.disabled = true; inp.disabled = true;
      const mine = el("div", { class: "bub me" }, el("small", { class: "who" }, "أنت"), el("div", { class: "b-de" }, deSpan(text)));
      logEl.appendChild(mine);
      turns.push({ role: "user", content: text });
      const wait = el("p", { class: "muted thinking" }, icon("sparkle"), el("span", null, "المدرّس يكتب…"));
      logEl.appendChild(wait); wait.scrollIntoView({ block: "end" });
      try {
        const keep = turns.length > 16 ? [turns[0]].concat(turns.slice(-14)) : turns;
        const r = await AI.chat(sc, keep);
        wait.remove();
        if (r && r.reply) {
          const ok = r.ok !== false;
          mine.classList.add(ok ? "ok" : "no");
          mine.appendChild(el("span", { class: "b-st" }, icon(ok ? "check" : "x")));
          if (!ok || (r.corrected && canon(r.corrected) !== canon(text))) mine.appendChild(el("div", { class: "b-fix" }, el("small", { class: "muted" }, "التصحيح: "), deSpan(r.corrected || ""), playBtn(r.corrected || "", { small: true })));
          if (r.explain_ar) mine.appendChild(el("div", { class: "b-ex" }, r.explain_ar));
          if (r.tip_ar) mine.appendChild(el("div", { class: "b-ex tip" }, icon("bulb"), r.tip_ar));
          recordAnswer({ id: null, tag: "dialog" }, ok);
          turns.push({ role: "assistant", content: r.reply });
          tutorBubble(r.reply, r.reply_ar);
        } else throw { code: "invalid_json" };
      } catch (e) { wait.remove(); turns.pop(); const m = AI.errText(e); logEl.appendChild(el("p", { class: "note" }, icon("warn"), el("span", null, m || "تعذّر الرد."))); }
      inp.disabled = false; inp.focus({ preventScroll: true });
    };
    setTimeout(() => inp.focus({ preventScroll: true }), 200);
  },
  ask(prefill) {
    if (!AI.available()) { UI.toast("المدرّس الذكي غير متاح في هذه النسخة", "warn"); return; }
    const q = el("textarea", { class: "inp", rows: 3, placeholder: "اكتب سؤالك بالعربية… مثال: متى أستعمل nicht ومتى kein؟", id: "askQ" });
    if (prefill) q.value = prefill;
    const out = el("div", { class: "ai-out big" });
    let ctl = null;
    const go = btn("اسأل", { kind: "primary", icon: "sparkle" });
    const stop = btn("إيقاف", { kind: "ghost", icon: "stop" }); stop.hidden = true;
    go.onclick = async () => {
      if (!q.value.trim()) return;
      ctl = new AbortController(); go.disabled = true; stop.hidden = false; out.textContent = "المدرّس يفكّر…";
      try { await AI.ask(q.value.trim(), ({ text }) => { out.innerHTML = fmtAI(text); }, ctl.signal); }
      catch (e) { const m = AI.errText(e); if (m) out.textContent = m; }
      go.disabled = false; stop.hidden = true;
    };
    stop.onclick = () => ctl && ctl.abort();
    const wrap = el("div", { class: "session" }, ovHeader("اسأل المدرّس", "أي سؤال عن القواعد أو المفردات أو النطق"),
      el("div", { class: "s-body" }, q, el("div", { class: "row end" }, stop, go), out));
    Overlay.open(wrap);
    if (prefill) go.click(); else setTimeout(() => q.focus(), 150);
  }
};

/* ---------- writing tasks ---------- */
const Writing = {
  start(L, k) {
    const task = L.write[k]; const lp = lessonP(L.id); lp.write = lp.write || {};
    const prev = lp.write[k] || {};
    const ta = deInput({ area: true, rows: 9, ph: "اكتب نصّك هنا بالألمانية…" });
    ta.value = prev.text || "";
    const count = el("small", { class: "muted" });
    const upd = () => { const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; count.textContent = n + " كلمة"; };
    ta.addEventListener("input", debounce(() => { upd(); lp.write[k] = Object.assign({}, lp.write[k], { text: ta.value }); save(); }, 400)); upd();
    const out = el("div", { class: "wr-out" });
    const checks = el("ul", { class: "checklist" }, task.check.map((c, i) => { const id = "wc" + L.id + "_" + k + "_" + i; return el("li", null, el("input", { type: "checkbox", id }), el("label", { for: id }, c)); }));
    const model = el("div", { class: "model", hidden: true }, el("div", { class: "row between" }, el("b", null, "نص نموذجي"), playBtn(task.model.replace(/\n/g, " "))), el("div", { class: "read-t", dir: "ltr", lang: "de", html: esc(fillPH(task.model)).replace(/\n/g, "<br>") }));
    const aiB = AI.available() ? btn("صحّح نصّي (المدرّس الذكي)", { kind: "accent", icon: "sparkle" }) : null;
    if (aiB) aiB.onclick = async () => {
      if (ta.value.trim().split(/\s+/).length < 5) { UI.toast("اكتب 5 كلمات على الأقل", "info"); return; }
      aiB.disabled = true; clear(out).appendChild(el("p", { class: "muted thinking" }, icon("sparkle"), el("span", null, "المدرّس يقرأ نصّك… (قد يستغرق دقيقة)")));
      try {
        const r = await AI.correctWriting(task, ta.value);
        clear(out);
        if (r && r.corrected) {
          const sc = clamp(+r.score || 0, 0, 10);
          out.append(el("div", { class: "row" }, ring(sc / 10, 72, 7, sc + "/10"), el("div", null, el("b", null, "تقييم المدرّس"), r.good_ar ? el("p", { class: "muted" }, r.good_ar) : null)),
            el("h4", null, "النص المصحح"), el("div", { class: "read-t", dir: "ltr", lang: "de" }, r.corrected),
            (r.mistakes || []).length ? el("div", { class: "mistakes" }, (r.mistakes || []).map((m) => el("div", { class: "mrow" }, el("div", { class: "mrow-a bad" }, icon("x"), deSpan(m.wrong || "")), el("div", { class: "mrow-a good" }, icon("check"), deSpan(m.right || "")), m.why_ar ? el("p", { class: "muted sm" }, m.why_ar) : null))) : null,
            r.next_ar ? el("p", { class: "note" }, icon("bulb"), el("span", null, r.next_ar)) : null);
          lp.write[k] = Object.assign({}, lp.write[k], { text: ta.value, score: sc, ts: Date.now() });
          recordAnswer({ id: null, tag: "schreiben" }, sc >= 7);
          save();
        } else throw { code: "invalid_json" };
      } catch (e) { clear(out).appendChild(el("p", { class: "note" }, icon("warn"), el("span", null, AI.errText(e) || "تعذّر التصحيح."))); }
      aiB.disabled = false;
    };
    const doneB = btn("أنهيت المهمة", { kind: "primary", icon: "check", on: () => { lp.write[k] = Object.assign({}, lp.write[k], { text: ta.value, done: Date.now() }); if (!lp.write[k].score) recordAnswer({ id: null, tag: "schreiben" }, $$("input[type=checkbox]", checks).filter((c) => c.checked).length >= task.check.length - 1); save(); UI.toast("تم حفظ نصّك"); Overlay.close(); UI.refresh(); } });
    const wrap = el("div", { class: "session" }, ovHeader("مهمة كتابة", "الدرس " + L.id + " · " + L.de),
      el("div", { class: "s-body" },
        el("p", { class: "q" }, task.ar), el("p", { class: "muted" }, deSpan(task.de)),
        ta, el("div", { class: "row between" }, umlautBar(() => ta), count),
        el("details", { class: "box" }, el("summary", null, "قائمة التحقق — راجع نصك بنفسك"), checks),
        out, model,
        el("div", { class: "row wrap end" }, btn("اعرض النص النموذجي", { kind: "ghost", icon: "eye", on: () => (model.hidden = !model.hidden) }), aiB, doneB),
        !AI.available() ? el("p", { class: "muted sm" }, "التصحيح الذكي متاح عندما تفتح التطبيق داخل Claude. هنا يمكنك المقارنة مع النص النموذجي وقائمة التحقق.") : null));
    Overlay.open(wrap);
  }
};

/* ================= VIEWS (1): home, course, lesson, unit, phonetics ================= */
const VIEWS = {};

function greeting() {
  const h = new Date().getHours();
  const g = h < 5 ? "ليلة سعيدة" : h < 12 ? "صباح الخير" : h < 18 ? "مساء الخير" : "مساء النور";
  return g + (S.profile.name ? " يا " + S.profile.name : "");
}
function planFor(u) {
  const f = (S.settings.goalMin || 60) / 60;
  const parts = [
    { k: "rv", ar: "المراجعة الذكية", min: 8, ic: "review" },
    { k: "g", ar: "الشرح والقواعد", min: 10, ic: "book" },
    { k: "v", ar: "المفردات", min: 12, ic: "cards" },
    { k: "e", ar: "التمارين", min: 10, ic: "pencil" },
    { k: "d", ar: "الحوار", min: 8, ic: "chat" },
    { k: "l", ar: "الاستماع والنطق", min: 7, ic: "ear" },
    { k: "q", ar: "اختبار الوحدة", min: 5, ic: "flag" }
  ];
  const [hh, mm] = (S.settings.studyTime || "19:00").split(":").map(Number);
  let t = hh * 60 + mm;
  const L = S.log[dayKey()] || {};
  return parts.map((p) => {
    const row = Object.assign({}, p, { at: pad2(Math.floor(t / 60) % 24) + ":" + pad2(t % 60) });
    t += Math.max(2, Math.round(p.min * f));
    row.done = p.k === "rv" ? !!L.rv || (!dueWords().length && !dueMistakes().length) : p.k === "l" ? stepDone(u.id, "l") && stepDone(u.id, "s") : stepDone(u.id, p.k);
    return row;
  });
}
function startToday() {
  const u = nextUnit();
  if (!u) { UI.go("exam"); return; }
  const L = S.log[dayKey()] || {};
  if (!L.rv && (dueWords().length || dueMistakes().length)) { startDailyReview(); return; }
  const k = STEPS.find((s) => !stepDone(u.id, s.k));
  UI.go("unit", { id: u.id, step: k ? k.k : "g" });
}
function startDailyReview() {
  const words = dueWords().slice(0, 20);
  const mist = dueMistakes().slice(0, 10).map(getItem).filter(Boolean);
  const after = () => {
    const weakTags = Object.keys(S.tags).filter((t) => S.tags[t][0] >= 4).sort((a, b) => S.tags[a][2] - S.tags[b][2]).slice(0, 2);
    const extra = weakTags.flatMap((t) => practiceItemsForTag(t, 3));
    const items = shuffle(mist.concat(extra)).slice(0, 14);
    if (items.length) Session.start({ title: "المراجعة اليومية", sub: "أخطاؤك السابقة ونقاط ضعفك", items, onFinish: () => { todayLog().rv = 1; save(); } });
    else { todayLog().rv = 1; save(); UI.refresh(); }
  };
  if (words.length) Flash.start(words, { title: "مراجعة الكلمات المستحقة", onFinish: () => setTimeout(after, 80) });
  else after();
}
function practiceItemsForTag(tag, n) {
  const started = UNITS.filter((u) => S.progress.units[u.id]);
  const pool = (started.length ? started : UNITS.slice(0, 3)).flatMap((u) => u.ex.concat(u.listen)).filter((x) => x.tag === tag && x.t !== "read");
  let items = sample(pool, n);
  if (items.length < n && ["wortschatz", "artikel", "plural", "hoeren"].includes(tag)) {
    const words = (started.length ? started : UNITS.slice(0, 3)).flatMap((u) => u.words);
    const kind = { artikel: "art", plural: "plural", hoeren: "listen", wortschatz: "de2ar" }[tag];
    items = items.concat(shuffle(words.filter((w) => kind !== "art" || canArt(w)).filter((w) => kind !== "plural" || (w.pl && w.pl !== w.w))).slice(0, n - items.length).map((w) => genVocab(w, kind)));
  }
  return items.filter(Boolean);
}

/* ---------- HOME ---------- */
VIEWS.home = () => {
  const root = el("div", { class: "page home" });
  const L = S.log[dayKey()] || { s: 0, x: 0, k: 0 };
  const mins = Math.floor(L.s / 60), goal = S.settings.goalMin || 60;
  const u = nextUnit();
  if (!S.profile.onboarded) root.appendChild(onboardingCard());
  root.appendChild(el("section", { class: "hero" },
    el("div", { class: "hero-t" },
      el("p", { class: "muted" }, arDate()),
      el("h1", null, greeting()),
      el("p", { class: "lead" }, u ? [el("span", null, "درس اليوم: الدرس " + u.lesson + "، الوحدة "), el("span", { class: "u-id" }, u.id), " ", deSpan(u.de)] : "أنهيت كل دروس الكتاب! تدرّب على امتحان Start Deutsch 1."),
      el("div", { class: "row wrap" }, btn(mins > 0 ? "تابع درس اليوم" : "ابدأ درس اليوم", { kind: "accent", icon: "play", on: startToday }), el("span", { class: "chip lvl" }, "المستوى: " + levelLabel()))),
    el("div", { class: "hero-ring" }, ring(mins / goal, 132, 12, mins + "′"), el("small", { class: "muted" }, "من " + goal + " دقيقة اليوم"))));

  const st = streak();
  root.appendChild(el("div", { class: "tiles" },
    tile("flame", st, st === 1 ? "يوم متتالٍ" : "أيام متتالية", st >= 3 ? "hot" : ""),
    tile("cards", dueWords().length, "كلمات للمراجعة"),
    tile("review", dueMistakes().length, "أخطاء للتصحيح"),
    tile("check", L.x ? Math.round(L.k / L.x * 100) + "%" : "—", "دقّة اليوم")));

  if (u) root.appendChild(fahrplan(u));

  const last = S.progress.last && UNIT[S.progress.last.unit];
  const g = el("div", { class: "grid2" });
  if (last && !unitDone(last.id) && (!u || last.id !== u.id)) g.appendChild(cardLink({ icon: "book", title: "واصل: " + last.id + " " + last.de, sub: last.ar, badge: unitPct(last.id) + "%", on: () => UI.go("unit", { id: last.id }) }));
  g.appendChild(cardLink({ icon: "review", title: "المراجعة الذكية", sub: dueWords().length + " كلمة · " + dueMistakes().length + " خطأ مستحق", on: () => UI.go("review") }));
  g.appendChild(cardLink({ icon: AI.available() ? "sparkle" : "chat", title: AI.available() ? "تحدّث مع المدرّس الذكي" : "الحوارات", sub: AI.available() ? "محادثة حرة مع تصحيح فوري" : "24 حوارًا تفاعليًا من الكتاب", on: () => UI.go("tutor") }));
  g.appendChild(cardLink({ icon: "ear", title: "الأصوات الألمانية الصعبة", sub: "ü ö ch r p w … للمتحدثين بالعربية", on: () => UI.go("sounds") }));
  root.appendChild(g);

  root.appendChild(el("section", { class: "card" }, sectionTitle("هذا الأسبوع", "دقائق الدراسة يوميًا", el("button", { class: "linkbtn", type: "button", onclick: () => UI.go("stats", null, { root: true }) }, "كل الإحصاءات")), weekChart(7)));

  const tipU = u || UNITS[UNITS.length - 1];
  const ph = tipU.phrases[rnd(tipU.phrases.length)];
  root.appendChild(el("section", { class: "card tip" }, el("div", { class: "row between" }, el("b", null, icon("bulb"), " عبارة اليوم"), playBtn(ph[0])), el("p", { class: "tip-de" }, deSpan(ph[0])), el("p", { class: "muted" }, ph[1])));
  root.appendChild(el("p", { class: "encour" }, encouragement()));
  return root;
};
function tile(ic, val, lab, cls) { return el("div", { class: "tile " + (cls || "") }, icon(ic), el("b", null, String(val)), el("small", null, lab)); }
function encouragement() {
  const st = streak(), L = S.log[dayKey()] || { s: 0 }, m = Math.floor(L.s / 60), g = S.settings.goalMin;
  if (m >= g) return "أنجزت هدف اليوم — Super! كل ساعة تقرّبك من ألمانيا.";
  if (st >= 7) return "سلسلة " + st + " أيام! الاستمرار أهم من الكمية. لا تكسر السلسلة اليوم.";
  if (st >= 2) return "أنت في يومك " + st + " على التوالي. واصل!";
  if (m > 0) return "بقي " + (g - m) + " دقيقة لهدف اليوم. خطوة صغيرة كل يوم.";
  return "ساعة واحدة يوميًا = الكتاب كاملًا في حوالي 6 أسابيع. ابدأ الآن.";
}
function fahrplan(u) {
  const rows = planFor(u);
  const nextIdx = rows.findIndex((r) => !r.done);
  const board = el("section", { class: "board", "aria-label": "جدول درس اليوم" },
    el("div", { class: "board-h" }, el("span", { class: "board-tt" }, icon("train"), el("b", null, "Abfahrt"), el("span", null, "· جدول ساعة اليوم")), el("span", { class: "board-u" }, "Lektion " + u.lesson + " · " + u.id)),
    el("div", { class: "board-cols", "aria-hidden": "true" }, el("span", null, "Zeit"), el("span", null, "الوجهة"), el("span", null, "Status")));
  rows.forEach((r, i) => {
    const b = el("button", { class: "board-r" + (r.done ? " done" : "") + (i === nextIdx ? " now" : ""), type: "button" },
      el("span", { class: "b-time" }, r.at),
      el("span", { class: "b-dest" }, icon(r.ic), el("span", null, r.ar)),
      el("span", { class: "b-stat" }, r.done ? "✓ تم" : i === nextIdx ? "الآن" : Math.max(2, Math.round(r.min * (S.settings.goalMin || 60) / 60)) + " د"));
    b.onclick = () => { if (r.k === "rv") startDailyReview(); else UI.go("unit", { id: u.id, step: r.k === "l" ? (stepDone(u.id, "l") ? "s" : "l") : r.k }); };
    board.appendChild(b);
  });
  return board;
}
function onboardingCard() {
  const p = S.profile;
  const f = (id, lab, val, o = {}) => el("label", { class: "fld" }, el("span", null, lab), el("input", Object.assign({ class: "inp", id, value: val || "", dir: o.dir || "auto" }, o.attrs || {})));
  return el("section", { class: "card onboard" },
    el("h2", null, "مرحبًا بك في Deutschstunde!"),
    el("p", { class: "muted" }, "مدرّسك الألماني الشخصي المبني على كتاب DaF kompakt neu A1. أكمل هذه البيانات لتُستعمل في التحية وفي حواراتك بالألمانية — يمكنك تغييرها لاحقًا في الإعدادات."),
    el("div", { class: "form2" },
      f("obName", "اسمك (للتحية)", p.name),
      f("obFirst", "اسمك بالحروف اللاتينية", p.first, { dir: "ltr" }),
      f("obLast", "اسم العائلة (للتهجئة)", p.last, { dir: "ltr" }),
      f("obCity", "مدينتك", p.city, { dir: "ltr" }),
      f("obTime", "موعد الدراسة اليومي", S.settings.studyTime, { attrs: { type: "time" } })),
    el("div", { class: "row end" }, btn("حفظ وابدأ", { kind: "primary", icon: "check", on: () => {
      p.name = $("#obName").value.trim(); p.first = $("#obFirst").value.trim() || "Karim"; p.last = $("#obLast").value.trim(); p.city = $("#obCity").value.trim() || "Errachidia";
      S.settings.studyTime = $("#obTime").value || "19:00"; p.onboarded = true; save(); UI.refresh(); UI.toast("تم الحفظ — بالتوفيق!");
    } })));
}
function weekChart(days) {
  const data = [];
  for (let i = days - 1; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const L = S.log[dayKey(d)]; data.push({ d, m: L ? Math.round(L.s / 60) : 0 }); }
  return barChart(data, days <= 7);
}
function barChart(data, labels) {
  const goal = S.settings.goalMin || 60;
  const W = data.length <= 7 ? 360 : 640, H = data.length <= 7 ? 170 : 190, padB = 26, padT = 18, padL = 28;
  const max = Math.max(goal, ...data.map((x) => x.m), 10);
  const bw = (W - padL - 8) / data.length;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("class", "chart"); svg.setAttribute("direction", "ltr"); svg.style.direction = "ltr"; svg.setAttribute("role", "img"); svg.setAttribute("aria-label", "دقائق الدراسة");
  const y = (v) => H - padB - (v / max) * (H - padB - padT);
  const mk = (tag, at) => { const n = document.createElementNS(ns, tag); for (const k in at) n.setAttribute(k, at[k]); svg.appendChild(n); return n; };
  [0, Math.round(max / 2), max].forEach((v) => { mk("line", { x1: padL, x2: W - 4, y1: y(v), y2: y(v), class: "grid" }); const t = mk("text", { x: padL - 6, y: y(v) + 4, class: "ax", "text-anchor": "end" }); t.textContent = v; });
  const gl = mk("line", { x1: padL, x2: W - 4, y1: y(goal), y2: y(goal), class: "goal" });
  data.forEach((x, i) => {
    const isToday = dayKey(x.d) === dayKey();
    const bx = padL + 4 + i * bw, bh = Math.max(0, H - padB - y(x.m));
    const r = mk("rect", { x: bx + bw * 0.18, y: y(x.m), width: bw * 0.64, height: bh, rx: 4, class: "b" + (x.m >= goal ? " full" : "") + (isToday ? " today" : "") });
    const tt = document.createElementNS(ns, "title"); tt.textContent = dayKey(x.d) + ": " + x.m + " د"; r.appendChild(tt);
    if (labels || i % 5 === 0 || isToday) { const t = mk("text", { x: bx + bw / 2, y: H - 9, class: "ax" + (isToday ? " now" : ""), "text-anchor": "middle" }); t.textContent = labels ? AR_DAYS_SHORT[x.d.getDay()] : x.d.getDate(); }
    if (labels && x.m) { const t = mk("text", { x: bx + bw / 2, y: y(x.m) - 5, class: "val", "text-anchor": "middle" }); t.textContent = x.m; }
  });
  const lg = mk("text", { x: padL + 4, y: y(goal) - 5, class: "ax goal-t", "text-anchor": "start" }); lg.textContent = "الهدف " + goal + " د";
  return el("div", { class: "chart-wrap" }, svg);
}

/* ---------- COURSE ---------- */
VIEWS.course = () => {
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "الدروس"), el("p", { class: "muted" }, "8 دروس مرتبة حسب كتاب DaF kompakt neu A1 — كل وحدة (A, B, C) جلسة يومية لساعة تقريبًا.")));
  const list = el("div", { class: "lessons" });
  for (const L of C.lessons) {
    const pcts = L.units.map((u) => unitPct(u.id));
    const pct = pcts.reduce((a, b) => a + b, 0) / (pcts.length * 100);
    const card = el("button", { class: "lesson-card" + (lessonDone(L.id) ? " done" : ""), type: "button" },
      el("span", { class: "l-num" }, L.id),
      el("span", { class: "l-body" }, el("b", null, deSpan(L.de)), el("small", { class: "muted" }, L.ar), bar(pct),
        el("span", { class: "l-units" }, L.units.map((u) => el("span", { class: "uchip" + (unitDone(u.id) ? " done" : unitPct(u.id) ? " half" : "") }, u.id.slice(1) + " ")))),
      icon("next", "chev"));
    card.onclick = () => UI.go("lesson", { id: L.id });
    list.appendChild(card);
  }
  root.appendChild(list);
  root.appendChild(el("div", { class: "grid2" },
    cardLink({ icon: "ear", title: "الأصوات الصعبة", sub: "تدريب خاص للمتحدثين بالعربية", on: () => UI.go("sounds") }),
    cardLink({ icon: "trophy", title: "تدريب امتحان Start Deutsch 1", sub: "الاستماع · القراءة · الكتابة · المحادثة", on: () => UI.go("exam") }),
    cardLink({ icon: "search", title: "قاموسي", sub: WORDS.length + " كلمة مع الأداة والجمع والأمثلة", on: () => UI.go("words") })));
  return root;
};

/* ---------- LESSON ---------- */
VIEWS.lesson = ({ id }) => {
  const L = LESSON[id]; const lp = lessonP(id);
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h lesson-h" }, el("span", { class: "l-num big" }, L.id), el("div", null, el("small", { class: "muted" }, "Lektion " + L.id + " · " + L.book), el("h1", null, deSpan(L.de)), el("p", { class: "lead" }, L.ar))));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "ماذا ستتعلّم في هذا الدرس؟"), el("ul", { class: "goals" }, L.goals.map((g) => el("li", null, icon("check"), el("span", { html: fmt(g) }))))));
  root.appendChild(sectionTitle("الوحدات", "كل وحدة: شرح ← مفردات ← تمارين ← حوار ← استماع ← نطق ← اختبار"));
  root.appendChild(el("div", { class: "stack" }, L.units.map((u) => cardLink({ icon: unitDone(u.id) ? "check" : "book", cls: unitDone(u.id) ? "done" : "", title: u.id + " · " + u.de, sub: u.ar + " — " + u.summary, badge: unitPct(u.id) + "%", on: () => UI.go("unit", { id: u.id }) }))));
  root.appendChild(sectionTitle("التدريب الإضافي"));
  const extra = el("div", { class: "stack" });
  extra.appendChild(cardLink({ icon: "ear", title: "النطق: " + L.phon.de, sub: L.phon.ar, badge: lp.phon ? "✓" : null, on: () => UI.go("phon", { id }) }));
  L.write.forEach((w, k) => extra.appendChild(cardLink({ icon: "pencil", title: "مهمة كتابة " + (k + 1), sub: w.ar.slice(0, 90) + (w.ar.length > 90 ? "…" : ""), badge: lp.write && lp.write[k] && (lp.write[k].score != null ? lp.write[k].score + "/10" : lp.write[k].done ? "✓" : null), on: () => Writing.start(L, k) })));
  if (AI.available()) (L.tutor || []).forEach((t) => extra.appendChild(cardLink({ icon: "sparkle", title: "محادثة حرة: " + t.ar, sub: "تتحدث مع المدرّس الذكي في هذا الموقف", on: () => Tutor.chat(t) })));
  extra.appendChild(cardLink({ icon: "flag", cls: "test", title: "اختبار الدرس " + L.id + " (20 سؤالًا)", sub: lp.test ? "أفضل نتيجة: " + lp.test.best + "% · آخر محاولة: " + lp.test.last + "%" : "يختبر كل وحدات الدرس — ركّز على نقاط ضعفك", badge: lp.test && lp.test.best >= 70 ? "✓" : null, on: () => Session.start({ title: "اختبار الدرس " + L.id, sub: deSpanText(L.de), items: lessonTest(L), passMark: 70, onFinish: (r) => { lp.test = { best: Math.max((lp.test && lp.test.best) || 0, r.pct), last: r.pct, ts: Date.now() }; save(); checkAchievements(); } }) }));
  root.appendChild(extra);
  return root;
};
function deSpanText(t) { return t; }

/* ---------- UNIT ---------- */
VIEWS.unit = ({ id, step }) => {
  const u = UNIT[id]; const L = LESSON[u.lesson];
  const firstOpen = STEPS.find((s) => !stepDone(id, s.k));
  step = step || (firstOpen ? firstOpen.k : "g");
  const root = el("div", { class: "page unit" });
  root.appendChild(el("header", { class: "ph-h" },
    el("button", { class: "crumb", type: "button", onclick: () => UI.go("lesson", { id: L.id }) }, "Lektion " + L.id + " · " + L.de),
    el("h1", null, el("span", { class: "u-id" }, u.id), " ", deSpan(u.de)), el("p", { class: "lead" }, u.ar), el("p", { class: "muted" }, u.summary)));
  const tabs = el("div", { class: "steps", role: "tablist" });
  STEPS.forEach((s, i) => {
    const b = el("button", { class: "step" + (s.k === step ? " on" : "") + (stepDone(id, s.k) ? " done" : ""), type: "button", role: "tab", "aria-selected": s.k === step ? "true" : "false" },
      el("span", { class: "s-n" }, stepDone(id, s.k) ? icon("check") : String(i + 1)), el("span", null, s.ar));
    b.onclick = () => UI.go("unit", { id, step: s.k }, { replace: true });
    tabs.appendChild(b);
  });
  root.appendChild(tabs);
  const body = el("div", { class: "step-body" });
  root.appendChild(body);
  const renderers = { g: unitGrammar, v: unitVocab, e: unitExercises, d: unitDialog, l: unitListen, s: unitSpeak, q: unitQuizView };
  body.appendChild(renderers[step](u));
  const idx = STEPS.findIndex((s) => s.k === step);
  const nextS = STEPS[idx + 1];
  const nav = el("div", { class: "row between step-nav" },
    idx > 0 ? btn(STEPS[idx - 1].ar, { kind: "ghost", icon: "back", on: () => UI.go("unit", { id, step: STEPS[idx - 1].k }, { replace: true }) }) : el("span"),
    nextS ? btn("التالي: " + nextS.ar, { kind: "primary", icon: "next", on: () => UI.go("unit", { id, step: nextS.k }, { replace: true }) })
      : (UNITS[UNITS.indexOf(u) + 1] ? btn("الوحدة التالية: " + UNITS[UNITS.indexOf(u) + 1].id, { kind: "primary", icon: "next", on: () => UI.go("unit", { id: UNITS[UNITS.indexOf(u) + 1].id }, { replace: true }) }) : null));
  root.appendChild(nav);
  return root;
};
function grammarBlock(b) {
  const sec = el("section", { class: "gblock" });
  if (b.h) sec.appendChild(el("h3", null, b.h));
  [].concat(b.p || []).forEach((p) => sec.appendChild(el("p", { html: fmt(p) })));
  if (b.table) {
    const t = el("table", { class: "gtable" });
    if (b.table.head) t.appendChild(el("thead", null, el("tr", null, b.table.head.map((h) => el("th", { html: fmt(h) })))));
    t.appendChild(el("tbody", null, b.table.rows.map((r) => el("tr", null, r.map((c) => el("td", { html: fmt(c) }))))));
    sec.appendChild(el("div", { class: "tscroll" }, t));
  }
  if (b.list) sec.appendChild(el("ul", { class: "glist" }, b.list.map((x) => el("li", { html: fmt(x) }))));
  if (b.ex) sec.appendChild(el("div", { class: "exs" }, b.ex.map(([de, ar]) => el("div", { class: "ex" }, el("div", { class: "ex-de" }, deHTML(de), playBtn(de, { small: true })), el("div", { class: "ex-ar" }, ar)))));
  if (b.tip) sec.appendChild(el("p", { class: "tipbox" }, icon("bulb"), el("span", { html: fmt(b.tip) })));
  return sec;
}
function unitGrammar(u) {
  const box = el("div", null);
  u.grammar.forEach((b) => box.appendChild(grammarBlock(b)));
  box.appendChild(el("section", { class: "gblock" }, el("h3", null, "عبارات مهمة (Redemittel)"),
    el("div", { class: "exs" }, u.phrases.map(([de, ar]) => el("div", { class: "ex" }, el("div", { class: "ex-de" }, deSpan(de), playBtn(de, { small: true })), el("div", { class: "ex-ar" }, ar))))));
  const row = el("div", { class: "row wrap end" });
  if (AI.available()) row.appendChild(btn("اسأل المدرّس عن هذا الدرس", { kind: "ghost", icon: "sparkle", on: () => Tutor.ask("") }));
  row.appendChild(btn(stepDone(u.id, "g") ? "قرأت الشرح ✓" : "فهمت الشرح", { kind: stepDone(u.id, "g") ? "ghost" : "primary", icon: "check", on: () => { markStep(u.id, "g"); UI.go("unit", { id: u.id, step: "v" }, { replace: true }); } }));
  box.appendChild(row);
  return box;
}
function vocabRow(w) {
  const st = wordState(w.id);
  const exRow = el("div", { class: "w-ex", hidden: true }, el("div", { class: "row" }, deSpan(w.ex), playBtn(w.ex, { small: true })), el("small", { class: "muted" }, w.exAr));
  const r = el("div", { class: "wrow" },
    el("span", { class: "dot " + st, title: { new: "جديدة", learning: "قيد التعلّم", known: "محفوظة" }[st] }),
    el("button", { class: "w-main", type: "button", "aria-expanded": "false" },
      el("span", { class: "w-de" }, w.t === "n" && w.art ? el("span", { class: ART_CLASS[w.art] || "" }, w.art + " ") : null, deSpan(w.w),
        w.pl && w.pl !== w.w ? el("small", { class: "w-pl" }, deSpan(" · die " + w.pl)) : w.p === "Sg." ? el("small", { class: "w-pl muted" }, " · مفرد فقط") : w.p === "Pl." ? el("small", { class: "w-pl muted" }, " · جمع فقط") : (w.t === "v" || w.t === "c" || w.t === "p") && w.p ? el("small", { class: "w-pl" }, deSpan(" · " + w.p)) : null),
      el("span", { class: "w-ar" }, w.ar)),
    playBtn(wordLabel(w), { small: true }));
  const wrap = el("div", { class: "witem" }, r, exRow);
  $(".w-main", r).onclick = () => { exRow.hidden = !exRow.hidden; $(".w-main", r).setAttribute("aria-expanded", String(!exRow.hidden)); if (!exRow.hidden) TTS.speak(w.ex); };
  return wrap;
}
function unitVocab(u) {
  const box = el("div", null);
  const groups = [["n", "الأسماء"], ["v", "الأفعال"], ["a", "الصفات"], ["d", "الظروف"], ["c", "البلدان واللغات"], ["q", "أدوات السؤال"], ["p", "حروف وأدوات"], ["x", "عبارات"]];
  const known = u.words.filter((w) => wordState(w.id) === "known").length;
  box.appendChild(el("div", { class: "card vhead" },
    el("div", null, el("b", null, u.words.length + " كلمة"), el("small", { class: "muted" }, " · " + known + " محفوظة")),
    el("div", { class: "legend" }, el("span", { class: "g-m" }, "der مذكر"), el("span", { class: "g-n" }, "das محايد"), el("span", { class: "g-f" }, "die مؤنث")),
    el("div", { class: "row wrap" },
      btn("تعلّم بالبطاقات", { kind: "primary", icon: "cards", on: () => Flash.start(shuffle(u.words), { title: "مفردات " + u.id, quiz: () => vq(), onFinish: () => { markStep(u.id, "v"); } }) }),
      btn("تمرين المفردات", { kind: "ghost", icon: "pencil", on: () => vq() }),
      btn("استمع لكل الكلمات", { kind: "ghost", icon: "volume", on: () => TTS.sequence(u.words.map((w) => ({ text: wordLabel(w) }))) }))));
  const vq = () => Session.start({ title: "تمرين مفردات " + u.id, items: vocabQuiz(u.words, 14), onFinish: (r) => { if (r.pct >= 50) markStep(u.id, "v", { quiz: r.pct }); } });
  for (const [t, lab] of groups) {
    const ws = u.words.filter((w) => w.t === t); if (!ws.length) continue;
    box.appendChild(el("h3", { class: "vgroup" }, lab, el("small", { class: "muted" }, " (" + ws.length + ")")));
    box.appendChild(el("div", { class: "wlist" }, ws.map(vocabRow)));
  }
  return box;
}
function unitExercises(u) {
  const p = S.progress.units[u.id] || {};
  const mistHere = Object.keys(S.mist).filter((k) => k.startsWith(u.id + ":"));
  const types = {}; u.ex.forEach((x) => (types[x.t] = (types[x.t] || 0) + 1));
  const tnames = { mc: "اختيار", gap: "ملء الفراغ", order: "ترتيب الجمل", match: "توصيل", tr: "ترجمة", read: "قراءة" };
  return el("div", null,
    el("section", { class: "card" },
      el("h3", null, u.ex.length + " تمرينًا تفاعليًا"),
      el("p", { class: "muted" }, "تمارين على قواعد ومفردات الوحدة: " + Object.keys(types).map((t) => (tnames[t] || t) + " (" + types[t] + ")").join("، ") + ". الحل يظهر بعد محاولتك، مع شرح الخطأ بالعربية."),
      p.e ? el("p", null, "أفضل نتيجة: ", el("b", null, (p.e.best || p.e.score || 0) + "%")) : null,
      el("div", { class: "row wrap" },
        btn(p.e ? "أعد التمارين" : "ابدأ التمارين", { kind: "primary", icon: "play", on: () => Session.start({ title: "تمارين " + u.id, sub: u.de, items: u.ex.slice(), onFinish: (r) => markStep(u.id, "e", { score: r.pct, best: Math.max(r.pct, (p.e && p.e.best) || 0) }) }) }),
        btn("10 تمارين عشوائية", { kind: "ghost", icon: "shuffle", on: () => Session.start({ title: "تمارين عشوائية " + u.id, items: sample(u.ex, 10) }) }),
        mistHere.length ? btn("صحّح أخطاء هذه الوحدة (" + mistHere.length + ")", { kind: "ghost", icon: "review", on: () => Session.start({ title: "أخطاء " + u.id, items: mistHere.map(getItem).filter(Boolean) }) }) : null)));
}
function unitDialog(u) {
  const D = u.dialog; const rec = Dialog.recommend(u.id); const d = S.dlg[u.id];
  const box = el("div", null,
    el("section", { class: "card" },
      el("h3", null, deSpan(D.title), " — ", D.ar),
      el("p", { class: "scene" }, icon("info"), el("span", null, D.scene)),
      d ? el("p", { class: "muted" }, "أفضل نتيجة: " + d.best + "% · عدد المحاولات: " + d.n) : null,
      el("div", { class: "row wrap" }, btn("استمع للحوار كاملًا", { kind: "ghost", icon: "volume", on: () => TTS.sequence(dialogScript(D)) }))),
    el("h3", { class: "vgroup" }, "اختر مستوى الحوار"));
  const modes = el("div", { class: "modes" });
  MODE_ORDER.forEach((m) => {
    const b = el("button", { class: "mode" + (m === rec ? " rec" : ""), type: "button" }, el("b", null, MODES[m]), el("small", { class: "muted" }, MODE_DESC[m]), m === rec ? el("span", { class: "badge" }, "مقترح لمستواك") : null);
    b.onclick = () => Dialog.start(u, m);
    modes.appendChild(b);
  });
  box.appendChild(modes);
  if (AI.available() && LESSON[u.lesson].tutor) box.appendChild(cardLink({ icon: "sparkle", title: "محادثة حرة مع المدرّس الذكي", sub: "بعد الحوار الموجّه، تكلّم بحرية في موقف مشابه وسيصحّح أخطاءك", on: () => Tutor.chat(LESSON[u.lesson].tutor[u.index % LESSON[u.lesson].tutor.length]) }));
  return box;
}
function unitListen(u) {
  const p = S.progress.units[u.id] || {};
  return el("div", null,
    el("section", { class: "card" },
      el("h3", null, "تمارين الاستماع (" + u.listen.length + ")"),
      el("p", { class: "muted" }, "استمع وأجب عن الأسئلة، ثم اكتب ما تسمعه (إملاء). يمكنك إعادة الاستماع وتبطيء الصوت."),
      p.l ? el("p", null, "آخر نتيجة: ", el("b", null, p.l.score + "%")) : null,
      btn("ابدأ الاستماع", { kind: "primary", icon: "ear", on: () => Session.start({ title: "استماع " + u.id, items: u.listen.concat(vocabQuiz(u.words, 3).map((x) => genVocab(x.w, "listen"))), onFinish: (r) => markStep(u.id, "l", { score: r.pct }) }) })),
    el("section", { class: "card" }, el("h3", null, "استمع إلى الحوار"), el("p", { class: "muted" }, "استمع للحوار كاملًا دون قراءة، ثم أعد الاستماع مع النص."),
      el("div", { class: "row wrap" }, btn("تشغيل الحوار", { kind: "ghost", icon: "play", on: () => TTS.sequence(dialogScript(u.dialog)) }), btn("إيقاف", { kind: "ghost", icon: "stop", on: () => TTS.stop() })),
      el("details", { class: "box" }, el("summary", null, "عرض نص الحوار"), el("div", { class: "script" }, u.dialog.lines.map((l) => el("p", null, el("b", null, l.s === "U" ? "أنت: " : ((u.dialog.who && u.dialog.who[l.s]) || "") + ": "), deSpan(l.s === "U" ? fillPH(l.m) : l.de)))))));
}
function unitSpeak(u) {
  const sentences = u.phrases.map((p) => p[0].split(" – ")[0]).concat(sample(u.words.filter((w) => w.ex), 4).map((w) => w.ex));
  let n = 0;
  return el("div", null,
    el("section", { class: "card" }, el("h3", null, "تدريب النطق"), el("p", { class: "muted" }, "استمع (عادي أو ببطء)، ثم اضغط الميكروفون وانطق الجملة. سيقارن التطبيق نطقك بالجملة الصحيحة."),
      el("div", { class: "row wrap" }, cardLink({ icon: "ear", title: "نطق الدرس: " + LESSON[u.lesson].phon.de, sub: LESSON[u.lesson].phon.ar, on: () => UI.go("phon", { id: u.lesson }) }))),
    Pron.list(sentences, { onPractice: () => { n++; if (n === 3) { markStep(u.id, "s"); UI.toast("أحسنت! تم تسجيل تدريب النطق"); } } }));
}
function unitQuizView(u) {
  const p = S.progress.units[u.id] || {};
  return el("section", { class: "card center-card" },
    icon("flag", "big"),
    el("h3", null, "اختبار الوحدة " + u.id),
    el("p", { class: "muted" }, "8 أسئلة من القواعد والمفردات والاستماع. تحتاج 70% لإكمال الوحدة. الكلمات والأخطاء تُضاف تلقائيًا إلى المراجعة الذكية."),
    p.q ? el("p", null, "أفضل نتيجة: ", el("b", { class: p.q.pass ? "t-ok" : "t-no" }, p.q.best + "%"), p.q.pass ? " — الوحدة مكتملة ✓" : "") : null,
    btn(p.q ? "أعد الاختبار" : "ابدأ الاختبار", { kind: "primary", icon: "play", on: () => Session.start({ title: "اختبار " + u.id, items: unitQuiz(u), passMark: 70, onFinish: (r) => { const best = Math.max(r.pct, (p.q && p.q.best) || 0); markStep(u.id, "q", { best, pass: best >= 70 || (p.q && p.q.pass) }); if (best >= 70) UI.toast("الوحدة " + u.id + " مكتملة!", "star"); } }) }));
}

/* ---------- PHONETICS (per lesson) ---------- */
VIEWS.phon = ({ id }) => {
  const L = LESSON[id]; const P = L.phon;
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h" }, el("button", { class: "crumb", type: "button", onclick: () => UI.go("lesson", { id }) }, "Lektion " + id), el("h1", null, deSpan(P.de)), el("p", { class: "lead" }, P.ar)));
  const box = el("section", { class: "card" });
  P.body.forEach((b) => box.appendChild(grammarBlock(b)));
  root.appendChild(box);
  root.appendChild(el("section", { class: "card" }, el("h3", null, "اختبر أذنك (" + P.drills.length + ")"), el("p", { class: "muted" }, "استمع وحدد ما سمعته."),
    btn("ابدأ تمرين الاستماع", { kind: "primary", icon: "ear", on: () => Session.start({ title: "النطق: " + P.de, items: P.drills.slice(), onFinish: () => { lessonP(id).phon = Date.now(); save(); } }) })));
  root.appendChild(el("h3", { class: "vgroup" }, "كرّر بعد المتحدث"));
  root.appendChild(Pron.list(P.say, { onPractice: () => { lessonP(id).phon = Date.now(); } }));
  return root;
};

/* ================= VIEWS (2): sounds, review, words, tutor, stats, settings, exam + boot ================= */

/* ---------- DIFFICULT SOUNDS ---------- */
VIEWS.sounds = ({ id }) => {
  const root = el("div", { class: "page" });
  if (id) {
    const s = C.sounds.find((x) => x.id === id);
    root.appendChild(el("header", { class: "ph-h" }, el("button", { class: "crumb", type: "button", onclick: () => UI.go("sounds", null, { replace: true }) }, "الأصوات الصعبة"), el("h1", null, deSpan(s.de)), el("p", { class: "lead" }, s.ar)));
    root.appendChild(el("section", { class: "card" }, el("h3", null, "كيف تنطقه؟"), el("p", { html: fmt(s.how) })));
    root.appendChild(el("section", { class: "card" }, el("h3", null, "أزواج متقاربة"), el("p", { class: "muted" }, "استمع للفرق بين الكلمتين في كل زوج:"),
      el("div", { class: "pairs" }, s.pairs.map(([a, b]) => el("div", { class: "pair" }, el("button", { class: "pbtn", type: "button", onclick: () => TTS.speak(a) }, icon("volume"), deSpan(a)), el("span", { class: "muted" }, "≠"), el("button", { class: "pbtn", type: "button", onclick: () => TTS.speak(b) }, icon("volume"), deSpan(b))))),
      btn("اختبر أذنك", { kind: "primary", icon: "ear", on: () => {
        const items = shuffle(s.pairs.flatMap(([a, b], i) => [a, b].map((w, k) => ({ id: "snd:" + s.id + ":" + i + ":" + k, t: "listen", say: w, q: "أي كلمة سمعت؟", o: [w, k ? a : b], a: 0, tag: "sprechen", why: "سمعت ‹" + w + "›." })))).slice(0, 8);
        Session.start({ title: "اختبار الصوت " + s.de, items, onFinish: (r) => { S.sounds[s.id] = Math.max(S.sounds[s.id] || 0, r.pct); save(); } });
      } })));
    root.appendChild(el("h3", { class: "vgroup" }, "تدرّب على النطق"));
    root.appendChild(Pron.list(s.words));
    return root;
  }
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "الأصوات الألمانية الصعبة"), el("p", { class: "muted" }, "تدريب مصمّم للمتحدثين بالعربية: الأصوات غير الموجودة في العربية والأخطاء الشائعة. استمع، قارن، ثم انطق.")));
  root.appendChild(el("div", { class: "sounds" }, C.sounds.map((s) => {
    const b = el("button", { class: "sound", type: "button" }, el("span", { class: "snd-big", dir: "ltr" }, s.de.split(" ")[0]), el("b", null, s.ar), S.sounds[s.id] != null ? el("small", { class: "muted" }, "أذنك: " + S.sounds[s.id] + "%") : el("small", { class: "muted" }, s.pairs.length + " أزواج · " + s.words.length + " كلمات"));
    b.onclick = () => UI.go("sounds", { id: s.id });
    return b;
  })));
  return root;
};

/* ---------- REVIEW ---------- */
VIEWS.review = () => {
  const root = el("div", { class: "page" });
  const dw = dueWords(), dm = dueMistakes(), allM = Object.keys(S.mist).filter((k) => getItem(k));
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "المراجعة الذكية"), el("p", { class: "muted" }, "تكرار متباعد: الكلمات تعود إليك في الوقت المناسب قبل أن تنساها، والأخطاء تعود حتى تتقنها.")));
  root.appendChild(el("div", { class: "tiles" }, tile("cards", dw.length, "كلمات مستحقة اليوم"), tile("review", dm.length, "أخطاء مستحقة"), tile("check", knownCount(), "كلمات محفوظة"), tile("list", seenCount(), "كلمات في المراجعة")));
  const today = S.log[dayKey()] || {};
  root.appendChild(el("section", { class: "card hl" },
    el("div", { class: "row between wrap" }, el("div", null, el("h3", null, "المراجعة اليومية"), el("p", { class: "muted" }, today.rv ? "أنجزت مراجعة اليوم ✓ — يمكنك المراجعة مجددًا." : "الكلمات المستحقة، ثم أخطاؤك السابقة ونقاط ضعفك (8–10 دقائق).")),
      btn("ابدأ", { kind: "accent", icon: "play", on: startDailyReview }))));
  const g = el("div", { class: "stack" });
  g.appendChild(cardLink({ icon: "cards", title: "بطاقات الكلمات المستحقة", sub: dw.length ? "حسب نظام التكرار المتباعد" : "لا كلمات مستحقة الآن — أحسنت!", badge: dw.length, on: () => Flash.start(dw.slice(0, 30), { title: "الكلمات المستحقة" }) }));
  g.appendChild(cardLink({ icon: "review", title: "صحّح أخطائي", sub: allM.length ? allM.length + " خطأ مسجّل — يُحذف الخطأ بعد إجابتين صحيحتين متتاليتين" : "لا أخطاء مسجّلة بعد", badge: dm.length || null, on: () => { const ids = (dm.length ? dm : allM).slice(0, 15); Session.start({ title: "تصحيح الأخطاء", items: ids.map(getItem).filter(Boolean) }); } }));
  const oldUnits = UNITS.filter((u) => unitDone(u.id) || stepDone(u.id, "e")).sort((a, b) => ((S.progress.units[a.id].done || S.progress.units[a.id].ts || 0) - (S.progress.units[b.id].done || S.progress.units[b.id].ts || 0)));
  if (oldUnits.length) g.appendChild(cardLink({ icon: "shuffle", title: "مراجعة دورية للدروس السابقة", sub: "أسئلة من " + oldUnits.length + " وحدة — الأقدم أولًا", on: () => { const pool = oldUnits.slice(0, 4).flatMap((u) => sample(u.ex.filter((x) => x.t !== "read"), 3).concat(vocabQuiz(u.words, 2))); Session.start({ title: "مراجعة دورية", items: shuffle(pool).slice(0, 14) }); } }));
  root.appendChild(g);
  const weak = Object.keys(S.tags).filter((t) => S.tags[t][0] >= 3 && C.tags[t]).sort((a, b) => S.tags[a][2] - S.tags[b][2]).slice(0, 5);
  root.appendChild(sectionTitle("نقاط تحتاج تدريبًا", weak.length ? "مرتبة من الأضعف — حسب إجاباتك الأخيرة" : "ستظهر هنا بعد حل بعض التمارين"));
  if (weak.length) root.appendChild(el("div", { class: "stack" }, weak.map((t) => cardLink({ icon: "flag", title: C.tags[t].ar, sub: "دقّتك الأخيرة: " + Math.round(S.tags[t][2] * 100) + "% · " + S.tags[t][0] + " إجابة", badge: Math.round(S.tags[t][2] * 100) + "%", badgeCls: S.tags[t][2] < 0.6 ? "bad" : "", on: () => { const items = practiceItemsForTag(t, 10); if (items.length) Session.start({ title: "تدريب: " + C.tags[t].ar, items }); else UI.toast("لا تمارين كافية لهذا الموضوع بعد", "info"); } }))));
  else root.appendChild(emptyState("chart", "لا بيانات بعد", "حلّ تمارين الوحدة الأولى، وسيحدد التطبيق نقاط قوتك وضعفك تلقائيًا."));
  return root;
};

/* ---------- WORDS (dictionary) ---------- */
VIEWS.words = (prm) => {
  const root = el("div", { class: "page" });
  const f = Object.assign({ q: "", lesson: "all", type: "all", st: "all" }, prm || {});
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "قاموسي"), el("p", { class: "muted" }, "كل مفردات الكتاب مع الأداة (der/die/das) والجمع والترجمة والأمثلة. اضغط على الكلمة لرؤية المثال.")));
  const q = el("input", { class: "inp", id: "wq", type: "search", placeholder: "ابحث بالألمانية أو العربية…", value: f.q });
  const selL = el("select", { class: "inp", id: "wl", "aria-label": "الدرس" }, el("option", { value: "all" }, "كل الدروس"), C.lessons.map((L) => el("option", { value: String(L.id), selected: String(L.id) === f.lesson ? true : null }, "الدرس " + L.id)));
  const selT = el("select", { class: "inp", id: "wt", "aria-label": "النوع" }, [["all", "كل الأنواع"], ["n", "الأسماء"], ["v", "الأفعال"], ["a", "الصفات"], ["o", "أخرى"]].map(([v, t]) => el("option", { value: v, selected: v === f.type ? true : null }, t)));
  const selS = el("select", { class: "inp", id: "ws", "aria-label": "الحالة" }, [["all", "كل الحالات"], ["new", "جديدة"], ["learning", "قيد التعلّم"], ["known", "محفوظة"]].map(([v, t]) => el("option", { value: v, selected: v === f.st ? true : null }, t)));
  const list = el("div", { class: "wlist" });
  const info = el("p", { class: "muted sm" });
  const acts = el("div", { class: "row wrap" });
  let limit = 120;
  const seen = new Set(); const uniqWords = WORDS.filter((w) => { const k = w.art + "|" + w.w; if (seen.has(k)) return false; seen.add(k); return true; });
  const filtered = () => {
    const qq = canon(q.value), ar = q.value.trim();
    return uniqWords.filter((w) => (selL.value === "all" || String(w.lesson) === selL.value)
      && (selT.value === "all" || (selT.value === "o" ? !["n", "v", "a"].includes(w.t) : w.t === selT.value))
      && (selS.value === "all" || wordState(w.id) === selS.value)
      && (!qq || canon(w.w).includes(qq) || canon(wordLabel(w)).includes(qq) || (ar && w.ar.includes(ar))));
  };
  const draw = () => {
    const ws = filtered(); clear(list);
    ws.slice(0, limit).forEach((w) => list.appendChild(vocabRow(w)));
    info.textContent = ws.length + " كلمة";
    if (ws.length > limit) list.appendChild(btn("عرض المزيد", { kind: "ghost", on: () => { limit += 200; draw(); } }));
    clear(acts).append(btn("بطاقات لهذه القائمة", { kind: "primary", icon: "cards", disabled: !ws.length, on: () => Flash.start(shuffle(ws).slice(0, 30), { title: "بطاقات من قاموسي" }) }), btn("تمرين", { kind: "ghost", icon: "pencil", disabled: !ws.length, on: () => Session.start({ title: "تمرين من قاموسي", items: vocabQuiz(ws, 12) }) }));
  };
  const redraw = debounce(() => { limit = 120; draw(); }, 200);
  q.addEventListener("input", redraw); [selL, selT, selS].forEach((s) => s.addEventListener("change", () => { limit = 120; draw(); }));
  root.appendChild(el("div", { class: "filters" }, q, el("div", { class: "row wrap" }, selL, selT, selS)));
  root.append(el("div", { class: "row between wrap" }, info, acts), list);
  draw();
  return root;
};

/* ---------- TUTOR ---------- */
VIEWS.tutor = () => {
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "المدرّس والمحادثة"), el("p", { class: "muted" }, "تدرّب على الحوارات الواقعية من الكتاب، وتحدّث بحرية مع مدرّس ذكي يصحّح أخطاءك بالعربية.")));
  if (AI.available()) {
    const cur = nextUnit() || UNITS[UNITS.length - 1];
    root.appendChild(el("section", { class: "card hl" }, el("div", { class: "row between wrap" }, el("div", null, el("h3", null, icon("sparkle"), " المدرّس الذكي جاهز"), el("p", { class: "muted" }, "يتكلّم بمستواك (حتى الدرس " + cur.lesson + ")، ويصحّح كل رسالة ويقترح صيغًا طبيعية.")), btn("اسأل المدرّس سؤالًا", { kind: "accent", icon: "sparkle", on: () => Tutor.ask("") }))));
    root.appendChild(sectionTitle("محادثات حرة حسب الدروس", "اختر موقفًا — المقترح يبدأ بدرسك الحالي"));
    const order = C.lessons.slice().sort((a, b) => (a.id === cur.lesson ? -1 : b.id === cur.lesson ? 1 : a.id - b.id));
    root.appendChild(el("div", { class: "stack" }, order.flatMap((L) => (L.tutor || []).map((t) => cardLink({ icon: "chat", title: t.ar, sub: "الدرس " + L.id + " · " + L.de + (L.id > cur.lesson ? " (متقدّم)" : ""), on: () => Tutor.chat(t) })))));
  } else {
    root.appendChild(el("section", { class: "card note-card" }, icon("info"),
      el("div", null, el("b", null, AI.state === "denied" ? "المدرّس الذكي غير مسموح له حاليًا" : "المدرّس الذكي (محادثة حرة وتصحيح فوري)"),
        el("p", { class: "muted" }, AI.state === "denied" ? "رفضت السماح للمدرّس الذكي في هذه الزيارة. أعد فتح الصفحة لاحقًا للسماح به." : "يعمل عند فتح التطبيق داخل Claude (الرابط المنشور). في النسخة المثبتة على الهاتف تعمل الحوارات الموجّهة أدناه مع التصحيح التلقائي، بدون محادثة حرة."))));
  }
  root.appendChild(sectionTitle("الحوارات الموجّهة (" + UNITS.length + ")", "حوارات واقعية من مواضيع الكتاب — بثلاثة مستويات صعوبة"));
  root.appendChild(el("div", { class: "stack" }, UNITS.map((u) => { const d = S.dlg[u.id]; return cardLink({ icon: d ? "check" : "chat", cls: d ? "done" : "", title: u.id + " · " + u.dialog.title, sub: u.dialog.ar + " — المستوى المقترح: " + MODES[Dialog.recommend(u.id)], badge: d ? d.best + "%" : null, on: () => Dialog.start(u) }); })));
  return root;
};

/* ---------- STATS ---------- */
VIEWS.stats = (prm) => {
  const period = (prm && prm.p) || "week";
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "تقدّمي"), el("p", { class: "muted" }, "سجل تلقائي لوقت الدراسة والدروس والتمارين، مع نقاط القوة والضعف.")));
  const tot = Object.values(S.log).reduce((a, L) => ({ x: a.x + (L.x || 0), k: a.k + (L.k || 0) }), { x: 0, k: 0 });
  const unitsDone = UNITS.filter((u) => unitDone(u.id)).length;
  root.appendChild(el("div", { class: "tiles" },
    tile("flame", streak(), "أيام متتالية", streak() >= 3 ? "hot" : ""), tile("clock", fmtMin(totalSec()), "إجمالي الدراسة"),
    tile("book", unitsDone + "/" + UNITS.length, "وحدات مكتملة"), tile("cards", knownCount() + "/" + seenCount(), "كلمات محفوظة/مراجَعة"),
    tile("pencil", tot.x, "إجابات"), tile("check", tot.x ? Math.round(tot.k / tot.x * 100) + "%" : "—", "الدقة العامة")));
  const L = S.log[dayKey()] || { s: 0, x: 0, k: 0, w: 0, u: [] };
  root.appendChild(el("section", { class: "card" }, el("h3", null, "اليوم — " + arDate()),
    el("div", { class: "today-grid" }, statLine("وقت الدراسة", Math.floor(L.s / 60) + " / " + S.settings.goalMin + " د"), statLine("إجابات", L.x + " (" + (L.x ? Math.round(L.k / L.x * 100) : 0) + "% صحيحة)"), statLine("كلمات جديدة", L.w || 0), statLine("وحدات أكملتها", (L.u || []).join("، ") || "—"))));
  const seg = el("div", { class: "seg", role: "tablist" }, [["week", "الأسبوع"], ["month", "الشهر"]].map(([k, t]) => el("button", { class: "seg-b" + (k === period ? " on" : ""), type: "button", onclick: () => UI.go("stats", { p: k }, { replace: true }) }, t)));
  const chartCard = el("section", { class: "card" }, sectionTitle(period === "week" ? "آخر 7 أيام" : "آخر 30 يومًا", "دقائق الدراسة يوميًا مقارنة بهدفك", seg), weekChart(period === "week" ? 7 : 30));
  if (period === "month") chartCard.appendChild(heatmap());
  const sum = (n) => { let s = 0, days = 0; for (let i = 0; i < n; i++) { const d = new Date(); d.setDate(d.getDate() - i); const l = S.log[dayKey(d)]; if (l) { s += l.s; if (l.s >= 300) days++; } } return { s, days }; };
  const w = sum(period === "week" ? 7 : 30);
  chartCard.appendChild(el("p", { class: "muted" }, "المجموع: " + fmtMin(w.s) + " · أيام دراسة: " + w.days + " · المعدل: " + Math.round(w.s / 60 / (period === "week" ? 7 : 30)) + " د/يوم"));
  root.appendChild(chartCard);
  const sk = skillStats();
  root.appendChild(el("section", { class: "card" }, el("h3", null, "المهارات"), el("div", { class: "skills" }, Object.keys(C.skills).map((k) => {
    const v = sk[k] || { n: 0, ok: 0 }; const pct = v.n ? v.ok / v.n : 0;
    return el("div", { class: "skill" }, el("span", null, C.skills[k]), bar(pct, pct >= 0.8 ? "good" : pct < 0.6 && v.n ? "bad" : ""), el("small", { class: "muted" }, v.n ? Math.round(pct * 100) + "% · " + v.n : "—"));
  }))));
  const tags = Object.keys(S.tags).filter((t) => S.tags[t][0] >= 4 && C.tags[t]);
  const strong = tags.filter((t) => S.tags[t][2] >= 0.8).sort((a, b) => S.tags[b][2] - S.tags[a][2]).slice(0, 5);
  const weak = tags.filter((t) => S.tags[t][2] < 0.65).sort((a, b) => S.tags[a][2] - S.tags[b][2]).slice(0, 5);
  root.appendChild(el("div", { class: "grid2" },
    el("section", { class: "card" }, el("h3", null, icon("star"), " نقاط القوة"), strong.length ? el("ul", { class: "tl" }, strong.map((t) => el("li", null, el("span", null, C.tags[t].ar), el("b", { class: "t-ok" }, Math.round(S.tags[t][2] * 100) + "%")))) : el("p", { class: "muted" }, "ستظهر بعد مزيد من التمارين.")),
    el("section", { class: "card" }, el("h3", null, icon("flag"), " نقاط تحتاج تدريبًا"), weak.length ? el("ul", { class: "tl" }, weak.map((t) => el("li", null, el("button", { class: "linkbtn", type: "button", onclick: () => { const items = practiceItemsForTag(t, 10); if (items.length) Session.start({ title: "تدريب: " + C.tags[t].ar, items }); } }, C.tags[t].ar), el("b", { class: "t-no" }, Math.round(S.tags[t][2] * 100) + "%")))) : el("p", { class: "muted" }, "لا نقاط ضعف واضحة حاليًا."))));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "الدروس"), el("div", { class: "skills" }, C.lessons.map((Ls) => { const pct = Ls.units.reduce((a, u) => a + unitPct(u.id), 0) / (Ls.units.length * 100); const lp = S.progress.lessons[Ls.id] || {}; return el("div", { class: "skill" }, el("span", null, "الدرس " + Ls.id), bar(pct, lessonDone(Ls.id) ? "good" : ""), el("small", { class: "muted" }, Math.round(pct * 100) + "%" + (lp.test ? " · اختبار " + lp.test.best + "%" : ""))); }))));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "الأوسمة"), el("div", { class: "ach" }, ACH.map((a) => el("div", { class: "badge-a" + (S.ach[a.id] ? " on" : ""), title: a.d }, icon(S.ach[a.id] ? "trophy" : "star"), el("b", null, a.ar), el("small", { class: "muted" }, a.d))))));
  return root;
};
function statLine(k, v) { return el("div", { class: "sl" }, el("small", { class: "muted" }, k), el("b", null, String(v))); }
function heatmap() {
  const box = el("div", { class: "heat", dir: "ltr", "aria-label": "خريطة الالتزام" });
  const goal = S.settings.goalMin || 60;
  const start = new Date(); start.setDate(start.getDate() - 34);
  for (let i = 0; i < 35; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const L = S.log[dayKey(d)]; const m = L ? L.s / 60 : 0;
    const lvl = m <= 0 ? 0 : m < goal * 0.25 ? 1 : m < goal * 0.6 ? 2 : m < goal ? 3 : 4;
    box.appendChild(el("span", { class: "hc l" + lvl + (dayKey(d) === dayKey() ? " today" : ""), title: dayKey(d) + ": " + Math.round(m) + " د" }, String(d.getDate())));
  }
  return el("div", null, box, el("div", { class: "heat-leg" }, el("small", { class: "muted" }, "أقل"), [0, 1, 2, 3, 4].map((l) => el("span", { class: "hc l" + l })), el("small", { class: "muted" }, "الهدف")));
}

/* ---------- REMINDERS ---------- */
const Reminder = {
  dismissed: null, notified: null,
  due() {
    if (!S.settings.remind) return false;
    const now = new Date();
    if (!(S.settings.days || []).includes(now.getDay())) return false;
    const [h, m] = (S.settings.studyTime || "19:00").split(":").map(Number);
    const t = new Date(); t.setHours(h, m, 0, 0);
    if (now < t || now - t > 5 * 3600 * 1000) return false;
    const L = S.log[dayKey()];
    if (L && L.s / 60 >= (S.settings.goalMin || 60) * 0.5) return false;
    return this.dismissed !== dayKey();
  },
  check() {
    if (this.due() && this.notified !== dayKey()) { this.notified = dayKey(); this.notify(); if (UI.cur) UI.banner(); }
  },
  supported() { return "Notification" in window && !HAS_CLAUDE; },
  async notify() {
    if (!S.settings.notify || !this.supported() || Notification.permission !== "granted") return;
    const opts = { body: "حان موعد درس الألمانية (" + S.settings.goalMin + " دقيقة). Los geht's!", icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "daily-lesson", lang: "ar", dir: "rtl" };
    try { const reg = navigator.serviceWorker && (await navigator.serviceWorker.getRegistration()); if (reg) reg.showNotification("Deutschstunde", opts); else new Notification("Deutschstunde", opts); } catch (e) { }
  },
  async enable() {
    if (!this.supported()) return "unsupported";
    let p = Notification.permission;
    if (p === "default") { try { p = await Notification.requestPermission(); } catch (e) { p = "denied"; } }
    S.settings.notify = p === "granted"; save();
    if (p === "granted") PWA.periodic();
    return p;
  },
  rrule() {
    const d = S.settings.days || [];
    if (d.length === 7) return "RRULE:FREQ=DAILY";
    return "RRULE:FREQ=WEEKLY;BYDAY=" + d.map((x) => ["SU", "MO", "TU", "WE", "TH", "FR", "SA"][x]).join(",");
  },
  stamp(date, min) { const d = new Date(date.getTime() + (min || 0) * 60000); return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "T" + pad2(d.getHours()) + pad2(d.getMinutes()) + "00"; },
  firstDate() { const [h, m] = (S.settings.studyTime || "19:00").split(":").map(Number); const d = new Date(); d.setHours(h, m, 0, 0); if (d < new Date()) d.setDate(d.getDate() + 1); return d; },
  gcal() {
    const d = this.firstDate(); const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Africa/Casablanca";
    const p = new URLSearchParams({ action: "TEMPLATE", text: "Deutschstunde – درس الألمانية اليومي", details: "ساعة الألمانية اليومية: افتح تطبيق Deutschstunde وابدأ درس اليوم.", dates: this.stamp(d) + "/" + this.stamp(d, S.settings.goalMin || 60), ctz: tz, recur: this.rrule() });
    return "https://calendar.google.com/calendar/render?" + p.toString();
  },
  ics() {
    const d = this.firstDate();
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Deutschstunde//A1//AR", "BEGIN:VEVENT", "UID:deutschstunde-daily@local", "DTSTAMP:" + this.stamp(new Date()), "DTSTART:" + this.stamp(d), "DTEND:" + this.stamp(d, S.settings.goalMin || 60), this.rrule(), "SUMMARY:Deutschstunde – درس الألمانية اليومي", "DESCRIPTION:افتح التطبيق وابدأ درس اليوم.", "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:حان موعد درس الألمانية", "TRIGGER:PT0M", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  }
};

/* ---------- PWA (installed app only) ---------- */
const PWA = {
  deferred: null, reg: null,
  init() {
    if (HAS_CLAUDE) return;
    window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); this.deferred = e; if (UI.cur && UI.cur.name === "settings") UI.refresh(); });
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("sw.js").then((r) => { this.reg = r; if (S.settings.notify) this.periodic(); }).catch(() => { });
    }
  },
  async periodic() {
    try {
      const reg = this.reg || (navigator.serviceWorker && (await navigator.serviceWorker.ready));
      if (reg && "periodicSync" in reg) {
        const st = await navigator.permissions.query({ name: "periodic-background-sync" }).catch(() => ({ state: "denied" }));
        if (st.state === "granted") await reg.periodicSync.register("daily-reminder", { minInterval: 6 * 3600 * 1000 });
      }
    } catch (e) { }
  },
  async install() { if (!this.deferred) return false; this.deferred.prompt(); const r = await this.deferred.userChoice.catch(() => null); this.deferred = null; return r && r.outcome === "accepted"; },
  standalone() { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; }
};

/* ---------- file save helper ---------- */
async function saveFile(name, text, mime) {
  if (HAS_CLAUDE) {
    try { const dl = await window.claude.use("downloads"); if (dl) { await dl.save({ filename: name, data: text }); UI.toast("تم حفظ الملف"); return true; } } catch (e) { if (e && e.code === "declined") return false; }
    UI.toast("الحفظ غير متاح هنا", "warn"); return false;
  }
  try { const blob = new Blob([text], { type: mime || "application/octet-stream" }); const a = el("a", { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); return true; } catch (e) { UI.toast("تعذّر حفظ الملف", "warn"); return false; }
}

/* ---------- SETTINGS ---------- */
VIEWS.settings = () => {
  const root = el("div", { class: "page" });
  const s = S.settings, p = S.profile;
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "الإعدادات والتنبيهات")));
  const fld = (lab, input, hint) => el("label", { class: "fld" }, el("span", null, lab), input, hint ? el("small", { class: "muted" }, hint) : null);
  const inp = (id, val, o = {}) => { const i = el("input", Object.assign({ class: "inp", id, value: val == null ? "" : val }, o)); return i; };
  // study plan
  const time = inp("setTime", s.studyTime, { type: "time" });
  const goal = el("select", { class: "inp", id: "setGoal" }, [15, 20, 30, 45, 60, 90, 120].map((m) => el("option", { value: m, selected: m === s.goalMin ? true : null }, m + " دقيقة")));
  const days = el("div", { class: "days" }, [1, 2, 3, 4, 5, 6, 0].map((d) => { const b = el("button", { class: "day" + (s.days.includes(d) ? " on" : ""), type: "button", "aria-pressed": s.days.includes(d) ? "true" : "false" }, AR_DAYS_SHORT[d]); b.onclick = () => { const i = s.days.indexOf(d); if (i >= 0) s.days.splice(i, 1); else s.days.push(d); b.classList.toggle("on"); b.setAttribute("aria-pressed", String(s.days.includes(d))); save(); }; return b; }));
  time.onchange = () => { s.studyTime = time.value || "19:00"; Reminder.notified = null; save(); UI.toast("تم تحديث موعد الدراسة"); };
  goal.onchange = () => { s.goalMin = +goal.value; save(); UI.tick(); };
  root.appendChild(el("section", { class: "card" }, el("h3", null, icon("clock"), " خطة الدراسة"), el("div", { class: "form2" }, fld("موعد الدراسة اليومي", time), fld("الهدف اليومي", goal)), fld("أيام الدراسة", days)));
  // reminders
  const remindT = el("input", { type: "checkbox", id: "setRemind", checked: s.remind ? true : null });
  remindT.onchange = () => { s.remind = remindT.checked; save(); UI.banner(); };
  const rem = el("section", { class: "card" }, el("h3", null, icon("bell"), " التنبيهات اليومية"),
    el("label", { class: "toggle" }, remindT, el("span", null, "تذكير داخل التطبيق عند موعد الدراسة (شريط تنبيه عند فتح التطبيق)")));
  if (Reminder.supported()) {
    const st = Notification.permission;
    rem.appendChild(el("div", { class: "row wrap" }, btn(st === "granted" && s.notify ? "إشعارات المتصفح مفعّلة ✓" : "فعّل إشعارات المتصفح", { kind: st === "granted" && s.notify ? "ghost" : "primary", icon: "bell", on: async () => { const r = await Reminder.enable(); UI.toast(r === "granted" ? "تم تفعيل الإشعارات" : r === "denied" ? "رُفض الإذن — فعّله من إعدادات المتصفح للموقع" : "غير مدعوم", r === "granted" ? "check" : "warn"); UI.refresh(); } }),
      st === "granted" && s.notify ? btn("جرّب إشعارًا", { kind: "ghost", on: () => { const n = S.settings.notify; Reminder.notify(); } }) : null));
  }
  rem.append(
    el("p", { class: "muted sm" }, "للتذكير حتى عندما يكون التطبيق مغلقًا، أضف موعدًا متكررًا إلى تقويمك — سيرنّ هاتفك في الوقت المحدد كل يوم:"),
    el("div", { class: "row wrap" },
      el("a", { class: "btn primary", href: Reminder.gcal(), target: "_blank", rel: "noopener" }, icon("calendar"), el("span", null, "أضِف إلى تقويم Google")),
      !HAS_CLAUDE ? btn("تنزيل ملف تقويم (.ics)", { kind: "ghost", icon: "download", on: () => saveFile("deutschstunde-reminder.ics", Reminder.ics(), "text/calendar") }) : null),
    el("details", { class: "box" }, el("summary", null, "متطلبات التنبيه عندما يكون التطبيق مغلقًا"),
      el("ul", { class: "glist" },
        el("li", null, "داخل التطبيق: يظهر شريط تذكير عند فتحه بعد موعد الدراسة إن لم تكمل نصف هدفك."),
        el("li", null, "إشعارات المتصفح: تعمل في النسخة المثبتة (PWA) على Chrome بعد السماح بالإشعارات. Chrome يرسل تذكيرًا في الخلفية عندما يسمح النظام بذلك (المزامنة الدورية) — ليس في الدقيقة نفسها دائمًا."),
        el("li", null, "التذكير الدقيق كل يوم حتى والتطبيق مغلق: استعمل تقويم Google أو ملف التقويم — هذا الأضمن على أي هاتف."),
        el("li", null, "داخل Claude لا تستطيع الصفحة إرسال إشعارات؛ استعمل زر التقويم أعلاه."))));
  root.appendChild(rem);
  // audio
  const vs = el("select", { class: "inp", id: "setVoice" }, el("option", { value: "" }, "تلقائي (أفضل صوت ألماني)"), TTS.voices.map((v) => el("option", { value: v.name, selected: v.name === s.voice ? true : null }, v.name + " (" + v.lang + ")")));
  vs.onchange = () => { s.voice = vs.value; TTS.pick(); save(); TTS.speak("Guten Tag! Ich bin deine Stimme für Deutsch."); };
  const rate = el("input", { type: "range", min: "0.6", max: "1.2", step: "0.05", value: s.rate, id: "setRate", class: "range" });
  const rateV = el("small", { class: "muted" }, Math.round(s.rate * 100) + "%");
  rate.oninput = () => { s.rate = +rate.value; rateV.textContent = Math.round(s.rate * 100) + "%"; }; rate.onchange = () => { save(); TTS.speak("Wie geht es dir?"); };
  root.appendChild(el("section", { class: "card" }, el("h3", null, icon("volume"), " الصوت والنطق"),
    !TTS.ok ? el("p", { class: "note" }, icon("warn"), el("span", null, "متصفحك لا يدعم تحويل النص إلى كلام. استعمل Google Chrome.")) : null,
    TTS.ok && !TTS.voices.length ? el("p", { class: "note" }, icon("info"), el("span", null, "لم يُعثر على صوت ألماني بعد. على أندرويد: الإعدادات ← تحويل النص إلى كلام ← Google ← ثبّت اللغة الألمانية. ثم أعد فتح التطبيق.")) : null,
    el("div", { class: "form2" }, fld("الصوت الألماني", vs), fld("سرعة الكلام", el("div", { class: "row" }, rate, rateV))),
    el("div", { class: "row wrap" }, btn("اختبر الصوت", { kind: "ghost", icon: "volume", on: () => TTS.speak("Hallo! Herzlich willkommen im Deutschkurs.") }),
      btn("اختبر الميكروفون", { kind: "ghost", icon: "mic", on: () => { if (!SR.Ctor) { UI.toast("التعرّف على الصوت غير مدعوم هنا — استعمل Chrome", "warn"); return; } UI.toast("قل: Guten Morgen", "mic"); SR.listen((a) => UI.toast("سمعت: " + a[0], "check"), (e) => UI.toast(e === "not-allowed" || e === "service-not-allowed" ? "الميكروفون محجوب في هذه النسخة" : "لم أسمع شيئًا", "warn")); } }))));
  // AI
  const aiT = el("input", { type: "checkbox", id: "setAI", checked: s.aiCheck ? true : null });
  aiT.onchange = () => { s.aiCheck = aiT.checked; save(); };
  root.appendChild(el("section", { class: "card" }, el("h3", null, icon("sparkle"), " المدرّس الذكي"),
    el("p", { class: "muted" }, AI.available() ? "متاح: محادثة حرة، تصحيح الكتابة والترجمة والردود الحرة في الحوارات." : AI.state === "denied" ? "غير مسموح في هذه الزيارة." : "غير متاح في هذه النسخة (يعمل داخل Claude فقط)."),
    el("label", { class: "toggle" }, aiT, el("span", null, "صحّح إجاباتي الحرة تلقائيًا بالمدرّس الذكي عندما لا تطابق الإجابة النموذجية"))));
  // profile
  const pf = el("div", { class: "form2" }, fld("اسمك للتحية", inp("pName", p.name)), fld("الاسم باللاتينية (للحوارات)", inp("pFirst", p.first, { dir: "ltr" })), fld("اسم العائلة (للتهجئة)", inp("pLast", p.last, { dir: "ltr" })), fld("بلدك بالألمانية", inp("pLand", p.land, { dir: "ltr" })), fld("مدينتك", inp("pCity", p.city, { dir: "ltr" })));
  $$("input", pf).forEach((i) => i.addEventListener("change", () => { p.name = $("#pName").value.trim(); p.first = $("#pFirst").value.trim(); p.last = $("#pLast").value.trim(); p.land = $("#pLand").value.trim() || "Marokko"; p.city = $("#pCity").value.trim(); p.onboarded = true; save(); UI.toast("تم الحفظ"); }));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "بياناتك (تُستعمل في الحوارات)"), pf));
  // install
  const inst = el("section", { class: "card" }, el("h3", null, icon("phone"), " التثبيت على الهاتف"));
  if (HAS_CLAUDE) inst.append(el("p", { class: "muted" }, "هذه النسخة تعمل داخل Claude ويُحفظ تقدّمك في حسابك ويتزامن بين هاتفك وحاسوبك."),
    el("ul", { class: "glist" }, el("li", null, "لاختصار على الشاشة الرئيسية: افتح الرابط في Chrome ← القائمة ⋮ ← «إضافة إلى الشاشة الرئيسية»."), el("li", null, "للنسخة القابلة للتثبيت (تعمل بدون إنترنت، مع الميكروفون والإشعارات): استعمل حزمة التطبيق المرفقة واتبع دليل التثبيت فيها.")));
  else if (PWA.standalone()) inst.append(el("p", null, "التطبيق مثبّت ويعمل كتطبيق مستقل ✓"));
  else inst.append(PWA.deferred ? btn("ثبّت التطبيق على هذا الجهاز", { kind: "primary", icon: "download", on: async () => { await PWA.install(); UI.refresh(); } }) : el("p", { class: "muted" }, "في Chrome: القائمة ⋮ ← «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية»."));
  root.appendChild(inst);
  // data
  const fileIn = el("input", { type: "file", accept: ".json,application/json", id: "impFile", hidden: true });
  fileIn.onchange = async () => {
    const f = fileIn.files[0]; if (!f) return;
    try { const data = JSON.parse(await f.text()); if (!data || !data.v || !data.log) throw 0; if (!(await UI.confirm("استيراد النسخة الاحتياطية؟", "سيحلّ محلّ تقدّمك الحالي على هذا الجهاز.", "استيراد"))) return; window.S = mergeDefaults(data); S.updatedAt = Date.now(); Store.touch(); Store.flush(); UI.toast("تم الاستيراد"); UI.go("home", null, { root: true }); }
    catch (e) { UI.toast("الملف غير صالح", "warn"); }
  };
  root.appendChild(el("section", { class: "card" }, el("h3", null, icon("cloud"), " بياناتك وتقدّمك"),
    el("p", { class: "muted" }, Store.cloudReady ? "يُحفظ تقدّمك تلقائيًا في حسابك على Claude ويتزامن بين أجهزتك، مع نسخة على هذا الجهاز." : "يُحفظ تقدّمك تلقائيًا على هذا الجهاز. لنقله إلى جهاز أو نسخة أخرى استعمل النسخة الاحتياطية."),
    el("div", { class: "row wrap" },
      btn("تصدير نسخة احتياطية", { kind: "ghost", icon: "download", on: () => saveFile("deutschstunde-backup-" + dayKey() + ".json", JSON.stringify(S), "application/json") }),
      btn("استيراد نسخة", { kind: "ghost", icon: "upload", on: () => fileIn.click() }), fileIn,
      btn("مسح كل التقدّم", { kind: "danger", icon: "trash", on: async () => { if (await UI.confirm("مسح كل التقدّم؟", "سيُحذف سجلك ومراجعاتك وأخطاؤك نهائيًا. صدّر نسخة احتياطية أولًا إن أردت.", "امسح", true)) { const prof = S.profile, set = S.settings; window.S = defaultState(); S.profile = prof; S.settings = set; Store.touch(); Store.flush(); UI.go("home", null, { root: true }); UI.toast("تم المسح"); } } }))));
  root.appendChild(el("p", { class: "muted sm center" }, "Deutschstunde · مبني على هيكل ومحتوى كتاب «DaF kompakt neu A1» (Klett). الشروح والتمارين والحوارات مكتوبة خصيصًا لهذا التطبيق للتعلّم الذاتي."));
  return root;
};

/* ---------- EXAM PRACTICE ---------- */
VIEWS.exam = () => {
  const E = C.exam; const ep = S.progress.exam || (S.progress.exam = {});
  const root = el("div", { class: "page" });
  root.appendChild(el("header", { class: "ph-h" }, el("h1", null, "Start Deutsch 1"), el("p", { class: "lead" }, E.title), el("p", { class: "muted" }, E.intro)));
  const parts = el("div", { class: "stack" });
  for (const P of E.parts) {
    if (P.items) parts.appendChild(cardLink({ icon: P.id === "hoeren" ? "ear" : "book", title: P.ar + " · " + P.de, sub: P.info, badge: ep[P.id] != null ? ep[P.id] + "%" : null, on: () => Session.start({ title: "Start Deutsch 1 · " + P.de, items: P.items.slice(), passMark: 60, onFinish: (r) => { ep[P.id] = Math.max(ep[P.id] || 0, r.pct); save(); } }) }));
  }
  root.appendChild(parts);
  const W = E.parts.find((p) => p.id === "schreiben");
  const formBox = el("div", { class: "form2" }, W.form.fields.map((f, i) => el("label", { class: "fld" }, el("span", { dir: "ltr" }, f.label), el("input", { class: "inp", id: "ef" + i, dir: "ltr", lang: "de", autocomplete: "off" }))));
  const formOut = el("div");
  root.appendChild(el("section", { class: "card" }, el("h3", null, "الكتابة · الجزء 1: استمارة"), el("p", { class: "muted" }, W.form.ar), formBox,
    el("div", { class: "row end" }, btn("صحّح", { kind: "primary", icon: "check", on: () => {
      let good = 0; clear(formOut);
      W.form.fields.forEach((f, i) => { const v = $("#ef" + i).value; const ok = judge(v, f.a, { typo: true, ignoreCase: true }).ok; if (ok) good++; $("#ef" + i).classList.toggle("good", ok); $("#ef" + i).classList.toggle("bad", !ok); if (!ok) formOut.appendChild(el("p", { class: "muted sm" }, f.label + ": ", deSpan(f.a[0]))); recordAnswer({ id: "Xform:" + i, tag: "schreiben" }, ok); });
      formOut.prepend(el("p", null, el("b", null, good + " / " + W.form.fields.length), " صحيحة"));
    } })), formOut));
  root.appendChild(cardLink({ icon: "pencil", title: "الكتابة · الجزء 2: رسالة قصيرة", sub: W.letter.ar, on: () => Writing.start({ id: "X", de: "Start Deutsch 1", write: [W.letter] }, 0) }));
  const Sp = E.parts.find((p) => p.id === "sprechen");
  root.appendChild(el("section", { class: "card" }, el("h3", null, "المحادثة · الجزء 1: قدّم نفسك"), el("p", { class: "muted" }, Sp.info + " " + Sp.intro.ar),
    el("div", { class: "keys", dir: "ltr" }, Sp.intro.keys.map((k) => el("span", { class: "key" }, k))),
    el("details", { class: "box" }, el("summary", null, "نموذج للتقديم"), el("div", { class: "row" }, deSpan(fillPH(Sp.intro.model)), playBtn(Sp.intro.model, { small: true }))),
    Pron.list(Sp.intro.model.split(/(?<=\.)\s+/))));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "المحادثة · الجزء 2: أسئلة وأجوبة"), el("p", { class: "muted" }, "لكل بطاقة: كوّن سؤالًا من الكلمة ثم أجب عنه. اكشف النموذج بعد المحاولة."),
    el("div", { class: "cards2" }, Sp.cards.map((c) => { const ans = el("div", { class: "reveal", hidden: true }, el("div", { class: "row" }, deSpan(c.q), playBtn(c.q, { small: true })), el("div", { class: "row" }, deSpan(c.a), playBtn(c.a, { small: true }))); const b = el("button", { class: "ecard", type: "button" }, el("small", { class: "muted" }, "Thema: " + c.theme), el("b", { dir: "ltr" }, c.word)); b.onclick = () => { ans.hidden = !ans.hidden; }; return el("div", null, b, ans); }))));
  root.appendChild(el("section", { class: "card" }, el("h3", null, "المحادثة · الجزء 3: الطلب والرد"), el("div", { class: "cards2" }, Sp.requests.map((c) => { const ans = el("div", { class: "reveal", hidden: true }, el("div", { class: "row" }, deSpan(c.a), playBtn(c.a, { small: true }))); const b = el("button", { class: "ecard", type: "button" }, el("b", { dir: "ltr" }, c.word)); b.onclick = () => { ans.hidden = !ans.hidden; }; return el("div", null, b, ans); }))));
  return root;
};

/* ---------- BOOT ---------- */
function boot() {
  buildIndex();
  const local = Store.loadLocal();
  if (local) window.S = mergeDefaults(local);
  UI.init();
  UI.setSync("local");
  TTS.init();
  Activity.start();
  PWA.init();
  UI.go("home", null, { root: true });
  setInterval(() => Reminder.check(), 30000);
  Store.initCloud(() => { TTS.pick(); UI.refresh(); UI.tick(); });
  AI.init();
  setTimeout(() => { checkAchievements(); Reminder.check(); }, 1500);
  window.addEventListener("pagehide", () => Store.flush());
  if (window.__DS_TEST) window.__DS = { Session, Flash, Dialog, UNITS, LESSON, UI, Overlay, Writing, Pron, C, vocabQuiz, unitQuiz, lessonTest, genVocab, getItem, judge, judgePatterns, pluralOf, state: () => S };
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();

})();