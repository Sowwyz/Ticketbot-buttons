const aoi = require("aoi.js");
const bot = new aoi.Bot({
    token: "",//TOKEN
    prefix: "",//PREFIX

});

bot.variables(require("./vars.js"));
bot.onMessage();
bot.onInteractionCreate();
bot.loadCommands("./commands/");