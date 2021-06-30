let fetch = require('node-fetch');
/**
  * @description Get posts from random subreddit!
  * @param {String} subreddit
  */
module.exports = function randomPostFromSubreddit(subreddit) {
  return fetch('https://memes.blademaker.tv/api/'+subreddit).then((res) => res.json)
    .then((res) => {
      let obj = {
        title: res.title,
        author: res.author,
        image: res.image,
        upvotes: res.ups,
        downvotes: res.downs,
        nsfw: res.nsfw
      }
      return obj;
    })
}
