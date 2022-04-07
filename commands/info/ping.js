module.exports = {
    name: "ping",
    catergory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Pong")
    }
}