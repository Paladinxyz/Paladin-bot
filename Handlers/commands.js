const { getFiles } = require('../util/functions')
const fs = require("fs")
const { catergory } = require('../commands/info/ping')
const { CommandInteractionOptionResolver } = require('discord.js')

module.exports = (bot, reload) => {
    const {client} = bot
    
    fs.readdirSync("./commands/").forEach((catergory) => {
        let files = getFiles(`./commands/${catergory}` , ".js")

        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../commands/${category}/${f}`)]
            const command = require(`../commands/${catergory}/${f}`)
            client.command.set(command.name, command)
        })
    })
    console.log(`Loaded ${client.commands.size} commands`)
}