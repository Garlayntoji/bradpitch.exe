const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "hi",
	description: "greetings command used after ticket opening",
	execute(message, args) {
		async function hi() {
			const hiEmbed = new Discord.MessageEmbed()
			.setColor('#1a29ca')
			.setTitle('Hi and Welcome to the Selenite Blizzard Guild.')
			.setDescription("Here are some guidelines to help you after your ticket opening.")
			.setThumbnail('https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a1/GBS_Logo_Rework.png/revision/latest/scale-to-width-down/600?cb=20210303123857')
			.addFields(
				{ name: "Please fill the following form.", value: "https://forms.gle/63D9z9M9PsCbxibs6"},
				{ name: "Supported Points of Interest:", value: "Resource deposits, planets, other points of interest (here: https://nomanssky.fandom.com/wiki/Point_of_Interest)"}
			)
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

			await message.channel.send(hiEmbed);

			console.log("SBG: Hi command sent successfully.")
		};
		hi().catch(err => {
			console.error('SBG: Error when executing the Hi command.');
			console.error(err);
		});
	},
};