const fetch = require('node-fetch');

const apps = {
	'youtube': '755600276941176913',
    'betrayal' : '773336526917861400',
    'poker' : '755827207812677713',
    'fishing' : '814288819477020702',
    'chess' : '832012586023256104'
};

/**
 * @template {Object.<string, string>}
 */

class DiscordTogether {
	/**
	 * @param {String} client Discord.Client
	 * @param {T} applications
	 * @example
	 * const Discord = require('discord.js');
	 * const client = new Discord.Client();
	 * const { DiscordTogether } = require('discord.js-helper');
     *
     * client.dt = new DiscordTogether(client);
     *
     * client.on('message', async (message) => {
     * if(message.content.toLowerCase() === '!chess') {
     * client.dt.createTogether(message.member.voice.channel.id, 'chess').then(async link => {
     *  message.channel.send(`Here is your chess code link! ${link.code}`)
     * });
     * };
     * });
     *
     * client.login('your bot token goes here')
	 */

    constructor(client, applications = apps) {
        if(!client) {
            throw new TypeError(`No Client provided. [discord.js-helper]`);
        }

        this.client = client;
        this.applications = { ...apps, ...applications };
    };

    async createTogether(voiceChannelId, option) {
        /**
         * @param {String} code
         */

        let retData = {
            code: 'none'
        };
        if(option && this.applications[option.toLowerCase()]) {
            let appID = this.applications[option.toLowerCase()];
            try {
                await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: appID,
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                        headers: {
                        'Authorization': `Bot ${this.client.token}`,
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
                    .then(invite => {
                        if(invite.error || !invite.code) {
                            throw new Error(`An error has occured while trying to get the data please join the support server for more info => https://discord.gg/RHRgmAmYnf`)
                        };
                        retData.code = `https://discord.com/invite/${invite.code}`
                    })
            } catch (err) {
                throw new Error(`an error occured while trying to do stuff join discord server for more info => https://discord.gg/RHRgmAmYnf`)
            }
            return retData;
        } else {
            throw new TypeError('Invalid option provided!');
        }
    }
}

module.exports = DiscordTogether;
