const botconfig = require(`../bot_config`);
const translate = require('@vitalets/google-translate-api');

module.exports = function (msg)
{
    const member = msg.mentions.members.first()
    let input = msg.content.substr(botconfig.prefix.length + 10);;
    let lang = input.split(" ")[0];
    let text;

    if (!member) text = input.substr(lang.length + 1);
    else text = member.lastMessage.content;

    /*
    let output = "";
    translate(text, { to: lang }).then(res =>
    {
        let output = "";
        output += `Translated from ${res.from.language.iso}.`
        if (res.from.text.autoCorrected)
        {
            output += `Autocorrected`
            if (res.from.text.value.length < 80)
            {
                output += "to:\n `" + res.from.text.value.length + "`";
            }
            else output += ".";
        }
        output += `\n${res.to.language.iso} translated version:`;
        output += "\n'" + res.text + "'";

    }).catch(err =>
    {
        console.error(err);
    });
    */


    translate(text, { to: lang }).then(res =>
    {
        let o = "";
        o += `Translated from ${res.from.language.iso}.`
        if (res.from.text.autoCorrected)
        {
            o += `Autocorrected`
            if (res.from.text.value.length < 80)
            {
                o += "to:\n `" + res.from.text.value.length + "`";
            }
            else o += ".";
        }
        o += `\n${lang} translated version:`;
        o += "\n`" + res.text + "`";
        console.log(res.text);

        msg.reply(o);
    }).catch(err =>
    {
        console.log(">>" + err);
    });
}