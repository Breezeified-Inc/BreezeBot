// make a slash command using module.exports that replies with an image of a cat.
//
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const discord = require('discord.js');

function getCat() {
    return fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => {
        return res.json()
        })
      .then(data => {
        return data[0]["url"] 
      })
  }


module.exports = {
    data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Replies with a cat!'),
async execute(interaction) {
    await getCat().then(cat => interaction.reply(cat))
    }, 
};
