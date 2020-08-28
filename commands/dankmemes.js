const discord = require('discord.js');
const rp = require('random-puppy');


module.exports = {
	name: 'dankmemes',
	description: 'Picks a random image from r/dankmemes',
	execute(message, args) {
		var subreddit = 'dankmemes';

		var sub = subreddit[Math.round(Math.random() * (subreddit.length - 1))];

		rp(sub).then(url => {
			message.channel.send(url);
		});

	},
};

