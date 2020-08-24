const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
	name: 'help',
	description: 'A help command.',
	execute(message, args) {


		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#c75a00')
			.setTitle('Help: General')
			.setDescription("Here's the help page. Thank you for using Brad Pitch")
			.setThumbnail('https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg')
			.addFields(
				{ name: 'b!help', value: 'You already know the result.' },
				{ name: 'b!ping', value: 'Brad Pitch responds "Pong".' },
				{ name: 'b!info', value: 'Shows the informations page.' },
			)
			.addField('Work in progress', 'Work in progress')
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

		message.channel.send(helpEmbed);
	},
};
