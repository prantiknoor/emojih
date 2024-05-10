// ==UserScript==
// @name         Emojih
// @namespace    http://github.com/prantiknoor
// @version      2.1
// @description  Emoji shortcuts
// @author       Prantik
// @match        *://*/*
// ==/UserScript==

const emojis = {
  ")": "🙂",
  haha: "😂",
  hahaha: "🤣",
  hehe: "😀",
  hehehe: "😁",
  xd: "😆",
  rolling: "🙄",
  cryish: "🥹",
  crying: "😭",
  sad: "😢",
  pensive: "😔",
  hugging: "🤗",
  peaceful: "😇",
  relieved: "😌",
  savoring: "😋",
  woozy: "🥴",
  hush: "😒",
  spew: "🤮",
  angry: "😠",
  thinking: "🤔",
  shocked: "😲",
  shushing: "🤫",
  lover: "😘",
  giggle: "🤭",
  doubt: "🤨",
  neutral: "😐",
  sleepy: "😪",
  sleeping: "😴",
  yowning: "🥱",
  zzz: "💤",
  smiling: "☺",
  "smiling-eyes": "😙",
  "smiling-face": "☺",
  "rolling-eyes": "🙄",
  "star-struck": "🤩",
  "heart-eyes": "😍",
  smart: "😎",
  pleading: "🥺",
  innocent: "🥺",
  halo: "😇",
  ghost: "👻",
  alien: "👽",
  "admission-ticket": "🎟",
  "airplane-arrival": "🛬",
  "airplane-departure": "🛫",
  ambulance: "🚑",
  amusementpark: "🎡🎢",
  asterisk: "✳",
  atom: "⚛",
  "baggage-claim": "🛄",
  battery: "🔋",
  bestest: "💜",
  bewhiskered: "🧔🏻",
  biohazard: "☣",
  "blue-heart": "💙",
  boxing: "🥊",
  brain: "🧠",
  broccoli: "🥦",
  broken: "💔",
  "broken-heart": "💔",
  heart: "❤",
  canoe: "🛶",
  chains: "⛓",
  chair: "💺",
  checkmark: "✅✔",
  "choo-choo": "🚆",
  cigarette: "🚬",
  circus: "🎪",
  coaster: "🎢",
  coffin: "⚰",
  "cool-button": "🆒",
  copter: "🚁",
  copyright: "©",
  crossmark: "❎",
  crossing: "🚸",
  cupid: "💘",
  customs: "🛃",
  disapproval: "🤨",
  distrust: "🤨",
  drumsticks: "🥁",
  dumpling: "🥟",
  explode: "🤯💥",
  "face-blowing-a-kiss": "😘",
  faith: "💯",
  fencer: "🤺",
  ferry: "⛴",
  "fire-engine": "🚒",
  "free-button": "🆓",
  "fuel-pump": "⛽",
  funeral: "⚱",
  giraffe: "🦒",
  goal: "🥍, 🥅",
  "green-heart": "💚",
  guitar: "🎸",
  hashtag: "#⃣",
  "heart-with-arrow": "💘",
  "heart-with-ribbon": "💝",
  heartbeat: "💓",
  heartpulse: "💗",
  hedgehog: "🦔",
  highway: "🛣",
  "id-button": "🆔",
  jet: "✈",
  judo: "🥋",
  knobs: "🎛",
  liberty: "🗽",
  locomotive: "🚂",
  "love-letter": "💌",
  mermaid: "🧜‍",
  metro: "🚇",
  microphone: "🎤, 🎙",
  middle: "🖕",
  military: "🎖",
  millionaire: "🚤",
  minibus: "🚐",
  mono: "🚝, 🚈",
  mother: "🤶",
  motorboat: "🛥",
  nail: "💅🏻",
  "new-button": "🆕",
  "no-smoking": "🚭",
  oil: "🛢",
  paintbrush: "🖌",
  parking: "🅿",
  passport: "🛂",
  penguin: "🐧",
  piano: "🎹",
  plug: "🔌",
  pretzel: "🥨",
  prophecy: "🥠",
  radioactive: "☢",
  "railway-track": "🛤",
  recycle: "♻",
  "red-heart": "❤",
  registered: "®",
  reminder: "🎗",
  "revolving-hearts": "💞",
  rose: "🌹🏵",
  sailboat: "⛵",
  sauropod: "🦕",
  sax: "🎷",
  scooter: "🛵🛴",
  slider: "🎚",
  "smiling-face-with-heart": "🥰",
  sock: "🧦",
  "sparkling-heart": "💖",
  "spider-web": "🕸",
  streamer: "🎏",
  suspension: "🚟",
  "t-rex": "🦖",
  tent: "🎪⛺",
  "thinking-face": "🤔",
  thx: "🙏",
  tichel: "🧕",
  titanic: "🚢",
  tokyo: "🗼",
  tractor: "🚜",
  triton: "🧜‍",
  trumpet: "🎺",
  "two-hearts": "💕",
  unlock: "🔑, 🔓",
  versus: "🆚",
  violin: "🎻",
  warning: "⚠",
  waste: "🗑",
  wheelchair: "♿",
  "white-heart": "💟",
  "yellow-heart": "💛",
  zebra: "🦓",
};

(function () {
  "use strict";
  function searchAndReplaceWithEmoji(controller) {
    const text = controller.textContent;
    const endIndex = controller.cursorOffset;

    let startIndex = endIndex - 2,
      count = 1,
      shortcut;

    for (; startIndex >= 0; startIndex--) {
      if ([":", ";", " "].includes(text[startIndex])) {
        break;
      }
    }

    if (startIndex < 0) {
      startIndex = 0;
      shortcut = text.slice(startIndex, endIndex - 1);
    } else if (text[startIndex] === " ") {
      startIndex++;
      shortcut = text.slice(startIndex, endIndex - 1);
    } else {
      shortcut = text.slice(startIndex + 1, endIndex - 1);
    }

    [shortcut, count] = shortcut.split(".");

    const emoji = emojis[shortcut.toLowerCase()];

    if (emoji) {
      const emojis = emoji.repeat(count || 1);
      controller.replace(emojis, startIndex);
    }
  }
  class InputElementController {
    constructor(element) {
      this.element = element;
      this.cursorOffset = element.selectionStart ?? 0;
      this.textContent = element.value;
    }

    replace(value, startOffset) {
      this.element.setSelectionRange(startOffset, this.cursorOffset);
      document.execCommand("insertText", false, value);
    }
  }

  class TextNodeController {
    constructor() {
      this.selection = window.getSelection();
      this.textNode = this.selection.anchorNode;

      this.textContent = this.textNode.textContent;
      this.cursorOffset = this.selection?.anchorOffset;
    }

    replace(value, startOffset) {
      this.selection.extend(this.textNode, startOffset);

      document.execCommand("insertText", false, value);
    }
  }

  function getController(target) {
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
    ) {
      return new InputElementController(target);
    }
    return new TextNodeController();
  }

  window.addEventListener("beforeinput", (event) => {
    if ([":", ";"].includes(event.data)) {
      setTimeout(() => {
        const controller = getController(event.target);
        searchAndReplaceWithEmoji(controller);
      });
    }
  });

  setTimeout(() => {
    console.clear();
    console.table(emojis);
  }, 3000);
})();
