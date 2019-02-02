//the code written with visual studio code the best program for coding .
const Discord = require('discord.js')//definition of discord.js library
const client = new Discord.Client()//new client
const vip = require('./vip.json')
const prefix = vip.prefix

client.on('message', message => {
    let newserver = message.content.split(" ").slice(1).join(" ")
if(!message.author.id === vip.vipid) return message.channel.send('This Command For The Person Purchased The Premium :x:')
if(message.content.startsWith(prefix + 'vipmove')) {
    if(!newserver) return message.channel.send(`Please Write The ID Server`)
vip.dserver = newserver
message.channel.send(`Done The Premium Bot Moved To ${newserver} , Now You Must Invite Me In This Server https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
}
if(message.content.startsWith(prefix + 'vipinfo')) {
let embed = new Discord.RichEmbed()
.addField('The person who bought the bot:', `<@${vip.vipid}>`)
.addField('The time the bot was purchased:', `${client.user.createdAt}` || `Write here the time the bot was purchased`)
.addField('Bot expiration time:', `1 Year`)
message.channel.sendEmbed(embed)
}

})

client.on(`guildCreate`, guild => {
    if (guild.id !== vip.dserver) guild.leave();
    setTimeout(() => {
        client.guilds.forEach(guildss => {
            if (guildss.id !== vip.dserver) guild.leave();
        });
    }, 5000);
});

client.on('ready', () => {
    setTimeout(() => {
        vip.vipid.send(`Sorry But The Premium Time Has Been Ended, You Must Purchase New Resources To Complete The Use Of Premium Featers`)
       client.destroy()
    }, 31557600000);//premium time expirtion

})


/*put your premium bot token here 
=>*/client.login(config.token)//login to this token
