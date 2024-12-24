require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['6283167665895']
global.ownMain = '6283167665895'
global.NamaOwner = '˜”*°• BASUKI STORE •°*”˜' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = 'Basuki Official' //
global.packname = 'Basuki-Bug-API' //
global.url1 = 'https://chat.whatsapp.com/H8xLDwv1hRk4H2IbaeOQzC' //
global.url2 = 'https://chat.whatsapp.com/H8xLDwv1hRk4H2IbaeOQzC' //
global.linkgc = 'https://chat.whatsapp.com/H8xLDwv1hRk4H2IbaeOQzC'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
