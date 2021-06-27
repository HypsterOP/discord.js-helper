const colors = require('colors')

module.exports = EmbedBuilder;


function EmbedBuilder(message) {
    if(!message) throw new ReferenceError("'message' is not passed in as the argument! [discord.js-helper]".red)
    const av = message.author.displayAvatarURL({ dynamic : true })
    const { MessageEmbed } = require('discord.js')
    return new MessageEmbed().setFooter(message.author.username, av).setColor('RANDOM').setTimestamp();
}