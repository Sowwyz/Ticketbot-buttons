module.exports = [{
    name: "bigsowwyz",
    code: `$eval[$message]
  $onlyForIDs[$botOwnerID;]`
}, {
    name: "sowwyz",
    code: `done $updateCommands
    $onlyForIDs[$botOwnerID;]`
}];