const Discord = require('discord.js');
const fs = require('fs');
const {prefix} = require('./config.json');
const {token} = require('./token.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready to go!');
	client.user.setPresence({ status: 'online', game: {name: 'b!help || Guilds: '+client.guilds.size+''}});	


});

const cheerio = require('cheerio');

const request = require('request');


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try{
		client.commands.get(command).execute(message, args);
	}catch(error) {
		console.error(error);
		message.reply("There was an issue executing that command, or this command doesn't exist!");
	}
});



client.login(token);
