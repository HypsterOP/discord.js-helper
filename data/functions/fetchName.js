let fetch = require('node-fetch');
/**
  * @param {String} name
  * @description Find the average age and people with a name!
  */
module.exports = function fetchName(name) {
  if(!name) return console.error("[Discord.js-Helper:fetchName] name not found.");
  return fetch('https://api.agify.io/?name='+encodeURI(name))
    .then((res) => res.json)
    .then((res) => {
      let obj = {
        name: res.name,
        age: res.age,
        peopleWithName: res.count
      }
      return obj;
    })
}
