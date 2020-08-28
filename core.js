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

client.on('b!dankmemes', message => {
	exports.run = async (client, message, args) => {
		try {

        const { body } = await snekfetch

            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')

            .query({ limit: 800 });

        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);

        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');

        const randomnumber = Math.floor(Math.random() * allowed.length)

        const embed = new Discord.RichEmbed()

        .setColor(0x00A2E8)

        .setTitle(allowed[randomnumber].data.title)

        .setDescription("Posted by: " + allowed[randomnumber].data.author)

        .setImage(allowed[randomnumber].data.url)

        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)

        .setFooter("Memes provided by r/dankmemes")

        message.channel.send(embed)

    } catch (err) {
        return console.log(err);
    }

    }
});



client.login(token);
