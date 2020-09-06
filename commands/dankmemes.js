// This file has been edited by Cryx. 

const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    aliases: ['memes'],
    description: 'meme!',
    execute(message, args) {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

        message.channel.startTyping();

        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
            console.log('Successfully sent a meme!');
        }).catch(err => console.error(err));

    },
}
