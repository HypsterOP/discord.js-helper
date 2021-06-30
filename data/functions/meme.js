module.exports = meme;

const Discord = require('discord.js')

const fetch = require('node-fetch');

const { MessageEmbed } = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @description Easy memes!
 */

async function meme(message) {
	if (!message)
		throw new TypeError(
			`'message' is a required argument and is missing! [discord.js-helper]`
		);

	let data = await fetch(`https://meme-api.herokuapp.com/gimme/memes`).then(
		(res) => res.json()
	);

	const embed = new MessageEmbed();
	embed.setTitle(data.title);
	embed.setImage(data.url);
	embed.setURL(data.postLink);
	embed.setColor('2F3136');
	embed.setFooter(data.ups + ' Upvotes | Author: ' + data.author);
	embed.setTimestamp();

	message.channel.send(embed);
}
