const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "found",
	description: "Returns a message saying the target POI has been found, or at least something near to the request.",
	execute(message, args) {
		async function found() {
			const foundEmbed = new Discord.MessageEmbed()
			.setColor('#1a29ca')
			.setTitle('Your target POI has been found.')
			.setDescription("You can prepare your Tainted Metal for the upcoming payment.")
			.setThumbnail('https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a1/GBS_Logo_Rework.png/revision/latest/scale-to-width-down/600?cb=20210303123857')
			.addFields(
				{ name: "Employee, please follow these steps:", value: "Send a screenshot of the found POI with glyphs and surface coordinates. 2 to 3 screenshots needed: Glyph address, deposit's specifications, surface coordinates."},
				{ name: "Client, please follow these setps:", value: "Proceed to the found POI verification and accept the discovery or not."}
			)
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

			await message.channel.send(foundEmbed);

			console.log("SBG: Found command sent successfully.")
		};
		found().catch(err => {
			console.error('SBG: Error when executing the Found command.');
			console.error(err);
		});
	},
};