var deletedMessagesChannelID = '571564969213296660';

const censoredwords = require('../censoredwords');

var scensor = [];

module.exports = function (msg, msgObject)
{
    if (scensor.length <= 0) updateSCensor(("" + censoredwords.words).toLowerCase(), 4);

    if (stringContains(msg.toLowerCase(), scensor))
    {
        if (msgObject.guild.channels.get(deletedMessagesChannelID) != undefined)
        {
            msgObject.guild.channels.get(deletedMessagesChannelID).send(`I deleted: \n\`${msg}\`\n by ${msgObject.member.user.tag} `)
            msgObject.delete();
        }
        else console.log("no delete channel");
    }
}

function stringContains(input, check)
{
    for (let i = 0; i < check.length; i++)
    {
        if (input.includes(check[i])) return true;
    }
    return false;
}

function updateSCensor(check, n)
{
    scensor = [];
    for (let i = 0; i < check.length + 1 - n; i++)
    {
        scensor.push(check.substr(i, n));
    }
    console.log("check start...");
}