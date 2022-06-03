const { SlashCommandBuilder } = require('@discordjs/builders');

function getStatus() {
    return fetch("https://api.roblox.com/users/")
        .then(res => {

            return res.json()
        })
        .then(data => {
            return data[0]["IsOnline"]
        })
}



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
        .addStringOption(option =>
            option.setName('id')
                .setDescription('RBLX id of the user your checking.')
                .setRequired(true)),
async execute(interaction) {
        await getStatus().then(Status => interaction.reply(Status))
        
	},
};
