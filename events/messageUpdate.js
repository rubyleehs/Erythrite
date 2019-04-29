const censor = require('../commands/censor')

module.exports = function (client, oldmsg, newmsg)
{
    if (oldmsg.author.bot) return;
    censor(newmsg.content, oldmsg);

    /*
    if (msg.content.startsWith(botconfig.prefix))
    {

        if (msg.author.id != '245146318396325890')
        {
            msg.reply('I only listen to my wonderful master Rubyleehs. Piss off sheep.')
            return;
        }
        censor(msg);

        var s = msg.content.substr(botconfig.prefix.length);
        if (s.startsWith('kick')) return kick(msg);
        else if (s.startsWith('whoami')) return whoami(msg);
        else if (s.startsWith('math')) return math(msg);
    };
    */
}