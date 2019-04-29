const channelIDs = require('../channel_ids');
const censoredwords = require('../censored_words');

var scensor = [];

module.exports = function (msg, msgObject)
{
    if (stringContains(msg.toLowerCase(), censoredwords.words))
    {
        if (msgObject.guild.channels.get(channelIDs.deletedMessagesChannel) != undefined)
        {
            msgObject.guild.channels.get(channelIDs.deletedMessagesChannel).send(`I deleted: \n\`${msg}\`\n by ${msgObject.member.user.tag} `)
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
