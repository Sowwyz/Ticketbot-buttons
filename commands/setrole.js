module.exports = {
    name: "setrole",
    code: `
  $description[> ** Support Role is now <@&$findrole[$message]>**]
  $color[GREEN]
  $setServerVar[role;$findRole[$message]]
  $onlyIf[$roleExists[$findRole[$message]]!=false;? **I couldn't find this role**]

  `
}
