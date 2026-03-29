// ---------- Cookie Helpers ----------
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// ---------- Style Functions ----------
// Old English (Mathematical Fraktur)
function toOldEnglish(text) {
  const map = {
    a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
    i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
    q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
    y: "𝔶", z: "𝔷",

    A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
    I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
    Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
    Y: "𝔜", Z: "ℨ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


function toCursive(text) {
  const map = {
    a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽",
    i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅",
    q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍",
    y: "𝓎", z: "𝓏",
    A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ",
    I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫",
    Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳",
    Y: "𝒴", Z: "𝒵"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toGothic(text) {
  const map = {
    a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
    i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
    q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
    y: "𝔶", z: "𝔷",
    A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
    I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
    Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
    Y: "𝔜", Z: "ℨ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toCurlyWrap(text) {
  return text.split("").map(ch => `⊰${ch}⊱`).join("");
}

function toDoubleStruck(text) {
  const map = {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙",
    i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡",
    q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩",
    y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ",
    I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ",
    Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏",
    Y: "𝕐", Z: "ℤ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


function toSmallCaps(text) {
  const map = {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ",
    i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
    q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
    y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ",
    I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ",
    Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x",
    Y: "ʏ", Z: "ᴢ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Superscript
function toSuperscripts(text) {
  const map = {
    a:"ᵃ", b:"ᵇ", c:"ᶜ", d:"ᵈ", e:"ᵉ", f:"ᶠ", g:"ᵍ", h:"ʰ",
    i:"ⁱ", j:"ʲ", k:"ᵏ", l:"ˡ", m:"ᵐ", n:"ⁿ", o:"ᵒ", p:"ᵖ",
    q:"ᑫ", r:"ʳ", s:"ˢ", t:"ᵗ", u:"ᵘ", v:"ᵛ", w:"ʷ", x:"ˣ",
    y:"ʸ", z:"ᶻ",
    A:"ᴬ", B:"ᴮ", C:"ᶜ", D:"ᴰ", E:"ᴱ", F:"ᶠ", G:"ᴳ", H:"ᴴ",
    I:"ᴵ", J:"ᴶ", K:"ᴷ", L:"ᴸ", M:"ᴹ", N:"ᴺ", O:"ᴼ", P:"ᴾ",
    Q:"Q", R:"ᴿ", S:"ˢ", T:"ᵀ", U:"ᵁ", V:"ⱽ", W:"ᵂ", X:"ˣ",
    Y:"ʸ", Z:"ᶻ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Subscript
function toSubscript(text) {
  const map = {
    a:"ₐ", b:"ᵦ", c:"c", d:"d", e:"ₑ", f:"f", g:"g", h:"ₕ",
    i:"ᵢ", j:"ⱼ", k:"ₖ", l:"ₗ", m:"ₘ", n:"ₙ", o:"ₒ", p:"ₚ",
    q:"q", r:"ᵣ", s:"ₛ", t:"ₜ", u:"ᵤ", v:"ᵥ", w:"w", x:"ₓ",
    y:"ᵧ", z:"z",
    A:"ₐ", B:"ᵦ", C:"C", D:"D", E:"ₑ", F:"F", G:"G", H:"ₕ",
    I:"ᵢ", J:"ⱼ", K:"ₖ", L:"ₗ", M:"ₘ", N:"ₙ", O:"ₒ", P:"ₚ",
    Q:"Q", R:"ᵣ", S:"ₛ", T:"ₜ", U:"ᵤ", V:"ᵥ", W:"W", X:"ₓ",
    Y:"ᵧ", Z:"Z"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


function toBubble(text) {
  const map = {
    a:"ⓐ", b:"ⓑ", c:"ⓒ", d:"ⓓ", e:"ⓔ", f:"ⓕ", g:"ⓖ", h:"ⓗ",
    i:"ⓘ", j:"ⓙ", k:"ⓚ", l:"ⓛ", m:"ⓜ", n:"ⓝ", o:"ⓞ", p:"ⓟ",
    q:"ⓠ", r:"ⓡ", s:"ⓢ", t:"ⓣ", u:"ⓤ", v:"ⓥ", w:"ⓦ", x:"ⓧ",
    y:"ⓨ", z:"ⓩ",
    A:"Ⓐ", B:"Ⓑ", C:"Ⓒ", D:"Ⓓ", E:"Ⓔ", F:"Ⓕ", G:"Ⓖ", H:"Ⓗ",
    I:"Ⓘ", J:"Ⓙ", K:"Ⓚ", L:"Ⓛ", M:"Ⓜ", N:"Ⓝ", O:"Ⓞ", P:"Ⓟ",
    Q:"Ⓠ", R:"Ⓡ", S:"Ⓢ", T:"Ⓣ", U:"Ⓤ", V:"Ⓥ", W:"Ⓦ", X:"Ⓧ",
    Y:"Ⓨ", Z:"Ⓩ",
   
    "0":"⓪", "1":"①", "2":"②", "3":"③", "4":"④",
    "5":"⑤", "6":"⑥", "7":"⑦", "8":"⑧", "9":"⑨"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toCurrency(text) {
  const map = {
    a:"₳", b:"฿", c:"₵", d:"Đ", e:"Ɇ", f:"₣", g:"₲", h:"Ⱨ",
    i:"ł", j:"J", k:"₭", l:"Ⱡ", m:"₥", n:"₦", o:"Ø", p:"₱",
    q:"Q", r:"Ɽ", s:"₴", t:"₮", u:"Ʉ", v:"V", w:"₩", x:"Ӿ",
    y:"Ɏ", z:"Ⱬ",
    A:"₳", B:"฿", C:"₵", D:"Đ", E:"Ɇ", F:"₣", G:"₲", H:"Ⱨ",
    I:"ł", J:"J", K:"₭", L:"Ⱡ", M:"₥", N:"₦", O:"Ø", P:"₱",
    Q:"Q", R:"Ɽ", S:"₴", T:"₮", U:"Ʉ", V:"V", W:"₩", X:"Ӿ",
    Y:"Ɏ", Z:"Ⱬ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toFantasy(text) {
  const map = {
    a:"ꪖ", b:"ꪉ", c:"ᨶ", d:"ᦔ", e:"ꫀ", f:"ᠻ", g:"ᦋ", h:"ꫝ",
    i:"ỉ", j:"᧒", k:"ƙ", l:"ꪶ", m:"ꪑ", n:"᭢", o:"ꪮ", p:"ᩏ",
    q:"ᧁ", r:"ꪹ", s:"క", t:"ᡶ", u:"ꪊ", v:"ꪜ", w:"᭙", x:"᥊",
    y:"ꪗ", z:"ɀ",
    A:"ꪖ", B:"ꪉ", C:"ᨶ", D:"ᦔ", E:"ꫀ", F:"ᠻ", G:"ᦋ", H:"ꫝ",
    I:"ỉ", J:"᧒", K:"ƙ", L:"ꪶ", M:"ꪑ", N:"᭢", O:"ꪮ", P:"ᩏ",
    Q:"ᧁ", R:"ꪹ", S:"క", T:"ᡶ", U:"ꪊ", V:"ꪜ", W:"᭙", X:"᥊",
    Y:"ꪗ", Z:"ɀ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toRusify(text) {
  const map = {
    a:"а", b:"б", c:"c", d:"д", e:"ё", f:"f", g:"g", h:"н",
    i:"ї", j:"j", k:"к", l:"г", m:"ѫ", n:"п", o:"ѳ", p:"p",
    q:"ф", r:"я", s:"$", t:"т", u:"ц", v:"ѵ", w:"щ", x:"ж",
    y:"ч", z:"з",
    A:"А", B:"Б", C:"C", D:"Д", E:"Є", F:"F", G:"G", H:"H",
    I:"Ї", J:"J", K:"К", L:"Г", M:"Ѫ", N:"Й", O:"Ѳ", P:"P",
    Q:"Ф", R:"Я", S:"$", T:"T", U:"Ц", V:"Ѵ", W:"Ш", X:"Ж",
    Y:"Ч", Z:"З"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toMonospace(text) {
  const map = {
    a:"𝚊", b:"𝚋", c:"𝚌", d:"𝚍", e:"𝚎", f:"𝚏", g:"𝚐", h:"𝚑",
    i:"𝚒", j:"𝚓", k:"𝚔", l:"𝚕", m:"𝚖", n:"𝚗", o:"𝚘", p:"𝚙",
    q:"𝚚", r:"𝚛", s:"𝚜", t:"𝚝", u:"𝚞", v:"𝚟", w:"𝚠", x:"𝚡",
    y:"𝚢", z:"𝚣",
    A:"𝙰", B:"𝙱", C:"𝙲", D:"𝙳", E:"𝙴", F:"𝙵", G:"𝙶", H:"𝙷",
    I:"𝙸", J:"𝙹", K:"𝙺", L:"𝙻", M:"𝙼", N:"𝙽", O:"𝙾", P:"𝙿",
    Q:"𝚀", R:"𝚁", S:"𝚂", T:"𝚃", U:"𝚄", V:"𝚅", W:"𝚆", X:"𝚇",
    Y:"𝚈", Z:"𝚉"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toSquare(text) {
  const map = {
    A:"🄰", B:"🄱", C:"🄲", D:"🄳", E:"🄴", F:"🄵", G:"🄶", H:"🄷",
    I:"🄸", J:"🄹", K:"🄺", L:"🄻", M:"🄼", N:"🄽", O:"🄾", P:"🄿",
    Q:"🅀", R:"🅁", S:"🅂", T:"🅃", U:"🅄", V:"🅅", W:"🅆", X:"🅇",
    Y:"🅈", Z:"🅉",
    a:"🄰", b:"🄱", c:"🄲", d:"🄳", e:"🄴", f:"🄵", g:"🄶", h:"🄷",
    i:"🄸", j:"🄹", k:"🄺", l:"🄻", m:"🄼", n:"🄽", o:"🄾", p:"🄿",
    q:"🅀", r:"🅁", s:"🅂", t:"🅃", u:"🅄", v:"🅅", w:"🅆", x:"🅇",
    y:"🅈", z:"🅉"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toInfinite(text) {
  return text.split("").map(ch => {
    if (/[a-zA-Z]/.test(ch)) {
      return ch + "͚"; // add combining underline
    }
    return ch;
  }).join(" ");
}
function toCrypticItalic(text) {
  const map = {
    a: "𐌀", b: "𐌁", c: "𐌂", d: "𐌃", e: "𐌄", f: "𐌅", g: "Ᏽ", h: "𐋅",
    i: "𐌉", j: "Ꮭ", k: "𐌊", l: "𐌋", m: "𐌌", n: "𐌍", o: "Ꝋ", p: "𐌐",
    q: "𐌒", r: "𐌓", s: "𐌔", t: "𐌕", u: "𐌵", v: "ᕓ", w: "Ꮤ", x: "𐋄",
    y: "𐌙", z: "Ɀ",

    A: "𐌀", B: "𐌁", C: "𐌂", D: "𐌃", E: "𐌄", F: "𐌅", G: "Ᏽ", H: "𐋅",
    I: "𐌉", J: "Ꮭ", K: "𐌊", L: "𐌋", M: "𐌌", N: "𐌍", O: "Ꝋ", P: "𐌐",
    Q: "𐌒", R: "𐌓", S: "𐌔", T: "𐌕", U: "𐌵", V: "ᕓ", W: "Ꮤ", X: "𐋄",
    Y: "𐌙", Z: "Ɀ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toParenthesis(text) {
  const map = {
    a: "⒜", b: "⒝", c: "⒞", d: "⒟", e: "⒠", f: "⒡", g: "⒢", h: "⒣",
    i: "⒤", j: "⒥", k: "⒦", l: "⒧", m: "⒨", n: "⒩", o: "⒪", p: "⒫",
    q: "⒬", r: "⒭", s: "⒮", t: "⒯", u: "⒰", v: "⒱", w: "⒲", x: "⒳",
    y: "⒴", z: "⒵",

    A: "⒜", B: "⒝", C: "⒞", D: "⒟", E: "⒠", F: "⒡", G: "⒢", H: "⒣",
    I: "⒤", J: "⒥", K: "⒦", L: "⒧", M: "⒨", N: "⒩", O: "⒪", P: "⒫",
    Q: "⒬", R: "⒭", S: "⒮", T: "⒯", U: "⒰", V: "⒱", W: "⒲", X: "⒳",
    Y: "⒴", Z: "⒵"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toJapanese(text) {
  const map = {
    a: "卂", b: "乃", c: "匚", d: "ᗪ", e: "乇", f: "千", g: "Ꮆ", h: "卄",
    i: "丨", j: "ﾌ", k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩",
    q: "Ɋ", r: "尺", s: "丂", t: "ㄒ", u: "ㄩ", v: "ᐯ", w: "山", x: "乂",
    y: "ㄚ", z: "乙",

    A: "卂", B: "乃", C: "匚", D: "ᗪ", E: "乇", F: "千", G: "Ꮆ", H: "卄",
    I: "丨", J: "ﾌ", K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩",
    Q: "Ɋ", R: "尺", S: "丂", T: "ㄒ", U: "ㄩ", V: "ᐯ", W: "山", X: "乂",
    Y: "ㄚ", Z: "乙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Love Emojis Inverted Style
function toLoveInverted(text) {
  const map = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
    i: "ı", j: "ɾ", k: "ʞ", l: "ן", m: "ɯ", n: "u", o: "o", p: "d",
    q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
    y: "ʎ", z: "z",

    A: "∀", B: "ᗺ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H",
    I: "I", J: "ſ", K: "ꓘ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ",
    Q: "ტ", R: "ᴚ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X",
    Y: "⅄", Z: "Z"
  };

  return "😍💞💘 " + text.split("").map(ch => map[ch] || ch).join("") + " 💔💏💖";
}
function toFraktur(text) {
  const map = {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍",
    i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕",
    q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝",
    y: "𝖞", z: "𝖟",

    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳",
    I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻",
    Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃",
    Y: "𝖄", Z: "𝖅"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toWide(text) {
  const map = {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ",
    i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ",
    q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ",
    y: "ｙ", z: "ｚ",

    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ",
    I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ",
    Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ",
    Y: "Ｙ", Z: "Ｚ"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
function toSkyBlue(text) {
  const map = {
    a: "🇦", b: "🇧", c: "🇨", d: "🇩", e: "🇪", f: "🇫", g: "🇬", h: "🇭",
    i: "🇮", j: "🇯", k: "🇰", l: "🇱", m: "🇲", n: "🇳", o: "🇴", p: "🇵",
    q: "🇶", r: "🇷", s: "🇸", t: "🇹", u: "🇺", v: "🇻", w: "🇼", x: "🇽",
    y: "🇾", z: "🇿",

    A: "🇦", B: "🇧", C: "🇨", D: "🇩", E: "🇪", F: "🇫", G: "🇬", H: "🇭",
    I: "🇮", J: "🇯", K: "🇰", L: "🇱", M: "🇲", N: "🇳", O: "🇴", P: "🇵",
    Q: "🇶", R: "🇷", S: "🇸", T: "🇹", U: "🇺", V: "🇻", W: "🇼", X: "🇽",
    Y: "🇾", Z: "🇿"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
// Inverted Squares (Negative Squared Latin Capital Letters)
function toInvertedSquares(text) {
  const map = {
    A:"🅰", B:"🅱", C:"🅲", D:"🅳", E:"🅴", F:"🅵", G:"🅶", H:"🅷",
    I:"🅸", J:"🅹", K:"🅺", L:"🅻", M:"🅼", N:"🅽", O:"🅾", P:"🅿",
    Q:"🆀", R:"🆁", S:"🆂", T:"🆃", U:"🆄", V:"🆅", W:"🆆", X:"🆇",
    Y:"🆈", Z:"🆉",
    a:"🅰", b:"🅱", c:"🅲", d:"🅳", e:"🅴", f:"🅵", g:"🅶", h:"🅷",
    i:"🅸", j:"🅹", k:"🅺", l:"🅻", m:"🅼", n:"🅽", o:"🅾", p:"🅿",
    q:"🆀", r:"🆁", s:"🆂", t:"🆃", u:"🆄", v:"🆅", w:"🆆", x:"🆇",
    y:"🆈", z:"🆉"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
// Luni Tools Style
function toLuniTools(text) {
  const map = {
    A: "Ƹ", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", H: "H",
    I: "I", J: "Ⴑ", K: "⋊", L: "⅃", M: "M", N: "Ͷ", O: "O", P: "ꟼ",
    Q: "Ọ", R: "Я", S: "Ꙅ", T: "T", U: "U", V: "V", W: "W", X: "X",
    Y: "Y", Z: "ƹ",

    a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ",
    i: "i", j: "ꞁ", k: "ʞ", l: "|", m: "m", n: "ᴎ", o: "o", p: "q",
    q: "p", r: "ɿ", s: "ꙅ", t: "ƚ", u: "u", v: "v", w: "w", x: "x",
    y: "ʏ", z: "ƹ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Mystic Style
function toMystic(text) {
  const map = {
    a: "á", b: "ḃ", c: "ć", d: "ď", e: "é", f: "ḟ", g: "ǵ", h: "ḣ",
    i: "í", j: "ĵ", k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ó", p: "ṕ",
    q: "ɋ", r: "ŕ", s: "ś", t: "ṫ", u: "ú", v: "ṽ", w: "ẃ", x: "ẋ",
    y: "ý", z: "ź",
    A: "Á", B: "Ḃ", C: "Ć", D: "Ď", E: "É", F: "Ḟ", G: "Ǵ", H: "Ḣ",
    I: "Í", J: "Ĵ", K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ó", P: "Ṕ",
    Q: "Ɋ", R: "Ŕ", S: "Ś", T: "Ṫ", U: "Ú", V: "Ṽ", W: "Ẃ", X: "Ẋ",
    Y: "Ý", Z: "Ź"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Crystal Style
function toCrystal(text) {
  const map = {
    a: "ä", b: "ƀ", c: "ç", d: "đ", e: "ë", f: "ƒ", g: "ģ", h: "ħ",
    i: "ï", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "ö", p: "ṗ",
    q: "ʠ", r: "ř", s: "ş", t: "ť", u: "ü", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ÿ", z: "ž",
    A: "Ä", B: "Ƀ", C: "Ç", D: "Đ", E: "Ë", F: "Ƒ", G: "Ģ", H: "Ħ",
    I: "Ï", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Ö", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ť", U: "Ü", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ÿ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Arcane Style
function toArcane(text) {
  const map = {
    a: "â", b: "ƀ", c: "ĉ", d: "ḓ", e: "ê", f: "ϝ", g: "ĝ", h: "ḧ",
    i: "î", j: "ʝ", k: "ḳ", l: "ļ", m: "ṃ", n: "ñ", o: "ô", p: "ᵱ",
    q: "ʠ", r: "ŗ", s: "ŝ", t: "ṯ", u: "û", v: "ѵ", w: "ŵ", x: "ẋ",
    y: "ŷ", z: "ẑ",
    A: "Â", B: "Ƀ", C: "Ĉ", D: "Ḓ", E: "Ê", F: "Ƒ", G: "Ĝ", H: "Ḧ",
    I: "Î", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ñ", O: "Ô", P: "Ṕ",
    Q: "Ɋ", R: "Ŗ", S: "Ŝ", T: "Ṯ", U: "Û", V: "Ѵ", W: "Ŵ", X: "Ẋ",
    Y: "Ŷ", Z: "Ẑ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Shadow Style
function toShadow(text) {
  const map = {
    a: "à", b: "ƀ", c: "ċ", d: "đ", e: "è", f: "ḟ", g: "ġ", h: "ḥ",
    i: "ì", j: "ĵ", k: "ḵ", l: "ļ", m: "ṁ", n: "ǹ", o: "ò", p: "ṕ",
    q: "ʠ", r: "ȑ", s: "ş", t: "ț", u: "ù", v: "ṿ", w: "ẁ", x: "ẋ",
    y: "ỳ", z: "ż",
    A: "À", B: "Ƀ", C: "Ċ", D: "Đ", E: "È", F: "Ḟ", G: "Ġ", H: "Ḥ",
    I: "Ì", J: "Ĵ", K: "Ḵ", L: "Ļ", M: "Ṁ", N: "Ǹ", O: "Ò", P: "Ṕ",
    Q: "Ɋ", R: "Ȑ", S: "Ş", T: "Ț", U: "Ù", V: "Ṿ", W: "Ẁ", X: "Ẋ",
    Y: "Ỳ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Solar Style
function toSolar(text) {
  const map = {
    a: "ā", b: "ƀ", c: "č", d: "ď", e: "ē", f: "ḟ", g: "ğ", h: "ĥ",
    i: "ī", j: "ĵ", k: "ķ", l: "ĺ", m: "ṁ", n: "ņ", o: "ō", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ū", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ȳ", z: "ž",
    A: "Ā", B: "Ƀ", C: "Č", D: "Ď", E: "Ē", F: "Ḟ", G: "Ğ", H: "Ĥ",
    I: "Ī", J: "Ĵ", K: "Ķ", L: "Ĺ", M: "Ṁ", N: "Ņ", O: "Ō", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ū", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ȳ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ember Style
function toEmber(text) {
  const map = {
    a: "ã", b: "ƀ", c: "ç", d: "ď", e: "ẽ", f: "ƒ", g: "ģ", h: "ħ",
    i: "ĩ", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "õ", p: "ṕ",
    q: "ɋ", r: "ř", s: "ş", t: "ţ", u: "ũ", v: "ṽ", w: "ŵ", x: "ẋ",
    y: "ỹ", z: "ž",
    A: "Ã", B: "Ƀ", C: "Ç", D: "Ď", E: "Ẽ", F: "Ƒ", G: "Ģ", H: "Ħ",
    I: "Ĩ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Õ", P: "Ṕ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ţ", U: "Ũ", V: "Ṽ", W: "Ŵ", X: "Ẋ",
    Y: "Ỹ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Frost Style
function toFrost(text) {
  const map = {
    a: "å", b: "ƀ", c: "ç", d: "đ", e: "ë", f: "ḟ", g: "ģ", h: "ḧ",
    i: "ï", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "ö", p: "ṗ",
    q: "ʠ", r: "ř", s: "ş", t: "ť", u: "ü", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ÿ", z: "ž",
    A: "Å", B: "Ƀ", C: "Ç", D: "Đ", E: "Ë", F: "Ḟ", G: "Ģ", H: "Ḧ",
    I: "Ï", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Ö", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ť", U: "Ü", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ÿ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Storm Style
function toStorm(text) {
  const map = {
    a: "ǎ", b: "ƀ", c: "č", d: "ď", e: "ě", f: "ƒ", g: "ǧ", h: "ȟ",
    i: "ǐ", j: "ĵ", k: "ǩ", l: "ľ", m: "ṁ", n: "ň", o: "ǒ", p: "ṕ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ǎ", B: "Ƀ", C: "Č", D: "Ď", E: "Ě", F: "Ƒ", G: "Ǧ", H: "Ȟ",
    I: "Ǐ", J: "Ĵ", K: "Ǩ", L: "Ľ", M: "Ṁ", N: "Ň", O: "Ǒ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Lunar Style
function toLunar(text) {
  const map = {
    a: "ă", b: "ƀ", c: "ĉ", d: "ď", e: "ĕ", f: "ƒ", g: "ğ", h: "ḩ",
    i: "ĭ", j: "ĵ", k: "ķ", l: "ĺ", m: "ṁ", n: "ň", o: "ŏ", p: "ṕ",
    q: "ɋ", r: "ř", s: "ŝ", t: "ť", u: "ŭ", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ŷ", z: "ž",
    A: "Ă", B: "Ƀ", C: "Ĉ", D: "Ď", E: "Ĕ", F: "Ƒ", G: "Ğ", H: "Ḩ",
    I: "Ĭ", J: "Ĵ", K: "Ķ", L: "Ĺ", M: "Ṁ", N: "Ň", O: "Ŏ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ŝ", T: "Ť", U: "Ŭ", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ŷ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Cosmic Style
function toCosmic(text) {
  const map = {
    a: "ȧ", b: "ƀ", c: "ċ", d: "ď", e: "ė", f: "ƒ", g: "ġ", h: "ḧ",
    i: "ı", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ṅ", o: "ȯ", p: "ṕ",
    q: "ɋ", r: "ŕ", s: "ś", t: "ṫ", u: "ŭ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ẏ", z: "ż",
    A: "Ȧ", B: "Ƀ", C: "Ċ", D: "Ď", E: "Ė", F: "Ƒ", G: "Ġ", H: "Ḧ",
    I: "İ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ṅ", O: "Ȯ", P: "Ṗ",
    Q: "Ɋ", R: "Ŕ", S: "Ś", T: "Ṫ", U: "Ŭ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ẏ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Rune Style
function toRune(text) {
  const map = {
    a: "ấ", b: "ƀ", c: "č", d: "ď", e: "ế", f: "ƒ", g: "ǧ", h: "ḫ",
    i: "ǐ", j: "ĵ", k: "ḱ", l: "ľ", m: "ṃ", n: "ň", o: "ố", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ấ", B: "Ƀ", C: "Č", D: "Ď", E: "Ế", F: "Ƒ", G: "Ǧ", H: "Ḫ",
    I: "Ǐ", J: "Ĵ", K: "Ḱ", L: "Ľ", M: "Ṃ", N: "Ň", O: "Ố", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Infernal Style
function toInfernal(text) {
  const map = {
    a: "ầ", b: "ƀ", c: "ç", d: "ḓ", e: "ề", f: "ƒ", g: "ģ", h: "ḥ",
    i: "ǐ", j: "ĵ", k: "ḳ", l: "ļ", m: "ṃ", n: "ǹ", o: "ồ", p: "ṕ",
    q: "ʠ", r: "ȓ", s: "ş", t: "ț", u: "ǜ", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ỳ", z: "ž",
    A: "Ầ", B: "Ƀ", C: "Ç", D: "Ḓ", E: "Ề", F: "Ƒ", G: "Ģ", H: "Ḥ",
    I: "Ǐ", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ǹ", O: "Ồ", P: "Ṕ",
    Q: "Ɋ", R: "Ȓ", S: "Ş", T: "Ț", U: "Ǜ", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ỳ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Zalgo Style
function toZalgo(text) {
  const map = {
    a: "a҉͖̟̜̞̂̃̑̽͢͢͠͡", b: "b҉͙̺̻̥̅̎͋̕͜͝͡͞͠", 
    c: "c̷̶҉̵̢͚̣̻̲̬͑̑͛͐̀͜͝͡͝͠", d: "d҉̴̷̧̢̛̖͔̤ͯ̔̑̄͢͡͠", 
    e: "e̵̡̫̫͍͕̎ͭ̐͟͟͝͞", f: "f҉̴̥͎̰̰̒͌͛͐ͧ̕͜͝͡͞", 
    g: "g̷̵̸̡̼̱͎͎̞ͤͬ̅͢͟͞", h: "h̷̶̘̘̬ͭ̏͞͡", 
    i: "i҉̧̯̤̙͔̑ͧ̅̔ͦ́͜͟͝͠", j: "ǰ̸̶̭͓͓̀̈́͜ͅ", 
    k: "k҉̴̶̬͈̫̹͖̾̎ͭ́̍̐͜͝͠", l: "l̶҉̰͚͖͕̍̈́̅͗̏̇͢͝", 
    m: "m̴̵҉̸̲̗̰̼͗͌̃̇͟͠͞͠", n: "n̸͐̈́͟͟͝", 
    o: "o҉̢̡̲͇̌͗̀͢͝", p: "p̷̸̷̨͙͙͇ͨ̌ͣ͋͟͠", 
    q: "q҉̧͚̰̾͋͢͝͡", r: "r҉̵҉̛̠̩̥̋ͦ̆͆͟͞͡͞͠", 
    s: "s҉̝̭̦͚̑ͯ̌͡", t: "t҉̷҉̢͖͔̹͛̌͊͘͜͠͡͡", 
    u: "u̶͖̖͆̊̈́͡͡", v: "v҉̨̊͢͠͠", 
    w: "w҉̢̡̹̮͌̄ͦ͜͞͠͞", x: "x҉̣ͫͧ̕͘͜", 
    y: "ȳ̸̵̩̜͔͍̔́͟͡", z: "z̷҉̲ͥ͆̿̆ͭ͞",

    A: "A҉҉̦̣̤͔̟̩̋̿̏ͦ̈́̍͟͠", B: "B̵̴҉̞̠̘̩͍́͊͗͠͠͠͠ͱ", 
    C: "C҉͓̟͇̼͕̻ͭ͌ͩ̒͘͡͞͠", D: "D҉̣͍̓̎͗", 
    E: "E҉̰̰͎̆͞", F: "F̶̵͖͚̯̮̤̫̿̆͌͋͡͡", 
    G: "G̸҉̜̜̱̄ͩ͆͝͞", H: "H̴̶̵҉̨̡̛̼͎̫͓̒́̔ͩ͠͞͞", 
    I: "I҉̡̯̺̜̅́͋̃͢", J: "J̴̵҉̣͖̃̉̓́", 
    K: "K҉̿ͭ͘͜", L: "L̴҉̴͙͖̞̳̜ͣͧ̑̑͞͠͞͠", 
    M: "M̶̶҉̳͈̺͠͠ͅ", N: "N̵҉̾͟͞͡", 
    O: "O̷̵҉̢̭͚̜̠ͫͣ͐͠͞͝", P: "P҉̷̧̥͚̣̉̓̕͠͞͠͝ͅ", 
    Q: "Q̵̴̢͕̬̒̅̊͜͠͠͡", R: "R̴҉̷̨̖̮̉͑ͯ̑̋͟͠", 
    S: "Ṡ̷̢̫̞̻͈͋͛̓̅͜͠͠͠", T: "T҉̘͙͖̠̓ͦ͑̄͞", 
    U: "U̵̶̸̹̮̹̲̻͙̎ͪͣͦ͡͞͡͡", V: "V̶̝̐̀͝", 
    W: "W̵̶̸̻̼͉̱̄͗ͭ͠", X: "X̵̶҉̠͉͓̝̾ͅ", 
    Y: "Y̵̡̬͖̠̋ͫ̌ͤ̚͞͞", Z: "Z҉͆͢͠͠"
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

// Aurora Style
function toAurora(text) {
  const map = {
    a: "ắ", b: "ƀ", c: "č", d: "ď", e: "ḗ", f: "ƒ", g: "ǧ", h: "ḫ",
    i: "ǐ", j: "ĵ", k: "ḱ", l: "ľ", m: "ṃ", n: "ǹ", o: "ǒ", p: "ṕ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ắ", B: "Ƀ", C: "Č", D: "Ď", E: "Ḗ", F: "Ƒ", G: "Ǧ", H: "Ḫ",
    I: "Ǐ", J: "Ĵ", K: "Ḱ", L: "Ľ", M: "Ṃ", N: "Ǹ", O: "Ǒ", P: "Ṕ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Twilight Style
function toTwilight(text) {
  const map = {
    a: "ằ", b: "ƀ", c: "ċ", d: "ď", e: "ḕ", f: "ƒ", g: "ġ", h: "ḥ",
    i: "ǐ", j: "ĵ", k: "ḳ", l: "ļ", m: "ṃ", n: "ǹ", o: "ǒ", p: "ṕ",
    q: "ʠ", r: "ȑ", s: "ş", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ỳ", z: "ż",
    A: "Ằ", B: "Ƀ", C: "Ċ", D: "Ď", E: "Ḕ", F: "Ƒ", G: "Ġ", H: "Ḥ",
    I: "Ǐ", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ǹ", O: "Ǒ", P: "Ṕ",
    Q: "Ɋ", R: "Ȑ", S: "Ş", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ỳ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ethereal Style
function toEthereal(text) {
  const map = {
    a: "ǡ", b: "ƀ", c: "č", d: "ď", e: "ḝ", f: "ƒ", g: "ǥ", h: "ħ",
    i: "ȋ", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ń", o: "ǫ", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ṯ", u: "ǖ", v: "ṿ", w: "ẅ", x: "ẋ",
    y: "ẏ", z: "ž",
    A: "Ǡ", B: "Ƀ", C: "Č", D: "Ď", E: "Ḝ", F: "Ƒ", G: "Ǥ", H: "Ħ",
    I: "Ȋ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ń", O: "Ǫ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ṯ", U: "Ǖ", V: "Ṿ", W: "Ẅ", X: "Ẋ",
    Y: "Ẏ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Fancy Style 1
function toFancy1(text) {
  const map = {
    a: "λ", b: "𐒈", c: "𐒨", d: "Ꮷ", e: "𐒢", f: "Ӻ", g: "Ⳓ", h: "𐒅",
    i: "Ꭵ", j: "Ꮽ", k: "Ꮵ", l: "Ꮣ", m: "𐒄", n: "𐒐", o: "𐒀", p: "Ꮅ",
    q: "𐒉", r: "Ⲅ", s: "Ꮄ", t: "Ꮏ", u: "𐒜", v: "Ꮙ", w: "Ꮚ", x: "𐒎",
    y: "𐒍", z: "೩",

    A: "λ", B: "𐒈", C: "𐒨", D: "Ꮷ", E: "𐒢", F: "Ӻ", G: "Ⳓ", H: "𐒅",
    I: "Ꭵ", J: "Ꮽ", K: "Ꮵ", L: "Ꮣ", M: "𐒄", N: "𐒐", O: "𐒀", P: "Ꮅ",
    Q: "𐒉", R: "Ⲅ", S: "Ꮄ", T: "Ꮏ", U: "𐒜", V: "Ꮙ", W: "Ꮚ", X: "𐒎",
    Y: "𐒍", Z: "೩"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Hearts Style
function toHearts(text) {
  const map = {
    a: "a♥", b: "b♥", c: "c♥", d: "d♥", e: "e♥", f: "f♥", g: "g♥", h: "h♥",
    i: "i♥", j: "j♥", k: "k♥", l: "l♥", m: "m♥", n: "n♥", o: "o♥", p: "p♥",
    q: "q♥", r: "r♥", s: "s♥", t: "t♥", u: "u♥", v: "v♥", w: "w♥", x: "x♥",
    y: "y♥", z: "z♥",

    A: "A♥", B: "B♥", C: "C♥", D: "D♥", E: "E♥", F: "F♥", G: "G♥", H: "H♥",
    I: "I♥", J: "J♥", K: "K♥", L: "L♥", M: "M♥", N: "N♥", O: "O♥", P: "P♥",
    Q: "Q♥", R: "R♥", S: "S♥", T: "T♥", U: "U♥", V: "V♥", W: "W♥", X: "X♥",
    Y: "Y♥", Z: "Z♥"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Trible Style
function toTrible(text) {
  const map = {
    a: "𒀀", b: "𒁀", c: "𒐏", d: "𒁓", e: "𒀼", f: "𐎣", g: "𒋝", h: "𒀂",
    i: "𒐕", j: "𒑟", k: "𒐞", l: "𒁇", m: "𐎠", n: "𒐖", o: "𒆸", p: "𒇬",
    q: "𒌒", r: "𒇲", s: "𒂍", t: "𒈦", u: "𒑚", v: "𐎏", w: "𒉼", x: "𒉽",
    y: "𒌨", z: "𒑣",

    A: "𒀀", B: "𒁀", C: "𒐏", D: "𒁓", E: "𒀼", F: "𐎣", G: "𒋝", H: "𒀂",
    I: "𒐕", J: "𒑟", K: "𒐞", L: "𒁇", M: "𐎠", N: "𒐖", O: "𒆸", P: "𒇬",
    Q: "𒌒", R: "𒇲", S: "𒂍", T: "𒈦", U: "𒑚", V: "𐎏", W: "𒉼", X: "𒉽",
    Y: "𒌨", Z: "𒑣"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Fat Style
function toFat(text) {
  const map = {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ǥ", h: "ᕼ",
    i: "Ꭵ", j: "ᒎ", k: "ᛕ", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ",
    q: "Ɋ", r: "ᖇ", s: "ᔕ", t: "丅", u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭",
    y: "Ƴ", z: "乙",

    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ǥ", H: "ᕼ",
    I: "Ꭵ", J: "ᒎ", K: "ᛕ", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ",
    Q: "Ɋ", R: "ᖇ", S: "ᔕ", T: "丅", U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭",
    Y: "Ƴ", Z: "乙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Gun Fire Style
function toGunFire(text) {
  const map = {
    a: "Λ", b: "B", c: "ᄃ", d: "D", e: "Σ", f: "F", g: "G", h: "Ή",
    i: "I", j: "J", k: "K", l: "ᄂ", m: "M", n: "П", o: "Ө", p: "P",
    q: "Q", r: "Я", s: "Ƨ", t: "Ƭ", u: "Ц", v: "V", w: "Щ", x: "X",
    y: "Y", z: "Z",

    A: "Λ", B: "B", C: "ᄃ", D: "D", E: "Σ", F: "F", G: "G", H: "Ή",
    I: "I", J: "J", K: "K", L: "ᄂ", M: "M", N: "П", O: "Ө", P: "P",
    Q: "Q", R: "Я", S: "Ƨ", T: "Ƭ", U: "Ц", V: "V", W: "Щ", X: "X",
    Y: "Y", Z: "Z"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Emoji Fancy Style
function toEmojiFancy(text) {
  const map = {
    a: "ꍏ", b: "♭", c: "☾", d: "◗", e: "€", f: "Ϝ", g: "❡", h: "♄",
    i: "♗", j: "♪", k: "ϰ", l: "↳", m: "♔", n: "♫", o: "⊙", p: "ρ",
    q: "☭", r: "☈", s: "ⓢ", t: "☂", u: "☋", v: "✓", w: "ω", x: "⌘",
    y: "☿", z: "☡",

    A: "ꍏ", B: "♭", C: "☾", D: "◗", E: "€", F: "Ϝ", G: "❡", H: "♄",
    I: "♗", J: "♪", K: "ϰ", L: "↳", M: "♔", N: "♫", O: "⊙", P: "ρ",
    Q: "☭", R: "☈", S: "ⓢ", T: "☂", U: "☋", V: "✓", W: "ω", X: "⌘",
    Y: "☿", Z: "☡"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Script / Cursive / Handwriting
function toScriptCursive(text) {
  const map = {
    a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽",
    i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅",
    q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍",
    y: "𝓎", z: "𝓏",

    A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ",
    I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫",
    Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳",
    Y: "𝒴", Z: "𝒵"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Bold Script / Cursive / Handwriting
function toBoldScriptCursive(text) {
  const map = {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱",
    i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹",
    q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁",
    y: "𝔂", z: "𝔃",

    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗",
    I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟",
    Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧",
    Y: "𝓨", Z: "𝓩"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Gothic / Blackletter / Fraktur
function toGothicFraktur(text) {
  const map = {
    a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
    i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
    q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
    y: "𝔶", z: "𝔷",

    A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
    I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
    Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
    Y: "𝔜", Z: "ℨ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Bold Gothic / Blackletter / Fraktur
function toBoldGothicFraktur(text) {
  const map = {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍",
    i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕",
    q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝",
    y: "𝖞", z: "𝖟",

    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳",
    I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻",
    Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃",
    Y: "𝖄", Z: "𝖅"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


// Bold (serif)
function toBoldSerif(text) {
  const map = {
    A:"𝐀", B:"𝐁", C:"𝐂", D:"𝐃", E:"𝐄", F:"𝐅", G:"𝐆", H:"𝐇",
    I:"𝐈", J:"𝐉", K:"𝐊", L:"𝐋", M:"𝐌", N:"𝐍", O:"𝐎", P:"𝐏",
    Q:"𝐐", R:"𝐑", S:"𝐒", T:"𝐓", U:"𝐔", V:"𝐕", W:"𝐖", X:"𝐗",
    Y:"𝐘", Z:"𝐙",
    a:"𝐚", b:"𝐛", c:"𝐜", d:"𝐝", e:"𝐞", f:"𝐟", g:"𝐠", h:"𝐡",
    i:"𝐢", j:"𝐣", k:"𝐤", l:"𝐥", m:"𝐦", n:"𝐧", o:"𝐨", p:"𝐩",
    q:"𝐪", r:"𝐫", s:"𝐬", t:"𝐭", u:"𝐮", v:"𝐯", w:"𝐰", x:"𝐱",
    y:"𝐲", z:"𝐳"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Bold (sans)
function toBoldSans(text) {
  const map = {
    A:"𝗔", B:"𝗕", C:"𝗖", D:"𝗗", E:"𝗘", F:"𝗙", G:"𝗚", H:"𝗛",
    I:"𝗜", J:"𝗝", K:"𝗞", L:"𝗟", M:"𝗠", N:"𝗡", O:"𝗢", P:"𝗣",
    Q:"𝗤", R:"𝗥", S:"𝗦", T:"𝗧", U:"𝗨", V:"𝗩", W:"𝗪", X:"𝗫",
    Y:"𝗬", Z:"𝗭",
    a:"𝗮", b:"𝗯", c:"𝗰", d:"𝗱", e:"𝗲", f:"𝗳", g:"𝗴", h:"𝗵",
    i:"𝗶", j:"𝗷", k:"𝗸", l:"𝗹", m:"𝗺", n:"𝗻", o:"𝗼", p:"𝗽",
    q:"𝗾", r:"𝗿", s:"𝘀", t:"𝘁", u:"𝘂", v:"𝘃", w:"𝘄", x:"𝘅",
    y:"𝘆", z:"𝘇"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Italic Bold (serif)
function toItalicBoldSerif(text) {
  const map = {
    A:"𝑨", B:"𝑩", C:"𝑪", D:"𝑫", E:"𝑬", F:"𝑭", G:"𝑮", H:"𝑯",
    I:"𝑰", J:"𝑱", K:"𝑲", L:"𝑳", M:"𝑴", N:"𝑵", O:"𝑶", P:"𝑷",
    Q:"𝑸", R:"𝑹", S:"𝑺", T:"𝑻", U:"𝑼", V:"𝑽", W:"𝑾", X:"𝑿",
    Y:"𝒀", Z:"𝒁",
    a:"𝒂", b:"𝒃", c:"𝒄", d:"𝒅", e:"𝒆", f:"𝒇", g:"𝒈", h:"𝒉",
    i:"𝒊", j:"𝒋", k:"𝒌", l:"𝒍", m:"𝒎", n:"𝒏", o:"𝒐", p:"𝒑",
    q:"𝒒", r:"𝒓", s:"𝒔", t:"𝒕", u:"𝒖", v:"𝒗", w:"𝒘", x:"𝒙",
    y:"𝒚", z:"𝒛"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Italic Bold (sans)
function toItalicBoldSans(text) {
  const map = {
    A:"𝘼", B:"𝘽", C:"𝘾", D:"𝘿", E:"𝙀", F:"𝙁", G:"𝙂", H:"𝙃",
    I:"𝙄", J:"𝙅", K:"𝙆", L:"𝙇", M:"𝙈", N:"𝙉", O:"𝙊", P:"𝙋",
    Q:"𝙌", R:"𝙍", S:"𝙎", T:"𝙏", U:"𝙐", V:"𝙑", W:"𝙒", X:"𝙓",
    Y:"𝙔", Z:"𝙕",
    a:"𝙖", b:"𝙗", c:"𝙘", d:"𝙙", e:"𝙚", f:"𝙛", g:"𝙜", h:"𝙝",
    i:"𝙞", j:"𝙟", k:"𝙠", l:"𝙡", m:"𝙢", n:"𝙣", o:"𝙤", p:"𝙥",
    q:"𝙦", r:"𝙧", s:"𝙨", t:"𝙩", u:"𝙪", v:"𝙫", w:"𝙬", x:"𝙭",
    y:"𝙮", z:"𝙯"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Medieval Bold (Fraktur)
function toMedievalBold(text) {
  const map = {
    A:"𝕬", B:"𝕭", C:"𝕮", D:"𝕯", E:"𝕰", F:"𝕱", G:"𝕲", H:"𝕳",
    I:"𝕴", J:"𝕵", K:"𝕶", L:"𝕷", M:"𝕸", N:"𝕹", O:"𝕺", P:"𝕻",
    Q:"𝕼", R:"𝕽", S:"𝕾", T:"𝕿", U:"𝖀", V:"𝖁", W:"𝖂", X:"𝖃",
    Y:"𝖄", Z:"𝖅",
    a:"𝖆", b:"𝖇", c:"𝖈", d:"𝖉", e:"𝖊", f:"𝖋", g:"𝖌", h:"𝖍",
    i:"𝖎", j:"𝖏", k:"𝖐", l:"𝖑", m:"𝖒", n:"𝖓", o:"𝖔", p:"𝖕",
    q:"𝖖", r:"𝖗", s:"𝖘", t:"𝖙", u:"𝖚", v:"𝖛", w:"𝖜", x:"𝖝",
    y:"𝖞", z:"𝖟"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Double-Struck
function toDoubleStruck(text) {
  const map = {
    A:"𝔸", B:"𝔹", C:"ℂ", D:"𝔻", E:"𝔼", F:"𝔽", G:"𝔾", H:"ℍ",
    I:"𝕀", J:"𝕁", K:"𝕂", L:"𝕃", M:"𝕄", N:"ℕ", O:"𝕆", P:"ℙ",
    Q:"ℚ", R:"ℝ", S:"𝕊", T:"𝕋", U:"𝕌", V:"𝕍", W:"𝕎", X:"𝕏",
    Y:"𝕐", Z:"ℤ",
    a:"𝕒", b:"𝕓", c:"𝕔", d:"𝕕", e:"𝕖", f:"𝕗", g:"𝕘", h:"𝕙",
    i:"𝕚", j:"𝕛", k:"𝕜", l:"𝕝", m:"𝕞", n:"𝕟", o:"𝕠", p:"𝕡",
    q:"𝕢", r:"𝕣", s:"𝕤", t:"𝕥", u:"𝕦", v:"𝕧", w:"𝕨", x:"𝕩",
    y:"𝕪", z:"𝕫"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Blocks
function toBlocks(text) {
  const map = {
    A:"🅰", B:"🅱", C:"🅲", D:"🅳", E:"🅴", F:"🅵", G:"🅶", H:"🅷",
    I:"🅸", J:"🅹", K:"🅺", L:"🅻", M:"🅼", N:"🅽", O:"🅾", P:"🅿",
    Q:"🆀", R:"🆁", S:"🆂", T:"🆃", U:"🆄", V:"🆅", W:"🆆", X:"🆇",
    Y:"🆈", Z:"🆉"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


function toStrikethroughcross(text) {
  const map = {
    a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶",
    i: "i̶", j: "j̶", k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶",
    q: "q̶", r: "r̶", s: "s̶", t: "t̶", u: "u̶", v: "v̶", w: "w̶", x: "x̶",
    y: "y̶", z: "z̶", " ": " ̶",
    A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶",
    I: "I̶", J: "J̶", K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶",
    Q: "Q̶", R: "R̶", S: "S̶", T: "T̶", U: "U̶", V: "V̶", W: "W̶", X: "X̶",
    Y: "Y̶", Z: "Z̶"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toSlash(text) {
  const map = {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷",
    i: "i̷", j: "j̷", k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷",
    q: "q̷", r: "r̷", s: "s̷", t: "t̷", u: "u̷", v: "v̷", w: "w̷", x: "x̷",
    y: "y̷", z: "z̷", " ": " ̷",
    A: "A̷", B: "B̷", C: "C̷", D: "D̷", E: "E̷", F: "F̷", G: "G̷", H: "H̷",
    I: "I̷", J: "J̷", K: "K̷", L: "L̷", M: "M̷", N: "N̷", O: "O̷", P: "P̷",
    Q: "Q̷", R: "R̷", S: "S̷", T: "T̷", U: "U̷", V: "V̷", W: "W̷", X: "X̷",
    Y: "Y̷", Z: "Z̷"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toUnderline(text) {
  const map = {
    a: "a͟", b: "b͟", c: "c͟", d: "d͟", e: "e͟", f: "f͟", g: "g͟", h: "h͟",
    i: "i͟", j: "j͟", k: "k͟", l: "l͟", m: "m͟", n: "n͟", o: "o͟", p: "p͟",
    q: "q͟", r: "r͟", s: "s͟", t: "t͟", u: "u͟", v: "v͟", w: "w͟", x: "x͟",
    y: "y͟", z: "z͟", " ": " ͟",
    A: "A͟", B: "B͟", C: "C͟", D: "D͟", E: "E͟", F: "F͟", G: "G͟", H: "H͟",
    I: "I͟", J: "J͟", K: "K͟", L: "L͟", M: "M͟", N: "N͟", O: "O͟", P: "P͟",
    Q: "Q͟", R: "R͟", S: "S͟", T: "T͟", U: "U͟", V: "V͟", W: "W͟", X: "X͟",
    Y: "Y͟", Z: "Z͟"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toDoubleUnderline(text) {
  const map = {
    a: "a͇", b: "b͇", c: "c͇", d: "d͇", e: "e͇", f: "f͇", g: "g͇", h: "h͇",
    i: "i͇", j: "j͇", k: "k͇", l: "l͇", m: "m͇", n: "n͇", o: "o͇", p: "p͇",
    q: "q͇", r: "r͇", s: "s͇", t: "t͇", u: "u͇", v: "v͇", w: "w͇", x: "x͇",
    y: "y͇", z: "z͇", " ": " ͇",
    A: "A͇", B: "B͇", C: "C͇", D: "D͇", E: "E͇", F: "F͇", G: "G͇", H: "H͇",
    I: "I͇", J: "J͇", K: "K͇", L: "L͇", M: "M͇", N: "N͇", O: "O͇", P: "P͇",
    Q: "Q͇", R: "R͇", S: "S͇", T: "T͇", U: "U͇", V: "V͇", W: "W͇", X: "X͇",
    Y: "Y͇", Z: "Z͇"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toDotted(text) {
  const map = {
    a: "a̤", b: "ḅ", c: "c̤", d: "ḍ", e: "ẹ", f: "f̤", g: "g̤", h: "ḥ",
    i: "ị", j: "j̤", k: "ḳ", l: "ḷ", m: "ṃ", n: "ṇ", o: "ọ", p: "p̤",
    q: "q̤", r: "ṛ", s: "ṣ", t: "ṭ", u: "ụ", v: "ṿ", w: "ẉ", x: "x̤",
    y: "ỵ", z: "ẓ", " ": " ̤",
    A: "Ạ", B: "Ḅ", C: "C̤", D: "Ḍ", E: "Ẹ", F: "F̤", G: "G̤", H: "Ḥ",
    I: "Ị", J: "J̤", K: "Ḳ", L: "Ḷ", M: "Ṃ", N: "Ṇ", O: "Ọ", P: "P̤",
    Q: "Q̤", R: "Ṛ", S: "Ṣ", T: "Ṭ", U: "Ụ", V: "Ṿ", W: "Ẉ", X: "X̤",
    Y: "Ỵ", Z: "Ẓ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toWave(text) {
  const map = {
    a: "a̰", b: "b̰", c: "c̰", d: "d̰", e: "ḛ", f: "f̰", g: "g̰", h: "h̰",
    i: "ḭ", j: "j̰", k: "k̰", l: "l̰", m: "m̰", n: "n̰", o: "o̰", p: "p̰",
    q: "q̰", r: "r̰", s: "s̰", t: "t̰", u: "ṵ", v: "v̰", w: "w̰", x: "x̰",
    y: "y̰", z: "z̰", " ": " ̰",
    A: "A̰", B: "B̰", C: "C̰", D: "D̰", E: "Ḛ", F: "F̰", G: "G̰", H: "H̰",
    I: "Ḭ", J: "J̰", K: "K̰", L: "L̰", M: "M̰", N: "N̰", O: "O̰", P: "P̰",
    Q: "Q̰", R: "R̰", S: "S̰", T: "T̰", U: "Ṵ", V: "V̰", W: "W̰", X: "X̰",
    Y: "Y̰", Z: "Z̰"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}



function updateOutputs(text) {
  // Cursive
  const cursiveEl = document.getElementById("CursiveOutput");
  if (cursiveEl) {
    cursiveEl.textContent = text ? toCursive(text) : "𝒞𝓊𝓇𝓈𝒾𝓋ℯ";
  }
function toSpace(text) {
  const map = {
    " ": " "  // U+0020 Regular Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toNoBreakSpace(text) {
  const map = {
    " ": " "  // U+00A0 No-Break Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toEnQuad(text) {
  const map = {
    " ": " "  // U+2000 En Quad
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toEmQuad(text) {
  const map = {
    " ": " "  // U+2001 Em Quad
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toEnSpace(text) {
  const map = {
    " ": " "  // U+2002 En Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toThreePerEm(text) {
  const map = {
    " ": " "  // U+2004 Three-Per-Em Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toFourPerEm(text) {
  const map = {
    " ": " "  // U+2005 Four-Per-Em Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toSixPerEm(text) {
  const map = {
    " ": " "  // U+2006 Six-Per-Em Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toFigureSpace(text) {
  const map = {
    " ": " "  // U+2007 Figure Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toPunctuationSpace(text) {
  const map = {
    " ": " "  // U+2008 Punctuation Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toThinSpace(text) {
  const map = {
    " ": " "  // U+2009 Thin Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toHairSpace(text) {
  const map = {
    " ": " "  // U+200A Hair Space
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toDistortedGlitch(text) {
  const map = {
    a: "Ꮧ", b: "Ᏸ", c: "ፈ", d: "Ꮄ", e: "Ꮛ", f: "Ꭶ", g: "Ꮆ", h: "Ꮒ",
    i: "Ꭵ", j: "Ꮰ", k: "Ꮶ", l: "Ꮭ", m: "Ꮇ", n: "Ꮑ", o: "Ꭷ", p: "Ꭾ",
    q: "Ꭴ", r: "Ꮢ", s: "Ꮥ", t: "Ꮦ", u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "ጀ",
    y: "Ꭹ", z: "ፚ",
    A: "Ꮧ", B: "Ᏸ", C: "ፈ", D: "Ꮄ", E: "Ꮛ", F: "Ꭶ", G: "Ꮆ", H: "Ꮒ",
    I: "Ꭵ", J: "Ꮰ", K: "Ꮶ", L: "Ꮭ", M: "Ꮇ", N: "Ꮑ", O: "Ꭷ", P: "Ꭾ",
    Q: "Ꭴ", R: "Ꮢ", S: "Ꮥ", T: "Ꮦ", U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "ጀ",
    Y: "Ꭹ", Z: "ፚ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const distortedGlitchEl = document.getElementById("DistortedGlitchOutput");
if (distortedGlitchEl) {
  distortedGlitchEl.textContent = text ? toDistortedGlitch(text) : toDistortedGlitch("Distorted Glitch");
}
function toFairytale(text) {
  const map = {
    a: "ǟ", b: "ɮ", c: "ƈ", d: "ɖ", e: "ɛ", f: "ʄ", g: "ɢ", h: "ɦ",
    i: "ɨ", j: "ʝ", k: "ӄ", l: "ʟ", m: "ʍ", n: "ռ", o: "օ", p: "ք",
    q: "զ", r: "ʀ", s: "ֆ", t: "ȶ", u: "ʊ", v: "ʋ", w: "ա", x: "Ӽ",
    y: "ʏ", z: "ʐ",
    A: "Ǟ", B: "Ⱦ", C: "Ȼ", D: "Đ", E: "Ȅ", F: "F", G: "Ǥ", H: "Ħ",
    I: "Ī", J: "J", K: "ȷ", L: "Ƚ", M: "M", N: "Ñ", O: "Ō", P: "P",
    Q: "Q", R: "Ř", S: "Ş", T: "Ţ", U: "Ū", V: "V", W: "Ŵ", X: "X",
    Y: "Ÿ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const fairytaleEl = document.getElementById("FairytaleOutput");
if (fairytaleEl) {
  fairytaleEl.textContent = text ? toFairytale(text) : toFairytale("Fairytale");
}
function toWizard(text) {
  const map = {
    a: "a̷̷", b: "b̷̷", c: "c̷̷", d: "d̷̷", e: "e̷̷", f: "f̷̷", g: "g̷̷", h: "h̷̷",
    i: "i̷̷", j: "j̷̷", k: "k̷̷", l: "l̷̷", m: "m̷̷", n: "n̷̷", o: "o̷̷", p: "p̷̷",
    q: "q̷̷", r: "r̷̷", s: "s̷̷", t: "t̷̷", u: "u̷̷", v: "v̷̷", w: "w̷̷", x: "x̷̷",
    y: "y̷̷", z: "z̷̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷",
    I: "I̷̷", J: "J̷̷", K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷",
    Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷", U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷",
    Y: "Y̷̷", Z: "Z̷̷"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const wizardEl = document.getElementById("WizardOutput");
if (wizardEl) {
  wizardEl.textContent = text ? toWizard(text) : toWizard("Wizard");
}
function toDiagonalStrikes(text) {
  const map = {
    a: "ꋫ", b: "ꃃ", c: "ꉓ", d: "ꀸ", e: "ꍟ", f: "ꎇ", g: "ꁅ", h: "ꃅ",
    i: "ꀤ", j: "ꀭ", k: "ꀘ", l: "꒒", m: "ꎇ", n: "ꈇ", o: "ꆻ", p: "ꉣ",
    q: "ꆫ", r: "ꋪ", s: "ꌗ", t: "ꋖ", u: "ꌎ", v: "ꃴ", w: "ꅏ", x: "ꊼ",
    y: "ꌩ", z: "ꁒ",
    A: "ꍏ", B: "ꌃ", C: "ꉓ", D: "ꀸ", E: "ꍟ", F: "ꎇ", G: "ꁅ", H: "ᑋ",
    I: "ꀤ", J: "ꀭ", K: "ꀘ", L: "꒒", M: "ꎇ", N: "ꈇ", O: "ꆻ", P: "ꉣ",
    Q: "ꆫ", R: "ꋪ", S: "ꌗ", T: "ꋖ", U: "ꌎ", V: "ꃴ", W: "ꅏ", X: "ꊼ",
    Y: "ꌩ", Z: "ꁒ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const diagonalStrikesEl = document.getElementById("DiagonalStrikesOutput");
if (diagonalStrikesEl) {
  diagonalStrikesEl.textContent = text ? toDiagonalStrikes(text) : toDiagonalStrikes("Diagonal Strikes");
}
function toAncientStyle1(text) {
  const map = {
    a: "𝐚", b: "๒", c: "Ć", d: "𝓭", e: "𝑒", f: "ⓕ", g: "𝕘", h: "𝓱",
    i: "Ɨ", j: "Ｊ", k: "Ⓚ", l: "ᒪ", m: "м", n: "𝐍", o: "Ø", p: "ρ",
    q: "𝓺", r: "ŕ", s: "Ş", t: "ţ", u: "𝑢", v: "𝓿", w: "ฬ", x: "𝓍",
    y: "ㄚ", z: "z",
    A: "𝐀", B: "𝓑", C: "Ć", D: "Đ", E: "Ẹ", F: "Ｆ", G: "Ğ", H: "Ħ",
    I: "Ⓘ", J: "ⓙ", K: "Ⲕ", L: "Ł", M: "Μ", N: "𝐍", O: "Ø", P: "Ｐ",
    Q: "𝓠", R: "Ř", S: "Ş", T: "T", U: "Ｕ", V: "V", W: "Ŵ", X: "𝓧",
    Y: "Y", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const ancientStyle1El = document.getElementById("AncientStyle1Output");
if (ancientStyle1El) {
  ancientStyle1El.textContent = text ? toAncientStyle1(text) : toAncientStyle1("Ancient Style 1");
}

function toMixedStyle1(text) {
  const map = {
    a: "á", b: "ć", c: "ć", d: "é", e: "é", f: "ƒ", g: "ǵ", h: "h",
    i: "í", j: "j", k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ",
    q: "q", r: "ŕ", s: "ś", t: "t", u: "ú", v: "v", w: "ẃ", x: "x",
    y: "ӳ", z: "ź",
    A: "Á", B: "Ć", C: "Ć", D: "É", E: "É", F: "Ƒ", G: "Ǵ", H: "H",
    I: "Í", J: "J", K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ",
    Q: "Q", R: "Ŕ", S: "Ś", T: "T", U: "Ú", V: "V", W: "Ẃ", X: "X",
    Y: "Ý", Z: "Ź"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const mixedStyle1El = document.getElementById("MixedStyle1Output");
if (mixedStyle1El) {
  mixedStyle1El.textContent = text ? toMixedStyle1(text) : toMixedStyle1("Mixed Style 1");
}
function toAcuteAccents(text) {
  const map = {
    a: "a̠", b: "b̠", c: "c̠", d: "d̠", e: "e̠", f: "f̠", g: "g̠", h: "h̠",
    i: "i̠", j: "j̠", k: "k̠", l: "l̠", m: "m̠", n: "n̠", o: "o̠", p: "p̠",
    q: "q̠", r: "r̠", s: "s̠", t: "t̠", u: "u̠", v: "v̠", w: "w̠", x: "x̠",
    y: "y̠", z: "z̠",
    A: "A̠", B: "B̠", C: "C̠", D: "D̠", E: "E̠", F: "F̠", G: "G̠", H: "H̠",
    I: "I̠", J: "J̠", K: "K̠", L: "L̠", M: "M̠", N: "N̠", O: "O̠", P: "P̠",
    Q: "Q̠", R: "R̠", S: "S̠", T: "T̠", U: "U̠", V: "V̠", W: "W̠", X: "X̠",
    Y: "Y̠", Z: "Z̠"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const acuteAccentsEl = document.getElementById("AcuteAccentsOutput");
if (acuteAccentsEl) {
  acuteAccentsEl.textContent = text ? toAcuteAccents(text) : toAcuteAccents("Acute Accents");
}

function toVaporwave(text) {
  const map = {
    a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",
    i:"ｉ",j:"ｊ",k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",
    q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",
    y:"ｙ",z:"ｚ",
    A:"Ａ",B:"Ｂ",C:"Ｃ",D:"Ｄ",E:"Ｅ",F:"Ｆ",G:"Ｇ",H:"Ｈ",
    I:"Ｉ",J:"Ｊ",K:"Ｋ",L:"Ｌ",M:"Ｍ",N:"Ｎ",O:"Ｏ",P:"Ｐ",
    Q:"Ｑ",R:"Ｒ",S:"Ｓ",T:"Ｔ",U:"Ｕ",V:"Ｖ",W:"Ｗ",X:"Ｘ",
    Y:"Ｙ",Z:"Ｚ",
    "0":"０","1":"１","2":"２","3":"３","4":"４",
    "5":"５","6":"６","7":"７","8":"８","9":"９",
    " ":"　",".":"．",",":"，","!":"！","?":"？",
    ":":"：",";":"；","(":"（",")":"）"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toVaporwaveJP(text) {
  return toVaporwave(text) + " カ゚エ";
}
function toVaporwaveGlitch(text) {
  return toVaporwave(text).replace(/　/g, "░");
}
function toVaporwaveBracket(text) {
  return "【" + toVaporwave(text) + "】";
}
function toVaporwaveCyber(text) {
  const map = {
    a:"卂",b:"乃",c:"匚",d:"ᗪ",e:"乇",f:"千",g:"Ꮆ",h:"卄",
    i:"丨",j:"ﾌ",k:"Ҝ",l:"ㄥ",m:"爪",n:"几",o:"ㄖ",p:"卩",
    q:"Ɋ",r:"尺",s:"丂",t:"ㄒ",u:"ㄩ",v:"ᐯ",w:"山",x:"乂",
    y:"ㄚ",z:"乙",
    A:"卂",B:"乃",C:"匚",D:"ᗪ",E:"乇",F:"千",G:"Ꮆ",H:"卄",
    I:"丨",J:"ﾌ",K:"Ҝ",L:"ㄥ",M:"爪",N:"几",O:"ㄖ",P:"卩",
    Q:"Ɋ",R:"尺",S:"丂",T:"ㄒ",U:"ㄩ",V:"ᐯ",W:"山",X:"乂",
    Y:"ㄚ",Z:"乙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toVaporwaveKatakana(text) {
  const map = {
    a:"丹",b:"乃",c:"匚",d:"刀",e:"ヨ",f:"下",g:"厶",h:"卄",
    i:"工",j:"丁",k:"长",l:"乚",m:"从",n:"𠘨",o:"回",p:"尸",
    q:"口",r:"尺",s:"丂",t:"卞",u:"凵",v:"∨",w:"山",x:"乂",
    y:"丫",z:"乙",
    A:"丹",B:"乃",C:"匚",D:"刀",E:"ヨ",F:"下",G:"厶",H:"卄",
    I:"工",J:"丁",K:"长",L:"乚",M:"从",N:"𠘨",O:"回",P:"尸",
    Q:"口",R:"尺",S:"丂",T:"卞",U:"凵",V:"∨",W:"山",X:"乂",
    Y:"丫",Z:"乙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Vaporwave Classic
const vaporwaveEl = document.getElementById("VaporwaveOutput");
if (vaporwaveEl) {
  vaporwaveEl.textContent = text ? toVaporwave(text) : toVaporwave("Vaporwave Text");
}

// Vaporwave + Japanese
const vaporwaveJPEl = document.getElementById("VaporwaveJPOutput");
if (vaporwaveJPEl) {
  vaporwaveJPEl.textContent = text ? toVaporwaveJP(text) : toVaporwaveJP("Vaporwave Text");
}

// Vaporwave Glitch
const vaporwaveGlitchEl = document.getElementById("VaporwaveGlitchOutput");
if (vaporwaveGlitchEl) {
  vaporwaveGlitchEl.textContent = text ? toVaporwaveGlitch(text) : toVaporwaveGlitch("Vaporwave Text");
}

// Vaporwave Bracket
const vaporwaveBracketEl = document.getElementById("VaporwaveBracketOutput");
if (vaporwaveBracketEl) {
  vaporwaveBracketEl.textContent = text ? toVaporwaveBracket(text) : toVaporwaveBracket("Vaporwave Text");
}

// Vaporwave Cyber
const vaporwaveCyberEl = document.getElementById("VaporwaveCyberOutput");
if (vaporwaveCyberEl) {
  vaporwaveCyberEl.textContent = text ? toVaporwaveCyber(text) : toVaporwaveCyber("Vaporwave Text");
}

// Vaporwave Katakana
const vaporwaveKatakanaEl = document.getElementById("VaporwaveKatakanaOutput");
if (vaporwaveKatakanaEl) {
  vaporwaveKatakanaEl.textContent = text ? toVaporwaveKatakana(text) : toVaporwaveKatakana("Vaporwave Text");
}

// Vaporwave Mixed



function toUnderlinedbyDashes(text) {
  const map = {
    a: "𝐚", b: "ᵇ", c: "¢", d: "ᗪ", e: "ｅ", f: "ғ", g: "g", h: "ⓗ",
    i: "𝕀", j: "j", k: "Ҝ", l: "ᒪ", m: "м", n: "ภ", o: "𝑜", p: "ρ",
    q: "𝓺", r: "я", s: "ᔕ", t: "т", u: "𝓊", v: "𝓋", w: "Ŵ", x: "ⓧ",
    y: "ⓨ", z: "ℤ",
    A: "𝐀", B: "ᵇ", C: "¢", D: "ᗪ", E: "ｅ", F: "ғ", G: "g", H: "ⓗ",
    I: "𝕀", J: "j", K: "Ҝ", L: "ᒪ", M: "м", N: "ภ", O: "𝑜", P: "ρ",
    Q: "𝓺", R: "я", S: "ᔕ", T: "т", U: "𝓊", V: "𝓋", W: "Ŵ", X: "ⓧ",
    Y: "ⓨ", Z: "ℤ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const underlinedbyDashesEl = document.getElementById("UnderlinedbyDashesOutput");
if (underlinedbyDashesEl) {
  underlinedbyDashesEl.textContent = text ? toUnderlinedbyDashes(text) : toUnderlinedbyDashes("Underlined by Dashes");
}
function toMixedStyle2(text) {
  const map = {
    a: "ä", b: "ḅ", c: "ċ", d: "ḋ", e: "ë", f: "ḟ", g: "ġ", h: "ḧ",
    i: "ï", j: "j", k: "ḳ", l: "ḷ", m: "ṁ", n: "ṅ", o: "ö", p: "ṗ",
    q: "q", r: "ṛ", s: "ṡ", t: "ẗ", u: "ü", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ÿ", z: "ż",
    A: "Ä", B: "Ḅ", C: "Ċ", D: "Ḋ", E: "Ë", F: "Ḟ", G: "Ġ", H: "Ḧ",
    I: "Ï", J: "J", K: "Ḳ", L: "Ḷ", M: "Ṁ", N: "Ṅ", O: "Ö", P: "Ṗ",
    Q: "Q", R: "Ṛ", S: "Ṡ", T: "Ṫ", U: "Ü", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ÿ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const mixedStyle2El = document.getElementById("MixedStyle2Output");
if (mixedStyle2El) {
  mixedStyle2El.textContent = text ? toMixedStyle2(text) : toMixedStyle2("Mixed Style 2");
}
function toMetalUmlauts(text) {
  const map = {
    a: "α", b: "𝕓", c: "匚", d: "Đ", e: "ⓔ", f: "𝐟", g: "Ꮆ", h: "ｈ",
    i: "𝒾", j: "𝓳", k: "κ", l: "ⓛ", m: "Μ", n: "ℕ", o: "ㄖ", p: "卩",
    q: "ᵠ", r: "ℝ", s: "丂", t: "т", u: "ᵘ", v: "𝓿", w: "ώ", x: "χ",
    y: "𝕐", z: "𝔃",
    A: "Α", B: "𝕭", C: "Ⓒ", D: "Đ", E: "𝐄", F: "𝓕", G: "Ǥ", H: "ℌ",
    I: "𝕀", J: "𝓙", K: "𝓚", L: "Ⓛ", M: "Μ", N: "ℕ", O: "𝕆", P: "Ⓟ",
    Q: "𝓠", R: "𝕽", S: "𝓢", T: "𝕋", U: "𝕌", V: "𝓥", W: "𝓦", X: "𝓧",
    Y: "𝕐", Z: "𝐙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const metalUmlautsEl = document.getElementById("MetalUmlautsOutput");
if (metalUmlautsEl) {
  metalUmlautsEl.textContent = text ? toMetalUmlauts(text) : toMetalUmlauts("Metal Ümlauts");
}
function toMixedStyle3(text) {
  const map = {
    a: "a͓͓̽̽", b: "b͓͓̽̽", c: "c͓͓̽̽", d: "d͓͓̽̽", e: "e͓͓̽̽", f: "f͓͓̽̽", g: "g͓͓̽̽", h: "h͓͓̽̽",
    i: "i͓͓̽̽", j: "j͓͓̽̽", k: "k͓͓̽̽", l: "l͓͓̽̽", m: "m͓͓̽̽", n: "n͓͓̽̽", o: "o͓͓̽̽", p: "p͓͓̽̽",
    q: "q͓͓̽̽", r: "r͓͓̽̽", s: "s͓͓̽̽", t: "t͓͓̽̽", u: "u͓͓̽̽", v: "v͓͓̽̽", w: "w͓͓̽̽", x: "x͓͓̽̽",
    y: "y͓͓̽̽", z: "z͓͓̽̽",
    A: "A͓͓̽̽", B: "B͓͓̽̽", C: "C͓͓̽̽", D: "D͓͓̽̽", E: "E͓͓̽̽", F: "F͓͓̽̽", G: "G͓͓̽̽", H: "H͓͓̽̽",
    I: "I͓͓̽̽", J: "J͓͓̽̽", K: "K͓͓̽̽", L: "L͓͓̽̽", M: "M͓͓̽̽", N: "N͓͓̽̽", O: "O͓͓̽̽", P: "P͓͓̽̽",
    Q: "Q͓͓̽̽", R: "R͓͓̽̽", S: "S͓͓̽̽", T: "T͓͓̽̽", U: "U͓͓̽̽", V: "V͓͓̽̽", W: "W͓͓̽̽", X: "X͓͓̽̽",
    Y: "Y͓͓̽̽", Z: "Z͓͓̽̽"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const mixedStyle3El = document.getElementById("MixedStyle3Output");
if (mixedStyle3El) {
  mixedStyle3El.textContent = text ? toMixedStyle3(text) : toMixedStyle3("Mixed Style 3");
}
function toBandaid(text) {
  const map = {
    a: "Δ", b: "β", c: "Ć", d: "Đ", e: "€", f: "₣", g: "Ǥ", h: "Ħ",
    i: "Ɨ", j: "Ĵ", k: "Ҝ", l: "Ł", m: "Μ", n: "Ň", o: "Ø", p: "Ƥ",
    q: "Ω", r: "Ŗ", s: "Ş", t: "Ŧ", u: "Ữ", v: "V", w: "Ŵ", x: "Ж",
    y: "¥", z: "Ž",
    A: "Δ", B: "β", C: "Ć", D: "Đ", E: "€", F: "₣", G: "Ǥ", H: "Ħ",
    I: "Ɨ", J: "Ĵ", K: "Ҝ", L: "Ł", M: "Μ", N: "Ň", O: "Ø", P: "Ƥ",
    Q: "Ω", R: "Ŗ", S: "Ş", T: "Ŧ", U: "Ữ", V: "V", W: "Ŵ", X: "Ж",
    Y: "¥", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const bandaidEl = document.getElementById("BandaidOutput");
if (bandaidEl) {
  bandaidEl.textContent = text ? toBandaid(text) : toBandaid("Bandaid");
}
function toDelta(text) {
  const map = {
    a: "̶a", b: "̶b", c: "̶c", d: "̶d", e: "̶e", f: "̶f", g: "̶g", h: "̶h",
    i: "̶i", j: "̶j", k: "̶k", l: "̶l", m: "̶m", n: "̶n", o: "̶o", p: "̶p",
    q: "̶q", r: "̶r", s: "̶s", t: "̶t", u: "̶u", v: "̶v", w: "̶w", x: "̶x",
    y: "̶y", z: "̶z",
    A: "̶A", B: "̶B", C: "̶C", D: "̶D", E: "̶E", F: "̶F", G: "̶G", H: "̶H",
    I: "̶I", J: "̶J", K: "̶K", L: "̶L", M: "̶M", N: "̶N", O: "̶O", P: "̶P",
    Q: "̶Q", R: "̶R", S: "̶S", T: "̶T", U: "̶U", V: "̶V", W: "̶W", X: "̶X",
    Y: "̶Y", Z: "̶Z"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const deltaEl = document.getElementById("DeltaOutput");
if (deltaEl) {
  deltaEl.textContent = text ? toDelta(text) : toDelta("Delta");
}
function toCorruptStrikethrough(text) {
  const map = {
    a: "ͯa", b: "ͯb", c: "ͯc", d: "ͯd", e: "ͯe", f: "ͯf", g: "ͯg", h: "ͯh",
    i: "ͯi", j: "ͯj", k: "ͯk", l: "ͯl", m: "ͯm", n: "ͯn", o: "ͯo", p: "ͯp",
    q: "ͯq", r: "ͯr", s: "ͯs", t: "ͯt", u: "ͯu", v: "ͯv", w: "ͯw", x: "ͯx",
    y: "ͯy", z: "ͯz",
    A: "ͯA", B: "ͯB", C: "ͯC", D: "ͯD", E: "ͯE", F: "ͯF", G: "ͯG", H: "ͯH",
    I: "ͯI", J: "ͯJ", K: "ͯK", L: "ͯL", M: "ͯM", N: "ͯN", O: "ͯO", P: "ͯP",
    Q: "ͯQ", R: "ͯR", S: "ͯS", T: "ͯT", U: "ͯU", V: "ͯV", W: "ͯW", X: "ͯX",
    Y: "ͯY", Z: "ͯZ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const corruptStrikethroughEl = document.getElementById("CorruptStrikethroughOutput");
if (corruptStrikethroughEl) {
  corruptStrikethroughEl.textContent = text ? toCorruptStrikethrough(text) : toCorruptStrikethrough("Corrupt Strikethrough");
}
function toXcross(text) {
  const map = {
    a: "Ⱥ", b: "ƀ", c: "ȼ", d: "đ", e: "ɇ", f: "f", g: "ǥ", h: "ħ",
    i: "ɨ", j: "ɉ", k: "ꝁ", l: "ł", m: "m", n: "n", o: "ø", p: "ᵽ",
    q: "ꝗ", r: "ɍ", s: "s", t: "ŧ", u: "ᵾ", v: "v", w: "w", x: "x",
    y: "ɏ", z: "z",
    A: "Ⱥ", B: "Ƀ", C: "Ȼ", D: "Đ", E: "Ɇ", F: "₣", G: "Ǥ", H: "Ħ",
    I: "Ɩ", J: "J", K: "Ꝁ", L: "Ł", M: "M", N: "N", O: "Ø", P: "Ᵽ",
    Q: "Ꝗ", R: "Ɍ", S: "S", T: "Ŧ", U: "Ʉ", V: "V", W: "W", X: "X",
    Y: "Ɏ", Z: "Z"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toQuickMaths(text) {
  const map = {
     a: "⍲", b: "⌦", c: "⍧", d: "⟄", e: "ℇ", f: "🜅", g: "⅁", h: "ℍ",
  i: "⟟", j: "⏎", k: "⏧", l: "⎾", m: "⍓", n: "☊", o: "⌾", p: "⍴",
  q: "ℚ", r: "☈", s: "⎎", t: "⍑", u: "⌰", v: "⍻", w: "⏙", x: "🝍",
  y: "⍦", z: "☡",

  A: "⍲", B: "⌦", C: "⍧", D: "⟄", E: "ℇ", F: "🜅", G: "⅁", H: "ℍ",
  I: "⟟", J: "⏎", K: "⏧", L: "⎾", M: "⍓", N: "☊", O: "⌾", P: "⍴",
  Q: "ℚ", R: "☈", S: "⎎", T: "⍑", U: "⌰", V: "⍻", W: "⏙", X: "🝍",
  Y: "⍦", Z: "☡"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toSlither(text) {
  const map = {
     a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ",
  i: "i", j: "ꞁ", k: "ʞ", l: "|", m: "m", n: "ᴎ", o: "o", p: "q",
  q: "p", r: "ɿ", s: "ꙅ", t: "ƚ", u: "u", v: "v", w: "w", x: "x",
  y: "ʏ", z: "ƹ",
  A: "A", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", H: "H",
  I: "I", J: "Ⴑ", K: "⋊", L: "⅃", M: "M", N: "Ͷ", O: "O", P: "ꟼ",
  Q: "Ọ", R: "Я", S: "Ꙅ", T: "T", U: "U", V: "V", W: "W", X: "X",
  Y: "Y", Z: "Ƹ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toAllWays(text) {
  const map = {
   'a':'ꜛᴀ͎ꜜ','b':'ꜛʙ͎ꜜ','c':'ꜛᴄ͎ꜜ','d':'ꜛᴅ͎ꜜ','e':'ꜛᴇ͎ꜜ','f':'ꜛꜰ͎ꜜ','g':'ꜛɢ͎ꜜ','h':'ꜛʜ͎ꜜ','i':'ꜛɪ͎ꜜ','j':'ꜛᴊ͎ꜜ','k':'ꜛᴋ͎ꜜ','l':'ꜛʟ͎ꜜ','m':'ꜛᴍ͎ꜜ','n':'ꜛɴ͎ꜜ','o':'ꜛᴏ͎ꜜ','p':'ꜛᴘ͎ꜜ','q':'ꜛǫ͎ꜜ','r':'ꜛʀ͎ꜜ','s':'ꜛs͎ꜜ','t':'ꜛᴛ͎ꜜ','u':'ꜛᴜ͎ꜜ','v':'ꜛᴠ͎ꜜ','w':'ꜛᴡ͎ꜜ','x':'ꜛx͎ꜜ','y':'ꜛʏ͎ꜜ','z':'ꜛᴢ͎ꜜ','A':'ꜛᴀ͎ꜜ','B':'ꜛʙ͎ꜜ','C':'ꜛᴄ͎ꜜ','D':'ꜛᴅ͎ꜜ','E':'ꜛᴇ͎ꜜ','F':'ꜛꜰ͎ꜜ','G':'ꜛɢ͎ꜜ','H':'ꜛʜ͎ꜜ','I':'ꜛɪ͎ꜜ','J':'ꜛᴊ͎ꜜ','K':'ꜛᴋ͎ꜜ','L':'ꜛʟ͎ꜜ','M':'ꜛᴍ͎ꜜ','N':'ꜛɴ͎ꜜ','O':'ꜛᴏ͎ꜜ','P':'ꜛᴘ͎ꜜ','Q':'ꜛǫ͎ꜜ','R':'ꜛʀ͎ꜜ','S':'ꜛs͎ꜜ','T':'ꜛᴛ͎ꜜ','U':'ꜛᴜ͎ꜜ','V':'ꜛᴠ͎ꜜ','W':'ꜛᴡ͎ꜜ','X':'ꜛx͎ꜜ','Y':'ꜛʏ͎ꜜ','Z':'ꜛᴢ͎ꜜ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toDIYAsterisks(text) {
  const map = {
   a: "𝐚⃥⃒̸", b: "𝐛⃥⃒̸", c: "𝐜⃥⃒̸", d: "𝐝⃥⃒̸", e: "𝐞⃥⃒̸",
f: "𝐟⃥⃒̸", g: "𝐠⃥⃒̸", h: "𝐡⃥⃒̸", i: "𝐢⃥⃒̸", j: "𝐣⃥⃒̸",
k: "𝐤⃥⃒̸", l: "𝐥⃥⃒̸", m: "𝐦⃥⃒̸", n: "𝐧⃥⃒̸", o: "𝐨⃥⃒̸",
p: "𝐩⃥⃒̸", q: "𝐪⃥⃒̸", r: "𝐫⃥⃒̸", s: "𝐬⃥⃒̸", t: "𝐭⃥⃒̸",
u: "𝐮⃥⃒̸", v: "𝐯⃥⃒̸", w: "𝐰⃥⃒̸", x: "𝐱⃥⃒̸",
y: "𝐲⃥⃒̸", z: "𝐳⃥⃒̸",

A: "𝐀⃥⃒̸", B: "𝐁⃥⃒̸", C: "𝐂⃥⃒̸", D: "𝐃⃥⃒̸", E: "𝐄⃥⃒̸",
F: "𝐅⃥⃒̸", G: "𝐆⃥⃒̸", H: "𝐇⃥⃒̸", I: "𝐈⃥⃒̸", J: "𝐉⃥⃒̸",
K: "𝐊⃥⃒̸", L: "𝐋⃥⃒̸", M: "𝐌⃥⃒̸", N: "𝐍⃥⃒̸", O: "𝐎⃥⃒̸",
P: "𝐏⃥⃒̸", Q: "𝐐⃥⃒̸", R: "𝐑⃥⃒̸", S: "𝐒⃥⃒̸", T: "𝐓⃥⃒̸",
U: "𝐔⃥⃒̸", V: "𝐕⃥⃒̸", W: "𝐖⃥⃒̸", X: "𝐗⃥⃒̸",
Y: "𝐘⃥⃒̸", Z: "𝐙⃥⃒̸"

  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toCliffs(text) {
  const map = {
a: "༼𝚊", b: "༼𝚋", c: "༼𝚌", d: "༼𝚍", e: "༼𝚎",
f: "༼𝚏", g: "༼𝚐", h: "༼𝚑", i: "༼𝚒", j: "༼𝚓",
k: "༼𝚔", l: "༼𝚕", m: "༼𝚖", n: "༼𝚗", o: "༼𝚘",
p: "༼𝚙", q: "༼𝚚", r: "༼𝚛", s: "༼𝚜", t: "༼𝚝",
u: "༼𝚞", v: "༼𝚟", w: "༼𝚠", x: "༼𝚡",
y: "༼𝚢", z: "༼𝚣",

A: "༼𝙰", B: "༼𝙱", C: "༼𝙲", D: "༼𝙳", E: "༼𝙴",
F: "༼𝙵", G: "༼𝙶", H: "༼𝙷", I: "༼𝙸", J: "༼𝙹",
K: "༼𝙺", L: "༼𝙻", M: "༼𝙼", N: "༼𝙽", O: "༼𝙾",
P: "༼𝙿", Q: "༼𝚀", R: "༼𝚁", S: "༼𝚂", T: "༼𝚃",
U: "༼𝚄", V: "༼𝚅", W: "༼𝚆", X: "༼𝚇",
Y: "༼𝚈", Z: "༼𝚉"


  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toAngular(text) {
  const map = {
a: "λ", b: "b", c: "ᄃ", d: "d", e: "ө",
f: "f", g: "g", h: "ή", i: "i", j: "j",
k: "k", l: "ᄂ", m: "m", n: "п", o: "σ",
p: "p", q: "q", r: "я", s: "ƨ", t: "ƭ",
u: "ц", v: "v", w: "щ", x: "x",
y: "y", z: "z",

A: "Λ", B: "B", C: "ᄃ", D: "D", E: "Σ",
F: "F", G: "G", H: "Ή", I: "I", J: "J",
K: "K", L: "ᄂ", M: "M", N: "П", O: "Ө",
P: "P", Q: "Q", R: "Я", S: "Ƨ", T: "Ƭ",
U: "Ц", V: "V", W: "Щ", X: "X",
Y: "Y", Z: "Z"



  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toTheOperator(text) {
  const map = {
a: "𝚊⃥̸⃝", b: "𝚋⃥̸⃝", c: "𝚌⃥̸⃝", d: "𝚍⃥̸⃝", e: "𝚎⃥̸⃝",
f: "𝚏⃥̸⃝", g: "𝚐⃥̸⃝", h: "𝚑⃥̸⃝", i: "𝚒⃥̸⃝", j: "𝚓⃥̸⃝",
k: "𝚔⃥̸⃝", l: "𝚕⃥̸⃝", m: "𝚖⃥̸⃝", n: "𝚗⃥̸⃝", o: "𝚘⃥̸⃝",
p: "𝚙⃥̸⃝", q: "𝚚⃥̸⃝", r: "𝚛⃥̸⃝", s: "𝚜⃥̸⃝", t: "𝚝⃥̸⃝",
u: "𝚞⃥̸⃝", v: "𝚟⃥̸⃝", w: "𝚠⃥̸⃝", x: "𝚡⃥̸⃝",
y: "𝚢⃥̸⃝", z: "𝚣⃥̸⃝",

A: "𝙰⃥̸⃝", B: "𝙱⃥̸⃝", C: "𝙲⃥̸⃝", D: "𝙳⃥̸⃝", E: "𝙴⃥̸⃝",
F: "𝙵⃥̸⃝", G: "𝙶⃥̸⃝", H: "𝙷⃥̸⃝", I: "𝙸⃥̸⃝", J: "𝙹⃥̸⃝",
K: "𝙺⃥̸⃝", L: "𝙻⃥̸⃝", M: "𝙼⃥̸⃝", N: "𝙽⃥̸⃝", O: "𝙾⃥̸⃝",
P: "𝙿⃥̸⃝", Q: "𝚀⃥̸⃝", R: "𝚁⃥̸⃝", S: "𝚂⃥̸⃝", T: "𝚃⃥̸⃝",
U: "𝚄⃥̸⃝", V: "𝚅⃥̸⃝", W: "𝚆⃥̸⃝", X: "𝚇⃥̸⃝",
Y: "𝚈⃥̸⃝", Z: "𝚉⃥̸⃝"



  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toreverseText(text) {
  const map = {
 'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
    'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
    'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
    'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
    'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
    'z': 'a',
    'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V',
    'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q',
    'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L',
    'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G',
    'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B',
    'Z': 'A'
   


  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


const reverseTextEl = document.getElementById("reverseTextOutput");
if (reverseTextEl) {
  reverseTextEl.textContent = text ? toreverseText(text) : toreverseText("reverseText");
}
function mirroredText(text) {
  const map = {
    'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ',
    'f': 'ʇ', 'g': 'ᵷ', 'h': 'ʜ', 'i': 'i', 'j': 'ņ',
    'k': 'ʞ', 'l': '|', 'm': 'w', 'n': 'u', 'o': 'o',
    'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ƨ', 't': 'ƚ',
    'u': 'n', 'v': 'v', 'w': 'm', 'x': 'x', 'y': 'ʏ',
    'z': 'z',
    'A': 'Ɒ', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ',
    'F': 'ᖴ', 'G': 'Ᵹ', 'H': 'H', 'I': 'I', 'J': 'ſ',
    'K': 'ʞ', 'L': '⅃', 'M': 'M', 'N': 'N', 'O': 'O',
    'P': 'Գ', 'Q': 'Q', 'R': 'Я', 'S': 'Ƨ', 'T': 'T',
    'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y',
    'Z': 'Z'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function italicSans(text) {
  const map = {
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦',
    'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
    'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰',
    'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
    'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺',
    'z': '𝘻',
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌',
    'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
    'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖',
    'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
    'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠',
    'Z': '𝘡'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const italicSansEl = document.getElementById("italicSansOutput");
if (italicSansEl) {
  italicSansEl.textContent = text ? italicSans(text) : italicSans("Italic (sans)");
}

function boldItalicSans(text) {
  const map = {
    'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚',
    'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟',
    'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤',
    'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩',
    'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮',
    'z': '𝙯',
    'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀',
    'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅',
    'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊',
    'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏',
    'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔',
    'Z': '𝙕'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const boldItalicSansEl = document.getElementById("boldItalicSansOutput");
if (boldItalicSansEl) {
  boldItalicSansEl.textContent = text ? boldItalicSans(text) : boldItalicSans("Bold / italic (sans)");
}

function alternatingBold(text) {
  const map = {
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞',
    'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
    'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨',
    'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
    'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲',
    'z': '𝐳',
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄',
    'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
    'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎',
    'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
    'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘',
    'Z': '𝐙'
  };
  let charIndex = 0;
  return text.split("").map(ch => {
    if (/[a-zA-Z]/.test(ch)) {
      const result = charIndex % 2 === 0 ? (map[ch] || ch) : ch;
      charIndex++;
      return result;
    }
    return ch;
  }).join("");
}

const alternatingBoldEl = document.getElementById("alternatingBoldOutput");
if (alternatingBoldEl) {
  alternatingBoldEl.textContent = text ? alternatingBold(text) : alternatingBold("Alternating Bold");
}

function alternatingItalic(text) {
  const map = {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒',
    'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜',
    'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦',
    'z': '𝑧',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸',
    'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂',
    'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌',
    'Z': '𝑍'
  };
  let charIndex = 0;
  return text.split("").map(ch => {
    if (/[a-zA-Z]/.test(ch)) {
      const result = charIndex % 2 === 0 ? (map[ch] || ch) : ch;
      charIndex++;
      return result;
    }
    return ch;
  }).join("");
}

const alternatingItalicEl = document.getElementById("alternatingItalicOutput");
if (alternatingItalicEl) {
  alternatingItalicEl.textContent = text ? alternatingItalic(text) : alternatingItalic("Alternating Italic");
}

function italicSwitchSerifs(text) {
  const map = {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒',
    'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜',
    'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦',
    'z': '𝑧',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸',
    'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂',
    'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌',
    'Z': '𝑍'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const italicSwitchSerifsEl = document.getElementById("italicSwitchSerifsOutput");
if (italicSwitchSerifsEl) {
  italicSwitchSerifsEl.textContent = text ? italicSwitchSerifs(text) : italicSwitchSerifs("Italic Switch Serifs");
}

function beauty(text) {
  const map = {
    'a': 'ꪖ', 'b': '᥇', 'c': 'ᥴ', 'd': 'ᦔ', 'e': 'ꫀ',
    'f': 'ᠻ', 'g': 'ᧁ', 'h': 'ꫝ', 'i': 'ﺃ', 'j': '꠹',
    'k': 'ᛕ', 'l': 'ꪶ', 'm': 'ꪑ', 'n': 'ꪀ', 'o': 'ꪮ',
    'p': 'ᜣ', 'q': 'ꪇ', 'r': '᥅', 's': 'ᦓ', 't': 'ꪻ',
    'u': 'ꪊ', 'v': 'ꪜ', 'w': '᭙', 'x': '᥊', 'y': 'ꪗ',
    'z': 'ɀ',
    'A': 'ꪖ', 'B': '᥇', 'C': 'ᥴ', 'D': 'ᦔ', 'E': 'ꫀ',
    'F': 'ᠻ', 'G': 'ᧁ', 'H': 'ꫝ', 'I': 'ﺃ', 'J': '꠹',
    'K': 'ᛕ', 'L': 'ꪶ', 'M': 'ꪑ', 'N': 'ꪀ', 'O': 'ꪮ',
    'P': 'ᜣ', 'Q': 'ꪇ', 'R': '᥅', 'S': 'ᦓ', 'T': 'ꪻ',
    'U': 'ꪊ', 'V': 'ꪜ', 'W': '᭙', 'X': '᥊', 'Y': 'ꪗ',
    'Z': 'ɀ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const beautyEl = document.getElementById("beautyOutput");
if (beautyEl) {
  beautyEl.textContent = text ? beauty(text) : beauty("beauty");
}

function belgan(text) {
  const map = {
    'a': 'ǟ', 'b': 'ɮ', 'c': 'ƈ', 'd': 'ɖ', 'e': 'ɛ',
    'f': 'ʄ', 'g': 'ɢ', 'h': 'ɦ', 'i': 'ɨ', 'j': 'ʝ',
    'k': 'ӄ', 'l': 'ʟ', 'm': 'ʍ', 'n': 'ռ', 'o': 'օ',
    'p': 'ք', 'q': 'զ', 'r': 'ʀ', 's': 'ֆ', 't': 'ȶ',
    'u': 'ʊ', 'v': 'ʋ', 'w': 'ա', 'x': 'Ӽ', 'y': 'ʏ',
    'z': 'ʐ',

    'A': 'ǟ', 'B': 'ɮ', 'C': 'ƈ', 'D': 'ɖ', 'E': 'ɛ',
    'F': 'ʄ', 'G': 'ɢ', 'H': 'ɦ', 'I': 'ɨ', 'J': 'ʝ',
    'K': 'ӄ', 'L': 'ʟ', 'M': 'ʍ', 'N': 'ռ', 'O': 'օ',
    'P': 'ք', 'Q': 'զ', 'R': 'ʀ', 'S': 'ֆ', 'T': 'ȶ',
    'U': 'ʊ', 'V': 'ʋ', 'W': 'ա', 'X': 'Ӽ', 'Y': 'ʏ',
    'Z': 'ʐ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const belganEl = document.getElementById("belganOutput");
if (belganEl) {
  belganEl.textContent = text ? belgan(text) : belgan("Belgan");
}
function christmas(text) {
  const map = {
    'a':'𖤬','b':'ꔪ','c':'ꛕ','d':'𖤀','e':'𖤟','f':'ꘘ',
    'g':'ꚽ','h':'ꛅ','i':'ꛈ','j':'ꚠ','k':'𖤰','l':'ꚳ',
    'm':'𖢑','n':'ꛘ','o':'𖣠','p':'ㄗ','q':'ꚩ','r':'𖦪',
    's':'ꕷ','t':'𖢧','u':'ꚶ','v':'ꚴ','w':'ꛃ','x':'𖤗',
    'y':'ꚲ','z':'ꛉ',

    'A':'𖤬','B':'ꔪ','C':'ꛕ','D':'𖤀','E':'𖤟','F':'ꘘ',
    'G':'ꚽ','H':'ꛅ','I':'ꛈ','J':'ꚠ','K':'𖤰','L':'ꚳ',
    'M':'𖢑','N':'ꛘ','O':'𖣠','P':'ㄗ','Q':'ꚩ','R':'𖦪',
    'S':'ꕷ','T':'𖢧','U':'ꚶ','V':'ꚴ','W':'ꛃ','X':'𖤗',
    'Y':'ꚲ','Z':'ꛉ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const christmasEl = document.getElementById("christmasOutput");
if (christmasEl) {
  christmasEl.textContent = text ? christmas(text) : christmas("Christmas");
}

function calista(text) {
  const map = {
    'a':'Δ','b':'β','c':'Ć','d':'Đ','e':'€','f':'₣',
    'g':'Ǥ','h':'Ħ','i':'Ɨ','j':'Ĵ','k':'Ҝ','l':'Ł',
    'm':'Μ','n':'Ň','o':'Ø','p':'Ƥ','q':'Ω','r':'Ř',
    's':'Ş','t':'Ŧ','u':'Ữ','v':'V','w':'Ŵ','x':'Ж',
    'y':'¥','z':'Ž',

    'A':'Δ','B':'β','C':'Ć','D':'Đ','E':'€','F':'₣',
    'G':'Ǥ','H':'Ħ','I':'Ɨ','J':'Ĵ','K':'Ҝ','L':'Ł',
    'M':'Μ','N':'Ň','O':'Ø','P':'Ƥ','Q':'Ω','R':'Ř',
    'S':'Ş','T':'Ŧ','U':'Ữ','V':'V','W':'Ŵ','X':'Ж',
    'Y':'¥','Z':'Ž'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const calistaEl = document.getElementById("calistaOutput");
if (calistaEl) {
  calistaEl.textContent = text ? calista(text) : calista("Calista");
}
function monoline(text) {
  const map = {
    'a':'а','b':'б','c':'c','d':'д','e':'ё','f':'f',
    'g':'g','h':'н','i':'ї','j':'j','k':'к','l':'г',
    'm':'ѫ','n':'п','o':'ѳ','p':'p','q':'ф','r':'я',
    's':'$','t':'т','u':'ц','v':'ѵ','w':'щ','x':'ж',
    'y':'ч','z':'з',

    'A':'А','B':'Б','C':'C','D':'Д','E':'Є','F':'F',
    'G':'G','H':'H','I':'Ї','J':'J','K':'К','L':'Г',
    'M':'Ѫ','N':'Й','O':'Ѳ','P':'P','Q':'Ф','R':'Я',
    'S':'$','T':'T','U':'Ц','V':'Ѵ','W':'Ш','X':'Ж',
    'Y':'Ч','Z':'З'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const monolineEl = document.getElementById("monolineOutput");
if (monolineEl) {
  monolineEl.textContent = text ? monoline(text) : monoline("Monoline");
}
function moshra(text) {
  const map = {
    'a':'ค','b':'๒','c':'ς','d':'๔','e':'є','f':'Ŧ',
    'g':'ﻮ','h':'ђ','i':'เ','j':'ן','k':'к','l':'ɭ',
    'm':'๓','n':'ภ','o':'๏','p':'ק','q':'ợ','r':'г',
    's':'ร','t':'Շ','u':'ย','v':'ש','w':'ฬ','x':'א',
    'y':'ץ','z':'չ',

    'A':'ค','B':'๒','C':'ς','D':'๔','E':'є','F':'Ŧ',
    'G':'ﻮ','H':'ђ','I':'เ','J':'ן','K':'к','L':'ɭ',
    'M':'๓','N':'ภ','O':'๏','P':'ק','Q':'ợ','R':'г',
    'S':'ร','T':'Շ','U':'ย','V':'ש','W':'ฬ','X':'א',
    'Y':'ץ','Z':'չ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const moshraEl = document.getElementById("moshraOutput");
if (moshraEl) {
  moshraEl.textContent = text ? moshra(text) : moshra("Moshra");
}
function aesthetical(text) {
  const map = {
    'a':'ﾑ','b':'乃','c':'ᄃ','d':'り','e':'乇','f':'ｷ',
    'g':'ム','h':'ん','i':'ﾉ','j':'ﾌ','k':'ズ','l':'ﾚ',
    'm':'ﾶ','n':'刀','o':'の','p':'ｱ','q':'ゐ','r':'尺',
    's':'丂','t':'ｲ','u':'ひ','v':'√','w':'W','x':'ﾒ',
    'y':'ﾘ','z':'乙',

    'A':'ﾑ','B':'乃','C':'ᄃ','D':'り','E':'乇','F':'ｷ',
    'G':'ム','H':'ん','I':'ﾉ','J':'ﾌ','K':'ズ','L':'ﾚ',
    'M':'ﾶ','N':'刀','O':'の','P':'ｱ','Q':'ゐ','R':'尺',
    'S':'丂','T':'ｲ','U':'ひ','V':'√','W':'W','X':'ﾒ',
    'Y':'ﾘ','Z':'乙'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const aestheticalEl = document.getElementById("aestheticalOutput");
if (aestheticalEl) {
  aestheticalEl.textContent = text ? aesthetical(text) : aesthetical("Aesthetical");
}
function midnight(text) {
  const map = {
    'a':'Д','b':'Б','c':'C','d':'D','e':'Ξ','f':'F',
    'g':'G','h':'H','i':'I','j':'J','k':'Ҝ','l':'L',
    'm':'M','n':'И','o':'Ф','p':'P','q':'Ǫ','r':'Я',
    's':'S','t':'Γ','u':'Ц','v':'V','w':'Щ','x':'Ж',
    'y':'У','z':'Z',

    'A':'Д','B':'Б','C':'C','D':'D','E':'Ξ','F':'F',
    'G':'G','H':'H','I':'I','J':'J','K':'Ҝ','L':'L',
    'M':'M','N':'И','O':'Ф','P':'P','Q':'Ǫ','R':'Я',
    'S':'S','T':'Γ','U':'Ц','V':'V','W':'Щ','X':'Ж',
    'Y':'У','Z':'Z'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const midnightEl = document.getElementById("midnightOutput");
if (midnightEl) {
  midnightEl.textContent = text ? midnight(text) : midnight("Midnight");
}
function softScript(text) {
  const map = {
    'a':'𝒂','b':'𝒃','c':'𝒄','d':'𝒅','e':'𝒆','f':'𝒇',
    'g':'𝒈','h':'𝒉','i':'𝒊','j':'𝒋','k':'𝒌','l':'𝒍',
    'm':'𝒎','n':'𝒏','o':'𝒐','p':'𝒑','q':'𝒒','r':'𝒓',
    's':'𝒔','t':'𝒕','u':'𝒖','v':'𝒗','w':'𝒘','x':'𝒙',
    'y':'𝒚','z':'𝒛',

    'A':'𝑨','B':'𝑩','C':'𝑪','D':'𝑫','E':'𝑬','F':'𝑭',
    'G':'𝑮','H':'𝑯','I':'𝑰','J':'𝑱','K':'𝑲','L':'𝑳',
    'M':'𝑴','N':'𝑵','O':'𝑶','P':'𝑷','Q':'𝑸','R':'𝑹',
    'S':'𝑺','T':'𝑻','U':'𝑼','V':'𝑽','W':'𝑾','X':'𝑿',
    'Y':'𝒀','Z':'𝒁'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const softScriptEl = document.getElementById("softScriptOutput");
if (softScriptEl) {
  softScriptEl.textContent = text ? softScript(text) : softScript("Soft Script");
}
function angelCursive(text) {
  const map = {
    'a':'𝐚','b':'𝐛','c':'𝐜','d':'𝐝','e':'𝐞','f':'𝐟',
    'g':'𝐠','h':'𝐡','i':'𝐢','j':'𝐣','k':'𝐤','l':'𝐥',
    'm':'𝐦','n':'𝐧','o':'𝐨','p':'𝐩','q':'𝐪','r':'𝐫',
    's':'𝐬','t':'𝐭','u':'𝐮','v':'𝐯','w':'𝐰','x':'𝐱',
    'y':'𝐲','z':'𝐳',

    'A':'𝐀','B':'𝐁','C':'𝐂','D':'𝐃','E':'𝐄','F':'𝐅',
    'G':'𝐆','H':'𝐇','I':'𝐈','J':'𝐉','K':'𝐊','L':'𝐋',
    'M':'𝐌','N':'𝐍','O':'𝐎','P':'𝐏','Q':'𝐐','R':'𝐑',
    'S':'𝐒','T':'𝐓','U':'𝐔','V':'𝐕','W':'𝐖','X':'𝐗',
    'Y':'𝐘','Z':'𝐙'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const angelCursiveEl = document.getElementById("angelCursiveOutput");
if (angelCursiveEl) {
  angelCursiveEl.textContent = text ? angelCursive(text) : angelCursive("Angel Cursive");
}
function velvetScript(text) {
  const map = {
    'a':'𝓪','b':'𝓫','c':'𝓬','d':'𝓭','e':'𝓮','f':'𝓯',
    'g':'𝓰','h':'𝓱','i':'𝓲','j':'𝓳','k':'𝓴','l':'𝓵',
    'm':'𝓶','n':'𝓷','o':'𝓸','p':'𝓹','q':'𝓺','r':'𝓻',
    's':'𝓼','t':'𝓽','u':'𝓾','v':'𝓿','w':'𝔀','x':'𝔁',
    'y':'𝔂','z':'𝔃',

    'A':'𝓐','B':'𝓑','C':'𝓒','D':'𝓓','E':'𝓔','F':'𝓕',
    'G':'𝓖','H':'𝓗','I':'𝓘','J':'𝓙','K':'𝓚','L':'𝓛',
    'M':'𝓜','N':'𝓝','O':'𝓞','P':'𝓟','Q':'𝓠','R':'𝓡',
    'S':'𝓢','T':'𝓣','U':'𝓤','V':'𝓥','W':'𝓦','X':'𝓧',
    'Y':'𝓨','Z':'𝓩'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const velvetScriptEl = document.getElementById("velvetScriptOutput");
if (velvetScriptEl) {
  velvetScriptEl.textContent = text ? velvetScript(text) : velvetScript("Velvet Script");
}

 //demonic
function bloodSharp(text) {
  const map = {
    'a':'ᗩ','b':'ᗷ','c':'ᑕ','d':'ᗪ','e':'E','f':'ᖴ',
    'g':'G','h':'ᕼ','i':'I','j':'ᒍ','k':'K','l':'ᒪ',
    'm':'ᗰ','n':'ᑎ','o':'O','p':'ᑭ','q':'ᑫ','r':'ᖇ',
    's':'ᔕ','t':'T','u':'ᑌ','v':'ᐯ','w':'ᗯ','x':'᙭',
    'y':'Y','z':'ᘔ',

    'A':'ᗩ','B':'ᗷ','C':'ᑕ','D':'ᗪ','E':'E','F':'ᖴ',
    'G':'G','H':'ᕼ','I':'I','J':'ᒍ','K':'K','L':'ᒪ',
    'M':'ᗰ','N':'ᑎ','O':'O','P':'ᑭ','Q':'ᑫ','R':'ᖇ',
    'S':'ᔕ','T':'T','U':'ᑌ','V':'ᐯ','W':'ᗯ','X':'᙭',
    'Y':'Y','Z':'ᘔ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const bloodSharpEl = document.getElementById("bloodSharpOutput");
if (bloodSharpEl) {
  bloodSharpEl.textContent = text ? bloodSharp(text) : bloodSharp("Blood Sharp");
}

function darkBubble(text) {
  const map = {
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔',
    'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙',
    'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞',
    'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣',
    'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨',
    'z': '🅩',
    'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔',
    'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
    'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞',
    'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
    'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨',
    'Z': '🅩'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const darkBubbleEl = document.getElementById("darkBubbleOutput");
if (darkBubbleEl) {
  darkBubbleEl.textContent = text ? darkBubble(text) : darkBubble("Dark Bubble");
}

function bigRussian(text) {
  const map = {
    'a': 'Д', 'b': 'Б', 'c': 'C', 'd': 'D', 'e': 'Ξ',
    'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J',
    'k': 'Ҝ', 'l': 'L', 'm': 'M', 'n': 'И', 'o': 'Ф',
    'p': 'P', 'q': 'Ǫ', 'r': 'Я', 's': 'S', 't': 'Γ',
    'u': 'Ц', 'v': 'V', 'w': 'Щ', 'x': 'Ж', 'y': 'У',
    'z': 'Z',
    'A': 'Д', 'B': 'Б', 'C': 'C', 'D': 'D', 'E': 'Ξ',
    'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J',
    'K': 'Ҝ', 'L': 'L', 'M': 'M', 'N': 'И', 'O': 'Ф',
    'P': 'P', 'Q': 'Ǫ', 'R': 'Я', 'S': 'S', 'T': 'Γ',
    'U': 'Ц', 'V': 'V', 'W': 'Щ', 'X': 'Ж', 'Y': 'У',
    'Z': 'Z'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const bigRussianEl = document.getElementById("bigRussianOutput");
if (bigRussianEl) {
  bigRussianEl.textContent = text ? bigRussian(text) : bigRussian("Big Russian");
}
function asianFusion(text) {
  const map = {
    'a': 'ﾑ', 'b': '乃', 'c': 'ᄃ', 'd': 'り', 'e': '乇',
    'f': 'ｷ', 'g': 'ム', 'h': 'ん', 'i': 'ﾉ', 'j': 'ﾌ',
    'k': 'ズ', 'l': 'ﾚ', 'm': 'ﾶ', 'n': '刀', 'o': 'の',
    'p': 'ｱ', 'q': 'ゐ', 'r': '尺', 's': '丂', 't': 'ｲ',
    'u': 'ひ', 'v': '√', 'w': 'W', 'x': 'ﾒ', 'y': 'ﾘ',
    'z': '乙',
    'A': 'ﾑ', 'B': '乃', 'C': 'ᄃ', 'D': 'り', 'E': '乇',
    'F': 'ｷ', 'G': 'ム', 'H': 'ん', 'I': 'ﾉ', 'J': 'ﾌ',
    'K': 'ズ', 'L': 'ﾚ', 'M': 'ﾶ', 'N': '刀', 'O': 'の',
    'P': 'ｱ', 'Q': 'ゐ', 'R': '尺', 'S': '丂', 'T': 'ｲ',
    'U': 'ひ', 'V': '√', 'W': 'W', 'X': 'ﾒ', 'Y': 'ﾘ',
    'Z': '乙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const asianFusionEl = document.getElementById("asianFusionOutput");
if (asianFusionEl) {
  asianFusionEl.textContent = text ? asianFusion(text) : asianFusion("Asian Fusion");
}

function mythical(text) {
  const map = {
    'a': 'Λ', 'b': 'ß', 'c': 'Ƈ', 'd': 'Ð', 'e': 'Ë',
    'f': 'Ғ', 'g': 'Ɠ', 'h': 'Ħ', 'i': 'Ï', 'j': 'J',
    'k': 'Ҡ', 'l': 'Ł', 'm': '₥', 'n': 'Ŋ', 'o': 'Ø',
    'p': 'P', 'q': 'Ǫ', 'r': 'Я', 's': 'Ƨ', 't': 'ŧ',
    'u': 'ų', 'v': 'V', 'w': 'Щ', 'x': 'Ж', 'y': 'Ϋ',
    'z': 'Z',
    'A': 'Λ', 'B': 'ß', 'C': 'Ƈ', 'D': 'Ð', 'E': 'Ë',
    'F': 'Ғ', 'G': 'Ɠ', 'H': 'Ħ', 'I': 'Ï', 'J': 'J',
    'K': 'Ҡ', 'L': 'Ł', 'M': '₥', 'N': 'Ŋ', 'O': 'Ø',
    'P': 'P', 'Q': 'Ǫ', 'R': 'Я', 'S': 'Ƨ', 'T': 'ŧ',
    'U': 'ų', 'V': 'V', 'W': 'Щ', 'X': 'Ж', 'Y': 'Ϋ',
    'Z': 'Z'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const mythicalEl = document.getElementById("mythicalOutput");
if (mythicalEl) {
  mythicalEl.textContent = text ? mythical(text) : mythical("Mythical");
}

function alpha(text) {
  const map = {
    'a': 'α', 'b': 'ɓ', 'c': 'ĉ', 'd': '∂', 'e': 'ε',
    'f': 'ƒ', 'g': 'ɠ', 'h': 'ɦ', 'i': 'เ', 'j': 'ʝ',
    'k': 'қ', 'l': 'ℓ', 'm': 'ɱ', 'n': 'ɳ', 'o': 'σ',
    'p': 'ρ', 'q': 'φ', 'r': 'г', 's': 'ร', 't': 'ƭ',
    'u': 'µ', 'v': 'ѵ', 'w': 'ω', 'x': 'א', 'y': 'ყ',
    'z': 'ƺ',
    'A': 'α', 'B': 'ɓ', 'C': 'ĉ', 'D': '∂', 'E': 'ε',
    'F': 'ƒ', 'G': 'ɠ', 'H': 'ɦ', 'I': 'เ', 'J': 'ʝ',
    'K': 'қ', 'L': 'ℓ', 'M': 'ɱ', 'N': 'ɳ', 'O': 'σ',
    'P': 'ρ', 'Q': 'φ', 'R': 'г', 'S': 'ร', 'T': 'ƭ',
    'U': 'µ', 'V': 'ѵ', 'W': 'ω', 'X': 'א', 'Y': 'ყ',
    'Z': 'ƺ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const alphaEl = document.getElementById("alphaOutput");
if (alphaEl) {
  alphaEl.textContent = text ? alpha(text) : alpha("Alpha");
}

function liner(text) {
  const map = {
    'a': '₳', 'b': '฿', 'c': 'Ȼ', 'd': 'Ɖ', 'e': 'Ɇ',
    'f': 'Ŧ', 'g': 'Ǥ', 'h': 'Ħ', 'i': 'ı', 'j': 'J',
    'k': '₭', 'l': 'Ⱡ', 'm': '₥', 'n': '₦', 'o': 'Ø',
    'p': '₱', 'q': 'Q', 'r': 'Ɽ', 's': '₴', 't': '₮',
    'u': 'Ʉ', 'v': 'V', 'w': '₩', 'x': 'Ӿ', 'y': 'Ɏ',
    'z': 'Ƶ',
    'A': '₳', 'B': '฿', 'C': 'Ȼ', 'D': 'Ɖ', 'E': 'Ɇ',
    'F': 'Ŧ', 'G': 'Ǥ', 'H': 'Ħ', 'I': 'ı', 'J': 'J',
    'K': '₭', 'L': 'Ⱡ', 'M': '₥', 'N': '₦', 'O': 'Ø',
    'P': '₱', 'Q': 'Q', 'R': 'Ɽ', 'S': '₴', 'T': '₮',
    'U': 'Ʉ', 'V': 'V', 'W': '₩', 'X': 'Ӿ', 'Y': 'Ɏ',
    'Z': 'Ƶ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const linerEl = document.getElementById("linerOutput");
if (linerEl) {
  linerEl.textContent = text ? liner(text) : liner("Liner");
}

function echo(text) {
  const map = {
    'a': 'ᗩ', 'b': 'ᗷ', 'c': 'ᑕ', 'd': 'ᗪ', 'e': 'ᙓ',
    'f': 'ᖴ', 'g': 'ᘜ', 'h': 'ᕼ', 'i': 'ᓰ', 'j': 'ᒍ',
    'k': 'K', 'l': 'ᒪ', 'm': 'ᗰ', 'n': 'ᑎ', 'o': 'O',
    'p': 'ᑭ', 'q': 'ᑫ', 'r': 'ᖇ', 's': 'S', 't': 'ᑎ',
    'u': 'ᑌ', 'v': 'ᐯ', 'w': 'ᗯ', 'x': '᙭', 'y': 'Ꭹ',
    'z': 'Ꮓ',
    'A': 'ᗩ', 'B': 'ᗷ', 'C': 'ᑕ', 'D': 'ᗪ', 'E': 'ᙓ',
    'F': 'ᖴ', 'G': 'ᘜ', 'H': 'ᕼ', 'I': 'ᓰ', 'J': 'ᒍ',
    'K': 'K', 'L': 'ᒪ', 'M': 'ᗰ', 'N': 'ᑎ', 'O': 'O',
    'P': 'ᑭ', 'Q': 'ᑫ', 'R': 'ᖇ', 'S': 'S', 'T': 'ᑎ',
    'U': 'ᑌ', 'V': 'ᐯ', 'W': 'ᗯ', 'X': '᙭', 'Y': 'Ꭹ',
    'Z': 'Ꮓ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const echoEl = document.getElementById("echoOutput");
if (echoEl) {
  echoEl.textContent = text ? echo(text) : echo("Echo");
}

function elegant(text) {
  const map = {
    'a': 'მ', 'b': 'ზ', 'c': 'ე', 'd': 'ძ', 'e': 'პ',
    'f': 'f', 'g': 'ც', 'h': 'h', 'i': 'í', 'j': 'ʝ',
    'k': 'κ', 'l': 'l', 'm': 'ო', 'n': 'ղ', 'o': 'ѻ',
    'p': 'ρ', 'q': 'გ', 'r': 'Γ', 's': 'ჰ', 't': 'ŧ',
    'u': 'υ', 'v': 'v', 'w': 'w', 'x': 'ჯ', 'y': 'ყ',
    'z': 'ɀ',
    'A': 'მ', 'B': 'ზ', 'C': 'ე', 'D': 'ძ', 'E': 'პ',
    'F': 'f', 'G': 'ც', 'H': 'h', 'I': 'í', 'J': 'ʝ',
    'K': 'κ', 'L': 'l', 'M': 'ო', 'N': 'ղ', 'O': 'ѻ',
    'P': 'ρ', 'Q': 'გ', 'R': 'Γ', 'S': 'ჰ', 'T': 'ŧ',
    'U': 'υ', 'V': 'v', 'W': 'w', 'X': 'ჯ', 'Y': 'ყ',
    'Z': 'ɀ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const elegantEl = document.getElementById("elegantOutput");
if (elegantEl) {
  elegantEl.textContent = text ? elegant(text) : elegant("Elegant");
}

function starsMid(text) {
  const map = {
    'a': 'A༙྇', 'b': 'B༙྇', 'c': 'C༙྇', 'd': 'D༙྇', 'e': 'E༙྇',
    'f': 'F༙྇', 'g': 'G༙྇', 'h': 'H༙྇', 'i': 'I༙྇', 'j': 'J༙྇',
    'k': 'K༙྇', 'l': 'L༙྇', 'm': 'M༙྇', 'n': 'N༙྇', 'o': 'O༙྇',
    'p': 'P༙྇', 'q': 'Q༙྇', 'r': 'R༙྇', 's': 'S༙྇', 't': 'T༙྇',
    'u': 'U༙྇', 'v': 'V༙྇', 'w': 'W༙྇', 'x': 'X༙྇', 'y': 'Y༙྇',
    'z': 'Z༙྇',
    'A': 'A༙྇', 'B': 'B༙྇', 'C': 'C༙྇', 'D': 'D༙྇', 'E': 'E༙྇',
    'F': 'F༙྇', 'G': 'G༙྇', 'H': 'H༙྇', 'I': 'I༙྇', 'J': 'J༙྇',
    'K': 'K༙྇', 'L': 'L༙྇', 'M': 'M༙྇', 'N': 'N༙྇', 'O': 'O༙྇',
    'P': 'P༙྇', 'Q': 'Q༙྇', 'R': 'R༙྇', 'S': 'S༙྇', 'T': 'T༙྇',
    'U': 'U༙྇', 'V': 'V༙྇', 'W': 'W༙྇', 'X': 'X༙྇', 'Y': 'Y༙྇',
    'Z': 'Z༙྇'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const starsMidEl = document.getElementById("starsMidOutput");
if (starsMidEl) {
  starsMidEl.textContent = text ? starsMid(text) : starsMid("starsMid");
}

function superScript(text) {
  const map = {
    'a': 'ᴬ', 'b': 'ᴮ', 'c': 'ᶜ', 'd': 'ᴰ', 'e': 'ᴱ',
    'f': 'ᶠ', 'g': 'ᴳ', 'h': 'ᴴ', 'i': 'ᴵ', 'j': 'ᴶ',
    'k': 'ᴷ', 'l': 'ᴸ', 'm': 'ᴹ', 'n': 'ᴺ', 'o': 'ᴼ',
    'p': 'ᴾ', 'q': 'ᑫ', 'r': 'ᴿ', 's': 'ˢ', 't': 'ᵀ',
    'u': 'ᵁ', 'v': 'ⱽ', 'w': 'ᵂ', 'x': 'ˣ', 'y': 'ᵞ',
    'z': 'ᶻ',
    'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ',
    'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
    'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ',
    'P': 'ᴾ', 'Q': 'ᑫ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
    'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ᵞ',
    'Z': 'ᶻ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const superScriptEl = document.getElementById("superScriptOutput");
if (superScriptEl) {
  superScriptEl.textContent = text ? superScript(text) : superScript("Super Script");
}

function subScript(text) {
  const map = {
    'a': 'ₐ', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'ₑ',
    'f': 'f', 'g': 'g', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
    'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
    'p': 'ₚ', 'q': 'q', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ',
    'u': 'ᵘ', 'v': 'ᵛ', 'w': 'w', 'x': 'ₓ', 'y': 'y',
    'z': '𝓏',
    'A': 'ₐ', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'ₑ',
    'F': 'f', 'G': 'g', 'H': 'ₕ', 'I': 'ᵢ', 'J': 'ⱼ',
    'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ',
    'P': 'ₚ', 'Q': 'q', 'R': 'ᵣ', 'S': 'ₛ', 'T': 'ₜ',
    'U': 'ᵘ', 'V': 'ᵛ', 'W': 'w', 'X': 'ₓ', 'Y': 'y',
    'Z': '𝓏'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const subScriptEl = document.getElementById("subScriptOutput");
if (subScriptEl) {
  subScriptEl.textContent = text ? subScript(text) : subScript("Sub Script");
}

function boldItalic(text) {
  const map = {
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆',
    'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
    'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐',
    'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
    'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚',
    'z': '𝒛',
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬',
    'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
    'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶',
    'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
    'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀',
    'Z': '𝒁'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const boldItalicEl = document.getElementById("boldItalicOutput");
if (boldItalicEl) {
  boldItalicEl.textContent = text ? boldItalic(text) : boldItalic("Bold Italic");
}

function ageOld(text) {
  const map = {
    'a': 'Ꭿ', 'b': 'Ᏸ', 'c': 'Ꮸ', 'd': 'Ꭰ', 'e': 'Ꭼ',
    'f': 'Ꮀ', 'g': 'Ꮆ', 'h': 'Ꮋ', 'i': 'Ꭸ', 'j': 'Ꮰ',
    'k': 'Ꮶ', 'l': 'Ꮭ', 'm': 'Ꮇ', 'n': 'Ꮑ', 'o': 'Ꮎ',
    'p': 'Ꮲ', 'q': 'Ꮕ', 'r': 'Ꮢ', 's': 'Ꮥ', 't': 'Ꮦ',
    'u': 'Ꮼ', 'v': 'Ꮙ', 'w': 'Ꮿ', 'x': 'Ꮂ', 'y': 'Ꮍ',
    'z': 'Ꮓ',
    'A': 'Ꭿ', 'B': 'Ᏸ', 'C': 'Ꮸ', 'D': 'Ꭰ', 'E': 'Ꭼ',
    'F': 'Ꮀ', 'G': 'Ꮆ', 'H': 'Ꮋ', 'I': 'Ꭸ', 'J': 'Ꮰ',
    'K': 'Ꮶ', 'L': 'Ꮭ', 'M': 'Ꮇ', 'N': 'Ꮑ', 'O': 'Ꮎ',
    'P': 'Ꮲ', 'Q': 'Ꮕ', 'R': 'Ꮢ', 'S': 'Ꮥ', 'T': 'Ꮦ',
    'U': 'Ꮼ', 'V': 'Ꮙ', 'W': 'Ꮿ', 'X': 'Ꮂ', 'Y': 'Ꮍ',
    'Z': 'Ꮓ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const ageOldEl = document.getElementById("ageOldOutput");
if (ageOldEl) {
  ageOldEl.textContent = text ? ageOld(text) : ageOld("Age Old");
}


function dotJoiner(text) {
  return text.split("").map(ch => ch + '̊⫶').join("");
}

const dotJoinerEl = document.getElementById("dotJoinerOutput");
if (dotJoinerEl) {
  dotJoinerEl.textContent = text ? dotJoiner(text) : dotJoiner("Dot Joiner");
}

function shade(text) {
  return text.split("").map(ch => '░' + ch + '░').join("");
}

const shadeEl = document.getElementById("shadeOutput");
if (shadeEl) {
  shadeEl.textContent = text ? shade(text) : shade("Shade");
}

function crossAbove(text) {
  return text.split("").map(ch => ch + '͓̽').join("");
}

const crossAboveEl = document.getElementById("crossAboveOutput");
if (crossAboveEl) {
  crossAboveEl.textContent = text ? crossAbove(text) : crossAbove("Cross Above");
}

function corner(text) {
  return text.split("").map(ch => '⌜' + ch + '⌝').join("");
}

const cornerEl = document.getElementById("cornerOutput");
if (cornerEl) {
  cornerEl.textContent = text ? corner(text) : corner("Corner");
}

function squiggleRightLeft(text) {
  return text.split("").map(ch => '⇜' + ch + '⇝').join("");
}

const squiggleRightLeftEl = document.getElementById("squiggleRightLeftOutput");
if (squiggleRightLeftEl) {
  squiggleRightLeftEl.textContent = text ? squiggleRightLeft(text) : squiggleRightLeft("Squiggle Right-Left");
}

function waveJoiner(text) {
  return text.split("").map(ch => '≋' + ch + '≋').join("");
}

const waveJoinerEl = document.getElementById("waveJoinerOutput");
if (waveJoinerEl) {
  waveJoinerEl.textContent = text ? waveJoiner(text) : waveJoiner("Wave Joiner");
}

function whiteParenthesis(text) {
  return text.split("").map(ch => '⦅' + ch + '⦆').join("");
}

const whiteParenthesisEl = document.getElementById("whiteParenthesisOutput");
if (whiteParenthesisEl) {
  whiteParenthesisEl.textContent = text ? whiteParenthesis(text) : whiteParenthesis("White Parenthesis");
}

function bulletJoin(text) {
  return text.split("").map(ch => '▪▪' + ch + '▪▪').join("");
}

const bulletJoinEl = document.getElementById("bulletJoinOutput");
if (bulletJoinEl) {
  bulletJoinEl.textContent = text ? bulletJoin(text) : bulletJoin("Bullet Join");
}

function arrowJoiner(text) {
  return text.split("").map(ch => '⤶⤷' + ch + '⤶⤷').join("");
}

const arrowJoinerEl = document.getElementById("arrowJoinerOutput");
if (arrowJoinerEl) {
  arrowJoinerEl.textContent = text ? arrowJoiner(text) : arrowJoiner("Arrow Joiner");
}

function slashedText(text) {
  return text.split("").map(ch => '〵' + ch + '〵').join("");
}

const slashedTextEl = document.getElementById("slashedTextOutput");
if (slashedTextEl) {
  slashedTextEl.textContent = text ? slashedText(text) : slashedText("Slashed Text");
}

function blackFloretteText(text) {
  return text.split("").map(ch => '【' + ch + '】').join("【 】");
}

const blackFloretteTextEl = document.getElementById("blackFloretteTextOutput");
if (blackFloretteTextEl) {
  blackFloretteTextEl.textContent = text ? blackFloretteText(text) : blackFloretteText("Black Florette Text");
}

function lineSeparatorBlock(text) {
  return text.split("").map(ch => '╎' + ch + '╎').join("");
}

const lineSeparatorBlockEl = document.getElementById("lineSeparatorBlockOutput");
if (lineSeparatorBlockEl) {
  lineSeparatorBlockEl.textContent = text ? lineSeparatorBlock(text) : lineSeparatorBlock("Line Separator Block");
}

function lowLine(text) {
  return text.split("").map(ch => ch + '̲').join("");
}

const lowLineEl = document.getElementById("lowLineOutput");
if (lowLineEl) {
  lowLineEl.textContent = text ? lowLine(text) : lowLine("Low Line");
}

function doubleMacron(text) {
  return text.split("").map(ch => ch + '͟').join("");
}

const doubleMacronEl = document.getElementById("doubleMacronOutput");
if (doubleMacronEl) {
  doubleMacronEl.textContent = text ? doubleMacron(text) : doubleMacron("Double Macron");
}

function strangeLook(text) {
  const map = {
    'a': 'ค', 'b': '๒', 'c': 'ς', 'd': '๔', 'e': 'є',
    'f': 'Ŧ', 'g': 'ﻮ', 'h': 'ђ', 'i': 'เ', 'j': 'ן',
    'k': 'к', 'l': 'ɭ', 'm': '๓', 'n': 'ภ', 'o': '๏',
    'p': 'ק', 'q': 'ợ', 'r': 'г', 's': 'ร', 't': 'Շ',
    'u': 'ย', 'v': 'ש', 'w': 'ฬ', 'x': 'א', 'y': 'ץ',
    'z': 'չ',
    'A': 'ค', 'B': '๒', 'C': 'ς', 'D': '๔', 'E': 'є',
    'F': 'Ŧ', 'G': 'ﻮ', 'H': 'ђ', 'I': 'เ', 'J': 'ן',
    'K': 'к', 'L': 'ɭ', 'M': '๓', 'N': 'ภ', 'O': '๏',
    'P': 'ק', 'Q': 'ợ', 'R': 'г', 'S': 'ร', 'T': 'Շ',
    'U': 'ย', 'V': 'ש', 'W': 'ฬ', 'X': 'א', 'Y': 'ץ',
    'Z': 'չ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const strangeLookEl = document.getElementById("strangeLookOutput");
if (strangeLookEl) {
  strangeLookEl.textContent = text ? strangeLook(text) : strangeLook("Strange Look");
}

function zombies(text) {
  const map = {
    'a': 'ǟ', 'b': 'ɮ', 'c': 'ƈ', 'd': 'ɖ', 'e': 'ɛ',
    'f': 'ʄ', 'g': 'ɢ', 'h': 'ɦ', 'i': 'ɨ', 'j': 'ʝ',
    'k': 'ӄ', 'l': 'ʟ', 'm': 'ʍ', 'n': 'Ն', 'o': 'օ',
    'p': 'ք', 'q': 'զ', 'r': 'ʀ', 's': 'ֆ', 't': 'ȶ',
    'u': 'ʊ', 'v': 'ʋ', 'w': 'ա', 'x': 'Ӽ', 'y': 'ʏ',
    'z': 'ʐ',
    'A': 'ǟ', 'B': 'ɮ', 'C': 'ƈ', 'D': 'ɖ', 'E': 'ɛ',
    'F': 'ʄ', 'G': 'ɢ', 'H': 'ɦ', 'I': 'ɨ', 'J': 'ʝ',
    'K': 'ӄ', 'L': 'ʟ', 'M': 'ʍ', 'N': 'Ն', 'O': 'օ',
    'P': 'ք', 'Q': 'զ', 'R': 'ʀ', 'S': 'ֆ', 'T': 'ȶ',
    'U': 'ʊ', 'V': 'ʋ', 'W': 'ա', 'X': 'Ӽ', 'Y': 'ʏ',
    'Z': 'ʐ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const zombiesEl = document.getElementById("zombiesOutput");
if (zombiesEl) {
  zombiesEl.textContent = text ? zombies(text) : zombies("Zombies");
}

function creepy(text) {
  const map = {
    'a': 'ă', 'b': 'β', 'c': 'Č', 'd': 'Ď', 'e': 'Ĕ',
    'f': 'Ŧ', 'g': 'Ğ', 'h': 'Ĥ', 'i': 'Ĩ', 'j': 'Ĵ',
    'k': 'Ķ', 'l': 'Ĺ', 'm': 'М', 'n': 'Ń', 'o': 'Ő',
    'p': 'Р', 'q': 'Q', 'r': 'Ŕ', 's': 'Ś', 't': 'Ť',
    'u': 'Ú', 'v': 'V', 'w': 'Ŵ', 'x': 'Ж', 'y': 'Ŷ',
    'z': 'Ź',
    'A': 'Ă', 'B': 'β', 'C': 'Č', 'D': 'Ď', 'E': 'Ĕ',
    'F': 'Ŧ', 'G': 'Ğ', 'H': 'Ĥ', 'I': 'Ĩ', 'J': 'Ĵ',
    'K': 'Ķ', 'L': 'Ĺ', 'M': 'М', 'N': 'Ń', 'O': 'Ő',
    'P': 'Р', 'Q': 'Q', 'R': 'Ŕ', 'S': 'Ś', 'T': 'Ť',
    'U': 'Ú', 'V': 'V', 'W': 'Ŵ', 'X': 'Ж', 'Y': 'Ŷ',
    'Z': 'Ź'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const creepyEl = document.getElementById("creepyOutput");
if (creepyEl) {
  creepyEl.textContent = text ? creepy(text) : creepy("Creepy");
}

function mysterious(text) {
  return text.split("").map(ch => ch + '҉').join("");
}

const mysteriousEl = document.getElementById("mysteriousOutput");
if (mysteriousEl) {
  mysteriousEl.textContent = text ? mysterious(text) : mysterious("Mysterious");
}

function bizarre(text) {
  return text.split("").map(ch => ch + '̾').join("");
}

const bizarreEl = document.getElementById("bizarreOutput");
if (bizarreEl) {
  bizarreEl.textContent = text ? bizarre(text) : bizarre("Bizarre");
}

function zigzag(text) {
  const combining = ['̵', '̡', '͍', '͍', '̿', '͐', '͝'];
  return text.split("").map(ch => {
    const randomCombining = combining.sort(() => 0.5 - Math.random()).slice(0, 3).join('');
    return ch + randomCombining;
  }).join("");
}

const zigzagEl = document.getElementById("zigzagOutput");
if (zigzagEl) {
  zigzagEl.textContent = text ? zigzag(text) : zigzag("zigzag");
}

function halloween(text) {
  const combining = ['͉', '͔', '͍', '̢', '͖', '͜', '͙', '̝', '̠', '̫', '͕', '̟', '̡', '̼', '͓', '̺', '̞', '͎', '̻', '͇', '̪', '̦', '͚', '̘'];
  return text.split("").map(ch => {
    const randomCombining = combining.sort(() => 0.5 - Math.random()).slice(0, 3).join('');
    return ch + randomCombining;
  }).join("");
}

const halloweenEl = document.getElementById("halloweenOutput");
if (halloweenEl) {
  halloweenEl.textContent = text ? halloween(text) : halloween("Halloween");
}

function freaky(text) {
  const combining = ['̔', '͘', '͑', '̽', '͆', '̐', '̈́', '̿', '͊', '͒', '̾', '͠', '̕', '̀', '͋', '͌', '̓', '͛', '̚', '͝'];
  return text.split("").map(ch => {
    const randomCombining = combining.sort(() => 0.5 - Math.random()).slice(0, 3).join('');
    return ch + randomCombining;
  }).join("");
}

const freakyEl = document.getElementById("freakyOutput");
if (freakyEl) {
  freakyEl.textContent = text ? freaky(text) : freaky("Freaky");
}

function scratch(text) {
  const map = {
    'a': 'ค', 'b': '๒', 'c': 'ς', 'd': '๔', 'e': 'є',
    'f': 'Ŧ', 'g': 'ﻮ', 'h': 'ђ', 'i': 'เ', 'j': 'ן',
    'k': 'к', 'l': 'ɭ', 'm': '๓', 'n': 'ภ', 'o': '๏',
    'p': 'ק', 'q': 'ợ', 'r': 'г', 's': 'ร', 't': 'Շ',
    'u': 'ย', 'v': 'ש', 'w': 'ฬ', 'x': 'א', 'y': 'ץ',
    'z': 'չ',
    'A': 'ค', 'B': '๒', 'C': 'ς', 'D': '๔', 'E': 'є',
    'F': 'Ŧ', 'G': 'ﻮ', 'H': 'ђ', 'I': 'เ', 'J': 'ן',
    'K': 'к', 'L': 'ɭ', 'M': '๓', 'N': 'ภ', 'O': '๏',
    'P': 'ק', 'Q': 'ợ', 'R': 'г', 'S': 'ร', 'T': 'Շ',
    'U': 'ย', 'V': 'ש', 'W': 'ฬ', 'X': 'א', 'Y': 'ץ',
    'Z': 'չ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const scratchEl = document.getElementById("scratchOutput");
if (scratchEl) {
  scratchEl.textContent = text ? scratch(text) : scratch("Scratch");
}

function doodle(text) {
  const map = {
    'a': 'ą', 'b': 'ც', 'c': 'ƈ', 'd': 'ɖ', 'e': 'ɛ',
    'f': 'ʄ', 'g': 'ɠ', 'h': 'ɧ', 'i': 'ı', 'j': 'ʝ',
    'k': 'ƙ', 'l': 'Ɩ', 'm': 'ɱ', 'n': 'ŋ', 'o': 'ơ',
    'p': '℘', 'q': 'զ', 'r': 'ཞ', 's': 'ʂ', 't': 'ɬ',
    'u': 'ų', 'v': '۷', 'w': 'ῳ', 'x': 'ҳ', 'y': 'ყ',
    'z': 'ʑ',
    'A': 'ą', 'B': 'ც', 'C': 'ƈ', 'D': 'ɖ', 'E': 'ɛ',
    'F': 'ʄ', 'G': 'ɠ', 'H': 'ɧ', 'I': 'ı', 'J': 'ʝ',
    'K': 'ƙ', 'L': 'Ɩ', 'M': 'ɱ', 'N': 'ŋ', 'O': 'ơ',
    'P': '℘', 'Q': 'զ', 'R': 'ཞ', 'S': 'ʂ', 'T': 'ɬ',
    'U': 'ų', 'V': '۷', 'W': 'ῳ', 'X': 'ҳ', 'Y': 'ყ',
    'Z': 'ʑ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const doodleEl = document.getElementById("doodleOutput");
if (doodleEl) {
  doodleEl.textContent = text ? doodle(text) : doodle("Doodle");
}

function pencil(text) {
  const map = {
    'a': 'Λ', 'b': 'Ϧ', 'c': 'ㄈ', 'd': 'Ð', 'e': 'Ɛ',
    'f': 'F', 'g': 'Ɠ', 'h': 'н', 'i': 'ɪ', 'j': 'ﾌ',
    'k': 'Қ', 'l': 'Ł', 'm': '௱', 'n': 'Л', 'o': 'Ø',
    'p': 'þ', 'q': 'Ҩ', 'r': '尺', 's': 'ら', 't': 'Ť',
    'u': 'Ц', 'v': 'Ɣ', 'w': 'Ɯ', 'x': 'χ', 'y': 'Ϥ',
    'z': 'Ẕ',
    'A': 'Λ', 'B': 'Ϧ', 'C': 'ㄈ', 'D': 'Ð', 'E': 'Ɛ',
    'F': 'F', 'G': 'Ɠ', 'H': 'н', 'I': 'ɪ', 'J': 'ﾌ',
    'K': 'Қ', 'L': 'Ł', 'M': '௱', 'N': 'Л', 'O': 'Ø',
    'P': 'þ', 'Q': 'Ҩ', 'R': '尺', 'S': 'ら', 'T': 'Ť',
    'U': 'Ц', 'V': 'Ɣ', 'W': 'Ɯ', 'X': 'χ', 'Y': 'Ϥ',
    'Z': 'Ẕ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const pencilEl = document.getElementById("pencilOutput");
if (pencilEl) {
  pencilEl.textContent = text ? pencil(text) : pencil("Pencil");
}

function scribble(text) {
  const map = {
    'a': 'Թ', 'b': 'Յ', 'c': 'Շ', 'd': 'Ժ', 'e': 'ȝ',
    'f': 'Բ', 'g': 'Գ', 'h': 'ɧ', 'i': 'ɿ', 'j': 'ʝ',
    'k': 'ƙ', 'l': 'ʅ', 'm': 'ʍ', 'n': 'Ռ', 'o': 'Ծ',
    'p': 'ρ', 'q': 'φ', 'r': 'Ր', 's': 'Տ', 't': 'Ե',
    'u': 'Մ', 'v': 'ע', 'w': 'ա', 'x': 'Ճ', 'y': 'Վ',
    'z': 'Հ',
    'A': 'Թ', 'B': 'Յ', 'C': 'Շ', 'D': 'Ժ', 'E': 'ȝ',
    'F': 'Բ', 'G': 'Գ', 'H': 'ɧ', 'I': 'ɿ', 'J': 'ʝ',
    'K': 'ƙ', 'L': 'ʅ', 'M': 'ʍ', 'N': 'Ռ', 'O': 'Ծ',
    'P': 'ρ', 'Q': 'φ', 'R': 'Ր', 'S': 'Տ', 'T': 'Ե',
    'U': 'Մ', 'V': 'ע', 'W': 'ա', 'X': 'Ճ', 'Y': 'Վ',
    'Z': 'Հ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const scribbleEl = document.getElementById("scribbleOutput");
if (scribbleEl) {
  scribbleEl.textContent = text ? scribble(text) : scribble("Scribble");
}

function curlicue(text) {
  const map = {
    'a': 'ƛ', 'b': 'Ɓ', 'c': 'Ƈ', 'd': 'Ɗ', 'e': 'Є',
    'f': 'Ƒ', 'g': 'Ɠ', 'h': 'Ӈ', 'i': 'Ɩ', 'j': 'ʆ',
    'k': 'Ƙ', 'l': 'Լ', 'm': 'M', 'n': 'Ɲ', 'o': 'Ơ',
    'p': 'Ƥ', 'q': 'Ƣ', 'r': 'Ʀ', 's': 'Ƨ', 't': 'Ƭ',
    'u': 'Ʋ', 'v': 'Ɣ', 'w': 'Ɯ', 'x': 'Х', 'y': 'Ƴ',
    'z': 'Ȥ',
    'A': 'ƛ', 'B': 'Ɓ', 'C': 'Ƈ', 'D': 'Ɗ', 'E': 'Є',
    'F': 'Ƒ', 'G': 'Ɠ', 'H': 'Ӈ', 'I': 'Ɩ', 'J': 'ʆ',
    'K': 'Ƙ', 'L': 'Լ', 'M': 'M', 'N': 'Ɲ', 'O': 'Ơ',
    'P': 'Ƥ', 'Q': 'Ƣ', 'R': 'Ʀ', 'S': 'Ƨ', 'T': 'Ƭ',
    'U': 'Ʋ', 'V': 'Ɣ', 'W': 'Ɯ', 'X': 'Х', 'Y': 'Ƴ',
    'Z': 'Ȥ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const curlicueEl = document.getElementById("curlicueOutput");
if (curlicueEl) {
  curlicueEl.textContent = text ? curlicue(text) : curlicue("Curlicue");
}

function drawn(text) {
  return text.split("").map(ch => ch + '͓̽').join("");
}

const drawnEl = document.getElementById("drawnOutput");
if (drawnEl) {
  drawnEl.textContent = text ? drawn(text) : drawn("drawn");
}
function surrounded(text) {
  return text.split("").map(ch => '⧼' + ch + '̼⧽').join("");
}

const surroundedEl = document.getElementById("surroundedOutput");
if (surroundedEl) {
  surroundedEl.textContent = text ? surrounded(text) : surrounded("Surrounded");
}

function fenced(text) {
  return text.split("").map(ch => '[' + ch + '̲̅]').join("");
}

const fencedEl = document.getElementById("fencedOutput");
if (fencedEl) {
  fencedEl.textContent = text ? fenced(text) : fenced("Fenced");
}

function thickBox(text) {
  return text.split("").map(ch => '⟦' + ch + '⟧').join("");
}

const thickBoxEl = document.getElementById("thickBoxOutput");
if (thickBoxEl) {
  thickBoxEl.textContent = text ? thickBox(text) : thickBox("Thick Box");
}

function integral(text) {
  return text.split("").map(ch => '⌠' + ch + '⌡').join("");
}

const integralEl = document.getElementById("integralOutput");
if (integralEl) {
  integralEl.textContent = text ? integral(text) : integral("Integral");
}

function moon(text) {
  return text.split("").map(ch => '☽☾' + ch + '☽☾').join("");
}

const moonEl = document.getElementById("moonOutput");
if (moonEl) {
  moonEl.textContent = text ? moon(text) : moon("Moon");
}

function tibetanStyle(text) {
  return text.split("").map(ch => '࿚࿙' + ch + '࿚࿙').join("");
}

const tibetanStyleEl = document.getElementById("tibetanStyleOutput");
if (tibetanStyleEl) {
  tibetanStyleEl.textContent = text ? tibetanStyle(text) : tibetanStyle("Tibetan Style");
}

function newsquareBracketAngleFrameStyle(text) {
  return text.split("").map(ch => '⁆⁅' + ch + '⁆⁅').join("");
}

const newsquareBracketAngleFrameStyleEl = document.getElementById("newsquareBracketAngleFrameStyleOutput");
if (newsquareBracketAngleFrameStyleEl) {
  newsquareBracketAngleFrameStyleEl.textContent = text ? newsquareBracketAngleFrameStyle(text) : newsquareBracketAngleFrameStyle("Newsquare Bracket Angle Frame Style");
}

function housedStyle(text) {
  return text.split("").map(ch => ' ⊹ ' + ch + ' ⊹ ').join("");
}

const housedStyleEl = document.getElementById("housedStyleOutput");
if (housedStyleEl) {
  housedStyleEl.textContent = text ? housedStyle(text) : housedStyle("Housed Style");
}

function fountainStyle(text) {
  return text.split("").map(ch => ' ☑ ' + ch + ' ☑ ').join("");
}

const fountainStyleEl = document.getElementById("fountainStyleOutput");
if (fountainStyleEl) {
  fountainStyleEl.textContent = text ? fountainStyle(text) : fountainStyle("Fountain Style");
}

function prettified(text) {
  return text.split("").map(ch => 'ミ★ ' + ch + ' ★彡').join('ミ★ ★彡');
}

const prettifiedEl = document.getElementById("prettifiedOutput");
if (prettifiedEl) {
  prettifiedEl.textContent = text ? prettified(text) : prettified("Prettified");
}

function starLined(text) {
  return text.split("").map(ch => '- ' + ch + ' -').join('- -');
}

const starLinedEl = document.getElementById("starLinedOutput");
if (starLinedEl) {
  starLinedEl.textContent = text ? starLined(text) : starLined("StarLined");
}

function rectangleSideFade(text) {
  const map = {
    'a': 'Ꭿ', 'b': 'Ᏸ', 'c': 'Ꮸ', 'd': 'Ꭰ', 'e': 'Ꭼ',
    'f': 'Ꮀ', 'g': 'Ꮆ', 'h': 'Ꮋ', 'i': 'Ꭸ', 'j': 'Ꮰ',
    'k': 'Ꮶ', 'l': 'Ꮭ', 'm': 'Ꮇ', 'n': 'Ꮑ', 'o': 'Ꮎ',
    'p': 'Ꮲ', 'q': 'Ꮕ', 'r': 'Ꮢ', 's': 'Ꮥ', 't': 'Ꮦ',
    'u': 'Ꮼ', 'v': 'Ꮙ', 'w': 'Ꮿ', 'x': 'Ꮂ', 'y': 'Ꮍ',
    'z': 'Ꮓ',
    'A': 'Ꭿ', 'B': 'Ᏸ', 'C': 'Ꮸ', 'D': 'Ꭰ', 'E': 'Ꭼ',
    'F': 'Ꮀ', 'G': 'Ꮆ', 'H': 'Ꮋ', 'I': 'Ꭸ', 'J': 'Ꮰ',
    'K': 'Ꮶ', 'L': 'Ꮭ', 'M': 'Ꮇ', 'N': 'Ꮑ', 'O': 'Ꮎ',
    'P': 'Ꮲ', 'Q': 'Ꮕ', 'R': 'Ꮢ', 'S': 'Ꮥ', 'T': 'Ꮦ',
    'U': 'Ꮼ', 'V': 'Ꮙ', 'W': 'Ꮿ', 'X': 'Ꮂ', 'Y': 'Ꮍ',
    'Z': 'Ꮓ'
  };
  return '█▓▒­░⡷⠂ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ⠐⢾░▒▓█';
}

const rectangleSideFadeEl = document.getElementById("rectangleSideFadeOutput");
if (rectangleSideFadeEl) {
  rectangleSideFadeEl.textContent = text ? rectangleSideFade(text) : rectangleSideFade("Rectangle side fade");
}

function quotation(text) {
  const map = {
    'a': 'ꋫ', 'b': 'ꍗ', 'c': 'ꏳ', 'd': 'ꂟ', 'e': 'ꏂ',
    'f': 'ꄟ', 'g': 'ꍌ', 'h': 'ꃬ', 'i': '꒐', 'j': '꒻',
    'k': 'ꀘ', 'l': '꒒', 'm': 'ꂵ', 'n': 'ꂚ', 'o': 'ꉻ',
    'p': 'ꉣ', 'q': 'ꋠ', 'r': 'ꋪ', 's': 'ꑄ', 't': '꓄',
    'u': 'ꀎ', 'v': '꒦', 'w': 'ꅐ', 'x': 'ꉼ', 'y': 'ꐞ',
    'z': '꒗',
    'A': 'ꋫ', 'B': 'ꍗ', 'C': 'ꏳ', 'D': 'ꂟ', 'E': 'ꏂ',
    'F': 'ꄟ', 'G': 'ꍌ', 'H': 'ꃬ', 'I': '꒐', 'J': '꒻',
    'K': 'ꀘ', 'L': '꒒', 'M': 'ꂵ', 'N': 'ꂚ', 'O': 'ꉻ',
    'P': 'ꉣ', 'Q': 'ꋠ', 'R': 'ꋪ', 'S': 'ꑄ', 'T': '꓄',
    'U': 'ꀎ', 'V': '꒦', 'W': 'ꅐ', 'X': 'ꉼ', 'Y': 'ꐞ',
    'Z': '꒗'
  };
  return '❝ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ❞';
}

const quotationEl = document.getElementById("quotationOutput");
if (quotationEl) {
  quotationEl.textContent = text ? quotation(text) : quotation("Quotation");
}

function cuteNotes(text) {
  const map = {
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔',
    'f': '∱', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙',
    'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞',
    'p': '🅟', 'q': '🅠', 'r': '🅡', 's': 'ֆ', 't': '🅣',
    'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨',
    'z': '🅩',
    'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔',
    'F': '∱', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
    'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞',
    'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': 'ֆ', 'T': '🅣',
    'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨',
    'Z': '🅩'
  };
  return '⁺˚⋆｡°✩ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ✩°｡⋆˚⁺';
}

const cuteNotesEl = document.getElementById("cuteNotesOutput");
if (cuteNotesEl) {
  cuteNotesEl.textContent = text ? cuteNotes(text) : cuteNotes("Cute Notes");
}

function superFrog(text) {
  const map = {
    'a': 'ꍏ', 'b': 'ꌃ', 'c': 'ꉓ', 'd': 'ꀸ', 'e': 'ꍟ',
    'f': 'ꎇ', 'g': 'ꁅ', 'h': 'ꃅ', 'i': 'ꀤ', 'j': 'ꀭ',
    'k': 'ꀘ', 'l': '꒒', 'm': 'ꂵ', 'n': 'ꈤ', 'o': 'ꂦ',
    'p': 'ꉣ', 'q': 'ꆰ', 'r': 'ꋪ', 's': 'ꌗ', 't': '꓄',
    'u': 'ꀎ', 'v': 'ꃴ', 'w': 'ꅏ', 'x': 'ꊼ', 'y': 'ꌩ',
    'z': 'ꁴ',
    'A': 'ꍏ', 'B': 'ꌃ', 'C': 'ꉓ', 'D': 'ꀸ', 'E': 'ꍟ',
    'F': 'ꎇ', 'G': 'ꁅ', 'H': 'ꃅ', 'I': 'ꀤ', 'J': 'ꀭ',
    'K': 'ꀘ', 'L': '꒒', 'M': 'ꂵ', 'N': 'ꈤ', 'O': 'ꂦ',
    'P': 'ꉣ', 'Q': 'ꆰ', 'R': 'ꋪ', 'S': 'ꌗ', 'T': '꓄',
    'U': 'ꀎ', 'V': 'ꃴ', 'W': 'ꅏ', 'X': 'ꊼ', 'Y': 'ꌩ',
    'Z': 'ꁴ'
  };
  return '▄︻デ♬ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ♣══━一';
}

const superFrogEl = document.getElementById("superFrogOutput");
if (superFrogEl) {
  superFrogEl.textContent = text ? superFrog(text) : superFrog("Super Frog");
}

function lovedrops(text) {
  const map = {
    'a': '₳', 'b': '฿', 'c': 'Ȼ', 'd': 'Ɖ', 'e': 'Ɇ',
    'f': 'Ŧ', 'g': 'Ǥ', 'h': 'Ħ', 'i': 'ı', 'j': 'J',
    'k': '₭', 'l': 'Ⱡ', 'm': '₥', 'n': '₦', 'o': 'Ø',
    'p': '₱', 'q': 'Q', 'r': 'Ɽ', 's': '₴', 't': '₮',
    'u': 'Ʉ', 'v': 'V', 'w': '₩', 'x': 'Ӿ', 'y': 'Ɏ',
    'z': 'Ƶ',
    'A': '₳', 'B': '฿', 'C': 'Ȼ', 'D': 'Ɖ', 'E': 'Ɇ',
    'F': 'Ŧ', 'G': 'Ǥ', 'H': 'Ħ', 'I': 'ı', 'J': 'J',
    'K': '₭', 'L': 'Ⱡ', 'M': '₥', 'N': '₦', 'O': 'Ø',
    'P': '₱', 'Q': 'Q', 'R': 'Ɽ', 'S': '₴', 'T': '₮',
    'U': 'Ʉ', 'V': 'V', 'W': '₩', 'X': 'Ӿ', 'Y': 'Ɏ',
    'Z': 'Ƶ'
  };
  return '˚₊· ͟͟͞͞➳❥ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' 𖨆♡𖨆';
}

const lovedropsEl = document.getElementById("lovedropsOutput");
if (lovedropsEl) {
  lovedropsEl.textContent = text ? lovedrops(text) : lovedrops("Lovedrops");
}

function butterfly(text) {
  const map = {
    'a': 'ᗩ', 'b': 'ᗷ', 'c': 'ᑕ', 'd': 'ᗪ', 'e': 'ᗴ',
    'f': 'ᖴ', 'g': 'Ǥ', 'h': 'ᕼ', 'i': 'Ꭵ', 'j': 'ᒎ',
    'k': 'ᛕ', 'l': 'ᒪ', 'm': 'ᗰ', 'n': 'ᑎ', 'o': 'ᗝ',
    'p': 'ᑭ', 'q': 'Ɋ', 'r': 'ᖇ', 's': 'ᔕ', 't': '丅',
    'u': 'ᑌ', 'v': 'ᐯ', 'w': 'ᗯ', 'x': '᙭', 'y': 'Ƴ',
    'z': '乙',
    'A': 'ᗩ', 'B': 'ᗷ', 'C': 'ᑕ', 'D': 'ᗪ', 'E': 'ᗴ',
    'F': 'ᖴ', 'G': 'Ǥ', 'H': 'ᕼ', 'I': 'Ꭵ', 'J': 'ᒎ',
    'K': 'ᛕ', 'L': 'ᒪ', 'M': 'ᗰ', 'N': 'ᑎ', 'O': 'ᗝ',
    'P': 'ᑭ', 'Q': 'Ɋ', 'R': 'ᖇ', 'S': 'ᔕ', 'T': '丅',
    'U': 'ᑌ', 'V': 'ᐯ', 'W': 'ᗯ', 'X': '᙭', 'Y': 'Ƴ',
    'Z': '乙'
  };
  return 'ʚïɞ𓆩♡𓆪 ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' 𓆩♡𓆪 ཐིཋྀ';
}

const butterflyEl = document.getElementById("butterflyOutput");
if (butterflyEl) {
  butterflyEl.textContent = text ? butterfly(text) : butterfly("Butterfly");
}

function cutiePie(text) {
  const map = {
    'a': 'α', 'b': 'Ⴆ', 'c': 'ƈ', 'd': 'ԃ', 'e': 'ҽ',
    'f': 'ϝ', 'g': 'ɠ', 'h': 'ԋ', 'i': 'ι', 'j': 'ʝ',
    'k': 'ƙ', 'l': 'ʅ', 'm': 'ɱ', 'n': 'ɳ', 'o': 'σ',
    'p': 'ρ', 'q': 'ϙ', 'r': 'ɾ', 's': 'ʂ', 't': 'ƚ',
    'u': 'υ', 'v': 'ʋ', 'w': 'ɯ', 'x': 'x', 'y': 'ყ',
    'z': 'ȥ',
    'A': 'α', 'B': 'Ⴆ', 'C': 'ƈ', 'D': 'ԃ', 'E': 'ҽ',
    'F': 'ϝ', 'G': 'ɠ', 'H': 'ԋ', 'I': 'ι', 'J': 'ʝ',
    'K': 'ƙ', 'L': 'ʅ', 'M': 'ɱ', 'N': 'ɳ', 'O': 'σ',
    'P': 'ρ', 'Q': 'ϙ', 'R': 'ɾ', 'S': 'ʂ', 'T': 'ƚ',
    'U': 'υ', 'V': 'ʋ', 'W': 'ɯ', 'X': 'x', 'Y': 'ყ',
    'Z': 'ȥ'
  };
  return '(◍•ᴗ•◍) ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ෴෴';
}

const cutiePieEl = document.getElementById("cutiePieOutput");
if (cutiePieEl) {
  cutiePieEl.textContent = text ? cutiePie(text) : cutiePie("Cutie Pie");
}

function unblocked(text) {
  const map = {
    'a': 'Ꭿ', 'b': 'в', 'c': 'Ȼ', 'd': '𝐝', 'e': 'ⓔ',
    'f': '∱', 'g': 'Ɠ', 'h': 'ⓗ', 'i': '𝒊', 'j': 'ʝ',
    'k': 'ꀘ', 'l': 'ʅ', 'm': 'ₘ', 'n': '𝑛', 'o': 'ὄ',
    'p': 'ꉣ', 'q': '🅠', 'r': 'ʀ', 's': '𝘀', 't': '𝙩',
    'u': 'ꮼ', 'v': '𝐯', 'w': 'w', 'x': 'ꉧ', 'y': '𝘺',
    'z': 'ɀ',
    'A': 'α', 'B': '𝗕', 'C': 'ꉔ', 'D': 'Ɗ', 'E': '𝔼',
    'F': '𝐹', 'G': '𝙂', 'H': 'Ӈ', 'I': '𝑰', 'J': 'ጋ',
    'K': '𝐊', 'L': '𝘓', 'M': '𝕄', 'N': '刀', 'O': '🅞',
    'P': 'ｱ', 'Q': 'q', 'R': '𝖱', 'S': '🅢', 'T': 'ŧ',
    'U': 'υ', 'V': '√', 'W': 'ฬ', 'X': 'א', 'Y': '🆈',
    'Z': '𝑍'
  };
  return '▞▞▞ ' + text.split("").map(ch => map[ch] || ch).join(" ") + ' ▞▞▞';
}

const unblockedEl = document.getElementById("unblockedOutput");
if (unblockedEl) {
  unblockedEl.textContent = text ? unblocked(text) : unblocked("unblocked");
}
function emojiPanda(text) {
  const map = {
    'a': 'ꁲ', 'b': 'ꃃ', 'c': 'ꇃ', 'd': 'ꂡ', 'e': 'ꏹ',
    'f': 'ꄙ', 'g': 'ꁍ', 'h': 'ꀍ', 'i': 'ꀤ', 'j': 'ꀭ',
    'k': 'ꈵ', 'l': '꒒', 'm': 'ꂵ', 'n': 'ꋊ', 'o': 'ꁏ',
    'p': 'ꉣ', 'q': 'ꆰ', 'r': 'ꋪ', 's': 'ꌗ', 't': 'ꋖ',
    'u': 'ꌈ', 'v': 'ꃴ', 'w': 'ꅏ', 'x': 'ꋚ', 'y': 'ꂖ',
    'z': 'ꁴ',
    'A': 'ꁲ', 'B': 'ꃃ', 'C': 'ꇃ', 'D': 'ꂡ', 'E': 'ꏹ',
    'F': 'ꄙ', 'G': 'ꁍ', 'H': 'ꀍ', 'I': 'ꀤ', 'J': 'ꀭ',
    'K': 'ꈵ', 'L': '꒒', 'M': 'ꂵ', 'N': 'ꋊ', 'O': 'ꁏ',
    'P': 'ꉣ', 'Q': 'ꆰ', 'R': 'ꋪ', 'S': 'ꌗ', 'T': 'ꋖ',
    'U': 'ꌈ', 'V': 'ꃴ', 'W': 'ꅏ', 'X': 'ꋚ', 'Y': 'ꂖ',
    'Z': 'ꁴ'
  };
  return '🔥🐼  ' + text.split("").map(ch => map[ch] || ch).join(" ") + '  👽💎';
}

const emojiPandaEl = document.getElementById("emojiPandaOutput");
if (emojiPandaEl) {
  emojiPandaEl.textContent = text ? emojiPanda(text) : emojiPanda("Emoji Panda");
}

function alienGem(text) {
  const map = {
    'a': 'Ã', 'b': '𝕓', 'c': 'Ⓒ', 'd': 'ᗪ', 'e': 'Ẹ',
    'f': 'ｆ', 'g': 'Ğ', 'h': '𝓗', 'i': '𝕀', 'j': '𝓙',
    'k': 'Ҝ', 'l': '𝕃', 'm': 'ⓜ', 'n': 'ή', 'o': 'σ',
    'p': '𝓅', 'q': 'ợ', 'r': '𝐑', 's': 'ѕ', 't': 'т',
    'u': '𝓊', 'v': 'ν', 'w': 'ᗯ', 'x': 'Ж', 'y': '𝔂',
    'z': 'ｚ',
    'A': 'Ａ', 'B': 'ᵇ', 'C': '¢', 'D': '𝕕', 'E': 'ⓔ',
    'F': 'Ⓕ', 'G': 'ﻮ', 'H': 'ђ', 'I': 'Ꭵ', 'J': 'ｊ',
    'K': 'ᛕ', 'L': 'ℓ', 'M': '𝓂', 'N': 'ⓝ', 'O': '𝔬',
    'P': '𝓅', 'Q': 'q', 'R': 'я', 'S': '𝔰', 'T': '𝔱',
    'U': '𝓾', 'V': 'ν', 'W': 'Ⓦ', 'X': 'χ', 'Y': 'ү',
    'Z': 'z'
  };
  return 'ඏ✌  ' + text.split("").map(ch => map[ch] || ch).join(" ") + '  👹🌷';
}

const alienGemEl = document.getElementById("alienGemOutput");
if (alienGemEl) {
  alienGemEl.textContent = text ? alienGem(text) : alienGem("Alien Gem");
}

function wavyStyle(text) {
  const map = {
    'a': '𝒜', 'b': 'ҍ', 'c': 'ℭ', 'd': 'ꂟ', 'e': 'ꏂ',
    'f': '𝑭', 'g': 'ꁍ', 'h': 'ꃬ', 'i': 'ᓰ', 'j': 'ʝ',
    'k': '𝙺', 'l': 'ᒪ', 'm': '𝕄', 'n': '𝐍', 'o': '💮',
    'p': '🅟', 'q': 'ℚ', 'r': 'ℜ', 's': 'Ş', 't': 'т',
    'u': 'Ա', 'v': 'ᐯ', 'w': 'ա', 'x': '𝖃', 'y': '𝒴',
    'z': 'Հ',
    'A': '卂', 'B': 'ℬ', 'C': 'Ꮯ', 'D': '🅳', 'E': '𝐞',
    'F': 'ꄘ', 'G': '𝑔', 'H': 'ᕼ', 'I': 'ì', 'J': '꒻',
    'K': '𝓀', 'L': 'l', 'M': 'ɱ', 'N': 'Ｎ', 'O': '🍪',
    'P': 'ᕵ', 'Q': '𝓺', 'R': 'r', 'S': 's', 'T': 'ȶ',
    'U': 'Ꮼ', 'V': 'ע', 'W': '𝖜', 'X': 'X', 'Y': 'վ',
    'Z': 'Ȥ'
  };
  return 'ıllıllı  ' + text.split("").map(ch => map[ch] || ch).join(" ") + '  ıllıllı';
}

const wavyStyleEl = document.getElementById("wavyStyleOutput");
if (wavyStyleEl) {
  wavyStyleEl.textContent = text ? wavyStyle(text) : wavyStyle("Wavy Style");
}

function barsMusic(text) {
  const map = {
    'a': '𝔄', 'b': '𝑩', 'c': '¢', 'd': '◗', 'e': '𝐸',
    'f': 'ʄ', 'g': '❡', 'h': 'Ꮒ', 'i': '♗', 'j': 'J',
    'k': '𝔎', 'l': '꒒', 'm': 'ꂵ', 'n': '𝓝', 'o': '💞',
    'p': 'ℙ', 'q': 'ꁸ', 'r': 'ɾ', 's': '𝘚', 't': 'Ꮖ',
    'u': '⩏', 'v': '⩔', 'w': 'Ꮃ', 'x': '𝑿', 'y': '𝒀',
    'z': '𝗭',
    'A': '♬', 'B': '𝚋', 'C': 'ƈ', 'D': '໓', 'E': 'ℯ',
    'F': '𝐟', 'G': '𝕘', 'H': 'ᕼ', 'I': '𝑖', 'J': 'ꀭ',
    'K': '𝚔', 'L': 'Ꮮ', 'M': '𝖒', 'N': '𝑛', 'O': '☯',
    'P': '🅿', 'Q': 'ᕴ', 'R': 'ᖇ', 'S': '𝓈', 'T': '꓄',
    'U': '⩏', 'V': 'ѵ', 'W': 'ꅐ', 'X': '🅇', 'Y': '🆈',
    'Z': '𝘻'
  };
  return '▌│█║▌║▌║  ' + text.split("").map(ch => map[ch] || ch).join(" ") + '  ║▌║▌║█│▌';
}

const barsMusicEl = document.getElementById("barsMusicOutput");
if (barsMusicEl) {
  barsMusicEl.textContent = text ? barsMusic(text) : barsMusic("Bars Music");
}

function strikethroughHeart(text) {
  return '*•.¸♡ ' + text.split("").map(ch => ch + '̶').join(" ̶") + ' ̶♡¸.•*';
}

const strikethroughHeartEl = document.getElementById("strikethroughHeartOutput");
if (strikethroughHeartEl) {
  strikethroughHeartEl.textContent = text ? strikethroughHeart(text) : strikethroughHeart("Strikethrough Heart");
}

function musicNotes(text) {
  return '♫ ♪ ♫ ' + text.split("").map(ch => ch + '̷').join(" ̷") + ' ̷♫ ♪ ♫';
}

const musicNotesEl = document.getElementById("musicNotesOutput");
if (musicNotesEl) {
  musicNotesEl.textContent = text ? musicNotes(text) : musicNotes("Music Notes");
}

function tildeOverlay(text) {
  return text.split("").map(ch => ch + '̴').join("");
}

const tildeOverlayEl = document.getElementById("tildeOverlayOutput");
if (tildeOverlayEl) {
  tildeOverlayEl.textContent = text ? tildeOverlay(text) : tildeOverlay("Tilde Overlay");
}

function slashThrough(text) {
  const map = {
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎',
    'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
    'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘',
    'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
    'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢',
    'z': '𝚣',
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴',
    'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
    'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾',
    'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
    'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈',
    'Z': '𝚉'
  };
  return text.split("").map(ch => (map[ch] || ch) + '̷').join("");
}

const slashThroughEl = document.getElementById("slashThroughOutput");
if (slashThroughEl) {
  slashThroughEl.textContent = text ? slashThrough(text) : slashThrough("Slash Through");
}

function topBottom(text) {
  return text.split("").map(ch => ch + '̲̅').join("");
}

const topBottomEl = document.getElementById("topBottomOutput");
if (topBottomEl) {
  topBottomEl.textContent = text ? topBottom(text) : topBottom("Top Bottom");
}

function doubleOverline(text) {
  return text.split("").map(ch => ch + '̿').join("");
}

const doubleOverlineEl = document.getElementById("doubleOverlineOutput");
if (doubleOverlineEl) {
  doubleOverlineEl.textContent = text ? doubleOverline(text) : doubleOverline("Double Overline");
}

function arrowUnderline(text) {
  return text.split("").map(ch => ch + '͢').join("");
}

const arrowUnderlineEl = document.getElementById("arrowUnderlineOutput");
if (arrowUnderlineEl) {
  arrowUnderlineEl.textContent = text ? arrowUnderline(text) : arrowUnderline("Arrow Underline");
}
function demonicOccult(text) {
  const map = {
    'a':'ค','b':'๒','c':'ς','d':'๔','e':'є','f':'Ŧ',
    'g':'ﻮ','h':'ђ','i':'เ','j':'ן','k':'к','l':'ɭ',
    'm':'๓','n':'ภ','o':'๏','p':'ק','q':'ợ','r':'г',
    's':'ร','t':'Շ','u':'ย','v':'ש','w':'ฬ','x':'א',
    'y':'ץ','z':'չ',

    'A':'ค','B':'๒','C':'ς','D':'๔','E':'є','F':'Ŧ',
    'G':'ﻮ','H':'ђ','I':'เ','J':'ן','K':'к','L':'ɭ',
    'M':'๓','N':'ภ','O':'๏','P':'ק','Q':'ợ','R':'г',
    'S':'ร','T':'Շ','U':'ย','V':'ש','W':'ฬ','X':'א',
    'Y':'ץ','Z':'չ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const demonicOccultEl = document.getElementById("demonicOccultOutput");
if (demonicOccultEl) {
  demonicOccultEl.textContent = text
    ? demonicOccult(text)
    : demonicOccult("Demonic Occult");
}

function glitchCursed(text) {
  const marks = [
    '\u0300','\u0301','\u0302','\u0303',
    '\u0304','\u0305','\u0306','\u0307',
    '\u0308','\u030A','\u030C',
    '\u0316','\u0317','\u0318',
    '\u0319','\u031A','\u0334','\u0335'
  ];

  return text.split("").map(ch => {
    if (ch === " ") return ch;
    let out = ch;
    const count = 1 + Math.floor(Math.random() * 2); // controlled glitch
    for (let i = 0; i < count; i++) {
      out += marks[Math.floor(Math.random() * marks.length)];
    }
    return out;
  }).join("");
}
const glitchCursedEl = document.getElementById("glitchCursedOutput");
if (glitchCursedEl) {
  glitchCursedEl.textContent = text
    ? glitchCursed(text)
    : glitchCursed("Glitch Cursed");
}

function ashesText(text) {
  const map = {
    'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ',
    'g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ',
    'm':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ',
    's':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x',
    'y':'ʏ','z':'ᴢ',

    'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ',
    'G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ',
    'M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ǫ','R':'ʀ',
    'S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x',
    'Y':'ʏ','Z':'ᴢ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const ashesTextEl = document.getElementById("ashesTextOutput");
if (ashesTextEl) {
  ashesTextEl.textContent = text
    ? ashesText(text)
    : ashesText("Ashes");
}


function glitchyZalgo(text) {
  const up = [
    '\u0300','\u0301','\u0302','\u0303','\u0304','\u0305',
    '\u0306','\u0307','\u0308','\u030A','\u030C'
  ];

  const mid = [
    '\u0334','\u0335','\u0336','\u0337','\u0338'
  ];

  const down = [
    '\u0316','\u0317','\u0318','\u0319','\u031A',
    '\u0323','\u0324','\u0325','\u0326','\u0327',
    '\u0328','\u0329','\u032D','\u032E','\u0330'
  ];

  return text.split("").map(ch => {
    if (ch === " ") return ch;

    let out = ch;

    const upCount = 1 + Math.floor(Math.random() * 3);
    const midCount = Math.floor(Math.random() * 2);
    const downCount = 2 + Math.floor(Math.random() * 4);

    for (let i = 0; i < upCount; i++) {
      out += up[Math.floor(Math.random() * up.length)];
    }
    for (let i = 0; i < midCount; i++) {
      out += mid[Math.floor(Math.random() * mid.length)];
    }
    for (let i = 0; i < downCount; i++) {
      out += down[Math.floor(Math.random() * down.length)];
    }

    return out;
  }).join("");
}


const glitchyZalgoEl = document.getElementById("glitchyZalgoOutput");
if (glitchyZalgoEl) {
  glitchyZalgoEl.textContent = text
    ? glitchyZalgo(text)
    : glitchyZalgo("Glitchy Zalgo");
}

function gothicScary(text) {
  const map = {
    'a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋',
    'g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'𝖐','l':'𝖑',
    'm':'𝖒','n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗',
    's':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝',
    'y':'𝖞','z':'𝖟',

    'A':'𝕬','B':'𝕭','C':'𝕮','D':'𝕯','E':'𝕰','F':'𝕱',
    'G':'𝕲','H':'𝕳','I':'𝕴','J':'𝕵','K':'𝕶','L':'𝕷',
    'M':'𝕸','N':'𝕹','O':'𝕺','P':'𝕻','Q':'𝕼','R':'𝕽',
    'S':'𝕾','T':'𝕿','U':'𝖀','V':'𝖁','W':'𝖂','X':'𝖃',
    'Y':'𝖄','Z':'𝖅'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const gothicScaryEl = document.getElementById("gothicScaryOutput");
if (gothicScaryEl) {
  gothicScaryEl.textContent = text
    ? gothicScary(text)
    : gothicScary("Gothic Scary");
}

function darkFantasy(text) {
  const map = {
    'a':'α','b':'ɓ','c':'ƈ','d':'ɗ','e':'ҽ','f':'ƒ',
    'g':'ɠ','h':'ħ','i':'ɨ','j':'ʝ','k':'ƙ','l':'ʟ',
    'm':'ɱ','n':'ɳ','o':'σ','p':'ρ','q':'զ','r':'ɾ',
    's':'ʂ','t':'ƚ','u':'ʋ','v':'ʋ','w':'ω','x':'χ',
    'y':'ყ','z':'ʐ',

    'A':'Δ','B':'β','C':'Ƈ','D':'Ɗ','E':'Ξ','F':'Ƒ',
    'G':'Ɠ','H':'Ħ','I':'Ι','J':'ʝ','K':'Ƙ','L':'Ɫ',
    'M':'Μ','N':'Ɲ','O':'Θ','P':'Ƥ','Q':'Ɋ','R':'Ʀ',
    'S':'Ƨ','T':'Ƭ','U':'Ʊ','V':'Ʋ','W':'Ѡ','X':'Ж',
    'Y':'¥','Z':'Ƶ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const darkFantasyEl = document.getElementById("darkFantasyOutput");
if (darkFantasyEl) {
  darkFantasyEl.textContent = text
    ? darkFantasy(text)
    : darkFantasy("Dark Fantasy");
}

function nightmareText(text) {
  const map = {
    'a':'λ','b':'ƀ','c':'ↄ','d':'ɗ','e':'є','f':'Ғ',
    'g':'ɠ','h':'һ','i':'ı','j':'ʝ','k':'ƙ','l':'ʟ',
    'm':'ʍ','n':'η','o':'ø','p':'ρ','q':'զ','r':'ɾ',
    's':'ϟ','t':'†','u':'υ','v':'ѵ','w':'ω','x':'✕',
    'y':'γ','z':'ȥ',

    'A':'Λ','B':'ß','C':'Ↄ','D':'Ð','E':'Ξ','F':'Ғ',
    'G':'Ǥ','H':'Ħ','I':'Ι','J':'ʝ','K':'Ҡ','L':'Ɫ',
    'M':'Μ','N':'И','O':'Ø','P':'Ƥ','Q':'Ǫ','R':'Я',
    'S':'Ϟ','T':'†','U':'Ʊ','V':'Ѵ','W':'Ш','X':'✕',
    'Y':'Ұ','Z':'Ƶ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const nightmareTextEl = document.getElementById("nightmareTextOutput");
if (nightmareTextEl) {
  nightmareTextEl.textContent = text
    ? nightmareText(text)
    : nightmareText("Nightmare");
}
function ritualSoText(text) {
  const map = {
    // Lowercase completely replaced with So symbols
    'a':'☯','b':'☬','c':'☸','d':'☢','e':'☣','f':'☤',
    'g':'☥','h':'☦','i':'☧','j':'☨','k':'☩','l':'☪',
    'm':'☫','n':'☭','o':'☮','p':'☯','q':'☸','r':'☹',
    's':'☻','t':'☼','u':'☽','v':'☾','w':'♄','x':'♅',
    'y':'♆','z':'♇',

    // Uppercase completely replaced with So symbols
    'A':'⚀','B':'⚁','C':'⚂','D':'⚃','E':'⚄','F':'⚅',
    'G':'☘','H':'☙','I':'☚','J':'☛','K':'☜','L':'☝',
    'M':'☞','N':'☟','O':'☠','P':'☡','Q':'☢','R':'☣',
    'S':'☤','T':'☥','U':'☦','V':'☧','W':'☨','X':'☩',
    'Y':'☪','Z':'☫',

    // Some basic punctuation
    '!':'✶','?':'✷','*':'✸','+':'✹','@':'✺','&':'✻',
    '%':'✼','#':'✽','$':'✾'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const ritualSoTextEl = document.getElementById("ritualSoTextOutput");
if (ritualSoTextEl) {
  ritualSoTextEl.textContent = text
    ? ritualSoText(text)
    : ritualSoText("Ritual So");
}
function hellfireText(text) {
  const map = {
    // Lowercase letters → “hellfire” style symbols
    'a':'Ⱥ','b':'ɮ','c':'Ƈ','d':'Đ','e':'Ɇ','f':'Ƒ',
    'g':'Ǥ','h':'Ӊ','i':'Ꭵ','j':'Ɉ','k':'Ҝ','l':'Ӏ',
    'm':'Ɱ','n':'Ŋ','o':'Ø','p':'Þ','q':'Ɋ','r':'Я',
    's':'Ƨ','t':'Ƭ','u':'Ʋ','v':'Ѵ','w':'Ш','x':'Ӿ',
    'y':'Ɏ','z':'Ƶ',

    // Uppercase letters → “hellfire” style symbols
    'A':'Ⱥ','B':'ɮ','C':'Ƈ','D':'Đ','E':'Ɇ','F':'Ƒ',
    'G':'Ǥ','H':'Ӊ','I':'Ꭵ','J':'Ɉ','K':'Ҝ','L':'Ӏ',
    'M':'Ɱ','N':'Ŋ','O':'Ø','P':'Þ','Q':'Ɋ','R':'Я',
    'S':'Ƨ','T':'Ƭ','U':'Ʋ','V':'Ѵ','W':'Ш','X':'Ӿ',
    'Y':'Ɏ','Z':'Ƶ',

    // Fire/chaotic symbols
    '!':'🔥','?':'⚡','*':'✦','+':'✧','@':'☥','&':'⚜',
    '%':'☢','#':'⛧','$':'⚡'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const hellfireTextEl = document.getElementById("hellfireTextOutput");
if (hellfireTextEl) {
  hellfireTextEl.textContent = text
    ? hellfireText(text)
    : hellfireText("Hellfire");
}
function boneScript(text) {
  const map = {
    // Lowercase → Symbol characters
    'a':'☠','b':'⚓','c':'⚒','d':'✙','e':'✦','f':'✧',
    'g':'⚡','h':'✪','i':'✠','j':'✵','k':'✶','l':'☤',
    'm':'✸','n':'✹','o':'✺','p':'✻','q':'✼','r':'✽',
    's':'✾','t':'✿','u':'❁','v':'❂','w':'❃','x':'❄',
    'y':'❅','z':'❆',

    // Uppercase → Symbol characters
    'A':'★','B':'☆','C':'☉','D':'☼','E':'☾','F':'☽',
    'G':'☿','H':'♁','I':'♀','J':'♃','K':'♄','L':'♅',
    'M':'♆','N':'♇','O':'♈','P':'♉','Q':'♊','R':'♋',
    'S':'♌','T':'♍','U':'♎','V':'♏','W':'♐','X':'♑',
    'Y':'♒','Z':'♓',

    // Punctuation / symbols
    '!':'☢','?':'☣','*':'⚜','+':'✥','@':'☤','&':'⚛',
    '%':'☮','#':'☯','$':'✵'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const boneScriptEl = document.getElementById("boneScriptOutput");
if (boneScriptEl) {
  boneScriptEl.textContent = text
    ? boneScript(text)
    : boneScript("Bone Script");
}
function elderRunes(text) {
  const map = {
    // Lowercase → Runic
    'a':'ᚨ','b':'ᛒ','c':'ᚲ','d':'ᛞ','e':'ᛖ','f':'ᚠ',
    'g':'ᚷ','h':'ᚺ','i':'ᛁ','j':'ᛃ','k':'ᚲ','l':'ᛚ',
    'm':'ᛗ','n':'ᚾ','o':'ᛟ','p':'ᛈ','q':'ᛩ','r':'ᚱ',
    's':'ᛋ','t':'ᛏ','u':'ᚢ','v':'ᚡ','w':'ᚹ','x':'ᛪ',
    'y':'ᛇ','z':'ᛉ',

    // Uppercase → Runic
    'A':'ᚨ','B':'ᛒ','C':'ᚲ','D':'ᛞ','E':'ᛖ','F':'ᚠ',
    'G':'ᚷ','H':'ᚺ','I':'ᛁ','J':'ᛃ','K':'ᚲ','L':'ᛚ',
    'M':'ᛗ','N':'ᚾ','O':'ᛟ','P':'ᛈ','Q':'ᛩ','R':'ᚱ',
    'S':'ᛋ','T':'ᛏ','U':'ᚢ','V':'ᚡ','W':'ᚹ','X':'ᛪ',
    'Y':'ᛇ','Z':'ᛉ',

    // Optional runic symbols
    '!':'ᛉ','?':'ᛦ','*':'ᛤ','+':'ᛥ','@':'ᛣ','&':'ᛢ',
    '%':'ᛧ','#':'ᛨ','$':'ᛩ'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}
const elderRunesEl = document.getElementById("elderRunesOutput");
if (elderRunesEl) {
  elderRunesEl.textContent = text
    ? elderRunes(text)
    : elderRunes("Elder Runes");
}



 //end demonic

function doubleStruckNumber(text) {
  const map = {
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜',
    '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const doubleStruckNumberEl = document.getElementById("doubleStruckNumberOutput");
if (doubleStruckNumberEl) {
  doubleStruckNumberEl.textContent = text ? doubleStruckNumber(text) : doubleStruckNumber("123456789");
}

// Bold
function boldNumber(text) {
  const map = {
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒',
    '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Monospace
function monospaceNumber(text) {
  const map = {
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺',
    '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Fullwidth
function fullwidthNumber(text) {
  const map = {
    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４',
    '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Parenthesized
function parenthesizedNumber(text) {
  const map = {
    '1': '⑴', '2': '⑵', '3': '⑶', '4': '⑷', '5': '⑸',
    '6': '⑹', '7': '⑺', '8': '⑻', '9': '⑼', '0': '⓪'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Keycap Emoji
function keycapNumber(text) {
  const map = {
    '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣',
    '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Circled
function circledNumber(text) {
  const map = {
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
    '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Negative Circled
function negativeCircledNumber(text) {
  const map = {
    '0': '⓿', '1': '❶', '2': '❷', '3': '❸', '4': '❹',
    '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Superscript
function superscriptNumber(text) {
  const map = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Subscript
function subscriptNumber(text) {
  const map = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Double Circled
function doubleCircledNumber(text) {
  const map = {
    '1': '⓵', '2': '⓶', '3': '⓷', '4': '⓸', '5': '⓹',
    '6': '⓺', '7': '⓻', '8': '⓼', '9': '⓽', '0': '⓪'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Roman Numeral
function romanNumber(text) {
  const map = {
    '1': 'Ⅰ', '2': 'Ⅱ', '3': 'Ⅲ', '4': 'Ⅳ', '5': 'Ⅴ',
    '6': 'Ⅵ', '7': 'Ⅶ', '8': 'Ⅷ', '9': 'Ⅸ', '0': '0'
  };
  return text.split("").map(ch => map[ch] || ch).join(" ").trim();
}

// Small Roman Numeral
function smallRomanNumber(text) {
  const map = {
    '1': 'ⅰ', '2': 'ⅱ', '3': 'ⅲ', '4': 'ⅳ', '5': 'ⅴ',
    '6': 'ⅵ', '7': 'ⅶ', '8': 'ⅷ', '9': 'ⅸ', '0': '0'
  };
  return text.split("").map(ch => map[ch] || ch).join(" ").trim();
}

// Arabic-Indic
function arabicIndicNumber(text) {
  const map = {
    '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
    '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Sans-Serif
function sansSerifNumber(text) {
  const map = {
    '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦',
    '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Sans-Serif Bold
function sansSerifBoldNumber(text) {
  const map = {
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰',
    '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Upside Down
function upsideDownNumber(text) {
  const map = {
    '0': '0', '1': '⇂', '2': 'ᘔ', '3': 'Ɛ', '4': '߈',
    '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


// Initialize all outputs
const boldNumberEl = document.getElementById("boldNumberOutput");
if (boldNumberEl) {
  boldNumberEl.textContent = text ? boldNumber(text) : boldNumber("0123456789");
}

const monospaceNumberEl = document.getElementById("monospaceNumberOutput");
if (monospaceNumberEl) {
  monospaceNumberEl.textContent = text ? monospaceNumber(text) : monospaceNumber("0123456789");
}

const fullwidthNumberEl = document.getElementById("fullwidthNumberOutput");
if (fullwidthNumberEl) {
  fullwidthNumberEl.textContent = text ? fullwidthNumber(text) : fullwidthNumber("0123456789");
}

const parenthesizedNumberEl = document.getElementById("parenthesizedNumberOutput");
if (parenthesizedNumberEl) {
  parenthesizedNumberEl.textContent = text ? parenthesizedNumber(text) : parenthesizedNumber("0123456789");
}

const keycapNumberEl = document.getElementById("keycapNumberOutput");
if (keycapNumberEl) {
  keycapNumberEl.textContent = text ? keycapNumber(text) : keycapNumber("0123456789");
}

const circledNumberEl = document.getElementById("circledNumberOutput");
if (circledNumberEl) {
  circledNumberEl.textContent = text ? circledNumber(text) : circledNumber("0123456789");
}

const negativeCircledNumberEl = document.getElementById("negativeCircledNumberOutput");
if (negativeCircledNumberEl) {
  negativeCircledNumberEl.textContent = text ? negativeCircledNumber(text) : negativeCircledNumber("0123456789");
}

const superscriptNumberEl = document.getElementById("superscriptNumberOutput");
if (superscriptNumberEl) {
  superscriptNumberEl.textContent = text ? superscriptNumber(text) : superscriptNumber("0123456789");
}

const subscriptNumberEl = document.getElementById("subscriptNumberOutput");
if (subscriptNumberEl) {
  subscriptNumberEl.textContent = text ? subscriptNumber(text) : subscriptNumber("0123456789");
}

const doubleCircledNumberEl = document.getElementById("doubleCircledNumberOutput");
if (doubleCircledNumberEl) {
  doubleCircledNumberEl.textContent = text ? doubleCircledNumber(text) : doubleCircledNumber("0123456789");
}

const romanNumberEl = document.getElementById("romanNumberOutput");
if (romanNumberEl) {
  romanNumberEl.textContent = text ? romanNumber(text) : romanNumber("123456789");
}

const smallRomanNumberEl = document.getElementById("smallRomanNumberOutput");
if (smallRomanNumberEl) {
  smallRomanNumberEl.textContent = text ? smallRomanNumber(text) : smallRomanNumber("123456789");
}

const arabicIndicNumberEl = document.getElementById("arabicIndicNumberOutput");
if (arabicIndicNumberEl) {
  arabicIndicNumberEl.textContent = text ? arabicIndicNumber(text) : arabicIndicNumber("0123456789");
}

const sansSerifNumberEl = document.getElementById("sansSerifNumberOutput");
if (sansSerifNumberEl) {
  sansSerifNumberEl.textContent = text ? sansSerifNumber(text) : sansSerifNumber("0123456789");
}

const sansSerifBoldNumberEl = document.getElementById("sansSerifBoldNumberOutput");
if (sansSerifBoldNumberEl) {
  sansSerifBoldNumberEl.textContent = text ? sansSerifBoldNumber(text) : sansSerifBoldNumber("0123456789");
}

const upsideDownNumberEl = document.getElementById("upsideDownNumberOutput");
if (upsideDownNumberEl) {
  upsideDownNumberEl.textContent = text ? upsideDownNumber(text) : upsideDownNumber("0123456789");
}

function squares(text) {
  const map = {
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴',
    'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
    'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾',
    'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
    'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈',
    'z': '🅉',
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴',
    'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹',
    'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾',
    'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃',
    'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈',
    'Z': '🅉'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
const squaresEl = document.getElementById("squaresOutput");
if (squaresEl && typeof text !== 'undefined') {
  squaresEl.textContent = text ? squares(text) : squares("Squares");
}

//japanese


function fullwidth(text) {
  const map = {
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ',
    'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ',
    'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ',
    'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ',
    'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９',
    ' ': '　'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function extraThicc(text) {
  const map = {
    'a': '卂', 'b': '乃', 'c': '匚', 'd': '刀', 'e': '乇', 'f': '下', 'g': '厶', 'h': '卄', 'i': '工', 'j': '丁',
    'k': '长', 'l': '乚', 'm': '从', 'n': '𠘨', 'o': '口', 'p': '尸', 'q': '㔿', 'r': '尺', 's': '丂', 't': '丅',
    'u': '凵', 'v': 'ᐯ', 'w': '山', 'x': '乂', 'y': 'ㄚ', 'z': '乙',
    'A': '卂', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇', 'F': '下', 'G': '厶', 'H': '卄', 'I': '工', 'J': '丁',
    'K': '长', 'L': '乚', 'M': '从', 'N': '𠘨', 'O': '口', 'P': '尸', 'Q': '㔿', 'R': '尺', 'S': '丂', 'T': '丅',
    'U': '凵', 'V': 'ᐯ', 'W': '山', 'X': '乂', 'Y': 'ㄚ', 'Z': '乙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function katakana(text) {
  const map = {
    'a': 'ア', 'b': 'ビ', 'c': 'シ', 'd': 'デ', 'e': 'エ', 'f': 'フ', 'g': 'ジ', 'h': 'ハ', 'i': 'イ', 'j': 'ジェ',
    'k': 'カ', 'l': 'ル', 'm': 'ム', 'n': 'ン', 'o': 'オ', 'p': 'プ', 'q': 'ク', 'r': 'ラ', 's': 'ス', 't': 'ト',
    'u': 'ウ', 'v': 'ヴ', 'w': 'ワ', 'x': 'クス', 'y': 'ヤ', 'z': 'ズ',
    'A': 'ア', 'B': 'ビ', 'C': 'シ', 'D': 'デ', 'E': 'エ', 'F': 'フ', 'G': 'ジ', 'H': 'ハ', 'I': 'イ', 'J': 'ジェ',
    'K': 'カ', 'L': 'ル', 'M': 'ム', 'N': 'ン', 'O': 'オ', 'P': 'プ', 'Q': 'ク', 'R': 'ラ', 'S': 'ス', 'T': 'ト',
    'U': 'ウ', 'V': 'ヴ', 'W': 'ワ', 'X': 'クス', 'Y': 'ヤ', 'Z': 'ズ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function hiragana(text) {
  const map = {
    'a': 'あ', 'b': 'び', 'c': 'し', 'd': 'で', 'e': 'え', 'f': 'ふ', 'g': 'じ', 'h': 'は', 'i': 'い', 'j': 'じぇ',
    'k': 'か', 'l': 'る', 'm': 'む', 'n': 'ん', 'o': 'お', 'p': 'ぷ', 'q': 'く', 'r': 'ら', 's': 'す', 't': 'と',
    'u': 'う', 'v': 'ゔ', 'w': 'わ', 'x': 'くす', 'y': 'や', 'z': 'ず',
    'A': 'あ', 'B': 'び', 'C': 'し', 'D': 'で', 'E': 'え', 'F': 'ふ', 'G': 'じ', 'H': 'は', 'I': 'い', 'J': 'じぇ',
    'K': 'か', 'L': 'る', 'M': 'む', 'N': 'ん', 'O': 'お', 'P': 'ぷ', 'Q': 'く', 'R': 'ら', 'S': 'す', 'T': 'と',
    'U': 'う', 'V': 'ゔ', 'W': 'わ', 'X': 'くす', 'Y': 'や', 'Z': 'ず'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function halfwidthKatakana(text) {
  const map = {
    'a': 'ｱ', 'b': 'ﾋﾞ', 'c': 'ｼ', 'd': 'ﾃﾞ', 'e': 'ｴ', 'f': 'ﾌ', 'g': 'ｼﾞ', 'h': 'ﾊ', 'i': 'ｲ', 'j': 'ｼﾞｪ',
    'k': 'ｶ', 'l': 'ﾙ', 'm': 'ﾑ', 'n': 'ﾝ', 'o': 'ｵ', 'p': 'ﾌﾟ', 'q': 'ｸ', 'r': 'ﾗ', 's': 'ｽ', 't': 'ﾄ',
    'u': 'ｳ', 'v': 'ｳﾞ', 'w': 'ﾜ', 'x': 'ｸｽ', 'y': 'ﾔ', 'z': 'ｽﾞ',
    'A': 'ｱ', 'B': 'ﾋﾞ', 'C': 'ｼ', 'D': 'ﾃﾞ', 'E': 'ｴ', 'F': 'ﾌ', 'G': 'ｼﾞ', 'H': 'ﾊ', 'I': 'ｲ', 'J': 'ｼﾞｪ',
    'K': 'ｶ', 'L': 'ﾙ', 'M': 'ﾑ', 'N': 'ﾝ', 'O': 'ｵ', 'P': 'ﾌﾟ', 'Q': 'ｸ', 'R': 'ﾗ', 'S': 'ｽ', 'T': 'ﾄ',
    'U': 'ｳ', 'V': 'ｳﾞ', 'W': 'ﾜ', 'X': 'ｸｽ', 'Y': 'ﾔ', 'Z': 'ｽﾞ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function kanjiStyle(text) {
  const map = {
    'a': '亜', 'b': '部', 'c': '千', 'd': '出', 'e': '江', 'f': '布', 'g': '具', 'h': '保', 'i': '以', 'j': '辞',
    'k': '家', 'l': '留', 'm': '武', 'n': '尓', 'o': '於', 'p': '布', 'q': '久', 'r': '良', 's': '須', 't': '天',
    'u': '宇', 'v': 'ヴ', 'w': '和', 'x': '久須', 'y': '也', 'z': '受',
    'A': '亜', 'B': '部', 'C': '千', 'D': '出', 'E': '江', 'F': '布', 'G': '具', 'H': '保', 'I': '以', 'J': '辞',
    'K': '家', 'L': '留', 'M': '武', 'N': '尓', 'O': '於', 'P': '布', 'Q': '久', 'R': '良', 'S': '須', 'T': '天',
    'U': '宇', 'V': 'ヴ', 'W': '和', 'X': '久須', 'Y': '也', 'Z': '受'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function aestheticJapanese(text) {
  const map = {
    'a': 'ａ　', 'b': 'ｂ　', 'c': 'ｃ　', 'd': 'ｄ　', 'e': 'ｅ　', 'f': 'ｆ　', 'g': 'ｇ　', 'h': 'ｈ　', 
    'i': 'ｉ　', 'j': 'ｊ　', 'k': 'ｋ　', 'l': 'ｌ　', 'm': 'ｍ　', 'n': 'ｎ　', 'o': 'ｏ　', 'p': 'ｐ　',
    'q': 'ｑ　', 'r': 'ｒ　', 's': 'ｓ　', 't': 'ｔ　', 'u': 'ｕ　', 'v': 'ｖ　', 'w': 'ｗ　', 'x': 'ｘ　',
    'y': 'ｙ　', 'z': 'ｚ　',
    'A': 'Ａ　', 'B': 'Ｂ　', 'C': 'Ｃ　', 'D': 'Ｄ　', 'E': 'Ｅ　', 'F': 'Ｆ　', 'G': 'Ｇ　', 'H': 'Ｈ　',
    'I': 'Ｉ　', 'J': 'Ｊ　', 'K': 'Ｋ　', 'L': 'Ｌ　', 'M': 'Ｍ　', 'N': 'Ｎ　', 'O': 'Ｏ　', 'P': 'Ｐ　',
    'Q': 'Ｑ　', 'R': 'Ｒ　', 'S': 'Ｓ　', 'T': 'Ｔ　', 'U': 'Ｕ　', 'V': 'Ｖ　', 'W': 'Ｗ　', 'X': 'Ｘ　',
    'Y': 'Ｙ　', 'Z': 'Ｚ　',
    ' ': '　　'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function vaporwaveMix(text) {
  return fullwidth(text.toLowerCase()) + ' ' + katakana(text);
}

function cornerBrackets(text) {
  return '「' + text + '」';
}

function whiteCorners(text) {
  return '『' + text + '』';
}

function cjkSymbols(text) {
  return '〖' + text + '〗';
}

function hangul(text) {
  const map = {
    'a': '아', 'b': '비', 'c': '씨', 'd': '디', 'e': '에', 'f': '에프', 'g': '지', 'h': '에이치', 'i': '아이', 'j': '제이',
    'k': '케이', 'l': '엘', 'm': '엠', 'n': '엔', 'o': '오', 'p': '피', 'q': '큐', 'r': '알', 's': '에스', 't': '티',
    'u': '유', 'v': '브이', 'w': '더블유', 'x': '엑스', 'y': '와이', 'z': '제트',
    'A': '에이', 'B': '비', 'C': '씨', 'D': '디', 'E': '이', 'F': '에프', 'G': '지', 'H': '에이치', 'I': '아이', 'J': '제이',
    'K': '케이', 'L': '엘', 'M': '엠', 'N': '엔', 'O': '오', 'P': '피', 'Q': '큐', 'R': '알', 'S': '에스', 'T': '티',
    'U': '유', 'V': '브이', 'W': '더블유', 'X': '엑스', 'Y': '와이', 'Z': '제트'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function bopomofo(text) {
  const map = {
    'a': 'ㄚ', 'b': 'ㄅ', 'c': 'ㄘ', 'd': 'ㄉ', 'e': 'ㄜ', 'f': 'ㄈ', 'g': 'ㄍ', 'h': 'ㄏ', 'i': 'ㄧ', 'j': 'ㄐ',
    'k': 'ㄎ', 'l': 'ㄌ', 'm': 'ㄇ', 'n': 'ㄋ', 'o': 'ㄛ', 'p': 'ㄆ', 'q': 'ㄑ', 'r': 'ㄖ', 's': 'ㄙ', 't': 'ㄊ',
    'u': 'ㄨ', 'v': 'ㄩ', 'w': 'ㄨ', 'x': 'ㄒ', 'y': 'ㄧ', 'z': 'ㄗ',
    'A': 'ㄚ', 'B': 'ㄅ', 'C': 'ㄘ', 'D': 'ㄉ', 'E': 'ㄜ', 'F': 'ㄈ', 'G': 'ㄍ', 'H': 'ㄏ', 'I': 'ㄧ', 'J': 'ㄐ',
    'K': 'ㄎ', 'L': 'ㄌ', 'M': 'ㄇ', 'N': 'ㄋ', 'O': 'ㄛ', 'P': 'ㄆ', 'Q': 'ㄑ', 'R': 'ㄖ', 'S': 'ㄙ', 'T': 'ㄊ',
    'U': 'ㄨ', 'V': 'ㄩ', 'W': 'ㄨ', 'X': 'ㄒ', 'Y': 'ㄧ', 'Z': 'ㄗ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function yiSyllables(text) {
  const map = {
    'a': 'ꀀ', 'b': 'ꀖ', 'c': 'ꀸ', 'd': 'ꁕ', 'e': 'ꁸ', 'f': 'ꂠ', 'g': 'ꂸ', 'h': 'ꃀ', 'i': 'ꃀ', 'j': 'ꃕ',
    'k': 'ꃰ', 'l': 'ꄀ', 'm': 'ꄜ', 'n': 'ꄸ', 'o': 'ꅀ', 'p': 'ꅜ', 'q': 'ꅸ', 'r': 'ꆀ', 's': 'ꆜ', 't': 'ꆸ',
    'u': 'ꇀ', 'v': 'ꇜ', 'w': 'ꇸ', 'x': 'ꈀ', 'y': 'ꈜ', 'z': 'ꈸ',
    'A': 'ꀀ', 'B': 'ꀖ', 'C': 'ꀸ', 'D': 'ꁕ', 'E': 'ꁸ', 'F': 'ꂠ', 'G': 'ꂸ', 'H': 'ꃀ', 'I': 'ꃀ', 'J': 'ꃕ',
    'K': 'ꃰ', 'L': 'ꄀ', 'M': 'ꄜ', 'N': 'ꄸ', 'O': 'ꅀ', 'P': 'ꅜ', 'Q': 'ꅸ', 'R': 'ꆀ', 'S': 'ꆜ', 'T': 'ꆸ',
    'U': 'ꇀ', 'V': 'ꇜ', 'W': 'ꇸ', 'X': 'ꈀ', 'Y': 'ꈜ', 'Z': 'ꈸ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function lisu(text) {
  const map = {
    'a': 'ꓐ', 'b': 'ꓑ', 'c': 'ꓒ', 'd': 'ꓓ', 'e': 'ꓔ', 'f': 'ꓕ', 'g': 'ꓖ', 'h': 'ꓗ', 'i': 'ꓲ', 'j': 'ꓙ',
    'k': 'ꓚ', 'l': 'ꓛ', 'm': 'ꓜ', 'n': 'ꓝ', 'o': 'ꓳ', 'p': 'ꓑ', 'q': 'ꓠ', 'r': 'ꓡ', 's': 'ꓢ', 't': 'ꓔ',
    'u': 'ꓴ', 'v': 'ꓦ', 'w': 'ꓪ', 'x': 'ꓫ', 'y': 'ꓬ', 'z': 'ꓭ',
    'A': 'ꓐ', 'B': 'ꓑ', 'C': 'ꓒ', 'D': 'ꓓ', 'E': 'ꓔ', 'F': 'ꓕ', 'G': 'ꓖ', 'H': 'ꓗ', 'I': 'ꓲ', 'J': 'ꓙ',
    'K': 'ꓚ', 'L': 'ꓛ', 'M': 'ꓜ', 'N': 'ꓝ', 'O': 'ꓳ', 'P': 'ꓑ', 'Q': 'ꓠ', 'R': 'ꓡ', 'S': 'ꓢ', 'T': 'ꓔ',
    'U': 'ꓴ', 'V': 'ꓦ', 'W': 'ꓪ', 'X': 'ꓫ', 'Y': 'ꓬ', 'Z': 'ꓭ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function vai(text) {
  const map = {
    'a': 'ꔀ', 'b': 'ꔁ', 'c': 'ꔂ', 'd': 'ꔃ', 'e': 'ꔀ', 'f': 'ꔉ', 'g': 'ꔖ', 'h': 'ꔜ', 'i': 'ꔤ', 'j': 'ꔨ',
    'k': 'ꔰ', 'l': 'ꔷ', 'm': 'ꕀ', 'n': 'ꕂ', 'o': 'ꕐ', 'p': 'ꕙ', 'q': 'ꕤ', 'r': 'ꕪ', 's': 'ꕶ', 't': 'ꕿ',
    'u': 'ꖁ', 'v': 'ꖕ', 'w': 'ꖙ', 'x': 'ꖝ', 'y': 'ꖡ', 'z': 'ꖨ',
    'A': 'ꔀ', 'B': 'ꔁ', 'C': 'ꔂ', 'D': 'ꔃ', 'E': 'ꔀ', 'F': 'ꔉ', 'G': 'ꔖ', 'H': 'ꔜ', 'I': 'ꔤ', 'J': 'ꔨ',
    'K': 'ꔰ', 'L': 'ꔷ', 'M': 'ꕀ', 'N': 'ꕂ', 'O': 'ꕐ', 'P': 'ꕙ', 'Q': 'ꕤ', 'R': 'ꕪ', 'S': 'ꕶ', 'T': 'ꕿ',
    'U': 'ꖁ', 'V': 'ꖕ', 'W': 'ꖙ', 'X': 'ꖝ', 'Y': 'ꖡ', 'Z': 'ꖨ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function bamum(text) {
  const map = {
    'a': 'ꚠ', 'b': 'ꚡ', 'c': 'ꚢ', 'd': 'ꚣ', 'e': 'ꚤ', 'f': 'ꚥ', 'g': 'ꚦ', 'h': 'ꚧ', 'i': 'ꚨ', 'j': 'ꚩ',
    'k': 'ꚪ', 'l': 'ꚫ', 'm': 'ꚬ', 'n': 'ꚭ', 'o': 'ꚮ', 'p': 'ꚯ', 'q': 'ꚰ', 'r': 'ꚱ', 's': 'ꚲ', 't': 'ꚳ',
    'u': 'ꚴ', 'v': 'ꚵ', 'w': 'ꚶ', 'x': 'ꚷ', 'y': 'ꚸ', 'z': 'ꚹ',
    'A': 'ꚠ', 'B': 'ꚡ', 'C': 'ꚢ', 'D': 'ꚣ', 'E': 'ꚤ', 'F': 'ꚥ', 'G': 'ꚦ', 'H': 'ꚧ', 'I': 'ꚨ', 'J': 'ꚩ',
    'K': 'ꚪ', 'L': 'ꚫ', 'M': 'ꚬ', 'N': 'ꚭ', 'O': 'ꚮ', 'P': 'ꚯ', 'Q': 'ꚰ', 'R': 'ꚱ', 'S': 'ꚲ', 'T': 'ꚳ',
    'U': 'ꚴ', 'V': 'ꚵ', 'W': 'ꚶ', 'X': 'ꚷ', 'Y': 'ꚸ', 'Z': 'ꚹ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function javanese(text) {
  const map = {
    'a': 'ꦄ', 'b': 'ꦧ', 'c': 'ꦕ', 'd': 'ꦢ', 'e': 'ꦺ', 'f': 'ꦥ꦳', 'g': 'ꦒ', 'h': 'ꦲ', 'i': 'ꦆ', 'j': 'ꦗ',
    'k': 'ꦏ', 'l': 'ꦭ', 'm': 'ꦩ', 'n': 'ꦤ', 'o': 'ꦎ', 'p': 'ꦥ', 'q': 'ꦐ', 'r': 'ꦫ', 's': 'ꦱ', 't': 'ꦠ',
    'u': 'ꦈ', 'v': 'ꦮ꦳', 'w': 'ꦮ', 'x': 'ꦏ꧀ꦱ', 'y': 'ꦪ', 'z': 'ꦗ꦳',
    'A': 'ꦄ', 'B': 'ꦧ', 'C': 'ꦕ', 'D': 'ꦢ', 'E': 'ꦺ', 'F': 'ꦥ꦳', 'G': 'ꦒ', 'H': 'ꦲ', 'I': 'ꦆ', 'J': 'ꦗ',
    'K': 'ꦏ', 'L': 'ꦭ', 'M': 'ꦩ', 'N': 'ꦤ', 'O': 'ꦎ', 'P': 'ꦥ', 'Q': 'ꦐ', 'R': 'ꦫ', 'S': 'ꦱ', 'T': 'ꦠ',
    'U': 'ꦈ', 'V': 'ꦮ꦳', 'W': 'ꦮ', 'X': 'ꦏ꧀ꦱ', 'Y': 'ꦪ', 'Z': 'ꦗ꦳'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function taile(text) {
  const map = {
    'a': 'ᥐ', 'b': 'ᥑ', 'c': 'ᥒ', 'd': 'ᥓ', 'e': 'ᥔ', 'f': 'ᥕ', 'g': 'ᥖ', 'h': 'ᥗ', 'i': 'ᥣ', 'j': 'ᥙ',
    'k': 'ᥐ', 'l': 'ᥚ', 'm': 'ᥛ', 'n': 'ᥜ', 'o': 'ᥨ', 'p': 'ᥞ', 'q': 'ᥟ', 'r': 'ᥰ', 's': 'ᥡ', 't': 'ᥢ',
    'u': 'ᥧ', 'v': 'ᥫ', 'w': 'ᥬ', 'x': 'ᥭ', 'y': 'ᥭ', 'z': '᥮',
    'A': 'ᥐ', 'B': 'ᥑ', 'C': 'ᥒ', 'D': 'ᥓ', 'E': 'ᥔ', 'F': 'ᥕ', 'G': 'ᥖ', 'H': 'ᥗ', 'I': 'ᥣ', 'J': 'ᥙ',
    'K': 'ᥐ', 'L': 'ᥚ', 'M': 'ᥛ', 'N': 'ᥜ', 'O': 'ᥨ', 'P': 'ᥞ', 'Q': 'ᥟ', 'R': 'ᥰ', 'S': 'ᥡ', 'T': 'ᥢ',
    'U': 'ᥧ', 'V': 'ᥫ', 'W': 'ᥬ', 'X': 'ᥭ', 'Y': 'ᥭ', 'Z': '᥮'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function buginese(text) {
  const map = {
    'a': 'ᨀ', 'b': 'ᨁ', 'c': 'ᨂ', 'd': 'ᨃ', 'e': 'ᨕ', 'f': 'ᨙ', 'g': 'ᨈ', 'h': 'ᨖ', 'i': 'ᨗ', 'j': 'ᨎ',
    'k': 'ᨀ', 'l': 'ᨒ', 'm': 'ᨆ', 'n': 'ᨊ', 'o': 'ᨚ', 'p': 'ᨄ', 'q': 'ᨀ', 'r': 'ᨙ', 's': 'ᨔ', 't': 'ᨈ',
    'u': 'ᨘ', 'v': 'ᨆ', 'w': 'ᨓ', 'x': 'ᨀᨔ', 'y': 'ᨐ', 'z': 'ᨎ',
    'A': 'ᨀ', 'B': 'ᨁ', 'C': 'ᨂ', 'D': 'ᨃ', 'E': 'ᨕ', 'F': 'ᨙ', 'G': 'ᨈ', 'H': 'ᨖ', 'I': 'ᨗ', 'J': 'ᨎ',
    'K': 'ᨀ', 'L': 'ᨒ', 'M': 'ᨆ', 'N': 'ᨊ', 'O': 'ᨚ', 'P': 'ᨄ', 'Q': 'ᨀ', 'R': 'ᨙ', 'S': 'ᨔ', 'T': 'ᨈ',
    'U': 'ᨘ', 'V': 'ᨆ', 'W': 'ᨓ', 'X': 'ᨀᨔ', 'Y': 'ᨐ', 'Z': 'ᨎ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function balinese(text) {
  const map = {
    'a': 'ᬅ', 'b': 'ᬩ', 'c': 'ᬘ', 'd': 'ᬤ', 'e': 'ᬏ', 'f': 'ᬧ', 'g': 'ᬕ', 'h': 'ᬳ', 'i': 'ᬇ', 'j': 'ᬚ',
    'k': 'ᬓ', 'l': 'ᬮ', 'm': 'ᬫ', 'n': 'ᬦ', 'o': 'ᬑ', 'p': 'ᬧ', 'q': 'ᬓ', 'r': 'ᬭ', 's': 'ᬲ', 't': 'ᬢ',
    'u': 'ᬉ', 'v': 'ᬯ', 'w': 'ᬯ', 'x': 'ᬓ᭄ᬱ', 'y': 'ᬬ', 'z': 'ᬚ',
    'A': 'ᬅ', 'B': 'ᬩ', 'C': 'ᬘ', 'D': 'ᬤ', 'E': 'ᬏ', 'F': 'ᬧ', 'G': 'ᬕ', 'H': 'ᬳ', 'I': 'ᬇ', 'J': 'ᬚ',
    'K': 'ᬓ', 'L': 'ᬮ', 'M': 'ᬫ', 'N': 'ᬦ', 'O': 'ᬑ', 'P': 'ᬧ', 'Q': 'ᬓ', 'R': 'ᬭ', 'S': 'ᬲ', 'T': 'ᬢ',
    'U': 'ᬉ', 'V': 'ᬯ', 'W': 'ᬯ', 'X': 'ᬓ᭄ᬱ', 'Y': 'ᬬ', 'Z': 'ᬚ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function sundanese(text) {
  const map = {
    'a': 'ᮃ', 'b': 'ᮘ', 'c': 'ᮎ', 'd': 'ᮓ', 'e': 'ᮨ', 'f': 'ᮖ', 'g': 'ᮌ', 'h': 'ᮠ', 'i': 'ᮤ', 'j': 'ᮏ',
    'k': 'ᮊ', 'l': 'ᮜ', 'm': 'ᮙ', 'n': 'ᮔ', 'o': 'ᮧ', 'p': 'ᮕ', 'q': 'ᮋ', 'r': 'ᮛ', 's': 'ᮞ', 't': 'ᮒ',
    'u': 'ᮥ', 'v': 'ᮗ', 'w': 'ᮝ', 'x': 'ᮊᮞ', 'y': 'ᮚ', 'z': 'ᮐ',
    'A': 'ᮃ', 'B': 'ᮘ', 'C': 'ᮎ', 'D': 'ᮓ', 'E': 'ᮨ', 'F': 'ᮖ', 'G': 'ᮌ', 'H': 'ᮠ', 'I': 'ᮤ', 'J': 'ᮏ',
    'K': 'ᮊ', 'L': 'ᮜ', 'M': 'ᮙ', 'N': 'ᮔ', 'O': 'ᮧ', 'P': 'ᮕ', 'Q': 'ᮋ', 'R': 'ᮛ', 'S': 'ᮞ', 'T': 'ᮒ',
    'U': 'ᮥ', 'V': 'ᮗ', 'W': 'ᮝ', 'X': 'ᮊᮞ', 'Y': 'ᮚ', 'Z': 'ᮐ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function lepcha(text) {
  const map = {
    'a': 'ᰀ', 'b': 'ᰁ', 'c': 'ᰂ', 'd': 'ᰃ', 'e': 'ᰣ', 'f': 'ᰤ', 'g': 'ᰄ', 'h': 'ᰅ', 'i': 'ᰦ', 'j': 'ᰆ',
    'k': 'ᰀ', 'l': 'ᰇ', 'm': 'ᰈ', 'n': 'ᰉ', 'o': 'ᰧ', 'p': 'ᰊ', 'q': 'ᰋ', 'r': 'ᰌ', 's': 'ᰍ', 't': 'ᰎ',
    'u': 'ᰪ', 'v': 'ᰏ', 'w': 'ᰐ', 'x': 'ᰑ', 'y': 'ᰒ', 'z': 'ᰓ',
    'A': 'ᰀ', 'B': 'ᰁ', 'C': 'ᰂ', 'D': 'ᰃ', 'E': 'ᰣ', 'F': 'ᰤ', 'G': 'ᰄ', 'H': 'ᰅ', 'I': 'ᰦ', 'J': 'ᰆ',
    'K': 'ᰀ', 'L': 'ᰇ', 'M': 'ᰈ', 'N': 'ᰉ', 'O': 'ᰧ', 'P': 'ᰊ', 'Q': 'ᰋ', 'R': 'ᰌ', 'S': 'ᰍ', 'T': 'ᰎ',
    'U': 'ᰪ', 'V': 'ᰏ', 'W': 'ᰐ', 'X': 'ᰑ', 'Y': 'ᰒ', 'Z': 'ᰓ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function smallKana(text) {
  return 'ぁ' + text + 'ゖ';
}

function enclosedKatakana(text) {
  return '㋐' + text + '㋾';
}

function circledKatakana(text) {
  return '㌀' + text + '㍿';
}

function parenthesizedKatakana(text) {
  return '㈀' + text + '㈹';
}

function radicalStyle(text) {
  return '⺀' + text + '⺃';
}

function ideographic(text) {
  return '〆' + text + '〡';
}

function verticalMarks(text) {
  return '︱' + text + '︴';
}

function phoneticExt(text) {
  const smallCaps = text.toUpperCase().split('').map(c => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(code + 0x1D00 - 0x41);
    }
    return c;
  }).join('');
  return smallCaps;
}

function cjkStrokes(text) {
  return '㇀' + text + '㇣';
}

function kanbun(text) {
  return '㆐' + text + '㆟';
}

function smallForm(text) {
  return '﹐' + text + '﹫';
}

// Apply all conversions
const fullwidthEl = document.getElementById("fullwidthOutput");
if (fullwidthEl) {
  fullwidthEl.textContent = text ? fullwidth(text) : fullwidth("Vaporwave");
}

const extraThiccEl = document.getElementById("extraThiccOutput");
if (extraThiccEl) {
  extraThiccEl.textContent = text ? extraThicc(text) : extraThicc("Extra Thicc");
}

const katakanaEl = document.getElementById("katakanaOutput");
if (katakanaEl) {
  katakanaEl.textContent = text ? katakana(text) : katakana("Katakana");
}

const hiraganaEl = document.getElementById("hiraganaOutput");
if (hiraganaEl) {
  hiraganaEl.textContent = text ? hiragana(text) : hiragana("Hiragana");
}

const halfwidthKatakanaEl = document.getElementById("halfwidthKatakanaOutput");
if (halfwidthKatakanaEl) {
  halfwidthKatakanaEl.textContent = text ? halfwidthKatakana(text) : halfwidthKatakana("Katakana");
}

const kanjiStyleEl = document.getElementById("kanjiStyleOutput");
if (kanjiStyleEl) {
  kanjiStyleEl.textContent = text ? kanjiStyle(text) : kanjiStyle("Kanji");
}

const aestheticJapaneseEl = document.getElementById("aestheticJapaneseOutput");
if (aestheticJapaneseEl) {
  aestheticJapaneseEl.textContent = text ? aestheticJapanese(text) : aestheticJapanese("Aesthetic");
}

const vaporwaveMixEl = document.getElementById("vaporwaveMixOutput");
if (vaporwaveMixEl) {
  vaporwaveMixEl.textContent = text ? vaporwaveMix(text) : vaporwaveMix("Vaporwave");
}

const cornerBracketsEl = document.getElementById("cornerBracketsOutput");
if (cornerBracketsEl) {
  cornerBracketsEl.textContent = text ? cornerBrackets(text) : cornerBrackets("Brackets");
}

const whiteCornersEl = document.getElementById("whiteCornersOutput");
if (whiteCornersEl) {
  whiteCornersEl.textContent = text ? whiteCorners(text) : whiteCorners("Corners");
}

const cjkSymbolsEl = document.getElementById("cjkSymbolsOutput");
if (cjkSymbolsEl) {
  cjkSymbolsEl.textContent = text ? cjkSymbols(text) : cjkSymbols("CJK");
}

const hangulEl = document.getElementById("hangulOutput");
if (hangulEl) {
  hangulEl.textContent = text ? hangul(text) : hangul("Korean");
}

const bopomofoEl = document.getElementById("bopomofoOutput");
if (bopomofoEl) {
  bopomofoEl.textContent = text ? bopomofo(text) : bopomofo("Bopomofo");
}

const yiSyllablesEl = document.getElementById("yiSyllablesOutput");
if (yiSyllablesEl) {
  yiSyllablesEl.textContent = text ? yiSyllables(text) : yiSyllables("Yi");
}

const lisuEl = document.getElementById("lisuOutput");
if (lisuEl) {
  lisuEl.textContent = text ? lisu(text) : lisu("Lisu");
}

const vaiEl = document.getElementById("vaiOutput");
if (vaiEl) {
  vaiEl.textContent = text ? vai(text) : vai("Vai");
}

const bamumEl = document.getElementById("bamumOutput");
if (bamumEl) {
  bamumEl.textContent = text ? bamum(text) : bamum("Bamum");
}

const javaneseEl = document.getElementById("javaneseOutput");
if (javaneseEl) {
  javaneseEl.textContent = text ? javanese(text) : javanese("Javanese");
}

const taileEl = document.getElementById("taileOutput");
if (taileEl) {
  taileEl.textContent = text ? taile(text) : taile("Tai Le");
}

const bugineseEl = document.getElementById("bugineseOutput");
if (bugineseEl) {
  bugineseEl.textContent = text ? buginese(text) : buginese("Buginese");
}

const balineseEl = document.getElementById("balineseOutput");
if (balineseEl) {
  balineseEl.textContent = text ? balinese(text) : balinese("Balinese");
}

const sundaneseEl = document.getElementById("sundaneseOutput");
if (sundaneseEl) {
  sundaneseEl.textContent = text ? sundanese(text) : sundanese("Sundanese");
}

const lepchaEl = document.getElementById("lepchaOutput");
if (lepchaEl) {
  lepchaEl.textContent = text ? lepcha(text) : lepcha("Lepcha");
}

const smallKanaEl = document.getElementById("smallKanaOutput");
if (smallKanaEl) {
  smallKanaEl.textContent = text ? smallKana(text) : smallKana("Small");
}

const enclosedKatakanaEl = document.getElementById("enclosedKatakanaOutput");
if (enclosedKatakanaEl) {
  enclosedKatakanaEl.textContent = text ? enclosedKatakana(text) : enclosedKatakana("Enclosed");
}

const circledKatakanaEl = document.getElementById("circledKatakanaOutput");
if (circledKatakanaEl) {
  circledKatakanaEl.textContent = text ? circledKatakana(text) : circledKatakana("Circled");
}

const parenthesizedKatakanaEl = document.getElementById("parenthesizedKatakanaOutput");
if (parenthesizedKatakanaEl) {
  parenthesizedKatakanaEl.textContent = text ? parenthesizedKatakana(text) : parenthesizedKatakana("Parenthesized");
}

const radicalStyleEl = document.getElementById("radicalStyleOutput");
if (radicalStyleEl) {
  radicalStyleEl.textContent = text ? radicalStyle(text) : radicalStyle("Radical");
}

const ideographicEl = document.getElementById("ideographicOutput");
if (ideographicEl) {
  ideographicEl.textContent = text ? ideographic(text) : ideographic("Ideographic");
}

const verticalMarksEl = document.getElementById("verticalMarksOutput");
if (verticalMarksEl) {
  verticalMarksEl.textContent = text ? verticalMarks(text) : verticalMarks("Vertical");
}

const phoneticExtEl = document.getElementById("phoneticExtOutput");
if (phoneticExtEl) {
  phoneticExtEl.textContent = text ? phoneticExt(text) : phoneticExt("Phonetic");
}

const cjkStrokesEl = document.getElementById("cjkStrokesOutput");
if (cjkStrokesEl) {
  cjkStrokesEl.textContent = text ? cjkStrokes(text) : cjkStrokes("Strokes");
}

const kanbunEl = document.getElementById("kanbunOutput");
if (kanbunEl) {
  kanbunEl.textContent = text ? kanbun(text) : kanbun("Kanbun");
}

const smallFormEl = document.getElementById("smallFormOutput");
if (smallFormEl) {
  smallFormEl.textContent = text ? smallForm(text) : smallForm("Small Form");
}

//end japanese
function squaredLatin(text) {
  const map = {
    'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴',
    'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹',
    'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾',
    'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃',
    'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈',
    'z': '🆉',
    'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴',
    'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
    'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾',
    'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
    'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈',
    'Z': '🆉'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const squaredLatinEl = document.getElementById("squaredLatinOutput");
if (squaredLatinEl) {
  squaredLatinEl.textContent = text ? squaredLatin(text) : squaredLatin("Squared Latin");
}

function ancient(text) {
  const map = {
    'a': 'ꍏ', 'b': 'ꌃ', 'c': 'ꉓ', 'd': 'ꀸ', 'e': 'ꍟ',
    'f': 'ꎇ', 'g': 'ꁅ', 'h': 'ꃅ', 'i': 'ꀤ', 'j': 'ꀭ',
    'k': 'ꀘ', 'l': '꒒', 'm': 'ꂵ', 'n': 'ꈤ', 'o': 'ꂦ',
    'p': 'ꉣ', 'q': 'ꆰ', 'r': 'ꋪ', 's': 'ꌗ', 't': '꓄',
    'u': 'ꀎ', 'v': 'ꃴ', 'w': 'ꅏ', 'x': 'ꊼ', 'y': 'ꌩ',
    'z': 'ꁴ',
    'A': 'ꍏ', 'B': 'ꌃ', 'C': 'ꉓ', 'D': 'ꀸ', 'E': 'ꍟ',
    'F': 'ꎇ', 'G': 'ꁅ', 'H': 'ꃅ', 'I': 'ꀤ', 'J': 'ꀭ',
    'K': 'ꀘ', 'L': '꒒', 'M': 'ꂵ', 'N': 'ꈤ', 'O': 'ꂦ',
    'P': 'ꉣ', 'Q': 'ꆰ', 'R': 'ꋪ', 'S': 'ꌗ', 'T': '꓄',
    'U': 'ꀎ', 'V': 'ꃴ', 'W': 'ꅏ', 'X': 'ꊼ', 'Y': 'ꌩ',
    'Z': 'ꁴ'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const ancientEl = document.getElementById("ancientOutput");
if (ancientEl) {
  ancientEl.textContent = text ? ancient(text) : ancient("Ancient");
}
// Squared
function squaredNumber(text) {
  const map = {
    '0': '🄌', '1': '🄐', '2': '🄑', '3': '🄒', '4': '🄓',
    '5': '🄔', '6': '🄕', '7': '🄖', '8': '🄗', '9': '🄘'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Negative Squared
function negativeSquaredNumber(text) {
  const map = {
    '0': '🄋', '1': '➀', '2': '➁', '3': '➂', '4': '➃',
    '5': '➄', '6': '➅', '7': '➆', '8': '➇', '9': '➈'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Dingbat Negative Circled
function dingbatNegativeCircledNumber(text) {
  const map = {
    '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎',
    '6': '➏', '7': '➐', '8': '➑', '9': '➒', '0': '⓿'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Dingbat Circled Sans-Serif
function dingbatCircledSansSerifNumber(text) {
  const map = {
    '1': '➀', '2': '➁', '3': '➂', '4': '➃', '5': '➄',
    '6': '➅', '7': '➆', '8': '➇', '9': '➈', '0': '🄋'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Fullwidth Circled
function fullwidthCircledNumber(text) {
  const map = {
    '0': '⓪', '1': '⓵', '2': '⓶', '3': '⓷', '4': '⓸',
    '5': '⓹', '6': '⓺', '7': '⓻', '8': '⓼', '9': '⓽'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Segmented (7-segment display style)
function segmentedNumber(text) {
  const map = {
    '0': '🯰', '1': '🯱', '2': '🯲', '3': '🯳', '4': '🯴',
    '5': '🯵', '6': '🯶', '7': '🯷', '8': '🯸', '9': '🯹'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Period-enclosed
function periodEnclosedNumber(text) {
  const map = {
    '0': '🄀', '1': '🄁', '2': '🄂', '3': '🄃', '4': '🄄',
    '5': '🄅', '6': '🄆', '7': '🄇', '8': '🄈', '9': '🄉'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Comma-enclosed (inverted)
function commaEnclosedNumber(text) {
  const map = {
    '0': '🄊', '1': '⒈', '2': '⒉', '3': '⒊', '4': '⒋',
    '5': '⒌', '6': '⒍', '7': '⒎', '8': '⒏', '9': '⒐'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Thai Digits
function thaiNumber(text) {
  const map = {
    '0': '๐', '1': '๑', '2': '๒', '3': '๓', '4': '๔',
    '5': '๕', '6': '๖', '7': '๗', '8': '๘', '9': '๙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Devanagari Digits
function devanagariNumber(text) {
  const map = {
    '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
    '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Bengali Digits
function bengaliNumber(text) {
  const map = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Gujarati Digits
function gujaratiNumber(text) {
  const map = {
    '0': '૦', '1': '૧', '2': '૨', '3': '૩', '4': '૪',
    '5': '૫', '6': '૬', '7': '૭', '8': '૮', '9': '૯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Gurmukhi Digits
function gurmukhiNumber(text) {
  const map = {
    '0': '੦', '1': '੧', '2': '੨', '3': '੩', '4': '੪',
    '5': '੫', '6': '੬', '7': '੭', '8': '੮', '9': '੯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Tamil Digits
function tamilNumber(text) {
  const map = {
    '0': '௦', '1': '௧', '2': '௨', '3': '௩', '4': '௪',
    '5': '௫', '6': '௬', '7': '௭', '8': '௮', '9': '௯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Telugu Digits
function teluguNumber(text) {
  const map = {
    '0': '౦', '1': '౧', '2': '౨', '3': '౩', '4': '౪',
    '5': '౫', '6': '౬', '7': '౭', '8': '౮', '9': '౯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Kannada Digits
function kannadaNumber(text) {
  const map = {
    '0': '೦', '1': '೧', '2': '೨', '3': '೩', '4': '೪',
    '5': '೫', '6': '೬', '7': '೭', '8': '೮', '9': '೯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Malayalam Digits
function malayalamNumber(text) {
  const map = {
    '0': '൦', '1': '൧', '2': '൨', '3': '൩', '4': '൪',
    '5': '൫', '6': '൬', '7': '൭', '8': '൮', '9': '൯'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Myanmar Digits
function myanmarNumber(text) {
  const map = {
    '0': '၀', '1': '၁', '2': '၂', '3': '၃', '4': '၄',
    '5': '၅', '6': '၆', '7': '၇', '8': '၈', '9': '၉'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Khmer Digits
function khmerNumber(text) {
  const map = {
    '0': '០', '1': '១', '2': '២', '3': '៣', '4': '៤',
    '5': '៥', '6': '៦', '7': '៧', '8': '៨', '9': '៩'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Mongolian Digits
function mongolianNumber(text) {
  const map = {
    '0': '᠐', '1': '᠑', '2': '᠒', '3': '᠓', '4': '᠔',
    '5': '᠕', '6': '᠖', '7': '᠗', '8': '᠘', '9': '᠙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const squaredNumberEl = document.getElementById("squaredNumberOutput");
if (squaredNumberEl) {
  squaredNumberEl.textContent = text ? squaredNumber(text) : squaredNumber("0123456789");
}

const negativeSquaredNumberEl = document.getElementById("negativeSquaredNumberOutput");
if (negativeSquaredNumberEl) {
  negativeSquaredNumberEl.textContent = text ? negativeSquaredNumber(text) : negativeSquaredNumber("0123456789");
}

const dingbatNegativeCircledNumberEl = document.getElementById("dingbatNegativeCircledNumberOutput");
if (dingbatNegativeCircledNumberEl) {
  dingbatNegativeCircledNumberEl.textContent = text ? dingbatNegativeCircledNumber(text) : dingbatNegativeCircledNumber("0123456789");
}

const dingbatCircledSansSerifNumberEl = document.getElementById("dingbatCircledSansSerifNumberOutput");
if (dingbatCircledSansSerifNumberEl) {
  dingbatCircledSansSerifNumberEl.textContent = text ? dingbatCircledSansSerifNumber(text) : dingbatCircledSansSerifNumber("0123456789");
}

const fullwidthCircledNumberEl = document.getElementById("fullwidthCircledNumberOutput");
if (fullwidthCircledNumberEl) {
  fullwidthCircledNumberEl.textContent = text ? fullwidthCircledNumber(text) : fullwidthCircledNumber("0123456789");
}

const segmentedNumberEl = document.getElementById("segmentedNumberOutput");
if (segmentedNumberEl) {
  segmentedNumberEl.textContent = text ? segmentedNumber(text) : segmentedNumber("0123456789");
}

const periodEnclosedNumberEl = document.getElementById("periodEnclosedNumberOutput");
if (periodEnclosedNumberEl) {
  periodEnclosedNumberEl.textContent = text ? periodEnclosedNumber(text) : periodEnclosedNumber("0123456789");
}

const commaEnclosedNumberEl = document.getElementById("commaEnclosedNumberOutput");
if (commaEnclosedNumberEl) {
  commaEnclosedNumberEl.textContent = text ? commaEnclosedNumber(text) : commaEnclosedNumber("0123456789");
}

const thaiNumberEl = document.getElementById("thaiNumberOutput");
if (thaiNumberEl) {
  thaiNumberEl.textContent = text ? thaiNumber(text) : thaiNumber("0123456789");
}

const devanagariNumberEl = document.getElementById("devanagariNumberOutput");
if (devanagariNumberEl) {
  devanagariNumberEl.textContent = text ? devanagariNumber(text) : devanagariNumber("0123456789");
}

const bengaliNumberEl = document.getElementById("bengaliNumberOutput");
if (bengaliNumberEl) {
  bengaliNumberEl.textContent = text ? bengaliNumber(text) : bengaliNumber("0123456789");
}

const gujaratiNumberEl = document.getElementById("gujaratiNumberOutput");
if (gujaratiNumberEl) {
  gujaratiNumberEl.textContent = text ? gujaratiNumber(text) : gujaratiNumber("0123456789");
}

const gurmukhiNumberEl = document.getElementById("gurmukhiNumberOutput");
if (gurmukhiNumberEl) {
  gurmukhiNumberEl.textContent = text ? gurmukhiNumber(text) : gurmukhiNumber("0123456789");
}

const tamilNumberEl = document.getElementById("tamilNumberOutput");
if (tamilNumberEl) {
  tamilNumberEl.textContent = text ? tamilNumber(text) : tamilNumber("0123456789");
}

const teluguNumberEl = document.getElementById("teluguNumberOutput");
if (teluguNumberEl) {
  teluguNumberEl.textContent = text ? teluguNumber(text) : teluguNumber("0123456789");
}

const kannadaNumberEl = document.getElementById("kannadaNumberOutput");
if (kannadaNumberEl) {
  kannadaNumberEl.textContent = text ? kannadaNumber(text) : kannadaNumber("0123456789");
}

const malayalamNumberEl = document.getElementById("malayalamNumberOutput");
if (malayalamNumberEl) {
  malayalamNumberEl.textContent = text ? malayalamNumber(text) : malayalamNumber("0123456789");
}

const myanmarNumberEl = document.getElementById("myanmarNumberOutput");
if (myanmarNumberEl) {
  myanmarNumberEl.textContent = text ? myanmarNumber(text) : myanmarNumber("0123456789");
}

const khmerNumberEl = document.getElementById("khmerNumberOutput");
if (khmerNumberEl) {
  khmerNumberEl.textContent = text ? khmerNumber(text) : khmerNumber("0123456789");
}

const mongolianNumberEl = document.getElementById("mongolianNumberOutput");
if (mongolianNumberEl) {
  mongolianNumberEl.textContent = text ? mongolianNumber(text) : mongolianNumber("0123456789");
}


// Persian/Farsi Digits (widely used in Iran, Afghanistan)
function persianNumber(text) {
  const map = {
    '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
    '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Tibetan Digits
function tibetanNumber(text) {
  const map = {
    '0': '༠', '1': '༡', '2': '༢', '3': '༣', '4': '༤',
    '5': '༥', '6': '༦', '7': '༧', '8': '༨', '9': '༩'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Lao Digits
function laoNumber(text) {
  const map = {
    '0': '໐', '1': '໑', '2': '໒', '3': '໓', '4': '໔',
    '5': '໕', '6': '໖', '7': '໗', '8': '໘', '9': '໙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Limbu Digits
function limbuNumber(text) {
  const map = {
    '0': '᥆', '1': '᥇', '2': '᥈', '3': '᥉', '4': '᥊',
    '5': '᥋', '6': '᥌', '7': '᥍', '8': '᥎', '9': '᥏'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// New Tai Lue Digits
function newTaiLueNumber(text) {
  const map = {
    '0': '᧐', '1': '᧑', '2': '᧒', '3': '᧓', '4': '᧔',
    '5': '᧕', '6': '᧖', '7': '᧗', '8': '᧘', '9': '᧙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Saurashtra Digits
function saurashtraNumber(text) {
  const map = {
    '0': '꣐', '1': '꣑', '2': '꣒', '3': '꣓', '4': '꣔',
    '5': '꣕', '6': '꣖', '7': '꣗', '8': '꣘', '9': '꣙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ol Chiki Digits
function olChikiNumber(text) {
  const map = {
    '0': '᱐', '1': '᱑', '2': '᱒', '3': '᱓', '4': '᱔',
    '5': '᱕', '6': '᱖', '7': '᱗', '8': '᱘', '9': '᱙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Javanese Digits
function javaneseNumber(text) {
  const map = {
    '0': '꧐', '1': '꧑', '2': '꧒', '3': '꧓', '4': '꧔',
    '5': '꧕', '6': '꧖', '7': '꧗', '8': '꧘', '9': '꧙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Cham Digits
function chamNumber(text) {
  const map = {
    '0': '꩐', '1': '꩑', '2': '꩒', '3': '꩓', '4': '꩔',
    '5': '꩕', '6': '꩖', '7': '꩗', '8': '꩘', '9': '꩙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Meetei Mayek Digits
function meeteiMayekNumber(text) {
  const map = {
    '0': '꯰', '1': '꯱', '2': '꯲', '3': '꯳', '4': '꯴',
    '5': '꯵', '6': '꯶', '7': '꯷', '8': '꯸', '9': '꯹'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Adlam Digits
function adlamNumber(text) {
  const map = {
    '0': '𞥐', '1': '𞥑', '2': '𞥒', '3': '𞥓', '4': '𞥔',
    '5': '𞥕', '6': '𞥖', '7': '𞥗', '8': '𞥘', '9': '𞥙'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ethiopic Numerals (1-9 only)
function ethiopicNumber(text) {
  const map = {
    '1': '፩', '2': '፪', '3': '፫', '4': '፬', '5': '፭',
    '6': '፮', '7': '፯', '8': '፰', '9': '፱', '0': '0'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Initialize all
const persianNumberEl = document.getElementById("persianNumberOutput");
if (persianNumberEl) {
  persianNumberEl.textContent = text ? persianNumber(text) : persianNumber("0123456789");
}

const tibetanNumberEl = document.getElementById("tibetanNumberOutput");
if (tibetanNumberEl) {
  tibetanNumberEl.textContent = text ? tibetanNumber(text) : tibetanNumber("0123456789");
}

const laoNumberEl = document.getElementById("laoNumberOutput");
if (laoNumberEl) {
  laoNumberEl.textContent = text ? laoNumber(text) : laoNumber("0123456789");
}

const limbuNumberEl = document.getElementById("limbuNumberOutput");
if (limbuNumberEl) {
  limbuNumberEl.textContent = text ? limbuNumber(text) : limbuNumber("0123456789");
}

const newTaiLueNumberEl = document.getElementById("newTaiLueNumberOutput");
if (newTaiLueNumberEl) {
  newTaiLueNumberEl.textContent = text ? newTaiLueNumber(text) : newTaiLueNumber("0123456789");
}

const saurashtraNumberEl = document.getElementById("saurashtraNumberOutput");
if (saurashtraNumberEl) {
  saurashtraNumberEl.textContent = text ? saurashtraNumber(text) : saurashtraNumber("0123456789");
}

const olChikiNumberEl = document.getElementById("olChikiNumberOutput");
if (olChikiNumberEl) {
  olChikiNumberEl.textContent = text ? olChikiNumber(text) : olChikiNumber("0123456789");
}

const javaneseNumberEl = document.getElementById("javaneseNumberOutput");
if (javaneseNumberEl) {
  javaneseNumberEl.textContent = text ? javaneseNumber(text) : javaneseNumber("0123456789");
}

const chamNumberEl = document.getElementById("chamNumberOutput");
if (chamNumberEl) {
  chamNumberEl.textContent = text ? chamNumber(text) : chamNumber("0123456789");
}

const meeteiMayekNumberEl = document.getElementById("meeteiMayekNumberOutput");
if (meeteiMayekNumberEl) {
  meeteiMayekNumberEl.textContent = text ? meeteiMayekNumber(text) : meeteiMayekNumber("0123456789");
}

const adlamNumberEl = document.getElementById("adlamNumberOutput");
if (adlamNumberEl) {
  adlamNumberEl.textContent = text ? adlamNumber(text) : adlamNumber("0123456789");
}

const ethiopicNumberEl = document.getElementById("ethiopicNumberOutput");
if (ethiopicNumberEl) {
  ethiopicNumberEl.textContent = text ? ethiopicNumber(text) : ethiopicNumber("123456789");
}


function boldAesthetic(text) {
  const map = {
    'a':'α','b':'ᑲ','c':'𝖼','d':'ᑯ','e':'𝖾','f':'𝖿',
    'g':'𝗀','h':'ɦ','i':'𝗂','j':'𝗃','k':'𝗄','l':'ᥣ',
    'm':'ꭑ','n':'𐓣','o':'ⱺ','p':'ρ','q':'𝗊','r':'𝗋',
    's':'𝗌','t':'𝗍','u':'υ','v':'𝗏','w':'ω','x':'𝗑',
    'y':'𝗒','z':'ƶ',

    'A':'𝐀','B':'𝐁','C':'𝐂','D':'𝐃','E':'𝐄','F':'𝐅',
    'G':'𝐆','H':'𝐇','I':'𝚰','J':'𝐉','K':'𝐊','L':'𝐋',
    'M':'𝐌','N':'𝐍','O':'𝐎','P':'𝐏','Q':'𝐐','R':'𝐑',
    'S':'𝐒','T':'𝐓','U':'𝐔','V':'𝐕','W':'𝐖','X':'𝐗',
    'Y':'𝐘','Z':'𝐙'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const boldAestheticEl = document.getElementById("boldAestheticOutput");
if (boldAestheticEl) {
  boldAestheticEl.textContent = text ? boldAesthetic(text) : boldAesthetic("Bold Aesthetic");
}

function doubleUnderline(text) {
  return text.split("").map(ch => ch + '̳').join("");
}

const doubleUnderlineEl = document.getElementById("doubleUnderlineOutput");
if (doubleUnderlineEl) {
  doubleUnderlineEl.textContent = text ? doubleUnderline(text) : doubleUnderline("Double Underline");
}

function cloudBold(text) {
  const map = {
    'a':'𝒶','b':'𝒷','c':'𝒸','d':'𝒹','e':'ℯ','f':'𝒻',
    'g':'𝑔','h':'𝒽','i':'𝒾','j':'𝒿','k':'𝓀','l':'𝓁',
    'm':'𝓂','n':'𝓃','o':'ℴ','p':'𝓅','q':'𝓆','r':'𝓇',
    's':'𝓈','t':'𝓉','u':'𝓊','v':'𝓋','w':'𝓌','x':'𝓍',
    'y':'𝓎','z':'𝓏',

    'A':'𝒜','B':'ℬ','C':'𝒞','D':'𝒟','E':'ℰ','F':'ℱ',
    'G':'𝒢','H':'ℋ','I':'𝐼','J':'𝒥','K':'𝒦','L':'ℒ',
    'M':'ℳ','N':'𝒩','O':'𝒪','P':'𝒫','Q':'𝒬','R':'ℛ',
    'S':'𝒮','T':'𝒯','U':'𝒰','V':'𝒱','W':'𝒲','X':'𝒳',
    'Y':'𝒴','Z':'𝒵'
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

const cloudBoldEl = document.getElementById("cloudBoldOutput");
if (cloudBoldEl) {
  cloudBoldEl.textContent = text ? cloudBold(text) : cloudBold("Cloud Bold");
}


const mirroredTextEl = document.getElementById("mirroredTextOutput");
if (mirroredTextEl) {
  mirroredTextEl.textContent = text ? mirroredText(text) : mirroredText("Mirrored Text");
}

function reverseWordsOnly(text) {
  const map = {
    'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
    'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
    'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
    'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
    'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
    'z': 'a',
    'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V',
    'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q',
    'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L',
    'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G',
    'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B',
    'Z': 'A'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const reverseWordsOnlyEl = document.getElementById("reverseWordsOnlyOutput");
if (reverseWordsOnlyEl) {
  reverseWordsOnlyEl.textContent = text ? reverseWordsOnly(text) : reverseWordsOnly("Reverse Words Only");
}

function backwardWordsOnly(text) {
  return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const backwardWordsOnlyEl = document.getElementById("backwardWordsOnlyOutput");
if (backwardWordsOnlyEl) {
  backwardWordsOnlyEl.textContent = text ? backwardWordsOnly(text) : backwardWordsOnly("Backward Words Only");
}

function mirroredLettersOnly(text) {
  const map = {
    'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ',
    'f': 'ʇ', 'g': 'ᵷ', 'h': 'ʜ', 'i': 'i', 'j': 'ņ',
    'k': 'ʞ', 'l': '|', 'm': 'w', 'n': 'u', 'o': 'o',
    'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ƨ', 't': 'ƚ',
    'u': 'n', 'v': 'v', 'w': 'm', 'x': 'x', 'y': 'ʏ',
    'z': 'z',
    'A': 'Ɒ', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ',
    'F': 'ᖴ', 'G': 'Ᵹ', 'H': 'H', 'I': 'I', 'J': 'ſ',
    'K': 'ʞ', 'L': '⅃', 'M': 'M', 'N': 'N', 'O': 'O',
    'P': 'Գ', 'Q': 'Q', 'R': 'Я', 'S': 'Ƨ', 'T': 'T',
    'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y',
    'Z': 'Z'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const mirroredLettersOnlyEl = document.getElementById("mirroredLettersOnlyOutput");
if (mirroredLettersOnlyEl) {
  mirroredLettersOnlyEl.textContent = text ? mirroredLettersOnly(text) : mirroredLettersOnly("Mirrored Letters Only");
}
function upsideDown(text) {
  const map = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ',
    'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
    'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o',
    'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
    'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ',
    'z': 'z',
    'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ',
    'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
    'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O',
    'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴',
    'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄',
    'Z': 'Z'
  };
  return text.split("").reverse().map(ch => map[ch] || ch).join("");
}

const upsideDownEl = document.getElementById("upsideDownOutput");
if (upsideDownEl) {
  upsideDownEl.textContent = text ? upsideDown(text) : upsideDown("Upside Down");
}

function italicSerif(text) {
  const map = {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒',
    'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜',
    'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦',
    'z': '𝑧',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸',
    'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂',
    'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌',
    'Z': '𝑍'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const italicSerifEl = document.getElementById("italicSerifOutput");
if (italicSerifEl) {
  italicSerifEl.textContent = text ? italicSerif(text) : italicSerif("Italic (serif)");
}
function boldItalicSerif(text) {
  const map = {
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆',
    'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
    'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐',
    'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
    'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚',
    'z': '𝒛',
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬',
    'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
    'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶',
    'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
    'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀',
    'Z': '𝒁'
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

const boldItalicSerifEl = document.getElementById("boldItalicSerifOutput");
if (boldItalicSerifEl) {
  boldItalicSerifEl.textContent = text ? boldItalicSerif(text) : boldItalicSerif("Bold / italic (serif)");
}


const TheOperatorEl = document.getElementById("TheOperatorOutput");
if (TheOperatorEl) {
  TheOperatorEl.textContent = text ? toTheOperator(text) : toTheOperator("TheOperator");
}
const AngularEl = document.getElementById("AngularOutput");
if (AngularEl) {
  AngularEl.textContent = text ? toAngular(text) : toAngular("Angular");
}
const CliffsEl = document.getElementById("CliffsOutput");
if (CliffsEl) {
  CliffsEl.textContent = text ? toCliffs(text) : toCliffs("Cliffs");
}
const DIYAsterisksEl = document.getElementById("DIYAsterisksOutput");
if (DIYAsterisksEl) {
  DIYAsterisksEl.textContent = text ? toDIYAsterisks(text) : toDIYAsterisks("DIYAsterisks");
}


const AllWaysEl = document.getElementById("AllWaysOutput");
if (AllWaysEl) {
  AllWaysEl.textContent = text ? toAllWays(text) : toAllWays("AllWays");
}

const SlitherEl = document.getElementById("SlitherOutput");
if (SlitherEl) {
  SlitherEl.textContent = text ? toSlither(text) : toSlither("Slither");
}

const QuickMathsEl = document.getElementById("QuickMathsOutput");
if (QuickMathsEl) {
  QuickMathsEl.textContent = text ? toQuickMaths(text) : toQuickMaths("QuickMaths");
}


const xCrossEl = document.getElementById("X-crossOutput");
if (xCrossEl) {
  xCrossEl.textContent = text ? toXcross(text) : toXcross("X-cross");
}

// Update functions following your style
const spaceEl = document.getElementById("SpaceOutput");
if (spaceEl) {
  spaceEl.textContent = text ? toSpace(text) : toSpace("Space Text");
}

const noBreakSpaceEl = document.getElementById("NoBreakSpaceOutput");
if (noBreakSpaceEl) {
  noBreakSpaceEl.textContent = text ? toNoBreakSpace(text) : toNoBreakSpace("No Break Space Text");
}

const enQuadEl = document.getElementById("EnQuadOutput");
if (enQuadEl) {
  enQuadEl.textContent = text ? toEnQuad(text) : toEnQuad("En Quad Text");
}

const emQuadEl = document.getElementById("EmQuadOutput");
if (emQuadEl) {
  emQuadEl.textContent = text ? toEmQuad(text) : toEmQuad("Em Quad Text");
}

const enSpaceEl = document.getElementById("EnSpaceOutput");
if (enSpaceEl) {
  enSpaceEl.textContent = text ? toEnSpace(text) : toEnSpace("En Space Text");
}

const threePerEmEl = document.getElementById("ThreePerEmOutput");
if (threePerEmEl) {
  threePerEmEl.textContent = text ? toThreePerEm(text) : toThreePerEm("Three Per Em Text");
}

const fourPerEmEl = document.getElementById("FourPerEmOutput");
if (fourPerEmEl) {
  fourPerEmEl.textContent = text ? toFourPerEm(text) : toFourPerEm("Four Per Em Text");
}

const sixPerEmEl = document.getElementById("SixPerEmOutput");
if (sixPerEmEl) {
  sixPerEmEl.textContent = text ? toSixPerEm(text) : toSixPerEm("Six Per Em Text");
}

const figureSpaceEl = document.getElementById("FigureSpaceOutput");
if (figureSpaceEl) {
  figureSpaceEl.textContent = text ? toFigureSpace(text) : toFigureSpace("Figure Space Text");
}

const punctuationSpaceEl = document.getElementById("PunctuationSpaceOutput");
if (punctuationSpaceEl) {
  punctuationSpaceEl.textContent = text ? toPunctuationSpace(text) : toPunctuationSpace("Punctuation Space Text");
}

const thinSpaceEl = document.getElementById("ThinSpaceOutput");
if (thinSpaceEl) {
  thinSpaceEl.textContent = text ? toThinSpace(text) : toThinSpace("Thin Space Text");
}

const hairSpaceEl = document.getElementById("HairSpaceOutput");
if (hairSpaceEl) {
  hairSpaceEl.textContent = text ? toHairSpace(text) : toHairSpace("Hair Space Text");
}

  // Emoji Fancy
const emojiFancyEl = document.getElementById("EmojiFancyOutput");
if (emojiFancyEl) {
  emojiFancyEl.textContent = text ? toEmojiFancy(text) : toEmojiFancy("Emoji Fancy");
}

// Fat
const fatEl = document.getElementById("FatOutput");
if (fatEl) {
  fatEl.textContent = text ? toFat(text) : toFat("Fat");
}
// Gun Fire
const gunFireEl = document.getElementById("GunFireOutput");
if (gunFireEl) {
  gunFireEl.textContent = text ? toGunFire(text) : toGunFire("Gun Fire");
}

  // Gothic
  const gothicEl = document.getElementById("GothicOutput");
  if (gothicEl) {
    gothicEl.textContent = text ? toGothic(text) : "𝔊𝔬𝔱𝔥𝔦𝔠";
  }
// Trible
const tribleEl = document.getElementById("TribleOutput");
if (tribleEl) {
  tribleEl.textContent = text ? toTrible(text) : toTrible("Trible");
}

  // Curly Wrap
  const curlyEl = document.getElementById("CurlyOutput");
  if (curlyEl) {
    curlyEl.textContent = text ? toCurlyWrap(text) : "⊰C⊱⊰u⊱⊰r⊱⊰l⊱⊰y⊱ ⊰W⊱⊰r⊱⊰a⊱⊰p⊱";
  }

  const doubleEl = document.getElementById("DoubleOutput");
  if (doubleEl) {
    doubleEl.textContent = text ? toDoubleStruck(text) : "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜";
  }
  // Small Caps
const smallCapsEl = document.getElementById("SmallCapsOutput");
if (smallCapsEl) {
  smallCapsEl.textContent = text ? toSmallCaps(text) : "Sᴍᴀʟʟ Cᴀᴘs";
}

const superscriptsEl = document.getElementById("SuperscriptsOutput");
if (superscriptsEl) {
  superscriptsEl.textContent = text ? toSuperscripts(text) : "Superscript";
}

// Subscript
const subscriptEl = document.getElementById("SubscriptOutput");
if (subscriptEl) {
  subscriptEl.textContent = text ? toSubscript(text) : toSubscript("Subscript");
}


const bubbleEl = document.getElementById("BubbleOutput");
if (bubbleEl) {
  bubbleEl.textContent = text ? toBubble(text) : "Ⓑⓤⓑⓑⓛⓔ";
}

const currencyEl = document.getElementById("CurrencyOutput");
if (currencyEl) {
  currencyEl.textContent = text ? toCurrency(text) : "₵ɄⱤⱤɆ₦₵Ɏ";
}
const fantasyEl = document.getElementById("FantasyOutput");
if (fantasyEl) {
  fantasyEl.textContent = text ? toFantasy(text) : "ꪙꫀꪹᨶꪊꪗ";
}
const rusifyEl = document.getElementById("RusifyOutput");
if (rusifyEl) {
  rusifyEl.textContent = text ? toRusify(text) : "Яцѕіfу";
}
const monoEl = document.getElementById("MonospaceOutput");
if (monoEl) {
  monoEl.textContent = text ? toMonospace(text) : "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎";
}
const squareEl = document.getElementById("SquareOutput");
if (squareEl) {
  squareEl.textContent = text ? toSquare(text) : "🅂🅀🅄🄰🅁🄴";
}
const infiniteEl = document.getElementById("InfiniteOutput");
if (infiniteEl) {
  infiniteEl.textContent = text ? toInfinite(text) : toInfinite("Infinite");
}
const crypticEl = document.getElementById("CrypticOutput");
if (crypticEl) {
  crypticEl.textContent = text ? toCrypticItalic(text) : toCrypticItalic("Cryptic Italic");
}

const parenthesisEl = document.getElementById("ParenthesisOutput");
if (parenthesisEl) {
  parenthesisEl.textContent = text ? toParenthesis(text) : toParenthesis("Parenthesis");
}
const japaneseEl = document.getElementById("JapaneseOutput");
if (japaneseEl) {
  japaneseEl.textContent = text ? toJapanese(text) : toJapanese("Japanese");
}
const loveInvEl = document.getElementById("LoveInvertedOutput");
if (loveInvEl) {
  loveInvEl.textContent = text ? toLoveInverted(text) : toLoveInverted("Love Inverted");
}
const frakturEl = document.getElementById("FrakturOutput");
if (frakturEl) {
  frakturEl.textContent = text ? toFraktur(text) : toFraktur("Fraktur");
}
const wideEl = document.getElementById("WideOutput");
if (wideEl) {
  wideEl.textContent = text ? toWide(text) : toWide("Wide");
}
const skyBlueEl = document.getElementById("SkyBlueOutput");
if (skyBlueEl) {
  skyBlueEl.textContent = text ? toSkyBlue(text) : toSkyBlue("Sky Blue");
}

// Inverted Squares
const invertedSquaresEl = document.getElementById("InvertedSquaresOutput");
if (invertedSquaresEl) {
  invertedSquaresEl.textContent = text ? toInvertedSquares(text) : toInvertedSquares("Inverted");
}
// Luni Tools
const luniEl = document.getElementById("LuniToolsOutput");
if (luniEl) {
  luniEl.textContent = text ? toLuniTools(text) : toLuniTools("Luni Tools");
}
  // Old English
const oldEnglishEl = document.getElementById("OldEnglishOutput");
if (oldEnglishEl) {
  oldEnglishEl.textContent = text ? toOldEnglish(text) : toOldEnglish("Old English");
}
// Mystic
const mysticEl = document.getElementById("MysticOutput");
if (mysticEl) {
  mysticEl.textContent = text ? toMystic(text) : toMystic("Mystic");
}

// Crystal
const crystalEl = document.getElementById("CrystalOutput");
if (crystalEl) {
  crystalEl.textContent = text ? toCrystal(text) : toCrystal("Crystal");
}

// Arcane
const arcaneEl = document.getElementById("ArcaneOutput");
if (arcaneEl) {
  arcaneEl.textContent = text ? toArcane(text) : toArcane("Arcane");
}

// Shadow
const shadowEl = document.getElementById("ShadowOutput");
if (shadowEl) {
  shadowEl.textContent = text ? toShadow(text) : toShadow("Shadow");
}

// Solar
const solarEl = document.getElementById("SolarOutput");
if (solarEl) {
  solarEl.textContent = text ? toSolar(text) : toSolar("Solar");
}

// Ember
const emberEl = document.getElementById("EmberOutput");
if (emberEl) {
  emberEl.textContent = text ? toEmber(text) : toEmber("Ember");
}

// Frost
const frostEl = document.getElementById("FrostOutput");
if (frostEl) {
  frostEl.textContent = text ? toFrost(text) : toFrost("Frost");
}

// Storm
const stormEl = document.getElementById("StormOutput");
if (stormEl) {
  stormEl.textContent = text ? toStorm(text) : toStorm("Storm");
}

// Lunar
const lunarEl = document.getElementById("LunarOutput");
if (lunarEl) {
  lunarEl.textContent = text ? toLunar(text) : toLunar("Lunar");
}

// Cosmic
const cosmicEl = document.getElementById("CosmicOutput");
if (cosmicEl) {
  cosmicEl.textContent = text ? toCosmic(text) : toCosmic("Cosmic");
}

// Rune
const runeEl = document.getElementById("RuneOutput");
if (runeEl) {
  runeEl.textContent = text ? toRune(text) : toRune("Rune");
}

// Infernal
const infernalEl = document.getElementById("InfernalOutput");
if (infernalEl) {
  infernalEl.textContent = text ? toInfernal(text) : toInfernal("Infernal");
}

// Aurora
const auroraEl = document.getElementById("AuroraOutput");
if (auroraEl) {
  auroraEl.textContent = text ? toAurora(text) : toAurora("Aurora");
}

// Twilight
const twilightEl = document.getElementById("TwilightOutput");
if (twilightEl) {
  twilightEl.textContent = text ? toTwilight(text) : toTwilight("Twilight");
}

// Ethereal
const etherealEl = document.getElementById("EtherealOutput");
if (etherealEl) {
  etherealEl.textContent = text ? toEthereal(text) : toEthereal("Ethereal");
}
// Hearts Style
const heartsEl = document.getElementById("HeartsOutput");
if (heartsEl) {
  heartsEl.textContent = text ? toHearts(text) : toHearts("Hearts");
}

// Zalgo
const zalgoEl = document.getElementById("ZalgoOutput");
if (zalgoEl) {
  zalgoEl.textContent = text ? toZalgo(text) : toZalgo("Zalgo");
}

// Fancy Style 1
const fancy1El = document.getElementById("Fancy1Output");
if (fancy1El) {
  fancy1El.textContent = text ? toFancy1(text) : toFancy1("Fancy 1");
}
// Script / Cursive / Handwriting
const scriptCursiveEl = document.getElementById("ScriptCursiveOutput");
if (scriptCursiveEl) {
  scriptCursiveEl.textContent = text ? toScriptCursive(text) : toScriptCursive("Script / Cursive / Handwriting");
}

// Bold Script / Cursive / Handwriting
const boldScriptCursiveEl = document.getElementById("BoldScriptCursiveOutput");
if (boldScriptCursiveEl) {
  boldScriptCursiveEl.textContent = text ? toBoldScriptCursive(text) : toBoldScriptCursive("Bold Script / Cursive / Handwriting");
}

// Gothic / Blackletter / Fraktur
const gothicFrakturEl = document.getElementById("GothicFrakturOutput");
if (gothicFrakturEl) {
  gothicFrakturEl.textContent = text ? toGothicFraktur(text) : toGothicFraktur("Gothic / Blackletter / Fraktur");
}

// Bold Gothic / Blackletter / Fraktur
const boldGothicFrakturEl = document.getElementById("BoldGothicFrakturOutput");
if (boldGothicFrakturEl) {
  boldGothicFrakturEl.textContent = text ? toBoldGothicFraktur(text) : toBoldGothicFraktur("Bold Gothic / Blackletter / Fraktur");
}

// Bold (serif)
const boldSerifEl = document.getElementById("BoldSerifOutput");
if (boldSerifEl) {
  boldSerifEl.textContent = text ? toBoldSerif(text) : toBoldSerif("Bold Serif");
}

// Bold (sans)
const boldSansEl = document.getElementById("BoldSansOutput");
if (boldSansEl) {
  boldSansEl.textContent = text ? toBoldSans(text) : toBoldSans("Bold Sans");
}

// Italic Bold (serif)
const italicBoldSerifEl = document.getElementById("ItalicBoldSerifOutput");
if (italicBoldSerifEl) {
  italicBoldSerifEl.textContent = text ? toItalicBoldSerif(text) : toItalicBoldSerif("Italic Bold Serif");
}

// Italic Bold (sans)
const italicBoldSansEl = document.getElementById("ItalicBoldSansOutput");
if (italicBoldSansEl) {
  italicBoldSansEl.textContent = text ? toItalicBoldSans(text) : toItalicBoldSans("Italic Bold Sans");
}

// Medieval Bold
const medievalBoldEl = document.getElementById("MedievalBoldOutput");
if (medievalBoldEl) {
  medievalBoldEl.textContent = text ? toMedievalBold(text) : toMedievalBold("Medieval Bold");
}

// Double-Struck
const doubleStruckEl = document.getElementById("DoubleStruckOutput");
if (doubleStruckEl) {
  doubleStruckEl.textContent = text ? toDoubleStruck(text) : toDoubleStruck("Double Struck");
}

// Blocks
const blocksEl = document.getElementById("BlocksOutput");
if (blocksEl) {
  blocksEl.textContent = text ? toBlocks(text) : toBlocks("Blocks");
}

// Update functions following your style
const StrikethroughcrossEl = document.getElementById("StrikethroughcrossOutput");
if (StrikethroughcrossEl) {
  StrikethroughcrossEl.textContent = text ? toStrikethroughcross(text) : toStrikethroughcross("Strikethroughcross");
}

const slashEl = document.getElementById("SlashOutput");
if (slashEl) {
  slashEl.textContent = text ? toSlash(text) : toSlash("Slash Symbol");
}

const underlineEl = document.getElementById("UnderlineOutput");
if (underlineEl) {
  underlineEl.textContent = text ? toUnderline(text) : toUnderline("Underline");
}

const dottedEl = document.getElementById("DottedOutput");
if (dottedEl) {
  dottedEl.textContent = text ? toDotted(text) : toDotted("Dotted Line");
}

const waveEl = document.getElementById("WaveOutput");
if (waveEl) {
  waveEl.textContent = text ? toWave(text) : toWave("Wave Line");
}



}

// ---------- Input Handling ----------
/**
 * Handles the input event on the text field.
 * Updates styles based on user input or placeholder text.
 */
function handleInputChange() {
  const input = document.getElementById("userInput");
  if (!input) return;

  const value = input.value; // No trim here, to allow spaces
  const clearBtn = document.querySelector(".clear-btn");

  if (value) {
    // If there is text in the input, style it
    setCookie("fontInput", value, 7);
    updateOutputs(value);
    if (clearBtn) clearBtn.style.display = "inline";
  } else {
    // If input is empty, revert to styling the placeholder
    deleteCookie("fontInput");
    const placeholderText = input.getAttribute("placeholder");

    if (placeholderText && placeholderText !== "Type something...") {
      // It's a custom placeholder, so style it
      updateOutputs(placeholderText);
    } else {
      // It's the default placeholder, show default styled text
      updateOutputs("");
    }
    if (clearBtn) clearBtn.style.display = "none";
  }
}

/**
 * Clears the input field and resets the view.
 */
function clearInput() {
  const input = document.getElementById("userInput");
  if (input) {
    input.value = "";
  }
  // Trigger the input change handler to reset the state correctly
  handleInputChange();
}

// ---------- Copy Handling ----------
// ---------- Copy Handling ----------
function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Get the styled text content directly from the element
  const styledText = el.textContent;

  navigator.clipboard.writeText(styledText).then(() => {
    const note = document.getElementById("copyNotification");
    if (note) {
      // Update the notification text with the actual styled text
      note.textContent = styledText + " Copied!";
      note.style.display = "block";
      setTimeout(() => {
        note.style.display = "none";
      }, 1500);
    }
  });
}

function addCopyIcons() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    if (!btn.innerHTML.trim()) {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4
                   a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-text">Copy</span>
      `;
    }
  });
}


// ---------- On Page Load ----------
/**
 * Initializes the page state when the content is loaded.
 * It checks for saved cookies or custom placeholders to set the initial text style.
 */
window.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie("fontInput");
  const input = document.getElementById("userInput");
  const clearBtn = document.querySelector(".clear-btn");

  if (input) {
    // This logic runs for pages that have the main input box
    if (saved) {
      // If a cookie exists, prioritize it
      input.value = saved;
      updateOutputs(saved);
      if (clearBtn) clearBtn.style.display = "inline";
    } else {
      // If no cookie, check the placeholder
      const placeholderText = input.getAttribute("placeholder");
      if (placeholderText && placeholderText !== "Type something...") {
        // Style the custom placeholder text
        updateOutputs(placeholderText);
      } else {
        // Show default styled text
        updateOutputs("");
      }
      if (clearBtn) clearBtn.style.display = "none";
    }
  } else {
    // This is a fallback for pages without an input box
    if (saved) {
      updateOutputs(saved);
    }
  }

  addCopyIcons();
});

  window.addEventListener("scroll", () => {
    const searchBox = document.getElementById("searchSection");
    if (window.scrollY > 30) {
      searchBox.classList.add("shrink");
    } else {
      searchBox.classList.remove("shrink");
    }
  });

  /* Add to your existing JavaScript file */

/**
 * Checks if the navigation tabs are overflowing and shows/hides scroll buttons.
 */
function checkTabOverflow() {
  const tabNav = document.getElementById("tabNav");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");
  const tabWrapper = document.querySelector(".tab-wrapper");

  if (!tabNav || !scrollLeftBtn || !scrollRightBtn || !tabWrapper) return;

  const isOverflowing = tabNav.scrollWidth > tabNav.clientWidth;

  if (isOverflowing) {
    tabWrapper.classList.add("has-buttons");
    scrollRightBtn.classList.add("show");
  } else {
    tabWrapper.classList.remove("has-buttons");
    scrollLeftBtn.classList.remove("show");
    scrollRightBtn.classList.remove("show");
  }

  // Update button visibility based on scroll position
  if (isOverflowing) {
    // Hide left button if at the start
    if (tabNav.scrollLeft === 0) {
      scrollLeftBtn.classList.remove("show");
    } else {
      scrollLeftBtn.classList.add("show");
    }

    // Hide right button if at the end
    if (tabNav.scrollLeft + tabNav.clientWidth >= tabNav.scrollWidth - 1) { // -1 for a small buffer
      scrollRightBtn.classList.remove("show");
    } else {
      scrollRightBtn.classList.add("show");
    }
  }
}

/**
 * Scrolls the tab navigation left or right.
 * @param {string} direction - "left" or "right"
 */
function scrollTabs(direction) {
  const tabNav = document.getElementById("tabNav");
  const scrollAmount = tabNav.clientWidth / 2; // Scroll half a viewport
  if (direction === "left") {
    tabNav.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else if (direction === "right") {
    tabNav.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

// Add event listeners
window.addEventListener("resize", checkTabOverflow);
window.addEventListener("DOMContentLoaded", () => {
  // Existing DOMContentLoaded logic
  // ... (your existing code) ...
  
  // Add new logic for buttons
  checkTabOverflow();
  const tabNav = document.getElementById("tabNav");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");

  if (tabNav) {
    tabNav.addEventListener("scroll", checkTabOverflow);
  }
  
  if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener("click", () => scrollTabs("left"));
  }
  
  if (scrollRightBtn) {
    scrollRightBtn.addEventListener("click", () => scrollTabs("right"));
  }
});

// ── Back to top ──
const backToTopBtn = document.getElementById('backToTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Navbar ──
const navMenu       = document.getElementById('navMenu');
const navOverlay    = document.getElementById('navOverlay');
const menuToggleBtn = document.getElementById('menuToggle');
const dropdowns     = navMenu.querySelectorAll('.dropdown > .dropdown-toggle');

// Open / close mobile drawer
menuToggleBtn.addEventListener('click', function () {
  const isOpen = navMenu.classList.contains('open');
  if (!isOpen) {
    navMenu.classList.add('open');
    navOverlay.classList.add('active');
    menuToggleBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    closeMobileMenu();
  }
});

navOverlay.addEventListener('click', closeMobileMenu);

document.addEventListener('mousedown', function (e) {
  if (window.innerWidth < 900 && navMenu.classList.contains('open')) {
    if (!navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

function closeMobileMenu() {
  navMenu.classList.remove('open');
  navOverlay.classList.remove('active');
  menuToggleBtn.classList.remove('open');
  document.body.style.overflow = '';
  navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
}

// Mobile accordion — desktop uses CSS :hover
dropdowns.forEach(drop => {
  drop.addEventListener('click', function (e) {
    if (window.innerWidth >= 900) return;
    e.preventDefault();
    const parent = this.parentElement;
    const isOpen = parent.classList.contains('open');
    navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
    if (!isOpen) parent.classList.add('open');
  });
});

// Close desktop dropdowns on outside click
document.addEventListener('mousedown', function (e) {
  if (window.innerWidth >= 900) {
    navMenu.querySelectorAll('.dropdown').forEach(dd => {
      if (!dd.contains(e.target)) dd.classList.remove('open');
    });
  }
});

// ── stickyInputWrap adjustment (if the element exists on this page) ──
const stickyInputWrap = document.getElementById('stickyInputWrap');
function adjustStickyInput() {
  if (!stickyInputWrap) return;
  let offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 60;
  if (window.innerWidth < 900) {
    const openDropdown = navMenu.querySelector('.dropdown.open .dropdown-content');
    if (openDropdown) offset += openDropdown.offsetHeight;
  }
  stickyInputWrap.style.top = offset + 'px';
}
if (stickyInputWrap) {
  navMenu.addEventListener('transitionend', adjustStickyInput);
  window.addEventListener('resize', adjustStickyInput);
  navMenu.addEventListener('click', adjustStickyInput);
  adjustStickyInput();
}

// ── Tab scroll buttons (for pages that have them) ──
function checkTabOverflow() {
  const tabNav = document.getElementById('tabNav');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  const tabWrapper = document.querySelector('.tab-wrapper');
  if (!tabNav || !scrollLeftBtn || !scrollRightBtn || !tabWrapper) return;
  const isOverflowing = tabNav.scrollWidth > tabNav.clientWidth;
  if (isOverflowing) {
    tabWrapper.classList.add('has-buttons');
    scrollRightBtn.classList.add('show');
  } else {
    tabWrapper.classList.remove('has-buttons');
    scrollLeftBtn.classList.remove('show');
    scrollRightBtn.classList.remove('show');
  }
  if (isOverflowing) {
    if (tabNav.scrollLeft === 0) scrollLeftBtn.classList.remove('show');
    else scrollLeftBtn.classList.add('show');
    if (tabNav.scrollLeft + tabNav.clientWidth >= tabNav.scrollWidth - 1) scrollRightBtn.classList.remove('show');
    else scrollRightBtn.classList.add('show');
  }
}
function scrollTabs(direction) {
  const tabNav = document.getElementById('tabNav');
  if (!tabNav) return;
  const scrollAmount = tabNav.clientWidth / 2;
  tabNav.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
}
window.addEventListener('resize', checkTabOverflow);

// ── Search box shrink on scroll ──
window.addEventListener('scroll', () => {
  const searchBox = document.getElementById('searchSection');
  if (!searchBox) return;
  if (window.scrollY > 30) searchBox.classList.add('shrink');
  else searchBox.classList.remove('shrink');
});

// ── Cookie helpers ──
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return '';
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// ── Copy to clipboard ──
function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    const note = document.getElementById('copyNotification');
    if (note) {
      note.textContent = el.textContent + ' Copied!';
      note.style.display = 'block';
      setTimeout(() => { note.style.display = 'none'; }, 1500);
    }
  });
}

function addCopyIcons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    if (!btn.innerHTML.trim()) {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
        </svg>
        <span class="copy-text">Copy</span>`;
    }
  });
}

// ── DOMContentLoaded ──
window.addEventListener('DOMContentLoaded', () => {
  const saved = getCookie('fontInput');
  const input = document.getElementById('userInput');
  const clearBtn = document.querySelector('.clear-btn');

  if (input) {
    if (saved) {
      input.value = saved;
      if (typeof updateOutputs === 'function') updateOutputs(saved);
      if (clearBtn) clearBtn.style.display = 'inline';
    } else {
      const placeholderText = input.getAttribute('placeholder');
      if (placeholderText && placeholderText !== 'Type something...') {
        if (typeof updateOutputs === 'function') updateOutputs(placeholderText);
      } else {
        if (typeof updateOutputs === 'function') updateOutputs('');
      }
      if (clearBtn) clearBtn.style.display = 'none';
    }
  } else {
    if (saved && typeof updateOutputs === 'function') updateOutputs(saved);
  }

  addCopyIcons();
  checkTabOverflow();

  const tabNav = document.getElementById('tabNav');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  if (tabNav) tabNav.addEventListener('scroll', checkTabOverflow);
  if (scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => scrollTabs('left'));
  if (scrollRightBtn) scrollRightBtn.addEventListener('click', () => scrollTabs('right'));
});