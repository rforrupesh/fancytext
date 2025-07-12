function toCursive(text) {
      const map = {
        A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
  K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
  U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
  a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: 'ℯ', f: '𝒻', g: 'ℊ', h: '𝒽', i: '𝒾', j: '𝒿',
  k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: 'ℴ', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉',
  u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toHistorical(text) {
      const map = {
         A: 'ꍏ', B: 'ꌃ', C: 'ꉓ', D: 'ꀷ', E: 'ꍟ', F: 'ꄘ', G: 'ꁍ', H: 'ꃅ', I: 'ꀤ', J: 'ꀭ',
  K: 'ꀘ', L: '꒒', M: 'ꂵ', N: 'ꊮ', O: 'ꂦ', P: 'ꉣ', Q: 'ꆰ', R: 'ꋪ', S: 'ꌗ', T: '꓄',
  U: 'ꀎ', V: 'ꏝ', W: 'ꅏ', X: 'ꉧ', Y: 'ꌩ', Z: 'ꁴ',
  a: 'ꍏ', b: 'ꌃ', c: 'ꉓ', d: 'ꀷ', e: 'ꍟ', f: 'ꄘ', g: 'ꁍ', h: 'ꃅ', i: 'ꀤ', j: 'ꀭ',
  k: 'ꀘ', l: '꒒', m: 'ꂵ', n: 'ꊮ', o: 'ꂦ', p: 'ꉣ', q: 'ꆰ', r: 'ꋪ', s: 'ꌗ', t: '꓄',
  u: 'ꀎ', v: 'ꏝ', w: 'ꅏ', x: 'ꉧ', y: 'ꌩ', z: 'ꁴ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toGothic(text) {
   const map = {
     A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: 'ℌ', I: 'ℑ', J: '𝔍',
  K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗',
  U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ',
  a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧',
  k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱',
  u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
  };
  return [...text].map(c => map[c] || c).join('');
}



    function toRounded(text) {
      const map = {
        A: 'ᗩ', B: 'ᗷ', C: 'ᑕ', D: 'ᗪ', E: 'E', F: 'ᖴ', G: 'G', H: 'ᕼ', I: 'I', J: 'ᒍ',
  K: 'K', L: 'ᒪ', M: 'ᗰ', N: 'ᑎ', O: 'O', P: 'ᑭ', Q: 'ᑫ', R: 'ᖇ', S: 'ᔕ', T: 'T',
  U: 'ᑌ', V: 'ᐯ', W: 'ᗯ', X: '᙭', Y: 'Y', Z: 'ᘔ',
  a: 'ᗩ', b: 'ᗷ', c: 'ᑕ', d: 'ᗪ', e: 'E', f: 'ᖴ', g: 'G', h: 'ᕼ', i: 'I', j: 'ᒍ',
  k: 'K', l: 'ᒪ', m: 'ᗰ', n: 'ᑎ', o: 'O', p: 'ᑭ', q: 'ᑫ', r: 'ᖇ', s: 'ᔕ', t: 'T',
  u: 'ᑌ', v: 'ᐯ', w: 'ᗯ', x: '᙭', y: 'Y', z: 'ᘔ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toVintage(text) {
      const map = {
       A: 'Ꭿ', B: 'Ᏸ', C: 'Ꮸ', D: 'Ꭰ', E: 'Ꭼ', F: 'Ꮀ', G: 'Ꮆ', H: 'Ꮋ', I: 'Ꭸ', J: 'Ꮰ',
  K: 'Ꮶ', L: 'Ꮭ', M: 'Ꮇ', N: 'Ꮑ', O: 'Ꮎ', P: 'Ꮲ', Q: 'Ꮕ', R: 'Ꮢ', S: 'Ꮥ', T: 'Ꮦ',
  U: 'Ꮼ', V: 'Ꮙ', W: 'Ꮿ', X: 'Ꮂ', Y: 'Ꮍ', Z: 'Ꮓ',
  a: 'Ꭿ', b: 'Ᏸ', c: 'Ꮸ', d: 'Ꭰ', e: 'Ꭼ', f: 'Ꮀ', g: 'Ꮆ', h: 'Ꮋ', i: 'Ꭸ', j: 'Ꮰ',
  k: 'Ꮶ', l: 'Ꮭ', m: 'Ꮇ', n: 'Ꮑ', o: 'Ꮎ', p: 'Ꮲ', q: 'Ꮕ', r: 'Ꮢ', s: 'Ꮥ', t: 'Ꮦ',
  u: 'Ꮼ', v: 'Ꮙ', w: 'Ꮿ', x: 'Ꮂ', y: 'Ꮍ', z: 'Ꮓ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toTribal(text) {
      const map = {
         A: 'ል', B: 'ጌ', C: 'ር', D: 'ዕ', E: 'ቿ', F: 'ቻ', G: 'ኗ', H: 'ዘ', I: 'ጎ', J: 'ጋ',
  K: 'ጕ', L: 'ረ', M: 'ጠ', N: 'ክ', O: 'ዐ', P: 'የ', Q: 'ዒ', R: 'ዪ', S: 'ነ', T: 'ፕ',
  U: 'ሁ', V: 'ሀ', W: 'ሠ', X: 'ሸ', Y: 'ሃ', Z: 'ጊ',
  a: 'ል', b: 'ጌ', c: 'ር', d: 'ዕ', e: 'ቿ', f: 'ቻ', g: 'ኗ', h: 'ዘ', i: 'ጎ', j: 'ጋ',
  k: 'ጕ', l: 'ረ', m: 'ጠ', n: 'ክ', o: 'ዐ', p: 'የ', q: 'ዒ', r: 'ዪ', s: 'ነ', t: 'ፕ',
  u: 'ሁ', v: 'ሀ', w: 'ሠ', x: 'ሸ', y: 'ሃ', z: 'ጊ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    
function toGraceful(text) {
      const map = {
        A: 'მ', B: 'ზ', C: 'ე', D: 'ძ', E: 'პ', F: 'f', G: 'ც', H: 'h', I: 'í', J: 'ʝ',
  K: 'κ', L: 'l', M: 'ო', N: 'ղ', O: 'ѻ', P: 'ρ', Q: 'გ', R: 'Γ', S: 'ჰ', T: 'ŧ',
  U: 'υ', V: 'v', W: 'w', X: 'ჯ', Y: 'ყ', Z: 'ɀ',
  a: 'მ', b: 'ზ', c: 'ე', d: 'ძ', e: 'პ', f: 'f', g: 'ც', h: 'h', i: 'í', j: 'ʝ',
  k: 'κ', l: 'l', m: 'ო', n: 'ղ', o: 'ѻ', p: 'ρ', q: 'გ', r: 'Γ', s: 'ჰ', t: 'ŧ',
  u: 'υ', v: 'v', w: 'w', x: 'ჯ', y: 'ყ', z: 'ɀ'
      };
      return [...text].map(c => map[c] || c).join('');
    
    }

    function toDoubleStruck(text) {
      const map = {
'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 
'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 
'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 
'y': '𝕪', 'z': '𝕫', 'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 
'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 
'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 
'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
      };
      return [...text].map(c => map[c] || c).join('');
    } 

    function toSymbolic(text) {
      const map = {
        A: '𖤬', B: 'ꔪ', C: 'ꛕ', D: '𖤀', E: '𖤟', F: 'ꘘ', G: 'ꚽ', H: 'ꛅ', I: 'ꛈ', J: 'ꚠ',
  K: '𖤰', L: 'ꚳ', M: '𖢑', N: 'ꛘ', O: '𖣠', P: 'ㄗ', Q: 'ꚩ', R: '𖦪', S: 'ꕷ', T: '𖢧',
  U: 'ꚶ', V: 'ꚴ', W: 'ꛃ', X: '𖤗', Y: 'ꚲ', Z: 'ꛉ',
  a: '𖤬', b: 'ꔪ', c: 'ꛕ', d: '𖤀', e: '𖤟', f: 'ꘘ', g: 'ꚽ', h: 'ꛅ', i: 'ꛈ', j: 'ꚠ',
  k: '𖤰', l: 'ꚳ', m: '𖢑', n: 'ꛘ', o: '𖣠', p: 'ㄗ', q: 'ꚩ', r: '𖦪', s: 'ꕷ', t: '𖢧',
  u: 'ꚶ', v: 'ꚴ', w: 'ꛃ', x: '𖤗', y: 'ꚲ', z: 'ꛉ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toIconic (text) {
      const map = {
        A: 'ꋬ', B: 'ꃳ', C: 'ꉔ', D: '꒯', E: 'ꏂ', F: 'ꊰ', G: 'ꍌ', H: 'ꁝ', I: '꒐', J: '꒻',
  K: 'ꀘ', L: '꒒', M: 'ꂵ', N: 'ꋊ', O: 'ꄲ', P: 'ꉣ', Q: 'ꆰ', R: 'ꋪ', S: 'ꇙ', T: '꓄',
  U: '꒤', V: '꒦', W: 'ꅐ', X: 'ꉧ', Y: 'ꌦ', Z: 'ꁴ',
  a: 'ꋬ', b: 'ꃳ', c: 'ꉔ', d: '꒯', e: 'ꏂ', f: 'ꊰ', g: 'ꍌ', h: 'ꁝ', i: '꒐', j: '꒻',
  k: 'ꀘ', l: '꒒', m: 'ꂵ', n: 'ꋊ', o: 'ꄲ', p: 'ꉣ', q: 'ꆰ', r: 'ꋪ', s: 'ꇙ', t: '꓄',
  u: '꒤', v: '꒦', w: 'ꅐ', x: 'ꉧ', y: 'ꌦ', z: 'ꁴ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function tofraktur(text) {
      const map = {
        A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲', H: '𝕳', I: '𝕴', J: '𝕵',
  K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹', O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿',
  U: '𝖀', V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
  a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏',
  k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓', o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙',
  u: '𝖚', v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function tobubbles(text) {
      const map = {
        A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ',
        K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ',
        U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
        a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ',
        k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ',
        u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
        0: '⓪', 1: '①', 2: '②', 3: '③', 4: '④', 5: '⑤', 6: '⑥', 7: '⑦', 8: '⑧', 9: '⑨'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toetruscan(text) {
      const map = {
        A: '𐌀', B: '𐌁', C: '𐌂', D: '𐌃', E: '𐌄', F: '𐌅', G: 'Ᏽ', H: '𐋅', I: '𐌉', J: 'Ꮭ',
        K: '𐌊', L: '𐌋', M: '𐌌', N: '𐌍', O: 'Ꝋ', P: '𐌐', Q: '𐌒', R: '𐌓', S: '𐌔', T: '𐌕',
        U: '𐌵', V: 'ᕓ', W: 'Ꮤ', X: '𐋄', Y: '𐌙', Z: 'Ɀ',
        a: '𐌀', b: '𐌁', c: '𐌂', d: '𐌃', e: '𐌄', f: '𐌅', g: 'Ᏽ', h: '𐋅', i: '𐌉', j: 'Ꮭ',
        k: '𐌊', l: '𐌋', m: '𐌌', n: '𐌍', o: 'Ꝋ', p: '𐌐', q: '𐌒', r: '𐌓', s: '𐌔', t: '𐌕',
        u: '𐌵', v: 'ᕓ', w: 'Ꮤ', x: '𐋄', y: '𐌙', z: 'Ɀ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

function toPlayful (text) {
      const map = {
        A: 'Ą', B: 'Ɓ', C: 'Ƈ', D: 'Đ', E: 'Σ', F: 'Ϝ', G: 'Ɠ', H: 'Ȟ', I: 'Ï', J: 'Ɉ',
  K: 'Ҡ', L: 'Ƚ', M: 'Ɱ', N: 'Ŋ', O: 'Ø', P: 'Þ', Q: 'Ҩ', R: 'Ʀ', S: 'Ş', T: 'Ŧ',
  U: 'Ʋ', V: 'Ѵ', W: 'Щ', X: 'Ӿ', Y: 'Ỳ', Z: 'Ẕ',

  a: 'ą', b: 'ɓ', c: 'ƈ', d: 'đ', e: 'ε', f: '∱', g: 'ɠ', h: 'ɧ', i: 'ï', j: 'ʆ',
  k: 'ҡ', l: 'ℓ', m: 'ɱ', n: 'ŋ', o: 'σ', p: 'þ', q: 'ҩ', r: 'ŗ', s: 'ş', t: 'ŧ',
  u: 'ų', v: '√', w: 'щ', x: 'х', y: 'γ', z: 'ẕ'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toWide (text) {
      const map = {
        A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ', H: 'Ｈ', I: 'Ｉ', J: 'Ｊ',
  K: 'Ｋ', L: 'Ｌ', M: 'Ｍ', N: 'Ｎ', O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ', S: 'Ｓ', T: 'Ｔ',
  U: 'Ｕ', V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ',

  a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ', h: 'ｈ', i: 'ｉ', j: 'ｊ',
  k: 'ｋ', l: 'ｌ', m: 'ｍ', n: 'ｎ', o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ',
  u: 'ｕ', v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toMonospace (text) {
      const map = {
         A: '𝙰', B: '𝙱', C: '𝙲', D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹',
  K: '𝙺', L: '𝙻', M: '𝙼', N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃',
  U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉',

  a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓',
  k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝',
  u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toBold (text) {
      const map = {
         A: '𝐀', B: '𝐁', C: '𝐂', D: '𝐃', E: '𝐄', F: '𝐅', G: '𝐆', H: '𝐇', I: '𝐈', J: '𝐉',
  K: '𝐊', L: '𝐋', M: '𝐌', N: '𝐍', O: '𝐎', P: '𝐏', Q: '𝐐', R: '𝐑', S: '𝐒', T: '𝐓',
  U: '𝐔', V: '𝐕', W: '𝐖', X: '𝐗', Y: '𝐘', Z: '𝐙',

  a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣',
  k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭',
  u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳'
      };
      return [...text].map(c => map[c] || c).join('');
    }

function toItalic (text) {
      const map = {
        A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑',
  K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛',
  U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',

  a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
  k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
  u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toBoldItalic (text) {
      const map = {
         A: '𝑨', B: '𝑩', C: '𝑪', D: '𝑫', E: '𝑬', F: '𝑭', G: '𝑮', H: '𝑯', I: '𝑰', J: '𝑱',
  K: '𝑲', L: '𝑳', M: '𝑴', N: '𝑵', O: '𝑶', P: '𝑷', Q: '𝑸', R: '𝑹', S: '𝑺', T: '𝑻',
  U: '𝑼', V: '𝑽', W: '𝑾', X: '𝑿', Y: '𝒀', Z: '𝒁',

  a: '𝒂', b: '𝒃', c: '𝒄', d: '𝒅', e: '𝒆', f: '𝒇', g: '𝒈', h: '𝒉', i: '𝒊', j: '𝒋',
  k: '𝒌', l: '𝒍', m: '𝒎', n: '𝒏', o: '𝒐', p: '𝒑', q: '𝒒', r: '𝒓', s: '𝒔', t: '𝒕',
  u: '𝒖', v: '𝒗', w: '𝒘', x: '𝒙', y: '𝒚', z: '𝒛'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toSansSerifBold (text) {
      const map = {
       A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝',
  K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧',
  U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',

  a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷',
  k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁',
  u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toSansSerif (text) {
      const map = {
         A: '𝖠', B: '𝖡', C: '𝖢', D: '𝖣', E: '𝖤', F: '𝖥', G: '𝖦', H: '𝖧', I: '𝖨', J: '𝖩',
  K: '𝖪', L: '𝖫', M: '𝖬', N: '𝖭', O: '𝖮', P: '𝖯', Q: '𝖰', R: '𝖱', S: '𝖲', T: '𝖳',
  U: '𝖴', V: '𝖵', W: '𝖶', X: '𝖷', Y: '𝖸', Z: '𝖹',

  a: '𝖺', b: '𝖻', c: '𝖼', d: '𝖽', e: '𝖾', f: '𝖿', g: '𝗀', h: '𝗁', i: '𝗂', j: '𝗃',
  k: '𝗄', l: '𝗅', m: '𝗆', n: '𝗇', o: '𝗈', p: '𝗉', q: '𝗊', r: '𝗋', s: '𝗌', t: '𝗍',
  u: '𝗎', v: '𝗏', w: '𝗐', x: '𝗑', y: '𝗒', z: '𝗓'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toSansSerifItalic (text) {
      const map = {
         A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑',
  K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛',
  U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',

  a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
  k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
  u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toSansSerifBoldItalic (text) {
      const map = {
       A: '𝘼', B: '𝘽', C: '𝘾', D: '𝘿', E: '𝙀', F: '𝙁', G: '𝙂', H: '𝙃', I: '𝙄', J: '𝙅',
  K: '𝙆', L: '𝙇', M: '𝙈', N: '𝙉', O: '𝙊', P: '𝙋', Q: '𝙌', R: '𝙍', S: '𝙎', T: '𝙏',
  U: '𝙐', V: '𝙑', W: '𝙒', X: '𝙓', Y: '𝙔', Z: '𝙕',

  a: '𝙖', b: '𝙗', c: '𝙘', d: '𝙙', e: '𝙚', f: '𝙛', g: '𝙜', h: '𝙝', i: '𝙞', j: '𝙟',
  k: '𝙠', l: '𝙡', m: '𝙢', n: '𝙣', o: '𝙤', p: '𝙥', q: '𝙦', r: '𝙧', s: '𝙨', t: '𝙩',
  u: '𝙪', v: '𝙫', w: '𝙬', x: '𝙭', y: '𝙮', z: '𝙯'

      };
      return [...text].map(c => map[c] || c).join('');
    }
function toSmallCapital (text) {
      const map = {
       A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
  K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'q', R: 'ʀ', S: 'ꜱ', T: 'ᴛ',
  U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
  k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'q', r: 'ʀ', s: 'ꜱ', t: 'ᴛ',
  u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toBoldCursive (text) {
      const map = {
        A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙',
  K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣',
  U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
  a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳',
  k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽',
  u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃'
      };
      return [...text].map(c => map[c] || c).join('');
    }

    function toblocktext (text) {
      const map = {
          A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸', J: '🄹',
  K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁', S: '🅂', T: '🅃',
  U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',

  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹',
  k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃',
  u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toAsianFont (text) {
      const map = {
         A: '卂', B: '乃', C: '匚', D: 'ᗪ', E: '乇', F: '千', G: 'Ꮆ', H: '卄', I: '丨',
  J: 'ﾌ', K: 'Ҝ', L: 'ㄥ', M: '爪', N: '几', O: 'ㄖ', P: '卩', Q: '디', R: '尺',
  S: '丂', T: '丁', U: 'ㄩ', V: 'ᐯ', W: '山', X: '乂', Y: 'ㄚ', Z: '乙',

  a: '卂', b: '乃', c: '匚', d: 'ᗪ', e: '乇', f: '千', g: 'Ꮆ', h: '卄', i: '丨',
  j: 'ﾌ', k: 'Ҝ', l: 'ㄥ', m: '爪', n: '几', o: 'ㄖ', p: '卩', q: '디', r: '尺',
  s: '丂', t: '丁', u: 'ㄩ', v: 'ᐯ', w: '山', x: '乂', y: 'ㄚ', z: '乙'
      };
      return [...text].map(c => map[c] || c).join('');
    }
    
function toDualCurve (text) {
      const map = {
         A: 'A͜͡', B: 'B͜͡', C: 'C͜͡', D: 'D͜͡', E: 'E͜͡', F: 'F͜͡', G: 'G͜͡', H: 'H͜͡', I: 'I͜͡',
  J: 'J͜͡', K: 'K͜͡', L: 'L͜͡', M: 'M͜͡', N: 'N͜͡', O: 'O͜͡', P: 'P͜͡', Q: 'Q͜͡', R: 'R͜͡',
  S: 'S͜͡', T: 'T͜͡', U: 'U͜͡', V: 'V͜͡', W: 'W͜͡', X: 'X͜͡', Y: 'Y͜͡', Z: 'Z͜͡',

  a: 'a͜͡', b: 'b͜͡', c: 'c͜͡', d: 'd͜͡', e: 'e͜͡', f: 'f͜͡', g: 'g͜͡', h: 'h͜͡', i: 'i͜͡',
  j: 'j͜͡', k: 'k͜͡', l: 'l͜͡', m: 'm͜͡', n: 'n͜͡', o: 'o͜͡', p: 'p͜͡', q: 'q͜͡', r: 'r͜͡',
  s: 's͜͡', t: 't͜͡', u: 'u͜͡', v: 'v͜͡', w: 'w͜͡', x: 'x͜͡', y: 'y͜͡', z: 'z͜͡'
      };
      return [...text].map(c => map[c] || c).join('');
    }
function toModerntext (text) {
      const map = {
        A: 'ƛ', B: 'Ɓ', C: 'Ƈ', D: 'Ɗ', E: 'Є', F: 'Ƒ', G: 'Ɠ', H: 'Ӈ',
  I: 'Ɩ', J: 'ʆ', K: 'Ҡ', L: 'Լ', M: 'M', N: 'Ɲ', O: 'Ơ', P: 'Ƥ',
  Q: 'Ƣ', R: 'Ʀ', S: 'Ƨ', T: 'Ƭ', U: 'Ʋ', V: 'ᐯ', W: 'Ɯ', X: 'Ҳ',
  Y: 'Ꭹ', Z: 'Ȥ',

  a: 'ƛ', b: 'Ɓ', c: 'Ƈ', d: 'Ɗ', e: 'Є', f: 'Ƒ', g: 'Ɠ', h: 'Ӈ',
  i: 'Ɩ', j: 'ʆ', k: 'Ҡ', l: 'Լ', m: 'M', n: 'Ɲ', o: 'Ơ', p: 'Ƥ',
  q: 'Ƣ', r: 'Ʀ', s: 'Ƨ', t: 'Ƭ', u: 'Ʋ', v: 'ᐯ', w: 'Ɯ', x: 'Ҳ',
  y: 'Ꭹ', z: 'Ȥ'
      };
      return [...text].map(c => map[c] || c).join('');
    }

function toPrimeFont (text) {
      const map = {
       A: 'Λ', B: 'ß', C: '₵', D: 'Đ', E: 'Ξ', F: 'Ŧ', G: '₲', H: 'Η',
  I: 'Ϊ', J: 'Ɉ', K: 'Ҝ', L: 'Ł', M: 'Μ', N: 'Ͷ', O: 'Θ', P: 'Ρ',
  Q: 'Ҩ', R: 'Я', S: 'Ϟ', T: 'Ͳ', U: 'Ʊ', V: 'Ѵ', W: 'Ψ', X: 'Ӿ',
  Y: 'Ϥ', Z: 'Ẕ',

  a: 'α', b: 'ɓ', c: '૮', d: '∂', e: 'ε', f: 'ƒ', g: 'ɠ', h: 'ɦ',
  i: 'เ', j: 'ʝ', k: 'ҡ', l: 'ℓ', m: 'ɱ', n: 'ɳ', o: 'σ', p: 'ρ',
  q: 'φ', r: '૨', s: 'ร', t: 'ƭ', u: 'µ', v: 'ѵ', w: 'ω', x: 'א',
  y: 'ყ', z: 'ƶ'
      };
      return [...text].map(c => map[c] || c).join('');
    }



    function updateText() {
      const input = document.getElementById("userInput").value.trim();
      const text = input || defaultInput;
      
      document.getElementById("CursiveOutput").textContent = input ? toCursive(text) : document.getElementById("CursiveOutput").dataset.default;
      document.getElementById("HistoricalOutput").textContent = input ? toHistorical(text) : document.getElementById("HistoricalOutput").dataset.default;
      document.getElementById("GothicOutput").textContent = input ? toGothic(text) : document.getElementById("GothicOutput").dataset.default;
      document.getElementById("RoundedOutput").textContent = input ? toRounded(text) : document.getElementById("RoundedOutput").dataset.default;
      document.getElementById("VintageOutput").textContent = input ? toVintage(text) : document.getElementById("VintageOutput").dataset.default;
      document.getElementById("TribalOutput").textContent = input ? toTribal(text) : document.getElementById("TribalOutput").dataset.default;
      document.getElementById("GracefulOutput").textContent = input ? toGraceful(text) : document.getElementById("GracefulOutput").dataset.default;
      document.getElementById("DoubleStruckOutput").textContent = input ? toDoubleStruck(text) : document.getElementById("DoubleStruckOutput").dataset.default;
      document.getElementById("SymbolicOutput").textContent = input ? toSymbolic(text) : document.getElementById("SymbolicOutput").dataset.default;
      document.getElementById("IconicOutput").textContent = input ? toIconic (text) : document.getElementById("IconicOutput").dataset.default;
      document.getElementById("frakturOutput").textContent = input ? tofraktur(text) : document.getElementById("frakturOutput").dataset.default;
      document.getElementById("bubbleOutput").textContent = input ? tobubbles(text) : document.getElementById("bubbleOutput").dataset.default;
      document.getElementById("etruscanOutput").textContent = input ? toetruscan(text) : document.getElementById("etruscanOutput").dataset.default;
      document.getElementById("PlayfulOutput").textContent = input ? toPlayful (text) : document.getElementById("PlayfulOutput").dataset.default;
      document.getElementById("WideOutput").textContent = input ? toWide (text) : document.getElementById("WideOutput").dataset.default;
      document.getElementById("MonospaceOutput").textContent = input ? toMonospace (text) : document.getElementById("MonospaceOutput").dataset.default;
      document.getElementById("BoldOutput").textContent = input ? toBold (text) : document.getElementById("BoldOutput").dataset.default;
      document.getElementById("ItalicOutput").textContent = input ? toItalic (text) : document.getElementById("ItalicOutput").dataset.default;
      document.getElementById("BoldItalicOutput").textContent = input ? toBoldItalic (text) : document.getElementById("BoldItalicOutput").dataset.default;
      document.getElementById("SansSerifBoldOutput").textContent = input ? toSansSerifBold (text) : document.getElementById("SansSerifBoldOutput").dataset.default;
      document.getElementById("SansSerifOutput").textContent = input ? toSansSerif (text) : document.getElementById("SansSerifOutput").dataset.default;
      document.getElementById("SansSerifItalicOutput").textContent = input ? toSansSerifItalic (text) : document.getElementById("SansSerifItalicOutput").dataset.default;
      document.getElementById("SansSerifBoldItalicOutput").textContent = input ? toSansSerifBoldItalic (text) : document.getElementById("SansSerifBoldItalicOutput").dataset.default;
      document.getElementById("SmallCapitalOutput").textContent = input ? toSmallCapital (text) : document.getElementById("SmallCapitalOutput").dataset.default;
      document.getElementById("BoldCursiveOutput").textContent = input ? toBoldCursive (text) : document.getElementById("BoldCursiveOutput").dataset.default;
      document.getElementById("blocktextOutput").textContent = input ? toblocktext (text) : document.getElementById("blocktextOutput").dataset.default;
      document.getElementById("AsianFontOutput").textContent = input ? toAsianFont (text) : document.getElementById("AsianFontOutput").dataset.default;
      document.getElementById("DualCurveOutput").textContent = input ? toDualCurve (text) : document.getElementById("DualCurveOutput").dataset.default;
      document.getElementById("ModerntextOutput").textContent = input ? toModerntext (text) : document.getElementById("ModerntextOutput").dataset.default;
      document.getElementById("PrimeFontOutput").textContent = input ? toPrimeFont (text) : document.getElementById("PrimeFontOutput").dataset.default;

    }

    function handleInputChange() {
      const input = document.getElementById("userInput");
      const clearBtn = document.querySelector(".clear-btn");

      clearBtn.style.display = input.value.trim() !== "" ? "block" : "none";
      updateText();
    }

    function clearInput() {
      const input = document.getElementById("userInput");
      input.value = "";
      document.querySelector(".clear-btn").style.display = "none";
      updateText();
    }

    function copyToClipboard(elementId) {
      const text = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(text).then(() => {
        showCopyNotification("Copied: " + text);
      });
    }

    function showCopyNotification(message) {
      const notification = document.getElementById("copyNotification");
      notification.textContent = message;
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000);
    }

    window.onload = () => {
      updateText();
      handleInputChange();
    };
    
    
  

document.addEventListener("DOMContentLoaded", function() {
  // SVG markup as a string
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy" style="vertical-align:middle;margin-right:6px;">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `;

  // Find all buttons with class 'copy-btn'
  document.querySelectorAll('.copy-btn').forEach(function(btn) {
    // Only add icon if not already present
    if (!btn.querySelector('svg')) {
      btn.insertAdjacentHTML('afterbegin', svgIcon);
    }
  });
});

