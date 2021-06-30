declare module "discord.js-helper" {
  // Anime Quote
  export function animeQuote(): object;
  // embedBuilder
  export function embedBuilder(): void;
  // fetchName
  export function fetchName(): object;
  // meme
  export function meme(): Promise<void>;
  // randomCat
  export function randomCat(): void;
  // randomDog
  export function randomDog(): void;
  // randomSubreddit
  export function randomSubreddit(): void;
  // vaporwave
  export function vaporwave(): string;
  // DiscordTogether
  export class DiscordTogether {
		constructor(client, applications = apps) {
			if (!client) {
				throw new TypeError(`[Discord.js-Helper:DiscordTogether] No Client provided.`);
			}

			this.client = client;
			this.applications = {...apps, ...applications};
		}

		async createTogether(voiceChannelId, option) {
			/**
			 * @param {String} code
			 */

			let retData = {
				code: 'none',
			};
			if (option && this.applications[option.toLowerCase()]) {
				let appID = this.applications[option.toLowerCase()];
				try {
					await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
						method: 'POST',
						body: JSON.stringify({
							max_age: 86400,
							max_uses: 0,
							target_application_id: appID,
							target_type: 2,
							temporary: false,
							validate: null,
						}),
						headers: {
							Authorization: `Bot ${this.client.token}`,
							'Content-Type': 'application/json',
						},
					})
						.then((response) => response.json())
						.then((invite) => {
							if (invite.error || !invite.code) {
								console.error(
									`An error has occured while trying to get the data please join the support server for more info => https://discord.gg/RHRgmAmYnf`
								);
							}
							retData.code = `https://discord.com/invite/${invite.code}`;
						});
				} catch (err) {
					console.error(
						`an error occured while trying to do stuff join discord server for more info => https://discord.gg/RHRgmAmYnf`
					);
				}
				return retData;
			} else {
				throw new TypeError('Invalid option provided!');
			}
		}
  }
  // end of discord together lol
}