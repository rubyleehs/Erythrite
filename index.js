const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require(`./bot_config`);
const fs = require('fs');

fs.readdir('./events/', (err, files) =>
{
    files.forEach(file => 
    {
        const eventHandler = require(`./events/${file}`) //eventHandler refrences the other files/scripts/class (like GamManager in GM.deltaTime)
        const eventName = file.split('.')[0]  //file name without extension
        client.on(eventName, function (...arg) { eventHandler(client, ...arg) })
        //client.on(name, arguments) creates the event with eventName
        //eventName becomes an event which calls eventHandler function with the input (client,args)
        //where client is clienet and ...args is any amount of input by user
    })
})

client.login(botconfig.token);
