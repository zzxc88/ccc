const fs = require('fs');
const chalk = require('chalk');
/// ISI APIKEYMU DI SINI
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "_" // isi domai lu di sini 
global.apikey = "_" // Isi api ptla
global.capikey = "_" // Isi api ptlc

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
