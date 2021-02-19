const Discord = require("discord.js");
const config = require("./config.json");


const client = new Discord.Client();

const prefix = '$'
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    
    console.log(args, command)
})





client.login(config.BOT_TOKEN);