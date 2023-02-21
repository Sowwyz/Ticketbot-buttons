module.exports = {
    name: "setcategory",
    code: `
  $description[> ** Tickets Category is now <#$findchannel[$message]>**]
  $color[GREEN]
  $setServerVar[category;$findchannel[$message]]
  $onlyIf[$channelType[$findchannel[$message]]==category;**❌ Invalid category**]
  $onlyIf[$channelExists[$findchannel[$message]]!=false;❌ **I couldn't find this category*]

  `
}
