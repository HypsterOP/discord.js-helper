let fetch = require('node-fetch');
/**
 * @description get random dog image
 * @returns {Object}
 */
module.exports = function() {
  return fetch('https://random.dog/woof.json')
    .then((res) => res.json)
    .then((res) => {
      let obj = {
        size: res.fileSizeBytes,
        url: res.url
      }
      return obj;
    })
}
