let fetch = require('node-fetch');
/**
 * @description Get randomized quotes easily
 * @returns {Object}
 */
module.exports = function() {
  return fetch('https://animechan.vercel.app/api/random')
    .then((res) => res.json)
    .then((res) => {
      let obj = {
        anime: res.anime,
        character: res.character,
        quote: res.quote
      }
      return obj;
    })
}
