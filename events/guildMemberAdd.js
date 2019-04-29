var welcomeChannelID = '542189782235611157';
var rulesChannelID = '514429978570653699';

module.exports = function (client, member)
{
    if (client.channels.get(welcomeChannelID) != undefined && lient.channels.get(rulesChannelID) != undefined)
    {
        client.channels.get(welcomeChannelID).send(`Hi <@${member.id}>! \nWelcome to Cinnabar! Please read the rules in <#${rulesChannelID}>.`)
    }
}