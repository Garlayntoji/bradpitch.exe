const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "done",
	description: "Returns an embed message stating that the ticket is complete.",
	execute(message, args) {
		async function done() {
			const doneEmbed = new Discord.MessageEmbed()
			.setColor('#1a29ca')
			.setTitle('Your request is now complete!')
			.setDescription("Congratulations!")
			.setThumbnail('https://static.wikia.nocookie.net/nomanssky_gamepedia/images/a/a1/GBS_Logo_Rework.png/revision/latest/scale-to-width-down/600?cb=20210303123857')
			.addField("You have reached your target Point of Interest. Well done!", "You can build a base computer or a save beacon to save its location.")
			.addField("Thank you for using the POI Hunting Service!", "Fly safe!")
			.setImage('https://cdn.shopify.com/s/files/1/0180/2345/products/THANK_YOU_2048x2048.jpg?v=1571438801')
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

			await message.channel.send(doneEmbed);

			console.log("SBG: Done command sent successfully.")
		};
		done().catch(err => {
			console.error('SBG: Error when executing the Done command.');
			console.error(err);
		});
	},
};