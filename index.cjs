let embedBuilder = require('./data/functions/embedBuilder'),
  animeQuote = require('./data/functions/animeQuote'),
  fetchName = require('./data/functions/fetchName'),
  meme = require('./data/functions/meme'),
  randomCat = require('./data/functions/randomCat'),
  randomDog = require('./data/functions/randomDog'),
  randomSubreddit = require('./data/functions/randomSubreddit'),
  vaporwave = require('./data/functions/vaporwave'),
  DiscordTogether = require('./data/classes/DiscordTOGether'),
  morse = require('./data/functions/morse');

/**
  * Discord.js-Helper
  * @module discord.js-helper
  */


/**
  * functions
  * @function {animeQuote}
  * @function {embedBuilder}
  * @function {fetchName}
  * @function {meme}
  * @function {randomCat}
  * @function {randomDog}
  * @function {randomSubreddit}
  * @function {vaporwave}
  * @function {morse}
  * @class {DiscordTogether}
  */
module.exports = {
  animeQuote,
  embedBuilder,
  fetchName,
  meme,
  randomCat,
  randomDog,
  randomSubreddit,
  vaporwave,
  morse,
  DiscordTogether
}
