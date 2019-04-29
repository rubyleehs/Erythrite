const censor = require('../commands/censor')

module.exports = function (client, oldmsg, newmsg)
{
    if (oldmsg.author.bot) return;
    censor(newmsg.content, oldmsg);
}