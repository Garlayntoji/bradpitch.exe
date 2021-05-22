const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
	name: 'help_sbg',
	description: 'The SBG help command.',
	execute(message, args) {
		async function help() {
				const helpEmbed = new Discord.MessageEmbed()
			.setColor('#1a29ca')
			.setTitle('Help: Selenite Blizzard Guild')
			.setDescription("Here's the SBG help page. Thank you for using Brad Pitch.")
			.setThumbnail('https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a1/GBS_Logo_Rework.png/revision/latest/scale-to-width-down/600?cb=20210303123857')
			.addFields(
				{ name: 'b!hi', value: 'Returns a warm welcome message to use after ticket openings. This embed message has helpful guidelines for clients.' },
				{ name: 'b!help sbg', value: 'Shows the Selenite Blizzard Guild help page.' },
			)
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

			await message.channel.send(helpEmbed);

			console.log('Help command executed successfully.');
		};
		help_sbg().catch(err => {
			console.error('Error when executing the Help_sbg command.');
			console.error(err);
		});
	},
};