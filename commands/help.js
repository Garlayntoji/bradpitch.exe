const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
	name: 'help',
	description: 'A help command.',
	execute(message, args) {


		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#c75a00')
			.setTitle('Help')
			.setAuthor('Garlayn Toji (click on me!)', 'https://cdn.discordapp.com/avatars/266216852785594379/76c550744bcef3f7caf665c90bb6d9cb.png', 'https://discord.gg/stSuDjS')
			.setDescription("Here's the help page. Thank you for using Brad Pitch")
			.setThumbnail('https://cdn.discordapp.com/avatars/266216852785594379/76c550744bcef3f7caf665c90bb6d9cb.png')
			.addFields(
				{ name: 'b!help', value: 'You already know the result.' },
				{ name: 'b!ping', value: 'Brad Pitch responds "Pong".' },
				{ name: 'Work in progress', value: 'Work in progress' },
			)
			.addField('Work in progress', 'Work in progress')
			.setImage('https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg')
			.setTimestamp()
			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

		message.channel.send(helpEmbed);
	},
};
