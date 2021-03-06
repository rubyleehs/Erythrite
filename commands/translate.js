const botconfig = require(`../bot_config`);
const translate = require('@vitalets/google-translate-api');

module.exports = function (msg)
{
    const member = msg.mentions.members.first()
    let input = msg.content.substr(botconfig.prefix.length + 10);;
    let lang = input.split(" ")[0];
    var text;

    if (!member)
    {
        text = input.substr(lang.length + 1);
        trans();
    }
    else
    {
        msg.channel.fetchMessages({ limit: 15 }).then(messages =>
        {
            let userMsg = messages.filter(msg => msg.author.id === member.user.id);
            if (userMsg.size > 0)
            {
                text = userMsg.first().content;
                trans();
            }
            else
            {
                msg.channel.send(`No recent messages from ${member.user.username} found`)
                return;
            }
        }).catch(err =>
        {
            msg.channel.send("Error trying to fetch message history");
            console.log(err);
        });
    }

    function trans()
    {
        translate(text, { to: lang }).then(res =>
        {
            let o = "";
            if (res.from.text.autoCorrected) o += `Autocorrected Text`
            else o += `Original Text`

            o += " (" + res.from.language.iso.toUpperCase() + "):";
            if (res.from.text.autoCorrected) o += "\n`" + res.from.text.value + "`";
            else o += "\n`" + text + "`";

            o += "\nTranslated version (" + lang.toUpperCase() + "):";
            o += "\n`" + res.text + "`";

            msg.channel.send(o);
        }).catch(err =>
        {
            console.log(">>" + err);
        });
    }
}