const botconfig = require(`../botconfig`);

module.exports = function (msg)
{
    if (msg.author.id != botconfig.masteruserid)
    {
        msg.reply('I only listen to my wonderful master Rubyleehs. Piss off sheep.')
        return;
    }

    const member = msg.mentions.members.first()

    if (!member)
    {
        return msg.reply(`Who are you trying to kick? You must mention a user.`)
    }
    if (!member.kickable)
    {
        return msg.reply(`I can't kick this user. Sorry!`)
    }
    return member
        .kick()
        .then(() => msg.reply(`${member.user.tag} was kicked.`))
        .catch(error => msg.reply(`Sorry, an error occured.`))
}