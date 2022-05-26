const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require('node-fetch')

function getQuote() {
    return fetch("https://zenquotes.io/api/random")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            return `"${data[0]["q"]}" - ${data[0]["a"]}`
        })
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`inspire`)
        .setDescription('Inspire you with a quote.'),
    async execute(interaction) {
        getQuote().then(quote => {
            interaction.reply(quote)
        })
    }
}