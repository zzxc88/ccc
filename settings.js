//CREATOR Gxyenn 
//Version Script No Version

const fs = require('fs');
const chalk = require('chalk');
const XlesySet = require('./XlesySet'); // Import konfigurasi dari XlesySet.js

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

// Data bot
global.author = XlesySet.author;
global.namestore = XlesySet.namestore;
global.packname = XlesySet.packname;
global.botname = XlesySet.botname;
global.owner = XlesySet.owner;
global.listprefix = XlesySet.listprefix;
global.listv = XlesySet.listv;
global.number_bot = XlesySet.number_bot;
global.tempatDB = 'database.json'
global.pairing_code = true

// Data pembayaran
global.dana = XlesySet.dana;
global.gopay = XlesySet.gopay;
global.ovo = XlesySet.ovo;
global.pulsa = XlesySet.pulsa;
global.qris = XlesySet.qris;

global.img = {
    thumbnailganda: 'https://cloudkuimages.guru/uploads/images/681c7a1643366.jpg',
    // image pasyment
    danaimg: 'https://cloudkuimages.guru/uploads/images/681c7cc34ee99.jpg',
    gopayimg: 'https://cloudkuimages.guru/uploads/files/681c7cfc33f03.jpg',
    ovoimg: 'https://cloudkuimages.guru/uploads/images/681c7d28ed23f.jpg',
    qrisimg: './lib/media/image/qris.jpg',
    // Image need    
    others: 'https://cloudkuimages.guru/uploads/images/681c7e203b9a7.jpg',
    // image menu-menu
    menu: './lib/media/image/Tanjiro.jpg',
    menu2: './lib/media/image/Tanjiro2.jpg',
    }

global.fake = {    
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://files.catbox.moe/92vy0p.jpg',
	thumbnail: fs.readFileSync('./src/media/Xlesy.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	gh: 'https://github.com/Gxyenn/Gxyenn',
	gc: 'https://whatsapp.com/channel/0029Vap5nJh2UPBDIc9bja1s',
	ch: '120363334736301537@newsletter',
}

global.limit = {
	free: 15,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Your Apikey has run out!.\n_Please contact the creator to buy your Apikey back._',
	owner: '𝚘𝚠𝚗𝚎𝚛 𝚊𝚔𝚜𝚎𝚜 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜',
	admin: '𝙰𝚍𝚖𝚒𝚗 𝚘𝚗𝚕𝚢 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜',
	botAdmin: '𝙱𝚘𝚝 𝚗𝚘𝚝 𝚊𝚍𝚖𝚒𝚗',
	group: '𝚞𝚜𝚎 𝚒𝚗 𝚐𝚛𝚞𝚙 ',
	private: '𝚞𝚜𝚎 𝚒𝚗 𝚙𝚛𝚒𝚟𝚊𝚝𝚎 𝚌𝚑𝚊𝚝',
	limit: '𝚈𝚘𝚞𝚛 𝙻𝚒𝚖𝚒𝚝 𝙷𝚊𝚜 𝙱𝚎𝚎𝚗 𝚏𝚒𝚗𝚒𝚜𝚑𝚎𝚍',
	prem: '𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚞𝚜𝚎𝚛𝚜 𝚘𝚗𝚕𝚢',
	wait: '𝚠𝚊𝚒𝚝 𝚕𝚘𝚊𝚍𝚒𝚗𝚐',
	error: '𝙴𝚛𝚛𝚘𝚛',
	done: '𝚜𝚞𝚌𝚌𝚎𝚜',
	load: '𝙻𝚘𝚊𝚍𝚒𝚗𝚐 '
}

global.APIs = {
  Xlesy: 'https://rest-api-gxyenn.vercel.app/',
}

global.APIKeys = {
  'https://rest-api-gxyenn.vercel.app/': 'Xlesy-awokawok', // API Key yang dihasilkan
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
