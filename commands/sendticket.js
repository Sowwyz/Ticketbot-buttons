const embed = {
    title: "Tickets",
    color: "GOLD",
    thumbnail: "$client[avatar]",
    reaction: "🎫",
};
module.exports = [{
    name: "ticket",
    code: `
 $apiMessage[$channelID;;{title:${embed.title}}{description:$message}{color:${embed.color}}{footer:Bot by Sowwyz}{thumbnail:${'https://cdn.discordapp.com/attachments/1077664612914303047/1077672376201912353/19e46b656ecc4258a389243ea30a5e8e.gif'}};{actionRow:${embed.reaction},2,2,ticketbutton}]
 $onlyIf[$message!=;❌ **You need to provide a message**]
 $onlyIf[$channelExists[$getServerVar[category]]!=false;❌ **Set tickets category first**]
 $onlyIf[$roleExists[$getServerVar[role]]!=false;❌ **Set tickets support role first**]
 `
}];