const botconfig = require(`../bot_config`);

module.exports = function (msg)
{
    if (msg.author.id == botconfig.masterUserID && !msg.author.bot)
    {
        return msg.reply(`you are my beloved master and the one whom rules them all.`)
    }
    else return msg.reply(`I don't know who you are yet. This fuctionality is still under development`)

}