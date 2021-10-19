const config = {
	ownerID: ['878096206587363418'],
	token: 'ODk5NDI0NzA4Mjg0NTI2NTky.YWykiA.T83_lbwb0P46yLKV-JhMrwfBYCY',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: '7z0dgvs0v86llvwuvafxu1jggly84c',
			clientSecret: '84apily8rmaqoyw7gqupksxix36yoo',
		},
		// https://fortnitetracker.com/site-api
		fortnite: 'a16b858670e09bc379f71081a1c92d55226d59f8',
		// https://steamcommunity.com/dev
		steam: 'steamAPI-Key',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'spotify-ID',
			secret: 'spotify-secret',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'ICq7HxRAKBfsPNkIA50N4qLHwG8LF23uKiKOJ1g1FRTnSJOi8swvbrvBCw0kA-cY',
		// https://api.amethyste.moe/
		amethyste: 'c6a339fe73ec2f59f932410e3aa46982f1148aeabb065640ef1859c5faa63ae20cbb366e91408536632b5e288339269ad60ba97c88f59cd6bf53e6558e9570dd',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/8g6zUQu',
		// Your support's server ID
		GuildID: '750822670505082971',
		// This for using the suggestion command on your server
		ModRole: '751857618720522341',
		// What channel to post the suggestions
		SuggestionChannel: '761619652009787392',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '761619652009787392',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://tc3NXXu7mzhk4lJq:CJsHWWUMjWjePD9S@cluster0.chlqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	// embed colour
	embedColor: 'RANDOM',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
