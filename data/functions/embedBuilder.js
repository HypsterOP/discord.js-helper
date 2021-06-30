const colors = require('colors')
const { Message } = require('discord.js');
module.exports = EmbedBuilder;

/**
  * @param {Message} message
  * @description Building Embeds Made Easy
  */
async function EmbedBuilder(message) {
    if(!message) throw new ReferenceError("[Discord.js-Helper: embedBuilder] 'message' is not passed in as the argument!".red)
    const av = message.author.displayAvatarURL({ dynamic : true })
    const { MessageEmbed } = require('discord.js')
    return await message.channel.send(new MessageEmbed().setFooter(message.author.username, av).setColor('RANDOM').setimestamp());
}
