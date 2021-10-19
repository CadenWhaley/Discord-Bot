// Dependencies
const { logger } = require('../utils'),
	chalk = require('chalk'),
	fetch = require('node-fetch'),
	Discord = require('discord.js');

module.exports.run = async (config) => {
	// This will check if the config is correct
	logger.log('=-=-=-=-=-=-=- Config file Verification -=-=-=-=-=-=-=');
	logger.log('Verifying config..');

	// Make sure Node.js V12 or higher is being ran.
	if (process.version.slice(1).split('.')[0] < 16) {
		logger.error('Node 16 or higher is required.');
		return true;
	}

	// check owner ID array
	if (config.ownerID) {
		// validate owner ID's
		for (const owner of config.ownerID) {
			if (isNaN(owner)) {
				logger.error(`${chalk.red('✗')} ownerID: ${owner} is invalid.`);
				return true;
			}
		}
	} else {
		logger.error(`${chalk.red('✗')} Bot ownerID array is missing.`);
		return true;
	}

	// check token
	if (!config.token) {
		logger.error(`${chalk.red('✗')} Bot token is missing.`);
		return true;
	} else {
		const client = new Discord.Client({ intents: ['GUILD_MEMBERS'] });
		await client.login(config.token).catch(e => {
			if (e.message == 'An invalid token was provided.') {
				logger.error(`${chalk.red('✗')} Bot token is incorrect.`);
				return true;
			} else if (e.message == 'Privileged intent provided is not enabled or whitelisted.') {
				logger.error(`${chalk.red('✗')} You need to enable privileged intents on the discord developer page.`);
				return true;
			}
		});
	}

	// Check twitch API
	if (config.api_keys.twitch.clientID && config.api_keys.twitch.clientSecret) {
		const req = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${config.api_keys.twitch.clientID}&client_secret=${config.api_keys.twitch.clientSecret}&grant_type=client_credentials`, {
			method: 'POST',
		}).then(res => res.json()).catch(e => console.log(e));

		// check response
		if (req.message == 'invalid client secret') {
			logger.error(`${chalk.red('✗')} Invalid twitch client secret.`);
			return true;
		}
	} else {
		logger.log(`${chalk.red('✗')} Twitch API key is missing.`);
	}
};
