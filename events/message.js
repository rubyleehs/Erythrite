const botconfig = require(`../botconfig`);

const kick = require('../commands/kick')
const whoami = require('../commands/whoami')
const math = require('../commands/math')
const censor = require('../commands/censor')

module.exports = function (client, msg)
{
    if (msg.author.bot) return;
    censor(msg.content, msg);

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