const botconfig = require(`../botconfig`);
const math = require('mathjs');
const parser = math.parser();

math.import({
    'import': function () { throw new Error('Import is disabled') },
    'eval': function () { throw new Error('Eval is disabled') },
    'parse': function () { throw new Error('Parse is disabled') },
}, { override: true })

module.exports = function (msg)
{
    let mathInput = msg.content.substr(botconfig.prefix.length + 4);
    console.log('Input: ' + mathInput)

    try
    {
        msg.channel.send('`' + mathInput + '` returns `' + parser.eval(mathInput) + '`')
        msg.react('👍');
    }
    catch (err)
    {
        msg.channel.send(mathInput + ' errored with ' + err)
        msg.react('👎');
    }
}

