//Import Required Modules!
const Discord = require('discord.js');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const prefix = "!";
const fetch = require('node-fetch');
const {Client, Intents, Messages, Guild} = require('discord.js');
const keepAlive = require("./server")

const client = new Client({
  // Get Intents
  intents: new Intents([
    "GUILDS",
    "GUILD_MESSAGES"
  ])
  
})


client.on('ready', () => {
  console.log('Bot is ready');
});


client.login(process.env.token)

client.on('ready', () => console.log('The Bot is ready!'));
// Adding jokes function

// Jokes from dcslsoftware.com/20-one-liners-only-software-developers-understand/
// www.journaldev.com/240/my-25-favorite-programming-quotes-that-are-funny-too
const jokes = [
  'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
  '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
  'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
  'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
  'If you listen to a UNIX shell, can you hear the C?',
  'Why do Java programmers have to wear glasses? Because they don’t C#.',
  'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
  'When Apple employees die, does their life HTML5 in front of their eyes?',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.',
  'Before software can be reusable it first has to be usable.',
  'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
  'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
  'There are two ways to write error-free programs; only the third one works.',
];

client.on('message', (msg) => {
  if (msg.content === '?joke') {
    msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
  }
});


// Stufff 
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	// ...
});



function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})




// Roblox Api Call Test
function getJell() {
  return fetch("https://api.roblox.com/users/2956924165")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data("IsOnline")  
    })
}

client.on("ready", () => {
  console.log(`Roblox API Test as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content === "%Jellus") {
    getJell().then(quote => msg.channel.send(quote))
  }
})
// Test
client.on('interactionCreate', async interaction => {
	// ...
	if (commandName === 'cat') {
		await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		interaction.editReply({ files: [file] });
	}
});
keepAlive()