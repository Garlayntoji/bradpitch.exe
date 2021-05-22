const discord = require('discord.js');


module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		async function ping() {
			await message.channel.send('Pong!');

			console.log('Ping command executed successfully.');
		};
		ping().catch(err => {
			console.error('Error when executing the Ping command.');
			console.error(err);
		});
	},
};
