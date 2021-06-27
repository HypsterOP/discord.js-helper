
## discord.js-helper

## Installation of the package

First install [Nodejs](http://nodejs.org/). Then:

```bash
$ npm install discord.js-helper
```

## 🤟 Importing

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';
```

----

## Package functions and usage

---

## embedBuilder

###### Example

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';
client.on('message' ,(message) => {
  if(message.content.startsWith('!embed')) {
    helper.embedBuilder(message).setTitle(`Hewwo there!`).setDescription(`Howe are you doin?! ☺`)
  }
})
```
