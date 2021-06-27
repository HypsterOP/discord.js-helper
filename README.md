
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

## DiscordTogether

###### Example

###### YouTube-Together

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';

 const Discord = require('discord.js');
 const client = new Discord.Client();
const { DiscordTogether } = require('discord.js-helper');
     
     client.dt = new DiscordTogether(client);
     
     client.on('message', async (message) => {
     if(message.content.toLowerCase() === '!youtube-together') {
     client.dt.createTogether(message.member.voice.channel.id, 'youtube').then(async link => {
      message.channel.send(`Here is your youtube code link! ${link.code}`)
     });
     };
     });
     
     client.login('your bot token goes here')

```
###### Poker-Together

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';

 const Discord = require('discord.js');
 const client = new Discord.Client();
const { DiscordTogether } = require('discord.js-helper');
     
     client.dt = new DiscordTogether(client);
     
     client.on('message', async (message) => {
     if(message.content.toLowerCase() === '!poker') {
     client.dt.createTogether(message.member.voice.channel.id, 'poker').then(async link => {
      message.channel.send(`Here is your poker code link! ${link.code}`)
     });
     };
     });
     
     client.login('your bot token goes here')

```

###### Chess

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';

 const Discord = require('discord.js');
 const client = new Discord.Client();
const { DiscordTogether } = require('discord.js-helper');
     
     client.dt = new DiscordTogether(client);
     
     client.on('message', async (message) => {
     if(message.content.toLowerCase() === '!chess') {
     client.dt.createTogether(message.member.voice.channel.id, 'chess').then(async link => {
      message.channel.send(`Here is your chess code link! ${link.code}`)
     });
     };
     });
     
     client.login('your bot token goes here')

```

###### Fishing

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';

 const Discord = require('discord.js');
 const client = new Discord.Client();
const { DiscordTogether } = require('discord.js-helper');
     
     client.dt = new DiscordTogether(client);
     
     client.on('message', async (message) => {
     if(message.content.toLowerCase() === '!fish') {
     client.dt.createTogether(message.member.voice.channel.id, 'fishing').then(async link => {
      message.channel.send(`Here is your fishing code link! ${link.code}`)
     });
     };
     });
     
     client.login('your bot token goes here')

```
## Meme

##### Usage

```js
// Using Node.js (require)
const helper = require('discord.js-helper');

// Using ES6 (import /export)
import helper from 'discord.js-helper';

 const Discord = require('discord.js');
 const client = new Discord.Client();
const helper = require('discord.js-helper');
     
     
     client.on('message', async (message) => {
     if(message.content.toLowerCase() === '!meme') {
          helper.meme(message)
     });
     };
     });
     
     client.login('your bot token goes here')

```
