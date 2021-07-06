const { morseCode } = require("../exports/morse")

/**
 * @name morse
 * @param {string} args Argument
 * @description Convert a string to morse code!
 * @example morse("Some String")
 */

async function morse(args) {
    const morseD = args
      .toLowerCase()
      .replace(/./g, (x) => `${morseCode[x]}\u2001`)
      .trim();

    if (morseD.includes("undefined")) {
    return console.error("Discord.js-helper: \"That text is not supported\"");
    }

    return morseD;
}

module.exports = morse;