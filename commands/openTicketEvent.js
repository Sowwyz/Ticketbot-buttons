const embed = {
    content: "<@&$getServerVar[role]>",
    title: "Ticket",
    color: "GOLD",
    description: "Welcome {user.mention} please wait for the support"
};
module.exports = {
    type: "interactionCommand",
    prototype: "button",
    name: ["ticketbutton"],
    code: `

$if[$serverChannelExists[$getUserVar[ticket]]==false]

$interactionReply[Your ticket has been created <#$get[id]>;;;64]

$modifyChannelPerms[$get[id];-viewchannel;$guildID]
$modifyChannelPerms[$get[id];+viewchannel;$authorID]
$modifyChannelPerms[$get[id];+viewchannel;$getServerVar[role]]

 $apiMessage[$get[id];${embed.content};{description:$replaceText[${embed.description};{user.mention};<@$authorID>]}{title:${embed.title}}{color:${embed.color}}{footer: Bot By Sowwyz  };{actionRow:Close,2,4,closebutton}]
 $setChannelVar[ticket;true;$get[id]]
 
 $setUserVar[ticket;$get[id]]
 
 $let[id;$createChannel[ticket-$getServerVar[count];text;yes;$getServerVar[category]]]
 
 $wait[1]
 
 $setServerVar[count;$math[$getServerVar[count]+1]]
 
 $else
 
 $interactionReply[You cant create more than 1 ticket;;;64]
 
 $endif
 $onlyIf[$getServerVar[role]!=;]
 $onlyIf[$getServerVar[category]!=;]
  `
};