require("./module")

global.owner = "6287705048235"
global.creAtor = "6287705048235@s.whatsapp.net"
global.namabot = "Tante28Botz"
global.autoJoin = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Tante28Botz"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})