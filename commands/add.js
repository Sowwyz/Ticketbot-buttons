module.exports = {
    name: "add",
    code: `
  $description[**<@$findMember[$message]> has been added to the ticket**]
  $color[GREEN]
  $modifyChannelPerms[$channelID;+viewchannel;$findMember[$message]]
  $onlyIf[$memberExists[$findMember[$message]]==true;❌**I couldn't find this member**]
$onlyIf[$getChannelVar[ticket]==true;❌ **This channel isn't a ticket**]
$onlyPerms[admin;]
  `
};