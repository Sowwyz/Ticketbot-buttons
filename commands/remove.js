module.exports = {
    name: "remove",
    code: `
  $description[**<@$findMember[$message]> has been removed from the ticket**]
  $color[GREEN]
  $modifyChannelPerms[$channelID;-viewchannel;$findMember[$message]]
  $onlyIf[$memberExists[$findMember[$message]]==true;❌**I couldn't find this member**]
  $onlyIf[$getChannelVar[ticket]==true;❌ **This channel isn't a ticket**]
$onlyPerms[admin;]
  `
};// JavaScript source code
