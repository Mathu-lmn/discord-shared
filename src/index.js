/* discord-shared -> Prints mutual members in a list of discord servers */
/* Made by Mathu-lmn and inspired by "https://github.com/majorgamerjay/doparata" */

/* Set up */
const LocalUtils = require('./mods/LocalUtils');
const Utilities = require('./mods/Utilities');
const Logging = require('./mods/Logging');

const logger = new Logging.Logger(bool_fs=true);

logger.logOutput("INFO", "Started script!");

/* Set up Discord Client */
const Discord = require('discord.js');
const client  = new Discord.Client();

logger.logOutput("INFO", "Created client instance!");

const config = require('../config/config.json');
logger.logOutput("INFO", "Parsed config!");

const servers = require('../config/server_list.json').servers;
logger.logOutput("INFO", "Parsed server list!");

if (servers.length < 2)
    Utilities.killMyself(23, "You need at least 2 servers to run this script!");

client.on('ready', () => {
    logger.logOutput("SUCC", "Established connection to the client!");

    const serverCache = client.guilds.cache;
    logger.logOutput("SUCC", "Acquired Guilds cache of the client!");

    server_members = new Array(servers.length);

    for(let k = 0; k < servers.length; ++k)
        server_members[k] = new Array();

    let i = 0;
    servers.forEach(perServer => {
        serverCache.get(perServer).members.cache.each(perMember => {
            server_members[i].push(perMember.user.id);
        });
        ++i;
    });

    const accumulation = [];
    Utilities.battleRoyale(server_members, accumulation);
    logger.logOutput("SUCC", "Got member list!");

    const userCache = client.users.cache;

    if (config.pretty_print == true) {
        accumulation.forEach(user => new LocalUtils.PrettyUser(user, userCache, config.verbose_level));
    }

    else {
        if (config.verbose_level == 1) accumulation.forEach(eachId => console.log(eachId));
        else accumulation.forEach(eachId => console.log(userCache.get(eachId)));
    }
});

client.login(config.token);
