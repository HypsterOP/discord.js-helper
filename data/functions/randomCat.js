let fetch = require('node-fetch');
/**
 * @description get random cat images
 * @returns 
 */
module.exports = function randomCat() {
  return fetch('https://thatcopy.pw/catapi/rest/')
    .then((res) => res.json)
    .then((res) => {
      let obj = {
        url: res.url,
        webpURL: res.webpurl
      }
      return obj;
    })
}
