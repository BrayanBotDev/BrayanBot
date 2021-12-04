require('console-stamp')(console, { format: ':date(HH:MM:ss).bold.grey' });
<<<<<<< HEAD
if (process.versions.node < 16.6) return require('./Modules/Utils').logError(`BrayanBot Requires Node.js version 16.6.0 or Higher.`)
=======
if (process.versions.node < 16.6) return require('./Modules/Utils').logError(`BryanBot Requires Node.js version 16.6.0 or Higher.`)
>>>>>>> cd446dd0c85ce04f9453be742325c059026ca1f6
const fs = require('fs'),
    YAML = require('yaml'),
    Discord = require('discord.js'),
    client = new Discord.Client({ intents: 32767 });

module.exports['client'] = client;
['config.yml', 'commands.yml', 'lang.yml'].forEach(x => module.exports[x.replace('.yml', '')] = YAML.parse(fs.readFileSync(x, 'utf-8'), { prettyErrors: true }));
['config', 'lang', 'commands'].forEach(x => client[x] = module.exports[x]);
['Events', 'SlashCmds', 'SlashCmdsData'].forEach(x => client[x] = []);
['Commands', 'Aliases'].forEach(x => client[x] = new Discord.Collection());
['ErrorHandler.js', 'EventHandler.js', 'CommandHandler.js', 'AddonHandler.js'].forEach(file => require(`./Modules/Handlers/${file}`).init())

if (client.config.Settings.Token) client.login(client.config.Settings.Token)
else return Utils.logError("An invalid token was provided.")
