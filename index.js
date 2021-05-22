//Loading all dependencies
const Discord = require('discord.js');
const fs = require('fs');
const randomPuppy = require('random-puppy');
const {prefix} = require('./config.json');
const {token} = require('./token.json');

//Constructing a new Discord client named client. It represents the bot
const client = new Discord.Client();
client.commands = new Discord.Collection();


//Files filtering
const generalCommands = fs.readdirSync('./commands/general').filter(file => file.endsWith('.js'));
const helpCommands = fs.readdirSync('./commands/help').filter(file => file.endsWith('.js'));
const sbgCommands = fs.readdirSync('./commands/sbg').filter(file => file.endsWith('.js'));

//For loops finding the asked file	
for(const file of generalCommands) {
	const command = require(`./commands/general/${file}`);
	client.commands.set(command.name, command);
}
for(const file of helpCommands) {
	const command = require(`./commands/help/${file}`);
	client.commands.set(command.name, command);
}
for(const file of sbgCommands) {
	const command = require(`./commands/sbg/${file}`);
	client.commands.set(command.name, command);
}


//Bot connection to Discord with connection success message in the console and set Presence
client.on('ready', () => {
	console.log('Ready to go!');
	client.user.setPresence({ status: 'online', activity: {name: 'b!help'}});	


});

//Commands execution function
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


//Login function using the bot's token
client.login(token);
