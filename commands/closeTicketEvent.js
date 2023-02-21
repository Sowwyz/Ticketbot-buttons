module.exports = {
    type: "interactionCommand",
    prototype: "button",
    name: ["closebutton"],
    code: `
 $deleteChannels[$channelID]
 $wait[5s]
 $interactionReply[;{description:Ticket will be deleted in 5 seconds}{color:RED};;0]
 `
};