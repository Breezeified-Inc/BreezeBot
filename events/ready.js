module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Events are ready as ${client.user.tag}`);
	},
};
