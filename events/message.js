const botconfig = require(`../botconfig`);

const kick = require('../commands/kick')
const whoami = require('../commands/whoami')
const math = require('../commands/math')


module.exports = function (client, msg)
{
    if (msg.author.bot) return;
    if (msg.content.startsWith(botconfig.prefix))
    {
        /*
        if (msg.author.id != '245146318396325890')
        {
            msg.reply('I only listen to my wonderful master Rubyleehs. Piss off sheep.')
            return;
        }

        */

        var s = msg.content.substr(botconfig.prefix.length);
        if (s.startsWith('kick')) return kick(msg);
        else if (s.startsWith('whoami')) return whoami(msg);
        else if (s.startsWith('math')) return math(msg);
    };
}