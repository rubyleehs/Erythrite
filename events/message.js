const kick = require('../commands/kick')
const whoami = require('../commands/whoami')
const math = require('../commands/math')

module.exports = function (client, msg)
{
    if (msg.content.startsWith('!!'))
    {
        if (msg.author.id != '245146318396325890' && !msg.author.bot)
        {
            msg.reply('I only listen to my wonderful master Rubyleehs. Piss off sheep.')
            return;
        }

        var s = msg.content.toLowerCase().substr(2);

        if (s.startsWith('kick')) return kick(msg);
        else if (s.startsWith('whoami')) return whoami(msg);
        else if (s.startsWith('math')) return math(msg);
    };
}