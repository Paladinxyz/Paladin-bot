const Discord = require("discord.js")
const { prefix, client } = require("..")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const {client, prefix} = bot

        if (!message.guild) return

        if(message.author.bot) return

        if(!message.content.startsWith(prefix))
            return

        const args = message.conent.slice(prefix.lenth).trim().split(/ +/g)

    }
}