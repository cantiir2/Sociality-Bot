 /* eslint-disable no-unused-vars */ 
 const { create, Client } = require('@open-wa/wa-automate') 
 const { color, options } = require('./tools') 
 const { ind, eng } = require('./message/text/lang/') 
 const { loader } = require('./function') 
 const { version, bugs } = require('./package.json') 
 const sociality = require('./message/index.js') 
 const figlet = require('figlet') 
 const canvas = require('discord-canvas') 
 const config = require('./config.json') 
 const ownerNumber = config.ownerBot 
 const fs = require('fs-extra') 
 const { groupLimit, memberLimit } = require('./database/bot/setting.json') 
 const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
  
 const start = (sociality = new Client()) => { 
     console.log(color(figlet.textSync('SocialityBot', 'Ghost'), 'cyan')) 
     console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length)) 
     console.log(color('=> Source code version:', 'yellow'), color(version)) 
     console.log(color('=> Bugs? Errors? Pertanyaan? Visit here:', 'yellow'), color(bugs.url)) 
     console.log(color('[Sociality]'), color('SocialityBot is now online!', 'yellow')) 
     console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta')) 
     loader.nocache('../message/index.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!')) 
  
     sociality.onStateChanged((state) => { 
         console.log(color('[Sociality]'), state) 
         if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') sociality.forceRefocus() 
     }) 
  
     sociality.onAddedToGroup(async (chat) => { 
         const gc = await sociality.getAllGroups() 
         console.log(color('[Sociality]'), 'Ditambahkan ke group baru. Name:', color(chat.contact.name, 'yellow'), 'Total members:', color(chat.groupMetadata.participants.length, 'yellow')) 
         if (chat.groupMetadata.participants.includes(ownerNumber)) { 
             await sociality.sendText(chat.id, ind.addedGroup(chat)) 
         } else if (gc.length > groupLimit) { 
             await sociality.sendText(chat.id, `Group sudah penuh\n\nDari total: ${gc.length}/${groupLimit}\n\n untuk invite bot ke group harus jadi premium dulu. Hub Owner`) 
             await sleep(1000)
             await sociality.deleteChat(chat.id) 
             await sociality.leaveGroup(chat.id) 
         } else if (chat.groupMetadata.participants.length < memberLimit) { 
             await sociality.sendText(chat.id, `Harus lebih dari ${memberLimit} members di group!`) 
             await sleep(1000)
             await sociality.leaveGroup(chat.id) 
             await sociality.deleteChat(chat.id) 
         } else { 
             await sociality.sendText(chat.id, ind.addedGroup(chat)) 
         } 
     }) 
  
     sociality.onMessage((message) => { 
         // Uncomment this code below for activating an automated cache deletion 
         
         sociality.getAmountOfLoadedMessages() 
             .then((msg) => { 
                 if (msg >= 1000) { 
                     console.log(color('[Sociality]'), color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow')) 
                     sociality.cutMsgCache() 
                     console.log(color('[Sociality]'), color('Cache deleted!', 'yellow')) 
                 } 
             }) 
         
         require('./message/index.js')(sociality, message) 
     }) 
  
     sociality.onIncomingCall(async (callData) => { 
         await sociality.sendText(callData.peerJid, ind.blocked(ownerNumber)) 
         await sociality.contactBlock(callData.peerJid) 
         console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked.`, 'yellow')) 
     }) 
  
     sociality.onGlobalParticipantsChanged(async (event) => { 
         const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json')) 
         const isWelcome = _welcome.includes(event.chat) 
         const gcChat = await sociality.getChatById(event.chat) 
         const pcChat = await sociality.getContact(event.who) 
         let { pushname, verifiedName, formattedName } = pcChat 
         pushname = pushname || verifiedName || formattedName 
         const { name, groupMetadata } = gcChat 
         const botNumbers = await sociality.getHostNumber() + '@c.us' 
         try { 
             if (event.action === 'add' && event.who !== botNumbers && isWelcome) { 
                 const pic = await sociality.getProfilePicFromServer(event.who) 
                 if (pic === undefined) { 
                     var picx = 'https://s1.zerochan.net/Nakano.Nino.600.2884842.jpg' 
                 } else { 
                     picx = pic 
                 } 
                 var desc = groupMetadata.desc
                 const welcomer = await new canvas.Welcome() 
                     .setUsername(pushname) 
                     .setDiscriminator(event.who.substring(6, 10)) 
                     .setMemberCount(groupMetadata.participants.length) 
                     .setGuildName(name) 
                     .setAvatar(picx) 
                     .setColor('border', '#00100C') 
                     .setColor('username-box', '#00100C') 
                     .setColor('discriminator-box', '#00100C') 
                     .setColor('message-box', '#00100C') 
                     .setColor('title', '#8529c2') 
                     .setBackground('https://i.ibb.co/RB1h3nR/welcome.jpg') 
                     .toAttachment() 
                 const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}` 
                 const piye = `Selamat datang ${pushname.replace('@c.us', '')}\n Moho dibaca deskripsi group dulu ya :\n ${desc}`
                 await sociality.sendFile(event.chat, base64, 'welcome.png', `${piye}`)
             } else if (event.action === 'remove' && event.who !== botNumbers && isWelcome) { 
                 const pic = await sociality.getProfilePicFromServer(event.who) 
                 if (pic === undefined) { 
                     var picxs = 'https://s1.zerochan.net/Nakano.Nino.600.2884842.jpg' 
                 } else { 
                     picxs = pic 
                 } 
                 const bye = await new canvas.Goodbye() 
                     .setUsername(pushname) 
                     .setDiscriminator(event.who.substring(6, 10)) 
                     .setMemberCount(groupMetadata.participants.length) 
                     .setGuildName(name) 
                     .setAvatar(picxs) 
                     .setColor('border', '#00100C') 
                     .setColor('username-box', '#00100C') 
                     .setColor('discriminator-box', '#00100C') 
                     .setColor('message-box', '#00100C') 
                     .setColor('title', '#8529c2') 
                     .setBackground('https://i.ibb.co/RB1h3nR/welcome.jpg') 
                     .toAttachment() 
                 const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}` 
                 await sociality.sendFile(event.chat, base64, 'welcome.png', `Bye ${pushname}, we will miss you~`) 
             } 
         } catch (err) { 
             console.error(err) 
         } 
     }) 
 } 
  
 create(options(start)) 
     .then((sociality) => start(sociality)) 
     .catch((err) => console.error(err)) 