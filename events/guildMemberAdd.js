const channelIDs = require('../channel_ids');

module.exports = function (client, member)
{
    if (client.channels.get(channelIDs.welcomeChannel) != undefined && client.channels.get(channelIDs.rulesChannel) != undefined)
    {
        client.channels.get(channelIDs.welcomeChannel).send(`Hi <@${member.id}>! \nWelcome to Cinnabar! Please read the rules in <#${channelIDs.rulesChannel}>.`)
    }
    else console.log("no welcome channel/rules channel");
}