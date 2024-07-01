const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "STRAVAV2"
global.ownerName = "RennMine"
global.ownerBot = "6283806343604"
global.ownerNumber = ["6283806343604"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})