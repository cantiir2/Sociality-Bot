/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */

/**
 * This source code below is free, please DO NOT sell this in any form!
 * Source code ini gratis, jadi tolong JANGAN jual dalam bentuk apapun!
 *
 * If you copying one of our source code, please give us CREDITS. Because this is one of our hardwork.
 * Apabila kamu menjiplak salah satu source code ini, tolong berikan kami CREDIT. Karena ini adalah salah satu kerja keras kami.
 *
 * If you want to contributing to this source code, pull requests are always open.
 * Apabila kamu ingin berkontribusi ke source code ini, pull request selalu kami buka.
 *
 * Thanks for the contributions.
 * Terima kasih atas kontribusinya.
 */

/********** MODULES **********/
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const config = require('../config.json')
const vhtearkey = require('../config.json')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const cheerio = require('cheerio');
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const sagiri = require('sagiri')
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const bdr = require('rumus-bdr')
const fetch = require('node-fetch')
const isPorn = require('is-porn')
const exec = require('await-exec')
const webp = require('webp-converter')
const sharp = require('sharp')
const saus = sagiri(config.nao, { results: 5 })
const axios = require('axios')
const tts = require('node-gtts')
const nekobocc = require('nekobocc')
const ffmpeg = require('fluent-ffmpeg')
const bent = require('bent')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const canvas = require('canvacord')
const mathjs = require('mathjs')
const emojiUnicode = require('emoji-unicode')
const moment = require('moment-timezone')
const translate = require('@vitalets/google-translate-api')
moment.tz.setDefault('Asia/Jakarta').locale('id')
//const genshin = require('genshin-impact-api')
const google = require('google-it')
const cron = require('node-cron')
/********** END OF MODULES **********/

/********** UTILS **********/
const { msgFilter, color, processTime, isUrl, createSerial } = require('../tools')
const { BrainlySearch, nsfw, weeaboo, downloader, fun, misc, toxic, rugapoi, rugaapi, meme } = require('../lib')
const { uploadImages } = require('../tools/fetcher')
const { ind, eng } = require('./text/lang/')
const { daily, level, register, afk, reminder, premium, limit} = require('../function')
const feature = require('../lib/poll');
const Exif = require('../tools/exif')
const { or } = require('mathjs')
const cariKasar = require('../lib/kataKotor')
const { title } = require('process')
const { settings } = require('cluster')
const { owner } = require('./text/lang/ind')
const exif = new Exif()
const cd = 4.32e+7
const limitCount = 10
const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
const tanggal = moment.tz('Asia/Jakarta').format('DD-MM-YYYY')
/********** END OF UTILS **********/

/********** DATABASES **********/
const _nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const _antiporn = JSON.parse(fs.readFileSync('./database/group/antiporn.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antinsfw = JSON.parse(fs.readFileSync('./database/group/antinsfw.json'))
const _antipromote = JSON.parse(fs.readFileSync('./database/group/antipromote.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const _autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'))
const _ban = JSON.parse(fs.readFileSync('./database/bot/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'))
const _mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
const _antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _reminder = JSON.parse(fs.readFileSync('./database/user/reminder.json'))
const _daily = JSON.parse(fs.readFileSync('./database/user/daily.json'))
const _setting = JSON.parse(fs.readFileSync('./database/bot/setting.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let { memberLimit, groupLimit } = _setting
let dbbadword = JSON.parse(fs.readFileSync('./lib/database/katakasar.json'))
let baddword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let multi = true
let nopref = false
let prefa = 'anjing'
/********** END OF DATABASES **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = sociality = async (sociality = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, chatId, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList, author } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await sociality.getHostNumber() + '@c.us'
        global.pollfile = 'poll_Config_' + chat.id + '.json'
        global.voterslistfile = 'poll_voters_Config_' + chat.id + '.json'
        const blockNumber = await sociality.getBlockedIds()
        const ownerNumber = config.ownerBot
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await sociality.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
        const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        const command = chats.toLowerCase().split(' ')[0] || ''
        if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        const chatss = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const args = body.trim().split(/ +/).slice(1)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const isKasar = await cariKasar(groupId)
        const seriall = sender.id
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''
        const isBadword = baddword.includes(groupId)
        const speed = require('performance-now')
       // const person = author.replace('@c.us', '')
        const groupMembers = isGroupMsg ? await sociality.getGroupMembersId(groupId) : false
        /********** VALIDATOR **********/
        const isCmd = body.startsWith(prefix)
        const arg = body.substring(body.indexOf(' ') + 1)
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        //const isBanned = _ban.includes(sender.id)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const isRegistered = register.checkRegisteredUser(sender.id, _registered)
        const isNsfw = isGroupMsg ? _nsfw.includes(groupId) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isDetectorPorn = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isPromoteDetector = isGroupMsg ? _antipromote.includes(groupId) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false
        const isBaddword = isGroupMsg ? _antibadword.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isMute = isGroupMsg ? _mute.includes(chat.id) : false
        const isAfkOn = afk.checkAfkUser(sender.id, _afk)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const timeer = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
        const waktuu = moment(t * 1000).format('HH:mm')
        /********** END OF VALIDATOR **********/
        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim',
                Ti: '[❗] Replay sticker dengan caption *#stickertoimg* atau tag sticker yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }
        const kutuk = [
            'Sapi',
            'Batu',
            'Babi',
            'Anak soleh dan soleha',
            'pohon pisang',
            'janda',
            'bangsat',
            'buaya',
            'Jangkrik',
            'Kambbiingg',
            'Bajing',
            'kang seblak',
            'kang gorengan',
            'kang siomay',
            'badut ancol',
            'Tai',
            'Kebo',
            'Badak biar Asli',
            'tai kotok',
            'Bwebwek',
            'Orang Suksesss...... tapi boong',
            'Beban Keluarga' //tambahin  aja
            ]
        // Automate
        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]

            const apakah = [
                'Ya',
                'Tidak',
                'Coba Ulangi',
                'Mungkin'
                ]

        premium.expiredCheck(_premium)
        cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Resetting user limit...')
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })

        //////////////////////////////////////////////////////////////// SLEEEEEEP //////////////////////////////////////////////////////////////////

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        ////////////////////////////////////////////////// SLEEEEEEP /////////////////

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Trainee'
        if (levelRole <= 5) {
            role = 'Senior Trainee'
        } else if (levelRole <= 10) {
            role = 'Private'
        } else if (levelRole <= 15) {
            role = 'Corporal'
        } else if (levelRole <= 20) {
            role = 'Sergeant'
        } else if (levelRole <= 25) {
            role = 'Staff Sgt. Grade 1'
        } else if (levelRole <= 30) {
            role = 'Staff Sgt. Grade 2'
        } else if (levelRole <= 35) {
            role = 'Staff Sgt. Grade 3'
        } else if (levelRole <= 40) {
            role = 'Sgt. 1st Class Grade 1'
        } else if (levelRole <= 45) {
            role = 'Sgt. 1st Class Grade 2'
        } else if (levelRole <= 50) {
            role = 'Sgt. 1st Class Grade 3'
        } else if (levelRole <= 55) {
            role = 'Sgt. 1st Class Grade 4'
        } else if (levelRole <= 60) {
            role = 'Master Sgt. Grade 1'
        } else if (levelRole <= 65) {
            role = 'Master Sgt. Grade 2'
        } else if (levelRole <= 70) {
            role = 'Master Sgt. Grade 3'
        } else if (levelRole <= 75) {
            role = 'Master Sgt. Grade 4'
        } else if (levelRole <= 80) {
            role = 'Master Sgt. Grade 5'
        } else if (levelRole <= 85) {
            role = '2nd Lt. Grade 1'
        } else if (levelRole <= 90) {
            role = '2nd Lt. Grade 2'
        } else if (levelRole <= 95) {
            role = '2nd Lt. Grade 3'
        } else if (levelRole <= 100) {
            role = '2nd Lt. Grade 4'
        } else if (levelRole <= 105) {
            role = '1st Lt. Grade 1'
        } else if (levelRole <= 110) {
            role = '1st Lt. Grade 2'
        } else if (levelRole <= 115) {
            role = '1st Lt. Grade 3'
        } else if (levelRole <= 120) {
            role = '1st Lt. Grade 4'
        } else if (levelRole <= 125) {
            role = '1st Lt. Grade 5'
        } else if (levelRole <= 130) {
            role = 'Captain Grade 1'
        } else if (levelRole <= 135) {
            role = 'Captain Grade 2'
        } else if (levelRole <= 140) {
            role = 'Captain Grade 3'
        } else if (levelRole <= 145) {
            role = 'Captain Grade 4'
        } else if (levelRole <= 150) {
            role = 'Captain Grade 5'
        } else if (levelRole <= 155) {
            role = 'Major Grade 1'
        } else if (levelRole <= 160) {
            role = 'Major Grade 2'
        } else if (levelRole <= 165) {
            role = 'Major Grade 3'
        } else if (levelRole <= 170) {
            role = 'Major Grade 4'
        } else if (levelRole <= 175) {
            role = 'Major Grade 5'
        } else if (levelRole <= 180) {
            role = 'Lt. Colonel Grade 1'
        } else if (levelRole <= 185) {
            role = 'Lt. Colonel Grade 2'
        } else if (levelRole <= 190) {
            role = 'Lt. Colonel Grade 3'
        } else if (levelRole <= 195) {
            role = 'Lt. Colonel Grade 4'
        } else if (levelRole <= 200){ 
            role = 'Lt. Colonel Grade 5'
        } else if (levelRole <= 400){
            role = 'Colonel Grade 1'
        } else if (levelRole <= 500){
            role = 'Colonel Grade 2'
        } else if (levelRole <= 600){
            role = 'Colonel Grade 3'
        } else if (levelRole <= 700){
            role = 'Colonel Grade 4'
        } else if (levelRole <= 800){
            role = 'Colonel Grade 5'
        } else if (levelRole <= 900){
            role = 'Colonel Grade 1'
        } else if (levelRole <= 1000 || levelRole >= 1000) {
            role = 'Tuhan Animes'
        }
        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                const random_premium = ['10m', '20m', '5m', 'zonk']
                const wayo = random_premium[Math.floor(Math.random() * (random_premium.length))]
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await sociality.reply(from, `*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`, id)
                    premium.addPremiumUser(sender.id, wayo, _premium)
                    if (wayo == 'zonk'){
                    await sociality.reply(from, `*Yahh kamu tidak mendapatkan Premium Gratis, coba lagi ya dan terus chat di grup ini*`, id)
                } else {
                    await sociality.reply(from, `*「 Selamat Karena Level UP 」*\n\n*Anda mendapatkan Premium Gratis sebesar* \n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(wayo)).days} day(s) ${ms(toMs(wayo)).hours} hour(s) ${ms(toMs(wayo)).minutes} minute(s)`, id)
                }}
            } catch (err) {
                console.error(err)
            }
        }

        // Anti-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                const valid = await sociality.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                    await sociality.reply(from, ind.linkDetected(), id)
                    await sociality.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'yellow'), color('Received a group link but is not a valid link!', 'yellow'))
                }
            }
        }

        // Anti-fake-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.(?!whatsapp.com))/gi))) {
                console.log(color('[KICK]', 'red'), color('Received a fake group link.', 'yellow'))
                await sociality.reply(from, 'Fake group link detected!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isBaddword && !isOwner) {
            if (chats.match(new RegExp(antibadword))) {
                console.log(color('[KICK]', 'red'), color('Received a fake group link.', 'yellow'))
                await sociality.reply(from, 'Fake group link detected!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isPromoteDetector) {
            if (chats.match(new RegExp(/(wa.me)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo refferal.', 'yellow'))
                await sociality.reply(from, 'Waduuh link promosi!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn) {
            if (chats.match(new RegExp(/(https:\/\/pornhub.com)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal.', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn) {
            if (chats.match(new RegExp(/(https:\/\/porn\/\/hub.com)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal.', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn) {
            if (chats.match(new RegExp(/(https:pornhub.com)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal.', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn) {
            if (chats.match(new RegExp(/(pornhub.com)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal.', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/nekopoi.care)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal..', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn && !isOwner) {
            if (chats.match(new RegExp(/(https:nekopoi.care)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal..', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorPorn && !isOwner) {
            if (chats.match(new RegExp(/(nekopoi.care)/gi)))  {
                console.log(color('[KICK]', 'red'), color('Wadoo pembokep handal..', 'yellow'))
                await sociality.reply(from, 'Waduuh bokep!', id)
                await sociality.removeParticipant(groupId, sender.id)
            }
        }
        //anti badword
        if(!isCmd && isKasar && isGroupMsg && isBadword && !isGroupAdmins) { 
            console.log(color('[BADWORD]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
            if(isBadwordMsg(seriall)) return
                addBadCount(seriall)
        }

        
        function isBadwordMsg(id){
            if (isOwner, isGroupAdmins) {return false;}
            let kasar = false;
            for (let i of msgBadword){
                if(i.id === id){
                    let msg = i.msg
                    if (msg >= 12) { // 12x
                        kasar === true 
                        sociality.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, kamu akan di kick otomatis oleh Sociality BOT!', message.id)
                        .then(() => {
                            sociality.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(msgBadword).forEach((i) => {
                                if(msgBadword[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                msgBadword[found].msg = 1;
                                const resultv = 'Database telah direset'
                                console.log(msgBadword[found])
                                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                                sociality.sendText(from, resultv)
                            } else {
                                    sociality.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        kasar === true
                        return false;
                    }   
                }
            }
            if (kasar === false){
                let obj = {id: `${id}`, msg:1};
                msgBadword.push(obj);
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                return false;
            }  
        }
        function addBadCount(id){
            if (isOwner, isGroupAdmins) {return;}
            var kasar = false
            Object.keys(msgBadword).forEach((i) => {
                if(msgBadword[i].id == id){
                    kasar = i
                }
            })
            if (kasar !== false) {
                msgBadword[kasar].msg += 1;
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
            }
        } 
        // Anti NSFW link
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await sociality.reply(from, ind.linkNsfw(), id)
                        await sociality.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }
        const isMuted = (chatId) => {
            if(muted.includes(chatId)){
              return false
          }else{
              return true
              }
          }

        // Auto-sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await sociality.sendImageAsSticker(from, imageBase64)
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (afk.checkAfkUser(ment, _afk)) {
                    const getId = afk.getAfkId(ment, _afk)
                    const getReason = afk.getAfkReason(getId, _afk)
                    const getTime = afk.getAfkTime(getId, _afk)
                    await sociality.reply(from, ind.afkMentioned(getReason, getTime), id)
                }
            }
            if (afk.checkAfkUser(sender.id, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                await sociality.sendText(from, ind.afkDone(pushname))
            }
        }
        
        const salam = [
            `Yang bener nyapanya dongo`,
            `Lu manusia bukan??, Salam yang bener bego`,
            `Ya ampun kamu ya, salam tuh yang bener`
        ]

        const tasu = {
            error: `Duuh ada yang salah , coba ulangi lagi`,
            err: {
                Ga:`Tolong jadikan bot jadi admin`,
                Gp:`Maaf, tapi ini adalah perintah untuk grup.`
            }
        }
    /*
        if (chats == 'p'){
            const jawir = salam[Math.floor(Math.random() * (salam.length))]
            await sociality.reply(from, `*${jawir}*`, id)
        }

        if (chats == 'P') {
            const jawir = salam[Math.floor(Math.random() * (salam.length))]
            await sociality.reply(from, `*${jawir}*`, id)
        }
        
        if (chats == 'bot') {
           await sociality.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        
        if (chats == 'Bot') {
           await sociality.reply(from, `Halo Kak, Untuk Memulai bot silahkan ketik ${prefix}menu`, id)
        }
        const piye = `Waalaikumsalam , Halo Kak @${sender.id.replace('@c.us', '')}, Untuk Memulai bot silahkan ketik ${prefix}menu`
        if (chats == 'assalamualaikum') {
           
            await sociality.sendTextWithMentions(from, piye, id)
        }
        
        if (chats == 'Assalamualaikum') {
            await sociality.sendTextWithMentions(from, piye, id)
        }

        if (chats == `Assalamu'alaikum`) {
            await sociality.sendTextWithMentions(from, piye, id)
        }

        if (chats == `assalamu'alaikum`) {
            await sociality.sendTextWithMentions(from, piye, id)
        }*/
        // Mute
        if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return
        
        // Ignore banned and blocked users
        // if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        //if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti-spam
        const aantispam = [
            `ngentot lo bisa diem ga 5 detik aja goblok,sumpah lama"lo dispam malah ngelunjak asli barusan udh gw tegor lu kalau ngetik yang bener kontol jangan ngulang terus anjink`,
            `Jangan spam ngentot, silahkan nunggu 5 detik`,
            `Lu orang kalau udah pake bot jangan spam ya ngentot , ngetik yang bener kayak anak tk aja baru belajar ngetik hadeeeh kontol`,
            `https://i.imgur.com/3Oi5yjR_d.webp?maxwidth=760&fidelity=grand`,
            `https://i.imgur.com/z0Y0UXm_d.webp?maxwidth=760&fidelity=grand`
        ]
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) {
            const tispam = aantispam[Math.floor(Math.random() * (aantispam.length))]
            if (tispam.includes('https://i.imgur.com/')){
                await sociality.sendFileFromUrl(from, tispam, `pler.jpg`, ``, id)
            } else {
                await sociality.reply(from, `*${tispam}*`, id)
            }     
            return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg){
            const tispam = aantispam[Math.floor(Math.random() * (aantispam.length))]
            await sociality.reply(from, `*${tispam}*`, id)
         return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
        }
        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[Pengguna]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await sociality.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[Pengguna]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
            await sociality.sendSeen(from)
        }
        const ownernnumber = '6281414252501@c.us'

        // Anti-spam
        if (isCmd && !isPremium && !isOwner)msgFilter.addFilter(from)
        
       
        switch (command) {
            case prefix+'regis':
            case prefix+'register':
                if (isRegistered) return await sociality.reply(from, ind.registeredAlready(), id)
                if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                const jmlhuser = _registered.length
                const namaUser = q.substring(0, q.indexOf('|') - 1)
                const umurUser = q.substring(q.lastIndexOf('|') + 2)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return sociality.reply(from, 'Umur harus berupa angka!!', id)
                if (Number(umurUser) <= 10) return await sociality.reply(from, `Cil gak boleh kamu daftar dimari , tunggu 10 tahun lagi ya biar jadi remaja 😋`, id)
                if (Number(umurUser) >= 40) return await sociality.reply(from, ind.ageOld(), id)
                register.addRegisteredUser(sender.id, namaUser, umurUser, time, serialUser, _registered)
                await sociality.reply(from, ind.registered(namaUser, umurUser, sender.id, time, serialUser, jmlhuser), id)
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
            break

            // Level [BETA] by Slavyan
            case prefix+'level':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isLevelingOn) return await sociality.reply(from, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const phXpmenu = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const ppLink = await sociality.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = errorImg
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#fcf5eb', '#fcf5eb')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#61584c', 'COLOR')
                    .setBackground('COLOR', '#613b03')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_card.png`)
                        await sociality.sendFile(from, `${sender.id}_card.png`, `${sender.id}_card.png`, ind.exxp(userLevel, userXp, phXpmenu, role) , id)
                        fs.unlinkSync(`${sender.id}_card.png`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'leaderboard':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isLevelingOn) return await sociality.reply(from, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await sociality.reply(from. ind.groupOnly(), id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                try {
                    for (let i = 0; i < 10; i++) {
                        var role = 'Trainee'
                        if (resp[i].level <= 5) {
                            role = 'Senior Trainee'
                        } else if (resp[i].level <= 10) {
                            role = 'Private'
                        } else if (resp[i].level <= 15) {
                            role = 'Corporal'
                        } else if (resp[i].level <= 20) {
                            role = 'Sergeant'
                        } else if (resp[i].level <= 25) {
                            role = 'Staff Sgt. Grade 1'
                        } else if (resp[i].level <= 30) {
                            role = 'Staff Sgt. Grade 2'
                        } else if (resp[i].level <= 35) {
                            role = 'Staff Sgt. Grade 3'
                        } else if (resp[i].level <= 40) {
                            role = 'Sgt. 1st Class Grade 1'
                        } else if (resp[i].level <= 45) {
                            role = 'Sgt. 1st Class Grade 2'
                        } else if (resp[i].level <= 50) {
                            role = 'Sgt. 1st Class Grade 3'
                        } else if (resp[i].level <= 55) {
                            role = 'Sgt. 1st Class Grade 4'
                        } else if (resp[i].level <= 60) {
                            role = 'Master Sgt. Grade 1'
                        } else if (resp[i].level <= 65) {
                            role = 'Master Sgt. Grade 2'
                        } else if (resp[i].level <= 70) {
                            role = 'Master Sgt. Grade 3'
                        } else if (resp[i].level <= 75) {
                            role = 'Master Sgt. Grade 4'
                        } else if (resp[i].level <= 80) {
                            role = 'Master Sgt. Grade 5'
                        } else if (resp[i].level <= 85) {
                            role = '2nd Lt. Grade 1'
                        } else if (resp[i].level <= 90) {
                            role = '2nd Lt. Grade 2'
                        } else if (resp[i].level <= 95) {
                            role = '2nd Lt. Grade 3'
                        } else if (resp[i].level <= 100) {
                            role = '2nd Lt. Grade 4'
                        } else if (resp[i].level <= 105) {
                            role = '1st Lt. Grade 1'
                        } else if (resp[i].level <= 110) {
                            role = '1st Lt. Grade 2'
                        } else if (resp[i].level <= 115) {
                            role = '1st Lt. Grade 3'
                        } else if (resp[i].level <= 120) {
                            role = '1st Lt. Grade 4'
                        } else if (resp[i].level <= 125) {
                            role = '1st Lt. Grade 5'
                        } else if (resp[i].level <= 130) {
                            role = 'Captain Grade 1'
                        } else if (resp[i].level <= 135) {
                            role = 'Captain Grade 2'
                        } else if (resp[i].level <= 140) {
                            role = 'Captain Grade 3'
                        } else if (resp[i].level <= 145) {
                            role = 'Captain Grade 4'
                        } else if (resp[i].level <= 150) {
                            role = 'Captain Grade 5'
                        } else if (resp[i].level <= 155) {
                            role = 'Major Grade 1'
                        } else if (resp[i].level <= 160) {
                            role = 'Major Grade 2'
                        } else if (resp[i].level <= 165) {
                            role = 'Major Grade 3'
                        } else if (resp[i].level <= 170) {
                            role = 'Major Grade 4'
                        } else if (resp[i].level <= 175) {
                            role = 'Major Grade 5'
                        } else if (resp[i].level <= 180) {
                            role = 'Lt. Colonel Grade 1'
                        } else if (resp[i].level <= 185) {
                            role = 'Lt. Colonel Grade 2'
                        } else if (resp[i].level <= 190) {
                            role = 'Lt. Colonel Grade 3'
                        } else if (resp[i].level <= 195) {
                            role = 'Lt. Colonel Grade 4'
                        } else if (resp[i].level <= 200){ 
                            role = 'Lt. Colonel Grade 5'
                        } else if (resp[i].level <= 400){
                            role = 'Colonel Grade 1'
                        } else if (resp[i].level <= 500){
                            role = 'Colonel Grade 2'
                        } else if (resp[i].level <= 600){
                            role = 'Colonel Grade 3'
                        } else if (resp[i].level <= 700){
                            role = 'Colonel Grade 4'
                        } else if (resp[i].level <= 800){
                            role = 'Colonel Grade 5'
                        } else if (resp[i].level <= 900){
                            role = 'Colonel Grade 1'
                         }else if (resp[i].level <= 1000 || resp[i].level >= 1000) {
                            role = 'Tuhan Animes'
                        }
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${role}\n\n`
                    }
                    await sociality.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, ind.minimalDb(), id)
                }
            break

            // Downloader
            case prefix+'spotify':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await rugaapi.spotify(q)
                .then(async ({ result }) => {
                    const cardJoox = new canvas.Spotify()
                    .setAuthor(result.artists)
                    .setAlbum(result.title)
                    .setStartTimestamp(result.duration)
                    .setEndTimestamp(result.duration)
                    .setImage(result.thumbnail)
                    .setTitle(result.title)
                    cardJoox.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_joox.png`)
                        await sociality.sendImage(from, `${sender.id}_joox.png`,``, ind.spotify(result))
                        fs.unlinkSync(`${sender.id}_joox.png`)
                        //await sociality.sendFileFromUrl(from, result[0].linkMp3, 'joox.mp3', '', id)
                        await sociality.sendFileFromUrl(from, result.link, 'joox.mp3', `${result.title}`, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!`, id)
                    })
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, `Error!`, id)
                })
        break
            case prefix+'joox': 
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await rugaapi.joox(q)
                .then(async ({ result }) => {
                    const cardJoox = new canvas.Spotify()
                    .setAuthor(result.info.singer)
                    .setAlbum(result.info.album)
                    .setStartTimestamp(result.info.duration)
                    .setEndTimestamp(result.info.duration)
                    .setImage(result.image)
                    .setTitle(result.info.song)
                    cardJoox.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_joox.png`)
                        await sociality.sendImage(from, `${sender.id}_joox.png`,``, ind.joox(result))
                        fs.unlinkSync(`${sender.id}_joox.png`)
                        //await sociality.sendFileFromUrl(from, result[0].linkMp3, 'joox.mp3', '', id)
                        for (let i = 0; i <result.audio.length; i++){
                            if (result.audio[i].reso == 128){
                        await sociality.sendFileFromUrl(from, result.audio[i].link, 'joox.mp3', '', id)
                    }}})
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
        case'igp':
        if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
        if (!q) return sociality.reply(from, ind.wrongFormat(), id)
        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
        limit.addLimit(sender.id, _limit, isPremium, isOwner)
        await sociality.reply(from, ind.wait(), id)
        downloader.insta2(q)
        .then(async ({ result }) => {
            await sociality.sendFileFromUrl(from, result.photo_profile, 'igpostdl.jpg', `*...:* *Instagram Profile* *:...*\n\nUsername: ${result.fullname}\nBiografi: ${result.bio}\nFollowers: ${result.followers}`, id)
             console.log('Success sending Instagram media!')
            })
            .catch(async (err) => {
                console.error(err)
                await sociality.reply(from, 'Error!', id)
            })
        break
        case'igs':
        if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
        if (!q) return sociality.reply(from, ind.wrongFormat(), id)
        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
        limit.addLimit(sender.id, _limit, isPremium, isOwner)
        await sociality.reply(from, ind.wait(), id)
        downloader.insta3(q)
        .then(async ({ result }) => {
            for(let i = 0; i < result.length; i++){
                if(result[i].includes('.jpg')) {
                await sociality.sendFileFromUrl(from, result[i], 'igpost.jpg', '',id)
            } else if ( result[i].includes('.mp4')){
                await sociality.sendFileFromUrl(from, result[i], 'igpost.mp4', ``, id)
            }
        }
            console.log('Success sending Instagram media!')
        })
        .catch(async (err) => {
            console.error(err)
            await sociality.reply(from, `Error!${err}`, id)
        })
break

            case prefix+'ig':
                case prefix+'igdl':
                case prefix+'instadl':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    if (!isUrl(url) && !url.includes('instagram.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    downloader.insta(url)
                    .then(async ({ result }) => {
                        for(let i = 0; i < result.media.length; i++){
                            if(result.media[i].includes('.jpg')) {
                            await sociality.sendFileFromUrl(from, result.media[i], 'igpost.jpg', ind.igpost(result))
                        } else if ( result.media[i].includes('.mp4')){
                            await sociality.sendFileFromUrl(from, result.media[i], 'igpost.mp4', ind.igpost(result))
                        }
                    }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!${err}`, id)
                    })
            break 
            case prefix+'spamchat':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                const nomorpertama = q.substring(0, q.indexOf('|') - 1)
                const jumlahspam = q.substring(q.indexOf('|') + 1, q.lastIndexOf('|') - 1)
                const isi = q.substring(q.lastIndexOf('|') + 2)
                if(isNaN(nomorpertama)) return sociality.reply(from, 'Umur harus berupa angka!!', id)
                for (let i = 0; i < jumlahspam; i++){
                await sociality.sendText(nomorpertama.includes('c.us'), `-----[ Spamchat ]-----\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${isi}`)
                }
                break

            case prefix+'pinterest':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
              // if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
               if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait(), id)
                downloader.pinterest(q)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.length; i++) {
                            if (result[i].includes('.jpg')){
                                await sociality.sendFileFromUrl(from, result[i], `pinterest.jpg`)
                            } else if (result[i].includes('.gif')){
                                await sociality.sendFileFromUrl(from, result[i], `pinterest.gif`)
                            } else if (result[i].includes('.png')){
                                await sociality.sendFileFromUrl(from, result[i], `pinterest.png`)
                            } else if (result[i].includes('.webp')){
                                await sociality.sendFileFromUrl(from, result[i], `pinterest.webp`)
                            } else if (result[i].includes('.mp4')){
                                await sociality.sendFileFromUrl(from, result[i], `SocialityBot.mp4`)
                            }
                    }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'pinterestdl':
            case prefix+'pindl':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    downloader.pinterestdl(url)
                    .then(async ({ result }) => {
                            if (result.type === 'gif') {
                                await sociality.sendFileFromUrl(from, result.fileUrl, 'pinterest.gif', `*...:* *Pinterest Downloader* *:...*\n\Title: ${result.title}`, id)
                            } else if (result.type === 'video') {
                                await sociality.sendFileFromUrl(from, result.fileUrl, 'pinterest.mp4', `*...:* *Pinterest Downloader* *:...*\n\Title: ${result.title}`, id)
                            } else if (result.type === 'jpg') {
                                await sociality.sendFileFromUrl(from, result.fileUrl, 'pinterest.jpg', `*...:* *Pinterest Downloader* *:...*\n\Title: ${result.title}`, id)
                            }
                        console.log('Success sending Pinterst media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
                break
            case prefix+'stress':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(`Pilihlah pilihan dari ini : 1.'.stress 1' 2.'.stress 2' 3.'.stress 3' [1-6]: `)
                const stress = body.slice(10)
                if (ar[0] == `1`) {
                    await sociality.reply(from, `${stress} ${stress} ${stress} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${stress}wangi aku mau nyiumin aroma wanginya ${stress}AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${stress}keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${stress}AAAAA LUCCUUUUUUUUUUUUUUU............${stress}AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${stress}itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${stress}gw ...${stress}di laptop ngeliatin gw, ${stress}.. kamu percaya sama aku ? aaaaaaaaaaah syukur ${stress}aku gak mau merelakan ${stress}aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${stress}SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`, id)
                } else if (ar[0] === '2') {
                    await sociality.reply(from, `Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembangbiak dengan siapapun lebih daripada seorang ${stress}. Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang sempurna dari gue.Gue rela ngelakuin APAPUN demi kesempatan buat bikin ${stress} hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan. Kenapa Authornya rela bikin suatu hal yang sempurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA?SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING.`, id)
                } else if (ar[0] === '3') {
                    await sociality.reply(from, `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${stress}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${stress}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${stress} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${stress}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`, id)
                } else if (ar[0] === '4') {
                    await sociality.reply(from, `NENEN NENEN KEPENGEN NENEN SAMA ${stress}. TETEK GEDE NAN KENCANG MILIK ${stress} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${stress}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${stress}. BIARKAN AKU MENGENYOT NENENMU ${stress}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${stress} WANGIIII`, id)
                } else if (ar[0] === '5') {
                    await sociality.reply(from, `Sejujurnya gw ga nyangka ama tindakan lo yg ga dewasa begini Kita udh temenan dri kecil ,melalui berbagai kenangan ,tapi sikaplo begini ke gw ,ga habis pikir. Padahal sudah berjanji tidak mengusik hubungan satu sama lain lagi ,tapi maksud tindakan mu sekarang ini apa? Tiba tiba di pagi bangun tidur lu make Pp ${stress}. Lu kira lucu begitu anjing? Make waifu pp org seenaknya? Ngeklaim pula bangsad maksudnya apa apaan coba . Pertemanan dari kecil kita ga dihargai sama sekali. Gw tunggu klarifikasi lo`, id)
                } else if (ar[0] === '6') {
                    await sociality.reply(from, `Usiaku 22 tahun. Aku sangat mencintai ${stress}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${stress} adalah cinta" aku bilang "${stress} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${stress}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${stress} datang ke dalam kamarku, Aku begitu senang bertemu ${stress}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${stress}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${stress}. Aku ingin memberikan kepuasan kepada ${stress}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${stress} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${stress} pergi meninggalkan kamarku. "${stress} itu cinta" "${stress} itu kehidupan".`, id)
                } else{
                    sociality.sendText(from, 'maaf kamu yang pilih salah')
                }
                break
            case prefix+'suit':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply('Pilihlah pilihan dari ini : 1.Gunting 2.Kertas 3.Batu [1-3]: ')
                const suitt = q
                const piliiihan = ['gunting', 'batu', 'kertas']
                const cpu_pilihan = piliiihan[Math.floor(Math.random() * (piliiihan.length))]
                const pokokok = daily.getLimit(sender.id, _daily)
                const random_premium = ['10m', '20m', '5m', 'zonk']
                const superr = random_premium[Math.floor(Math.random() * (random_premium.length))]
                if (pokokok !== undefined && cd - (Date.now() - pokokok) > 5) {
                    const dpe = ms(cd - (Date.now() - pokokok))
                    await sociality.reply(from, ind.daily(dpe), id)
                } else if (suitt == ''){
                        await sociality.sendText(from, 'kamu belum memilih apapun')
                } else if (isPremium){
                     await sociality.sendText(from, 'Sayang sekali, kamu telah bermain hari ini')
                } else if(suitt == 'gunting'){
                            if(cpu_pilihan == 'gunting'){
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                sociality.sendText(from,'Pilihan kamu sama aku seri')
                            }else if(cpu_pilihan == 'batu'){
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                sociality.sendText(from, 'Sayang sekali kamu kalah')
                            }else if(cpu_pilihan == 'kertas'){
                                if (superr == '10m'){
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            } else if (superr == '5m'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            }else if (superr == '20m'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            }else if (superr == 'zonk'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    await sociality.sendText(from, `Yahh kamu tidak mendapatkan apapun, sayang sekali`, id)
                            }
                        }
                } else if (suitt == 'batu'){
                        if(cpu_pilihan == 'gunting'){
                            if (superr == '10m'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                await sociality.sendText(from, 'Selamat kamu menang')
                                premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                        } else if (superr == '5m'){
                            premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                await sociality.sendText(from, 'Selamat kamu menang')
                                premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                        }else if (superr == '20m'){
                            premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                await sociality.sendText(from, 'Selamat kamu menang')
                                premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                        }else if (superr == 'zonk'){
                            premium.addPremiumUser(sender.id, superr, _premium)
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                await sociality.sendText(from, 'Selamat kamu menang')
                                await sociality.sendText(from, `Yahh kamu tidak mendapatkan apapun, sayang sekali`, id)
                        }
                    }else if(cpu_pilihan == 'batu'){
                            await sociality.sendText(from, `kamu memilih ${suitt}`)
                            await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                            sociality.sendText(from, 'Pilihan kamu sama aku seri')
                        }else if(cpu_pilihan == 'kertas'){
                            await sociality.sendText(from, `kamu memilih ${suitt}`)
                            await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                            sociality.sendText(from, 'Sayang sekali kamu kalah')
                        }
                } else if (suitt == 'kertas'){
                        if(cpu_pilihan == 'gunting'){
                            await sociality.sendText(from, `kamu memilih ${suitt}`)
                            await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                            sociality.sendText(from,'Sayang sekali kamu kalah')
                            } else if(cpu_pilihan == 'batu'){
                                if (superr == '10m'){
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            } else if (superr == '5m'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            }else if (superr == '20m'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `*「 Selamat anda mendapatkan 」*\n\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(superr)).days} day(s) ${ms(toMs(superr)).hours} hour(s) ${ms(toMs(superr)).minutes} minute(s)`, id)
                            }else if (superr == 'zonk'){
                                premium.addPremiumUser(sender.id, superr, _premium)
                                    await sociality.sendText(from, `kamu memilih ${suitt}`)
                                    await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                    await sociality.sendText(from, 'Selamat kamu menang')
                                    await sociality.sendText(from, `Yahh kamu tidak mendapatkan apapun, sayang sekali`, id)
                            }
                        } else if(cpu_pilihan == 'kertas'){
                                await sociality.sendText(from, `kamu memilih ${suitt}`)
                                await sociality.sendText(from, `aku memilih ${cpu_pilihan}`)
                                sociality.sendText(from, 'Pilihan kamu sama aku seri')
                            }
                }else {
                        sociality.sendText(from, 'maaf kamu yang pilih salah')
                    }
                break
            case prefix+'fami':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.fami()
                .then(async ({ result }) => {
                    const anm2 = `➸ Soal : ${result.quest}\n_Silahkan DiJawab_`
                    const jwban = `➸ Jawaban : ${result.answer}`
                    await sociality.reply(from, anm2, id)
                    await sociality.sendText(from, '30 Detik Tersisa...')
                    await sleep(10000)
                    await sociality.sendText(from, '20 Detik Tersisa...')
                    await sleep(10000)
                    await sociality.sendText(from, '10 Detik Tersisa...')
                    await sleep(10000)
                    sociality.reply(from, jwban, id)
                    console.log('Success sending Family 100 result!')
                }).catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!')
                })
            break
            case prefix+'facebook':
            case prefix+'fb':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(pushname), id)
                if (!isUrl(url) && !url.includes('facebook.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.fb(url)
                .then(async ({ result }) => {
                    await sociality.sendFileFromUrl(from, result , 'fb.mp4', '', id)
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, `'Error!${err}'`, id)
                })
        break
            case prefix+'tiktokpic':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    console.log(`Get profile pic for ${q}`)
                    const tkt = await axios.get(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${q}`)
                    if (tkt.data.error) return sociality.reply(from, tkt.data.error, id)
                    await sociality.sendFileFromUrl(from, tkt.data.result, 'tiktokpic.jpg', 'Ini :D', id)
                    console.log('Success sending TikTok profile pic!')
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'tiktoknowm': 
            case prefix+'tktnowm':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
               /* downloader.tikNoWm(url)
                    .then(async ({result})=> {
                        await sociality.reply(from, ind.wait(), id)
                       // await sociality.sendFileFromUrl(from, result, 'tiktok.mp4', '', id)            
                        await sociality.sendFileFromUrl(from, result.thumbnail, 'tiktok.jpg', ind.tiktokFound(result), id)
                        await sociality.sendFileFromUrl(from, result.link, 'tiktok.mp4', '', id) 
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await sociality.reply(from, 'Error!', id)
                    })*/
                    
                downloader.tiknowmv2(url)
                .then(async ({result})=> {
                   await sociality.sendFileFromUrl(from, result, 'tiktok.mp4', '', id)            
                })
                .catch(async (err) => {
                    console.log(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break
            case prefix+'tiktok':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/tiktokwm?apikey=Ninokutersayang&url=${q}`, `${q}.mp4`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'twitter':
            case prefix+'twt':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('twitter.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.tweet(url)
                    .then(async (data) => {
                        if (data.type === 'video') {
                            const content = data.variants.filter((x) => x.content_type !== 'application/x-mpegURL').sort((a, b) => b.bitrate - a.bitrate)
                            const result = await misc.shortener(content[0].url)
                            console.log('Shortlink:', result)
                            await sociality.sendFileFromUrl(from, content[0].url, 'video.mp4', `Link HD: ${result}`, id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await sociality.reply(from, 'Error!', id)
                                })
                        } else if (data.type === 'photo') {
                            for (let i = 0; i < data.variants.length; i++) {
                                await sociality.sendFileFromUrl(from, data.variants[i], data.variants[i].split('/media/')[1], '', id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await sociality.reply(from, 'Error!', id)
                                })
                            }
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'moddroid': // Chikaa Chantekkzz
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.modroid(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await sociality.reply(from, 'Not found.', id)
                        } else {
                            for (let i = 0; i < result.length; i++) {
                            await sociality.sendFileFromUrl(from, result[i].icon, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[i].name}\n\n➸ *Link*: ${result[i].link}`, id)
                            console.log('Success sending APK mod!')
                            }
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'happymod': // chikaa chantexxzz
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.happymod(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await sociality.reply(from, 'Not found.', id)
                        } else {
                            await sociality.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Root*: ${result[0].root}\n➸ *Version*: ${result[0].version}\n➸ *Price*: ${result[0].price}\n\n*Download link*\n${result[0].download}`, id)
                            console.log('Success sending APK mod!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'linedl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (!isUrl(url) && !url.includes('store.line.me')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.line(url)
                .then(async ({ result })  => {
            let linedll = `-----[ *LINE STICKER DOWNLOADER* ]-----\n\n➸ *Title*: ${result.title}\n➸ *Author* : ${result.sticker_author}`
            for (let i = 0; i < result.price.length; i++) {
                linedll += `\n\n➸ *Harga sticker*\n➸ *Negara*: ${result.price[i].country}\n➸ *Mata uang*: ${result.price[i].currency}\n➸ *Harga*: ${result.price[i].price}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
            }
            linedll += `\n\n _Media sedang dikirim, mohon tunggu sebentar..._ `
            await sociality.reply(from, linedll, id)
                        for (let i = 0; i < result.sticker.length; i++) {
                            await sociality.sendStickerfromUrl(from, `${result.sticker[i]}`, id)
                            console.log('Success sending Line sticker!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!${err}`, id)
                    })
            break

            case prefix+'kutuk':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (!isGroupMsg) return sociality.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                            const terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
                            const target2 = args.join(' ')
                            //const target2 = arg.split('|')[0]
                           // const alasan2 = arg.split('|')[1]
                            await sociality.sendTextWithMentions(from, `Kutuk kau ${target2}` + `jadi *${terima2}*`)
                    break

            // Misc
            case prefix+'google': // chika-chantekkzz
            case prefix+'googlesearch':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                /* 		    
            const googleQuery = body.slice(8)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Resultados da pesquisa Google de: ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n*Titulo >* ${results[i].title}\n\n*Descrição >* ${results[i].snippet}\n\n*Link >* ${results[i].link}`
            } */
                google({ 'query': q, 'no-display': true, 'diagnostics': true})
                    .then(async (results) => {
                        let txt = `-----[ *GOOGLE SEARCH* ]-----\n\n_*Search results for: ${q}*_`
                        for (let i = 0; i < results.length; i++) {
                            txt += `\n\n➸ *Title*: ${results[i].title}\n➸ *Desc*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, txt, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!${err}`, id)
                    })
            break
            case prefix+'say':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.sendText(from, q)
            break
            case prefix+'afk': // by Slavyan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (isAfkOn) return await sociality.reply(from, ind.afkOnAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender.id, time, reason, _afk)
                await sociality.reply(from, ind.afkOn(pushname, reason), id)
            break
            case prefix+'lyric':
            case prefix+'lirik':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.lirik(q)
                    .then(async ({ lyric, title }) => {
                        await sociality.reply(from,`⊱ *Lirik* : ${lyric}\n⊱ *Title* : ${title}`, id)
                        console.log('Success sending lyric!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'shortlink':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url)) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const urlShort = await misc.shortener(url)
                await sociality.reply(from, ind.wait(), id)
                await sociality.reply(from, urlShort, id)
                console.log('Success!')
            break
            case prefix+'wikipedia':
            case prefix+'wiki':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.wiki(q)
                .then(async ({ result }) => {
                    await sociality.reply(from, ind.WikiFound(result), id)
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
            case prefix+'wikien': // By: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.wikien(q)
                    .then(async ( { result }) => {
                        if (result.status !== '200') {
                            await sociality.reply(from, 'Not Found!', id)
                        } else {
                            await sociality.reply(from, `➸ *PageId*: ${result.pageid}\n➸ *Title*: ${result.title}\n➸ *Result*: ${result.desc}`, id)
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'corona': // by CHIKAA CHANTEKKXXZZ
            case prefix+'coronavirus':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.corona(q)
                    .then(async (res) => {
                        await sociality.sendText(from, '🌎️ Covid Info - ' + q.charAt(0).toUpperCase() + q.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                        console.log('Success sending Result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'ttp': // CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.ttp(q)
                    .then(async (res) => {
                        await sociality.sendImageAsSticker(from, res.base64)
                        console.log('Success creating TTP!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'genshininfo': // chika chantexxzz
            case prefix+'genshin':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    console.log('Searching for character...')
                    const character = await genshin.characters(q)
                    await sociality.sendFileFromUrl(from, character.image, `${character.title}.jpg`, `*「 GENSHIN IMPACT 」*\n\n*${character.title}*\n${character.description}\n➸ *Name*: ${character.name}\n➸ *Nation*: ${character.nation}\n➸ *Gender*: ${character.gender}\n➸ *Birthday*: ${character.birthday}\n➸ *Constellation*: ${character.constellation}\n➸ *Rarity*: ${character.rarity}\n➸ *Vision*: ${character.vision}\n➸ *Weapon*: ${character.weapon}\n\n${character.url}`)
                    console.log('Success sending Genshin Impact character!')
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error or character not found!', id)
                }
            break
            case prefix+'kbbi':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.kbbi(q)
                    .then(async ({ result }) => {
                        await sociality.reply(from, result.hasil, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'linesticker':
            case prefix+'linestiker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                if (!isOwner) limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.linesticker()
                    .then(async ({ result }) => {
                        let lines = '-----[ *NEW STICKER* ]-----'
                        for (let i = 0; i < result.hasil.length; i++) {
                            lines +=  `\n\n➸ *Title*: ${result.hasil[i].title}\n➸ *URL*: ${result.hasil[i].uri}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, lines, id)
                        console.log('Success sending sticker Line!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'js':
            case prefix+'jadwalsholat':
            case prefix+'jadwalsolat':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.reply(from, ind.wait(), id)
                misc.jadwalSholat(q)
                    .then((data) => {
                        data.map(async ({isya, subuh, dzuhur, ashar, maghrib, terbit}) => {
                            const x = subuh.split(':')
                            const y = terbit.split(':')
                            const xy = x[0] - y[0]
                            const yx = x[1] - y[1]
                            const perbandingan = `${xy < 0 ? Math.abs(xy) : xy} jam ${yx < 0 ? Math.abs(yx) : yx} menit`
                            const msg = `Jadwal sholat untuk ${q} dan sekitarnya ( *${tanggal}* )\n\nDzuhur: ${dzuhur}\nAshar: ${ashar}\nMaghrib: ${maghrib}\nIsya: ${isya}\nSubuh: ${subuh}\n\nDiperkirakan matahari akan terbit pada pukul ${terbit} dengan jeda dari subuh sekitar ${perbandingan}`
                            await sociality.reply(from, msg, id)
                            console.log('Success sending jadwal sholat!')
                        })
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'gempa':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.reply(from, ind.wait(), id)
                misc.bmkg()
                    .then(async ({ kedalaman, koordinat, lokasi, magnitude, map, potensi, waktu }) => {
                        const teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude} SR\nPotensi: ${potensi}\n\n${waktu}`
                        await sociality.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'igstalk':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                argz = body.trim().split(' ')
                console.log(...argz[1])
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                console.log(slicedArgs)
                const istalk = await slicedArgs.join(' ')
                console.log(istalk)
                downloader.igstalk(q)
                 .then(async ({ result }) => {
                    const istalk3 = `User Ditemukan!
➸ Username: ${result.user.username}
➸ Nama: ${result.user.full_name}
➸ Bio: ${result.user.biography}
➸ Mengikuti: ${result.user.following_count}
➸ Pengikut: ${result.user.follower_count}
➸ Jumlah Postingan: ${result.user.media_count}`
                    const pictk = await bent("buffer")(result.user.profile_pic_url)
                    const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                
                sociality.sendImage(from, base64, result.user.username, istalk3)
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
              break
              case prefix+'brainly':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (args.length >= 2){
                    let tanya = body.slice(9)
                    let jum = Number(tanya.split('.')[1]) || 2
                    if (jum > 10) return sociality.reply(from, 'Max 10!', id)
                    if (Number(tanya[tanya.length-1])){
                        tanya
                    }
                    sociality.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                    await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                        res.forEach(x=>{
                            if (x.jawaban.fotoJawaban.length == 0) {
                                sociality.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                    sociality.sendText(from, 'nihh ngab')
                            } else {
                                sociality.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                            }
                        })
                    })
                } else {
                    sociality.reply(from, `Usage :\n${prefix}brainly [pertanyaan] [.jumlah]\n\nEx : \n${prefix}brainly NKRI .2`, id)
                }
                break
            case prefix+'gsmarena':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.gsmarena(q)
                        .then(async ({ result }) => {
                            await sociality.sendFileFromUrl(from, result.image, `${result.title}.jpg`, ind.gsm(result), id)
                            console.log('Success sending phone info!')
                        })
                } catch (err) {
                    cnosole.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'receipt':
            case prefix+'resep':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.resep(q)
                        .then(async ({ result }) => {
                            await sociality.sendFileFromUrl(from, result.image, `${result.title}.jpg`, ind.receipt(result), id)
                            console.log('Success sending food receipt!')
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'findsticker':
            case prefix+'findstiker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.sticker(q)
                        .then(async ({ result }) => {
                            if (result.response !== 200) return await sociality.reply(from, 'Not found!', id)
                            for (let i = 0; i < result.data.length; i++) {
                                await sociality.sendStickerfromUrl(from, result.data[i])
                            }
                            console.log('Success sending sticker!')
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case prefix+'lk21':
            case prefix+'movie':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.movie(q)
                    .then(async ({ result }) => {
                        let movies = `Result for: *${result.judul}*`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n➸ *Quality:* : ${result.data[i].resolusi}\n➸ *URL*: ${result.data[i].urlDownload}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        movies += '\n\nBy: Sociality Bot'
                        await sociality.reply(from, movies, id)
                        console.log('Success sending movie result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'cekongkir': // By: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                const kurir = q.substring(0, q.indexOf('|') - 1)
                const askot = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const tukot = q.substring(q.lastIndexOf('|') + 2)
                misc.ongkir(kurir, askot, tukot)
                    .then(async ({ result }) => {
                        let onkir = `-----[ *${result.title}* ]-----`
                        for (let i = 0; i < result.data.length; i++) {
                            onkir +=  `\n\n➸ *Layanan*: ${result.data[i].layanan}\n➸ *Estimasi*: ${result.data[i].etd}\n➸ *Tarif*: ${result.data[i].tarif}\n➸ *Info*: ${result.informasi}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        onkir += '\n\nBy: VideFrelan'
                        await sociality.reply(from, onkir, id)
                        console.log('Success sending ongkir info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'distance':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kotaAsal = q.substring(0, q.indexOf('|') - 1)
                const kotaTujuan = q.substring(q.lastIndexOf('|') + 2)
                misc.distance(kotaAsal, kotaTujuan)
                    .then(async ({ result }) => {
                        if (result.response !== 200) {
                            await sociality.reply(from, 'Error!', id)
                        } else {
                            await sociality.reply(from, result.data, id)
                            console.log('Success sending distance info!')
                        }
                    })
            break
            case prefix+'ytsearch':
            case prefix+'yts':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.ytSearch(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { urlyt, image, title, channel, duration, views } = await result[i]
                                await sociality.sendFileFromUrl(from, image, `${title}.jpg`, ind.ytResult(urlyt, title, channel, duration, views), id)
                                console.log('Success sending YouTube results!')
                            }
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'tts':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const speech = q.substring(q.indexOf('|') + 2)
                const ptt = tts(ar[0])
                try {
                    ptt.save(`${speech}.mp3`, speech, async () => {
                        await sociality.sendPtt(from, `${speech}.mp3`, id)
                        fs.unlinkSync(`${speech}.mp3`)
                    })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'tomp3':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if ((isMedia && isVideo || isQuotedVideo)) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await sociality.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'playstore':
            case prefix+'ps':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.playstore(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { app_id, icon, title, developer, description, price, free } = result[i]
                                await sociality.sendFileFromUrl(from, icon, `${title}.jpg`, ind.playstore(app_id, title, developer, description, price, free))
                            }
                            console.log('Success sending PlayStore result!')
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case prefix+'math':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (typeof mathjs.evaluate(q) !== 'number') {
                    await sociality.reply(from, ind.notNum(q), id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, `*「 MATH 」*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                }
            break
            case prefix+'shopee':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                const namaBarang = q.substring(0, q.indexOf('|') - 1)
                const jumlahBarang = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                try {
                    misc.shopee(namaBarang, jumlahBarang)
                        .then(async ({ result }) => {
                            for (let i = 0; i < result.items.length; i++) {
                                const { nama, harga, terjual, shop_location, description, link_product, image_cover } = result.items[i]
                                await sociality.sendFileFromUrl(from, image_cover, `${nama}.jpg`, ind.shopee(nama, harga, terjual, shop_location, description, link_product))
                            }
                            console.log('Success sending Shopee data!')
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case prefix+'mutual':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) return await sociality.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, 'Looking for a partner...', id)
                await sociality.sendContact(from, register.getRegisteredRandomId(_registered))
                await sociality.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case prefix+'next':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) return await sociality.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, 'Looking for a partner...', id)
                await sociality.sendContact(from, register.getRegisteredRandomId(_registered))
                await sociality.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case prefix+'tafsir':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length === 0) return sociality.reply(from, `Untuk menampilkan ayat Al-Qur'an tertentu beserta tafsir dan terjemahannya\ngunakan ${prefix}tafsir surah ayat\n\nContoh: ${prefix}tafsir Al-Mulk 10`, id)
                await sociality.reply(from, ind.wait(), id)
                const responSurah = await axios.get('https://raw.githubusercontent.com/VideFrelan/words/main/tafsir.txt')
                const { data } = responSurah.data
                const idx = data.findIndex((post) => {
                    if ((post.name.transliteration.id.toLowerCase() === args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() === args[0].toLowerCase())) return true
                })
                const nomerSurah = data[idx].number
                if (!isNaN(nomerSurah)) {
                    const responseh = await axios.get('https://api.quran.sutanlab.id/surah/'+ nomerSurah + '/'+ args[1])
                    const { data } = responseh.data
                    let pesan = ''
                    pesan += 'Tafsir Q.S. ' + data.surah.name.transliteration.id + ':' + args[1] + '\n\n'
                    pesan += data.text.arab + '\n\n'
                    pesan += '_' + data.translation.id + '_\n\n' + data.tafsir.id.long
                    await sociality.reply(from, pesan, id)
                }
            break
            case prefix+'listsurah':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.reply(from, ind.wait(), id)
                misc.listSurah()
                    .then(async ({ result }) => {
                        let list = '-----[ AL-QUR\'AN LIST ]-----\n\n'
                        for (let i = 0; i < result.list.length; i++) {
                            list += `${result.list[i]}\n\n`
                        }
                        await sociality.reply(from, list, id)
                        console.log('Success sending Al-Qur\'an list!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'surah':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.reply(from, ind.wait(), id)
                misc.getSurah(args[0])
                    .then(async ({ result }) => {
                        await sociality.reply(from, `${result.surah}\n\n${result.quran}`, id)
                        console.log('Success sending surah!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'hadis': // irham01
            case prefix+'hadees':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 2) return await sociality.reply(from, ind.hadis(), id)
                await sociality.reply(from, ind.wait(), id)
                try {
                    if (ar[0] === 'darimi') {
                        const hdar = await axios.get(`https://api.hadith.sutanlab.id/books/darimi/${args[1]}`)
                        await sociality.sendText(from, `${hdar.data.data.contents.arab}\n${hdar.data.data.contents.id}\n\n*H.R. Darimi*`, id)
                    } else if (ar[0] === 'ahmad') {
                        const hmad = await axios.get(`https://api.hadith.sutanlab.id/books/ahmad/${args[1]}`)
                        await sociality.sendText(from, `${hmad.data.data.contents.arab}\n${hmad.data.data.contents.id}\n\n*H.R. Ahmad*`, id)
                    } else if (ar[0] === 'bukhari') {
                        const hbukh = await axios.get(`https://api.hadith.sutanlab.id/books/bukhari/${args[1]}`)
                        await sociality.sendText(from, `${hbukh.data.data.contents.arab}\n${hbukh.data.data.contents.id}\n\n*H.R. Bukhori*`, id)
                    } else if (ar[0] === 'muslim') {
                        const hmus = await axios.get(`https://api.hadith.sutanlab.id/books/muslim/${args[1]}`)
                        await sociality.sendText(from, `${hmus.data.data.contents.arab}\n${hmus.data.data.contents.id}\n\n*H.R. Muslim*`, id)
                    } else if (ar[0] === 'malik') {
                        const hmal = await axios.get(`https://api.hadith.sutanlab.id/books/malik/${args[1]}`)
                        await sociality.sendText(from, `${hmal.data.data.contents.arab}\n${hmal.data.data.contents.id}\n\n*H.R. Malik*`, id)
                    } else if (ar[0] === 'nasai') {
                        const hnas = await axios.get(`https://api.hadith.sutanlab.id/books/nasai/${args[1]}`)
                        await sociality.sendText(from, `${hnas.data.data.contents.arab}\n${hnas.data.data.contents.id}\n\n*H.R. Nasa'i*`, id)
                    } else if (ar[0] === 'tirmidzi') {
                        const htir = await axios.get(`https://api.hadith.sutanlab.id/books/tirmidzi/${args[1]}`)
                        await sociality.sendText(from, `${htir.data.data.contents.arab}\n${htir.data.data.contents.id}\n\n*H.R. Tirmidzi*`, id)
                    } else if (ar[0] === 'ibnumajah') {
                        const hibn = await axios.get(`https://api.hadith.sutanlab.id/books/ibnu-majah/${args[1]}`)
                        await sociality.sendText(from, `${hibn.data.data.contents.arab}\n${hibn.data.data.contents.id}\n\n*H.R. Ibnu Majah*`, id)
                    } else if (ar[0] === 'abudaud') {
                        const habud = await axios.get(`https://api.hadith.sutanlab.id/books/abu-daud/${args[1]}`)
                        await sociality.sendText(from, `${habud.data.data.contents.arab}\n${habud.data.data.contents.id}\n\n*H.R. Abu Daud*`, id)
                    } else {
                        await sociality.sendText(from, ind.hadis(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'asmaulhusna': // irham01
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                const asmaulHusna = await axios.get (`https://api-melodicxt-2.herokuapp.com/api/asmaallHusna?number=${args[0]}&apiKey=${config.melodic}`)
                const assna = asmaulHusna.data.result
                sociality.sendFileFromUrl(from, 'https://i2.wp.com/seruni.id/wp-content/uploads/2016/09/Allah.png?resize=696%2C696&ssl=1', 'gambar.jpg', ind.asmaulHusna(assna), id)
            break
            case prefix+'randomquran': // irham01
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                const ranquran = await axios.get('https://api.zeks.xyz/api/randomquran')
                const auquran = ranquran.data.result.audio
                await sociality.reply(from, ind.randomQuran(ranquran), id)
                await sociality.sendFileFromUrl(from, auquran, 'rquran.mp3', '', id)
            break
            case prefix+'motivasi':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                misc.motivasi()
                    .then(async (body) => {
                        const motivasiSplit = body.split('\n')
                        const randomMotivasi = motivasiSplit[Math.floor(Math.random() * motivasiSplit.length)]
                        await sociality.sendText(from, randomMotivasi)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'ssphone':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const ssphone = body.slice(9)
                sociality.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${config.vhtear}`, 'ssphone.jpg', '', id)
                
            break

            case prefix+'ytmp3':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.ytdl2(q)
                .then(async ({result, status, message}) => {
                if (status !== 200) {
                    await sociality.sendFileFromUrl(from, message, id)
                } else {
                            await sociality.sendFileFromUrl(from, result.thumbnail, `${result.title}.jpg`, ind.ytFound(result), id)
                            await sociality.sendFileFromUrl(from, result.link.link, `${result.title}.mp3`, id)
                            console.log('Success sending YouTube video!')
                            
                }})
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, `Error!${err}`, id)
                })
        break
            case prefix+'ytmp4':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.ytdl(q)
                .then(async ({result, status, message}) => {
                    if (status !== 200) {
                        await sociality.sendFileFromUrl(from, message, id)
                    } else {
                                await sociality.sendFileFromUrl(from, result.thumbnail, `${result.title}.jpg`, ind.ytFoundv3video(result), id)
                                await sociality.sendFileFromUrl(from, result.link.link, `${result.title}.mp4`, '', id)
                                console.log('Success sending YouTube video!')
                                
                    }})
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!${err}`, id)
                    })
            break
            case prefix+'ytmp4v2':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.ytdlv2(q)
                .then(async ({result, message, status}) => {
                    if (isPremium || isOwner){
                        if (status === 401) {
                            await sociality.reply(from, message, id)
                        } else if (Number(result.size.split(' MB')[0]) >= 100) {
                            await sociality.reply(from, ind.videoLimit(), id)
                        } else {
                            await sociality.sendFileFromUrl(from, result.thumbnail, `${result.title}.jpg`, `${result.title}`, id)
                            await sociality.sendFileFromUrl(from, result.link, `${result.title}.mp4`, '', id)
                            console.log('Success sending YouTube video!')
                        }
                    } else {
                        if (status === 401) {
                            await sociality.reply(from, message, id)
                        } else if (Number(result.size.split(' MB')[0]) >= 15) {
                            await sociality.reply(from, ind.videoLimit(), id)
                        } else {
                            await sociality.sendFileFromUrl(from, result.thumbnail, `${result.title}.jpg`, `${result.title}`, id)
                            await sociality.sendFileFromUrl(from, result.link, `${result.title}.mp4`, '', id)
                            console.log('Success sending YouTube video!')
                        }
                    }

                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
    case prefix+'ytplay':
        if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
        if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
        if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
        await sociality.reply(from, ind.wait(), id)
        downloader.ytplay(q)
        .then(async ({ result }) => {
            await sociality.sendFileFromUrl(from, result.info.thumbnail, `${result.info.title}.jpg`, ind.ytPlayv2(result), id)
            for (let i = 0; i < result.audio.length; i++) {
                if (result.audio[i].bitrate === '320 kbps'){
            await sociality.sendFileFromUrl(from, result.audio[i].link, `${result.title}.mp3`, '', id)
                }
            }``
            console.log('Success sending YouTube video!')
        
    })
    .catch(async (err) => {
        console.error(err)
        await sociality.reply(from, `Error! ${err}`, id)
    })
break
         /*   case prefix+'ytmp4':         
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.ytdl(url)
                    .then(async (res) => {
                        if (res.status === 'error') {
                            await sociality.reply(from, res.pesan, id)
                        } else if (Number(res.size.split(' MB')[0]) >= 30) {
                            await sociality.reply(from, ind.videoLimit(), id)
                        } else {
                            await sociality.sendFileFromUrl(from, res.thumbnail, `${res.title}.jpg`, ind.ytFound(res), id)
                            await sociality.sendFileFromUrl(from, res.url_video, `${res.title}.mp4`, '', id)
                            console.log('Success sending YouTube video!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            */
            case prefix+'whois':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.whois(args[0])
                    .then(async ({ result }) => {
                        await sociality.reply(from, `*「 WHOIS 」*\n\n➸ *IP address*: ${result.ip_address}\n➸ *City*: ${result.city}\n➸ *Region*: ${result.region}\n➸ *Country*: ${result.country}\n➸ *ZIP code*: ${result.postal_code}\n➸ *Latitude and longitude*: ${result.latitude_longitude}\n➸ *Time zone*: ${result.time_zone}\n➸ *Call code*: ${result.calling_code}\n➸ *Currency*: ${result.currency}\n➸ *Language code*: ${result.languages}\n➸ *ASN*: ${result.asn}\n➸ *Organization*: ${result.org}`, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'email': // By: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                const emailTarget = q.substring(0, q.indexOf('|') - 1)
                const subjectEmail = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const messageEmail = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.email(emailTarget, subjectEmail, messageEmail)
                    .then(async ({ result }) => {
                        if (result.status === '204') {
                            await sociality.reply(from, 'Server busy!', id)
                        } else {
                            await sociality.reply(from, `*Success sending email*!\n➸ *Target*: ${emailTarget}\n➸ *Subject*: ${result.subjek}\n➸ *Message*: ${result.pesan}`, id)
                            console.log('Success sending email!')
                        }
                    })
            break
            case prefix+'sms':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                const pesanPengirim = q.substring(0, q.indexOf('|') - 1)
                const nomorPenerima = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.sms(nomorPenerima, pesanPengirim)
                    .then(async ({ status, pesan }) => {
                        if (status !== 'success') return await sociality.reply(from, pesan, id)
                        await sociality.reply(from, `Success sending SMS to: ${nomorPenerima}\nMessage: ${pesanPengirim}`, id)
                        console.log(`Success sending SMS to ${nomorPenerima}!`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'toxic':
                if (!isRegistered) return await sociality.reply(from , ind.notRegistered(), id)
                await sociality.reply(from, toxic(), id)
            break
            case prefix+'alkitab':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.reply(from, ind.wait(), id)
                misc.alkitab(q)
                    .then(async ({ result }) => {
                        let alkitab = '-----[ *AL-KITAB* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            alkitab +=  `\n\n➸ *Ayat*: ${result[i].ayat}\n➸ *Isi*: ${result[i].isi}\n➸ *Link*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, alkitab, id)
                        console.log('Success sending Al-Kitab!')
                    })
            break
            case prefix+'qrcode':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 2) return sociality.reply(from, `Untuk menggunakan fitur qrcode, ketik :\n${prefix}qrcode [kata/url] [size]\n\nContoh: ${prefix}qrcode https://google.com 300\n\n*Size minimal 100 & maksimal 500*`, id)
                sociality.reply(from, `wait...`, id)
                misc.qrcode(args[0], args[1])
                .then(async (res) => {
                    await sociality.sendFileFromUrl(from, `${res}`, id)
                  })
                break
            case prefix+'reminder': // by Slavyan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const timeRemind = q.substring(0, q.indexOf('|') - 1)
                const messRemind = q.substring(q.lastIndexOf('|') + 2)
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender.id, messRemind, timeRemind, _reminder)
                await sociality.sendTextWithMentions(from, `*「 REMINDER 」*\n\nReminder diaktifkan! :3\n\n➸ *Pesan*: ${messRemind}\n➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik\n➸ *Untuk*: @${sender.id.replace('@c.us', '')}`, id)
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender.id, _reminder)) {
                        await sociality.sendTextWithMentions(from, `⏰ *「 REMINDER 」* ⏰\n\nAkhirnya tepat waktu~ @${sender.id.replace('@c.us', '')}\n\n➸ *Pesan*: ${reminder.getReminderMsg(sender.id, _reminder)}`)
                        _reminder.splice(reminder.getReminderPosition(sender.id, _reminder), 1)
                        fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
            break
            case prefix+'imagetourl':
            case prefix+'imgtourl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await sociality.reply(from, linkImg, id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'infohoax':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.infoHoax()
                    .then(async ({ result }) => {
                        let txt = '*「 HOAXES 」*'
                        for (let i = 0; i < result.length; i++) {
                            const { tag, title, link } = result[i]
                            txt += `\n\n➸ *Status*: ${tag}\n➸ *Deskripsi*: ${title}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.sendFileFromUrl(from, result[0].image, 'hoax.jpg', txt, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'trending':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.trendingTwt()
                    .then(async ({ result }) => {
                        let txt = '*「 TRENDING TWITTER 」*'
                        for (let i = 0; i < result.data.length; i++) {
                            const { title, url, tweet_count } = result.data[i]
                            txt += `\n\n${title}. \n➸ *Tweets*: ${tweet_count}\n➸ *Link*: ${url}`
                        }
                        await sociality.reply(from, txt, id)
                        console.log('Success sending trending!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'jobseek':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.jobSeek()
                    .then(async ({ result }) => {
                        let txt = '*「 JOB SEEKER 」*'
                        for (let i = 0; i < result.length; i++) {
                            const { perusahaan, link, profesi, gaji, lokasi, pengalaman, edukasi, desc, syarat } = result[i]
                            txt += `\n\n➸ *Perusahaan*: ${perusahaan}\n➸ *Lokasi*: ${lokasi}\n➸ *Profesi*: ${profesi}\n➸ *Gaji*: ${gaji}\n➸ *Pengalaman*: ${pengalaman}\n➸ *Deskripsi*: ${desc}\n➸ *Syarat*: ${syarat}\n➸ *Edukasi*: ${edukasi}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, txt, id)
                        console.log('Success sending jobseek!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'call':
            case prefix+'spamcall':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (!q) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.call(q)
                    .then(async ({ message }) => {
                        await sociality.reply(from, message, id)
                        console.log(`Success calling number: ${q}`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            /*
            case prefix+'spamsms':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 2) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isNaN(Number(args[0])) && isNaN(Number(args[1]))) return await sociality.reply(from, ind.wrongFormat(), id)
                if (Number(args[1]) > 10) return await sociality.reply(from, 'Maximum 10 SMS.', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.spamsms(args[0], args[1])
                    .then(async ({ status, logs, msg }) => {
                        if (status !== 200) {
                            await sociality.reply(from, msg, id)
                        } else {
                            await sociality.reply(from, logs, id)
                            console.log('Success sending spam!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break */
            case prefix+'translate':
            case prefix+'trans':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const texto = q.substring(0, q.indexOf('|') - 1)
                const languaget = q.substring(q.lastIndexOf('|') + 2)
                translate(texto, {to: languaget}).then(res => {sociality.reply(from, res.text, id)})
            break
            case prefix+'transvoice' :
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const texxt = q.substring(0, q.indexOf('|') - 1)
                const languagett = q.substring(q.lastIndexOf('|') + 2)
                const transvo = require('node-gtts')(languagett)
                     translate(texxt, {to: languagett})
                     .then(res => transvo.save('./media/trans.mp3', res.text, () => {
                          sociality.sendPtt(from, './media/trans.mp3', id)
                     }))
                     break
            // Bot
            case prefix+'menu':
            case prefix+'help':
                const jumlahUser = _registered.length
                const levelMenu = level.getLevelingLevel(sender.id, _level)
                const xpMenu = level.getLevelingXp(sender.id, _level)
                const reqXpMenu = 5 * Math.pow(levelMenu, 2) + 50 * levelMenu + 100
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args[0] === '1') {
                    await sociality.sendText(from, ind.menuDownloader(), eng.menuDownloader())
                } else if (args[0] === '2') {
                    await sociality.sendText(from, ind.menuBot())
                } else if (args[0] === '3') {
                    await sociality.sendText(from, ind.menuMisc())
                } else if (args[0] === '4') {
                    await sociality.sendText(from, ind.menuSticker())
                } else if (args[0] === '5') {
                    await sociality.sendText(from, ind.menuWeeaboo())
                } else if (args[0] === '6') {
                    await sociality.sendText(from, ind.menuFun())
                } else if (args[0] === '7') {
                    await sociality.sendText(from, ind.menuModeration())
                } else if (args[0] === '8') {
                    await sociality.sendText(from, ind.menuJual())
                } else if (args[0] === '9') {
                    if (isGroupMsg && !isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    await sociality.sendText(from, ind.menuNsfw())
                } else if (args[0] === '10') {
                    if (!isOwner) return await sociality.reply(from, ind.ownerOnly())
                    await sociality.sendText(from, ind.menuOwner())
                } else if (args[0] === '11') {
                    if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                    await sociality.sendText(from, ind.menuLeveling())
                } else {
                    await sociality.sendFileFromUrl(from, `https://i.imgur.com/pLBYsTo.jpg`,`master.jpg`, ind.menu(jumlahUser, levelMenu, xpMenu, role, pushname, reqXpMenu, timeer, isPremium ? 'YES' : 'NO'))
                }
            break
            case prefix+'hargaml':
            case prefix+'dm':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendText(from, ind.menuML())
            break
            case prefix+'rules':
            case prefix+'rule':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendText(from, ind.rules())
            break
            case prefix+'nsfw':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (ar[0] === 'enable') {
                    if (isNsfw) return await sociality.reply(from, ind.nsfwAlready(), id)
                    _nsfw.push(groupId)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await sociality.reply(from, ind.nsfwOn(), id)
                } else if (ar[0] === 'disable') {
                    _nsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await sociality.reply(from, ind.nsfwOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'status':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendText(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
            break
            case prefix+'bloklist':
            case prefix+'listblok':
            case prefix+'blocklist':
            case prefix+'listblock':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                let block = ind.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace('@c.us', '')}\n`
                }
                await sociality.sendTextWithMentions(from, block)
            break
            case prefix+'ktpmaker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length == 0) return sociality.reply(from, `Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Sociality Bot|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.pinimg.com/564x/02/ba/10/02ba10eb8acb9a45a0ab243d594211e9.jpg`, id)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
                kabu = get_args[2]
                namamu = get_args[3]
                ttl = get_args[4]
                jk = get_args[5]
                jl = get_args[6]
                rtrw = get_args[7]
                lurah = get_args[8]
                camat = get_args[9]
                agama = get_args[10]
                nikah = get_args[11]
                kerja = get_args[12]
                warga = get_args[13]
                until = get_args[14]
                img = get_args[15]
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/ktpmaker?apikey=Ninokutersayang&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${namamu}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`, 'ktpmaker.jpg', '', id)
                .then(() => console.log('Success creating image!'))
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
            case prefix+'owner':
            case prefix+'ownerbot':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendContact(from, ownerNumber)
                await sociality.reply(from, ind.owner(), id)
            break
            case prefix+'runtime': // BY HAFIZH
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                const formater = (seconds) => {
                    const pad = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
                }
                const uptime = process.uptime()
                await sociality.reply(from, `── *「 BOT UPTIME 」* ──\n\n ❏${formater(uptime)}`, id)
            break
            case prefix+'ping':
            case prefix+'p':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                const loadedMsg = await sociality.getAmountOfLoadedMessages()
                const botadmins = await sociality.iAmAdmin()
                const blockedd = await sociality.getBlockedIds()
                const chatIds = await sociality.getAllChatIds()
                const groups = await sociality.getAllGroups()
                const me = await sociality.getMe()
                const battery = await sociality.getBatteryLevel()
                const isCharging = await sociality.getIsPlugged()
                const premiup = premium.getAllPremiumUser(_premium)
                const timestamp = speed();
                const latensi = speed() - timestamp
                const waktutime = (seconds) => {
                    const pado = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const jamm = Math.floor(seconds / (60 * 60))
                    const menitt = Math.floor(seconds % (60 * 60) / 60)
                    const detikk = Math.floor(seconds % 60)
                    return ' ' + pado(jamm) + ':' + pado(menitt) + ':' + pado(detikk)
                }
                const waktuup = process.uptime()
                await sociality.reply(from, `*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗣𝗖 」*\nPenggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\nCPU: ${os.cpus()[0].model}
                \n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝐓𝐄𝐑𝐃𝐀𝐅𝐓𝐀𝐑 」* :\n*${_registered.length}* User yang terdaftar\n   ├ *${blockedd.length}* User Terblokir\n   ├ *${_ban.length}* User terkena banned\n   └ *${premiup.length}* Premium User
                \n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 」* :\n- *${loadedMsg}* Loaded Messages\n- *${chatIds.length - groups.length}* Total Chats\n    ├ *${groups.length}* Group Chats\n    └ *${chatIds.length}* Personal Chats\n- *${groups.length}* Groups Joined\n     └ *${botadmins.length}* Bot jadi admin
                \n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘 」*\n${(`\n*Battery* : ${battery}% ${isCharging ? 'Sedang di charger ...' : 'Ga Di Cas!'}\n${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}`.slice(1, -1))}
                \n\n*「 𝐁𝐎𝐓 𝐀𝐊𝐓𝐈𝐅 」*\n${waktutime(waktuup)}
                \n\n\n*Speed:* ${processTime(t, moment())} _Second_`, id)
            break
            case prefix+'delete':
            case prefix+'del':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!quotedMsg) return await sociality.reply(from, ind.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case prefix+'report':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.emptyMess(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await sociality.reply(from, ind.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await sociality.sendText(ownerNumber, `-----[ REPORT ]-----\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await sociality.reply(from, ind.received(pushname), id)
                    } else {
                        await sociality.sendText(ownerNumber, `-----[ REPORT ]-----\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await sociality.reply(from, ind.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'tos':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendText(from, ind.tos(ownerNumber))
            break
            case prefix+'join':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!isUrl(url) && !url.includes('chat.whatsapp.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                const checkInvite = await sociality.inviteInfo(url)
                if (isOwner) {
                    await sociality.joinGroupViaLink(url)
                    await sociality.reply(from, ind.ok(), id)
                    await sociality.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                } else {
                    const getGroupData = await sociality.getAllGroups()
                    if (getGroupData.length >= groupLimit) {
                        await sociality.reply(from, `Invite refused. Max group is: ${groupLimit}`, id)
                    } else if (getGroupData.size <= memberLimit) {
                        await sociality.reply(from, `Invite refused. Minimum member is: ${memberLimit}`, id)
                    } else {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await sociality.joinGroupViaLink(url)
                        await sociality.reply(from, ind.ok(), id)
                        await sociality.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                    }
                }
            break
          case prefix+'lgc':
            case prefix+'listgroup':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                sociality.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                sociality.reply(from, gc, id)
            })
            break 
            case prefix+'premiumcheck':
            case prefix+'cekpremium':
            case prefix+'premicek':
            case prefix+'cekpremi':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await sociality.reply(from, `*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender.id}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
            break
            case prefix+'premilist':
            case prefix+'listpremi':
            case prefix+'premiumlist':
            case prefix+'listpremium':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push(await sociality.getContact(premium.getAllPremiumUser(_premium)[i]))
                    listPremi += `${i + 1}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@c.us', '')}\n➸ *Name*: ${arrayPremi[i].pushname}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                await sociality.reply(from, listPremi, id)
            break
            case prefix+'getpic':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (mentionedJidList.length !== 0) {
                    const userPic = await sociality.getProfilePicFromServer(mentionedJidList[0])
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var pek = errorImg
                    } else {
                        pek = userPic
                    }
                    await sociality.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await sociality.getProfilePicFromServer(args[0] + '@c.us')
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var peks = errorImg
                    } else {
                        peks = userPic
                    }
                    await sociality.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'serial':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                const serials = args[0]
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const name = register.getRegisteredNameFromSerial(serials, _registered)
                    const age = register.getRegisteredAgeFromSerial(serials, _registered)
                    const time = register.getRegisteredTimeFromSerial(serials, _registered)
                    const id = register.getRegisteredIdFromSerial(serials, _registered)
                    await sociality.sendText(from, ind.registeredFound(name, age, time, serials, id))
                } else {
                    await sociality.sendText(from, ind.registeredNotFound(serials))
                }
            break
            case prefix+'limit':
                if (isPremium || isOwner) return await sociality.reply(from, '⤞ Limit left: ∞ (UNLIMITED)', id)
                await sociality.reply(from, `⤞ Limit left: ${limit.getLimit(sender.id, _limit, limitCount)} / 10\n\n*_Limit direset pada pukul 00:00 WIB_* atau dengan donasi untuk akses limit tak terbatas di *#donasi*`, id)
            break

            //EDUCATION
            case prefix+'kelpersegi':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const persegi = bdr.datar.keliling.persegi(q, false)
                const caraPersegi = bdr.datar.keliling.persegi(q, true)
                await sociality.reply(from, `*Hasil*: ${persegi}\n*Rumus*: ${caraPersegi}`, id)
            break
            case prefix+'luaspersegi':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const luaspersegi = bdr.datar.luas.persegi(q, false)
                const luaspersegis = bdr.datar.luas.persegi(q, true)
                await sociality.reply(from, `*Hasil*: ${luaspersegi}\n*Rumus*: ${luaspersegis}`, id)
            break
            case prefix+'kuadrat':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kuadrat = bdr.rdb.kuadrat(q)
                await sociality.reply(from, `*Hasil*: ${kuadrat}`, id)
            break
            case prefix+'kubik':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kubik = bdr.rdb.kubik(q)
                await sociality.reply(from, `*Hasil*: ${kubik}`, id)
            break

            // Weeb zone
            case prefix+'neko':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Getting neko image...')
                await sociality.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break 
            case prefix+'neko18':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                        sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=Ninokutersayang`,`ciduk.jpg`, 'jangan ciduk owner mz~', id)
                        break
            case prefix+'randomlewds':
            case prefix+'rleawds':
            case prefix+'rleawd':
            case prefix+'randomlewd':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                         await sociality.reply(from, ind.wait(), id);
                         const rlewds = ['8ball', 'Random_hentai_gif', 'meow', 'erok', 'lizard', 'feetg', 'baka', 'v3', 'bj', 'erokemo', 'tickle', 'feed', 'neko', 'kuni', 'femdom', 'futanari', 'smallboobs', 'goose', 'nekoapi_v3.1', 'poke', 'les', 'trap', 'pat', 'boobs', 'blowjob', 'hentai', 'hololewd', 'ngif', 'fox_girl', 'wallpaper', 'lewdk', 'solog', 'pussy', 'yuri', 'lewdkemo', 'lewd', 'anal', 'pwankg', 'nsfw_avatar', 'eron', 'kiss', 'pussy_jpg', 'woof', 'hug', 'keta', 'cuddle', 'eroyuri', 'slap', 'cum_jpg', 'waifu', 'gecg', 'tits', 'avatar', 'holoero', 'classic', 'kemonomimi', 'feet', 'gasm', 'spank', 'erofeet', 'ero', 'solo', 'cum', 'smug', 'holo', 'nsfw_neko_gif']
                         const rledsv2 = rlewds[Math.floor(Math.random() * (rlewds.length))]
                         axios.get(`https://nekos.life/api/v2/img/${rledsv2}`).then(res => {
                                sociality.sendFileFromUrl(from, res.data.url);
                            });
                            break
            case prefix+'pussy':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                         await sociality.reply(from, ind.wait(), id);
                            axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                                sociality.sendFileFromUrl(from, res.data.url);
                            });
                            break
            case prefix+'wallpaper':
            case prefix+'wp':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Getting wallpaper image...')
                await sociality.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id )
                    })
            break
            case prefix+'kemono':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Getting kemonomimi image...')
                await sociality.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'cekapi':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                const waduuuuuuh = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=Ninokutersayang`)
                .then(async ({result}) => {
                    await sociality.reply(from, `Username ${waduuuuuuh.result.username}\nTotal request hari ini ${waduuuuuuh.result.today}\nTotal Keseluru ${waduuuuuuh.result.request}\nBerlaku Hingga ${waduuuuuuh.result.expired}`)
                })
                break
            case prefix+'kusonime':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.kusonime(q)
                    .then(async ({result, status}) => {
                        if (status === 500) {
                            await sociality.reply(from, `Error bang`, id)
                        } else {
                            await sociality.sendFileFromUrl(from, result.thumbnail, `${result.title}.jpg`, ind.kusonime(result), id)
                            console.log('Success sending Kusonime!')
                        }
                    }).catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!`, id)
                    })
            break
            case prefix+'otakudesu':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.otakudesu(q)
                    .then(async ({result, status}) => {
                        if (status === 404) {
                            await sociality.reply(from, `Error bang`, id)
                        } else {
                            await sociality.reply(from, ind.otakudesu(result), id)
                            //await sociality.sendFileFromUrl(from, result.url_audio, `${result.title}.mp3`, '', id)
                            console.log('Success sending Kusonime!')
                        }
                    }).catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!`, id)
                    })
            break
            /*
            case prefix+'komiku':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.manga(q)
                    .then(async ({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}${genre}\nSinopsis: ${sinopsis}\nLink download:\n${link_dl}`
                        await sociality.sendFileFromUrl(from, thumb, 'mangak.jpg', mangak, null, null, true)
                            .then(() => console.log('Success sending manga info!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break*/

            case prefix+'wait':
                /**
                 *                 if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await sociality.reply(from, linkImg, id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }

                            let saldo = 0;
            const getBalanceByWallet = (w) => new Promise((resolve, reject) => {
                fetch(`https://viewblock.io/zilliqa/address/${w}?txsType=tokens&tab=tokens`, {
                    method:'GET'
                })
                .then(res => res.text())
                .then(res => {
                    const $ = cheerio.load(res);
                    const data = $('div.sc-1gnu6p8-0.dXDDNa').text()
                    resolve(data)
                })
                .catch(err => reject(err))
            });
            const w = args.join(' ')
            const sunyouRequestREsult = await getBalanceByWallet(w);
            const res = sunyouRequestREsult.split("Proof Of Receipt Token");
            res.length == 2 ?    await sociality.reply(from, w+" => Landing bos Jajanin lah bang | Balance: "+res[1], id) : await sociality.reply(from, w+" => Sad belum landing", id);
            res.length == 2 ? console.log(w+" => Landing bos | Balance: "+res[1]) : console.log(w+" => Sad belum landing");
            if (res.length == 2){
                const balanceNow = res[1].split("  ")
                saldo += parseFloat(balanceNow[0])
            }
           // await sociality.reply(from, "Total seluruh token kamu:", saldo,"PORT", id)
            console.log("Total seluruh token kamu:", saldo+" PORT");
            
                 */
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                    if (isMedia) {
                        var mediaData = await decryptMedia(message, uaOverride)
                    } else {
                        var mediaData = await decryptMedia(quotedMsg, uaOverride)
                    }
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const toyot = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(toyot, `${sender.id}_img`)
                    sociality.reply(from, 'Searching....', id)
                    fetch(`https://trace.moe/?url=${linkImg}`, {
                        method: 'GET',
                        headers: { "Content-Type": "application/json" }
                    })
                    .then(respon => respon.json())
                    .then(resolt => {
                        if (resolt.docs && resolt.docs.length <= 0) {
                            sociality.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                        }
                        const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                        teks = ''
                        if (similarity < 0.92) {
                            teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                        }
                        teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                        teks += `➸ *Ecchi* : ${is_adult}\n`
                        teks += `➸ *Eps* : ${episode.toString()}\n`
                        teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                        var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                        sociality.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                            sociality.reply(from, teks, id)
                            limitAdd(serial)
                        })
                    })
                    .catch((err) => {
                        sociality.reply(from, `Error !${err}`, id)
                    })
                } else {
                    const tutor = `https://i.imgur.com/Qncwnf4_d.webp?maxwidth=760&fidelity=grand`
                    sociality.sendFileFromUrl(from, tutor, 'Tutor.jpg', 'Perhatikan gambarnya!', id)
                }
                break
            case prefix+'source':
            case prefix+'sauce':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    try {
                        const imageLink = await uploadImages(mediaData, `sauce.${sender.id}`)
                        console.log('Searching for source...')
                        const results = await saus(imageLink)
                        for (let i = 0; i < results.length; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = 'Low similarity. 🤔\n\n'
                            } else {
                                teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                                await sociality.sendLinkWithAutoPreview(from, results[i].url, teks)
                                    .then(() => console.log('Source found!'))
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'artinama':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.artinama(q)
                    .then(async ({ result }) => {
                        const anm2 = `*「 ARTI NAMA 」*\n\n• Artinama : ${result}`
                        await sociality.reply(from,anm2, id)
                            .then(() => console.log('Success sending artinama!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'waifu':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.waifu(false)
                    .then(async ({ url }) => {
                        await sociality.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            .then(() => console.log('Success sending waifu!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'cowo':
            case prefix+'laki':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                var hite = ["eboy", "garoto", "homem", "men", "garoto oriental", "japanese men", "pretty guy", "homem bonito"];
                var hesc = hite[Math.floor(Math.random() * hite.length)];
                var men = "https://api.fdci.se/sosmed/rep.php?gambar=" + hesc;
                axios.get(men)
                    .then((result) => {
                    var h = JSON.parse(JSON.stringify(result.data));
                    var cewek =  h[Math.floor(Math.random() * h.length)];
                    sociality.sendFileFromUrl(from, cewek, 'waifu.png', '', id)
                })
                break

                case prefix+'cewe':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    var items = ["saycay", "alina nikitina", "belle delphine", "teen girl", "teen cute", "japanese girl", "oriental girl", "korean girl", "chinese girl", "e-girl", "teen egirl", "pretty teen girl", "korean teen girl", "egirl", "cute girl", "eimi fukada"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
                    console.log(cewe)
                    var girl = "https://api.fdci.se/sosmed/rep.php?gambar=" + cewe;
                    axios.get(girl)
                        .then((result) => {
                        var b = JSON.parse(JSON.stringify(result.data));
                        var cewek =  b[Math.floor(Math.random() * b.length)];
                        sociality.sendFileFromUrl(from, cewek, 'manis.png', '', id)
                    })
                    break

/*
            case prefix+'anitoki':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.anitoki()
                    .then(async ({ result }) => {
                        let anitoki = '-----[ *ANITOKI LATEST* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            anitoki += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, anitoki, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            */
            case prefix+'neonime':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.neonime(q)
                .then(async ({ result }) => {
                    let neonimeinfo = '-----[ *Neonime Pencarian* ]-----'
                    for (let i = 0; i < result.length; i++) {
                        neonimeinfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                    }
                    await sociality.reply(from, neonimeinfo, id)
                    console.log('Success sending on-going anime!')
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break
/*
            case prefix+'neonimedl':
            case prefix+'neodl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.neonimev2(url)
                .then(async ({ result }) => {
                    let neonimeinfo = '-----[ *Neonime Download* ]-----'
                    for (let i = 0; i < result.360p.length; i++) {
                        neonimeinfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                    }
                    await sociality.reply(from, neonimeinfo, id)
                    console.log('Success sending on-going anime!')
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break
*/
            case prefix+'anoboy':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.anoboy()
                    .then(async ({ result }) => {
                        let anoboyInfo = '-----[ *ANOBOY ON-GOING* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            anoboyInfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, anoboyInfo, id)
                        console.log('Success sending on-going anime!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'anoboydl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.anoboydl(url)
                    .then(async ({ result }) => {
                        let anoboydownload = '-----[ *ANOBOY Downloader* ]-----'
                                for (let i = 0; i < result.Zippy.length; i++) {
                                    anoboydownload += `\n\n➸ *Site Downlaode*\nZippyshared\n➸Kualitas: ${result.Zippy[i].title}\n➸Downloader: ${result.Zippy[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                                }
                                    for (let j = 0; j < result.M4U.length; j++) {
                                        anoboydownload += `\n\n➸ *Site Downlaode*\nM4U\n➸Kualitas: ${result.M4U[j].title}\n➸Downloader: ${result.M4U[j].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                                    }
                                        for (let k = 0; k < result.Mirror.length; k++) {                                                 
                                            anoboydownload +=  `\n\n➸ *Site Downlaode*\nMirror\n➸Kualitas: ${result.Mirror[k].title}\n➸Downloader: ${result.Mirror[k].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                         }
                        await sociality.reply(from, anoboydownload, id)
                        console.log('Success sending on-going anime!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            
            case prefix+'nimesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix+'animesticker': 
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                weeaboo.snime()
                    .then(async (body) => {
                        const wifegerak = body.split('\n')
                        const wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        await sociality.sendStickerfromUrl(from, wifegerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'quotenime':
            case prefix+'quotesnime':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                console.log('Sending random quote...')
                const quoteznime = await axios.get('https://mhankbarbar.tech/api/quotesnime/random')
                await sociality.sendText(from, `➸ *Quotes* : ${quoteznime.data.data.quote}\n➸ *Character* : ${quoteznime.data.data.chara} from Anime ${quoteznime.data.data.anime}`, id)
                    .then(() => console.log('Success sending quotes..'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            // Fun

            case prefix+'jadian':
            if (!isGroupMsg) return sociality.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
            const mem = groupMembers
            const aku = mem[Math.floor(Math.random() * mem.length)];
            const kamu = mem[Math.floor(Math.random() * mem.length)];
            const sapa = `Cieee... @${aku.replace(/[@c.us]/g, '')} (💘) @${kamu.replace(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`
            await sociality.sendTextWithMentions(from, sapa, id)
            break  

            case prefix+'bapak': // By Kris
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                axios.get(`https://api.terhambar.com/bpk?kata=${q}`)
                    .then(async (res) => await sociality.reply(from, res.data.text, id))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'puisi': // By Kris
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/puisi2')
                    .then(async (res) => await sociality.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'cerpen': // By Kris
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(async (res) => await sociality.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'creepyfact': // By Kris
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await sociality.reply(from, creepyz, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'quotes':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.quotes()
                .then(async ({ result }) => {
                    await sociality.reply(from, `➸ *Quotes*: ${result.quotes}\n➸ *Author*: ${result.author}`, id)
                })
            break
            
            case prefix+'asupan':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.asupan()
                    .then(async ({ result }) => {
                        await sociality.sendFileFromUrl(from, result, 'asupan.mp4', 'Follow IG: https://www.instagram.com/Mocha.co.jp untuk support owner saya.', id)
                        console.log('Success sending video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `${err}`, id)
                    })
            break
            case prefix+'citacita':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.cita()
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        await sociality.sendFileFromUrl(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `${err}`, id)
                    })
            break
            case prefix+'dadu': // by CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dadu()
                    .then(async (body) => {
                        const dadugerak = body.split('\n')
                        const dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
                        await sociality.sendStickerfromUrl(from, dadugerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'dogesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix+'doge':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.doge()
                    .then(async (body) => {
                        const dogeg = body.split('\n')
                        const dogegx = dogeg[Math.floor(Math.random() * dogeg.length)]
                        await sociality.sendStickerfromUrl(from, dogegx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'profile':
            case prefix+'me':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                    const getQuoted = quotedMsgObj.sender.id
                    const profilePic = await sociality.getProfilePicFromServer(getQuoted)
                    const username = quotedMsgObj.sender.name
                    const statuses = await sociality.getStatus(getQuoted)
                    const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(getQuoted, _level)
                    const xpMe = level.getLevelingXp(getQuoted, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * levelMe + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfp = errorImg
                    } else {
                        pfp = profilePic
                    }
                    await sociality.sendFileFromUrl(from, pfp, `${username}.jpg`, ind.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else if (!isBanned){
                    const profilePic = await sociality.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await sociality.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = isPremium ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * levelMe + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = errorImg
                    } else {
                        pfps = profilePic
                    }
                    await sociality.sendFileFromUrl(from, pfps, `${username}.jpg`, ind.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else {
                    const profilePic = await sociality.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await sociality.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = isPremium ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * levelMe + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = errorImg
                    } else {
                        pfps = profilePic
                    }
                    await sociality.sendFileFromUrl(from, pfps, `${username}.jpg`, ind.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                }
            break
            case prefix+'tahta':
            case prefix+'hartatahta':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating harta tahta text...')
                await sociality.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=Ninokutersayang&text1=Harta&text2=Tahta&text3=${q}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            
            case prefix+'partner':
            case prefix+'pasangan':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const nama1 = q.substring(0, q.indexOf('|') - 1)
                const nama2 = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                fun.jodoh(nama1, nama2)
                .then(async ({ result }) => {
                    await sociality.reply(from, `Nama : ${nama1}\nPasangan : ${nama2}\n\nHasil : ${result.desk}\n\nSisi Positif : ${result.positif}\n\nSisi Negatif : ${result.negatif}`, id)
                        .then(() => console.log('Success sending fortune!'))
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
            case prefix+'zodiac':
            case prefix+'zodiak':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.zodiak(args[0])
                    .then(async ({ result }) => {
                        if (result.status === 204) {
                            return await sociality.reply(from, result.ramalan, id)
                        } else {
                            let ramalan = `Zodiak: ${result.zodiak}\n\nRamalan: ${result.ramalan}\n\nAngka laksek: ${result.nomorKeberuntungan}\n\n${result.motivasi}\n\n${result.inspirasi}`
                            await sociality.reply(from, ramalan, id)
                                .then(() => console.log('Success sending zodiac fortune!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'write':
            case prefix+'nulis':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating writing...')
                await sociality.sendFileFromUrl(from, `https://api.zeks.xyz/api/nulis?apikey=apivinz&text=${q}`, 'hayo.jpg','Jangan mager ngentot', id)
                    .then(() => console.log('Success sending write image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'ffbanner': // By: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating FF banner...')
                const teks1ffanjg = q.substring(0, q.indexOf('|') - 1)
                const teks2ffanjg = q.substring(q.lastIndexOf('|') + 2)
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${teks1ffanjg}&text=${teks2ffanjg}&apikey=${config.vhtear}`, id)
                console.log('Success!')
            break
            case prefix+'caklontong': //By: VideFrelan
                if (!isGroupMsg) return sociality.reply(from, ind.groupOnly(), id)
                if (!isRegistered) return  sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.caklontong()
                    .then(async ( { result }) => {
                        await sociality.reply(from, `➸ *Soal*: ${result.question}`, id)
                        await sociality.sendText(from, '30 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.sendText(from, '20 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.sendText(from, '10 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.reply(from, `➸ *Jawaban*: ${result.answer}\n➸ *Sebab*:${result.information}`, id)
                        console.log('Success sending the answers!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!')
                    })
            break
            case prefix+'tebakgambar':
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.tbkgmbr()
                    .then(async ({ result }) => {
                        await sociality.sendFileFromUrl(from, result.soal_gbr, 'TebakGambar.jpg', '', id)
                        await sociality.sendText(from, '30 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.sendText(from, '20 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.sendText(from, '10 Detik Tersisa...')
                        await sleep(10000)
                        await sociality.reply(from, `➸ *Jawaban*: ${result.jawaban}`, id)
                        console.log('Success sending tebakgambar result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!')
                    })
            break    
            case prefix+'fflogo': // By: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating FF logo...')
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${config.vhtear}&text=${q}`, id)
                console.log('Success!')
            break
            case prefix+'text3d':
            case prefix+'3dtext':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating 3D text...')
                await sociality.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/text3d?text=${q}`,`${q}.jpg`, '', id)
                console.log('Success creating 3D text!')
            break
            case prefix+'simi': 
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.simi(q)
                    .then(async ({ result }) => {
                        await sociality.reply(from, result, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!\n\n${err}`, id)
                    })
            break
            case prefix+'apkpuredl': 
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.apkpuredl(url)
                    .then(async ({ result }) => {
                        await sociality.sendFileFromUrl(from, `Nama APK: ${result.title}\n Deskripsi:${result.desc}\n Ukuran APK ${result.size}\n Link Download ${result.url}` , id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, `Error!\n\n${err}`, id)
                    })
            break

            case prefix+'glitchtext':
            case prefix+'glitext':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const teks1 = q.substring(0, q.indexOf('|') - 1)
                const teks2 = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating glitch text...')
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${teks1}&text2=${teks2}&apikey=${config.vhtear}`, 'glitch.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'valobanner':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const tekks1 = q.substring(0, q.indexOf('|') - 1)
                const tekks2 = q.substring(q.indexOf('|') + 1, q.lastIndexOf('|') - 1)
                const tekks3 = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating glitch text...')
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=${config.api}&text1=${tekks1}&text2=${tekks2}&text3=${tekks3}`, 'glitch.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'gdbypass':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.gdrivedl(q)
                .then (async ({ result }) => {
                    await sociality.reply(from, `➸ *Nama File*: ${result.filename}\n➸ *Link Bypass*: ${result.dl_link}`, id)
                })
            break
            case prefix+'phmaker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kiri = q.substring(0, q.indexOf('|') - 1)
                const kanan = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating Pornhub text...')
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${kiri}&text2=${kanan}&apikey=${config.vhtear}`, 'ph.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'blackpink':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating Blackpink text...')
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=Ninokutersayang&text=${q}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creting image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'galaxy':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating galaxy text...')
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/galaxytext?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'tod':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.reply(from, 'Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.' , id)
                await sociality.sendText(from, `Silakan ketik *${prefix}truth* atau *${prefix}dare*`)
            break
            case prefix+'weton':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const tgl = q.substring(0, q.indexOf('|') - 1)
                const bln = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const thn = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                fun.weton(tgl, bln, thn)
                    .then(async ({ result }) => {
                        await sociality.reply(from, `Weton: ${result.weton}\nKarakter : ${result.karakter}\nPekerjaan : ${result.pekerjaan}\nRezeki : ${result.rejeki}\nJodoh : ${result.jodoh}`, id)
                        console.log('Success sending weton info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'truth':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.truth()
                    .then(async (body) => {
                        const tod = body.split('\n')
                        const randomTod = tod[Math.floor(Math.random() * tod.length)]
                        await sociality.reply(from, randomTod, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'hilih':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                fun.hilihteks(q)
                    .then(async ( { result }) => {
                        await sociality.reply(from, result.kata, id)
                        console.log('Success sending hilih text!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'dare':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dare()
                    .then(async (body) => {
                        const dare = body.split('\n')
                        const randomDare = dare[Math.floor(Math.random() * dare.length)]
                        await sociality.reply(from, randomDare, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'triggered':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv444p',
                                    '-vf scale=2*trunc(iw/2):1.5*trunc(ih/1.8)'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await sociality.sendMp4AsSticker(from, fileOutputPath, { fps: 60, startTime: '00:00:00.0', endTime : '00:00:10.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'pixiv':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/pixiv?apikey=${config.api}&query=${q}`, 'yahalo.jpg', id)
                break
            case prefix+'trash':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await sociality.reply(from, ind.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await sociality.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = errorImg
                        } else {
                            ypfps = ypics
                        }
                    }
                    canvas.Canvas.trash(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await sociality.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'kiryuu':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.kiryuu(url)
                .then(async ({ result }) => {
                    await sociality.reply(from, result.title, id)
                    for (let i = 0; i < result.data.length; i++) {
                        await sociality.sendFileFromUrl(from, result.data[i], `Sociality Bot.jpg`, `Manga Episode ${i}`, id)
                    }
                    console.log('Success sending Kiryuu!')
                }).catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break
            case prefix+'kiryuusearch':
            case prefix+'kysearch':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.kiryuuv2(q)
                .then(async ({ result }) => {
                    let movies = `...: Pencarian Kiryu :...*`
                    for (let i = 0; i < result.data.length; i++) {
                        movies +=  `\n\n➸ *Judul:* : ${result.data[i].title}\n➸ *URL*: ${result.data[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                    }
                    movies += '\n\nBy: Sociality Bot'
                    await sociality.reply(from, movies, id)
                    console.log('Success sending movie result!')
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
        case prefix+'kiryuuinfo':
            case prefix+'kyinfo':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.kiryuuv3(url)
                .then(async ({ result }) => {
                    await sociality.sendFileFromUrl(from, result.img, `${result.title}.jpg`, `➸ *Judul* :${result.title}\n➸ *Sipnosis* :${result.sipnosis}\n➸ *Info Rilis* :${result.info}`, id)
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
           /*case prefix+'zippyshared':
            case prefix+'zp':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.zp(url)
                    await sociality.sendFileFromUrl(from, link, `Ukuran :${size}`, id)
                    console.log('Success sending Zippyshared!')
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break */
            case prefix+'hitler':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await sociality.reply(from, ind.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await sociality.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypf = errorImg
                        } else {
                            ypf = ypics
                        }
                    }
                    canvas.Canvas.hitler(ypf)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await sociality.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'wasted':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, id).then(() => sociality.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`,ind.sumbang(),id))
                    console.log('Success sending Wasted image!')
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case "kenal":
                await sociality.reply(from, ind.perkenalan(), id)
                break
            case prefix+'kiss':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await sociality.reply(from, ind.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const ppRaw = await sociality.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(encryptMedia, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await sociality.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await sociality.reply(from, ind.wrongFormat(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'phcomment':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const usernamePh = q.substring(0, q.indexOf('|') - 1)
                const commentPh = q.substring(q.lastIndexOf('|') + 2)
                const ppPhRaw = await sociality.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorImg
                } else {
                    ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await sociality.reply(from, ind.wait(), id)
                const preprocessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await sociality.sendFileFromUrl(from, preprocessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+'neontext':
            case prefix+'neon':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const atasnya = q.substring(0, q.indexOf('|') - 1)
                const tengahnya = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const bawahnya = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/neon?text1=${atasnya}&text2=${tengahnya}&text3=${bawahnya}`, 'neon.jpg', '', id)
                console.log('Success creating image!')
            break
            
            case prefix+'googletext':
                case prefix+'gtext':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const pertama = q.substring(0, q.indexOf('|') - 1)
                    const kedua = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                    const ketiga = q.substring(q.lastIndexOf('|') + 2)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/google_suggestion?apikey=Ninokutersayang&text1=${pertama}&text2=${kedua}&text3=${ketiga}`, 'neon.jpg', '', id)
                    console.log('Success creating image!')
                break
            case prefix+'csgo':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/csgo?apikey=Ninokutersayang&text=${q}`, 'csgo.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+'eins':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/einstein?apikey=Ninokutersayang&text=${q}`, 'eins.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+'penta':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/pentakill?apikey=Ninokutersayang&text=${q}`, 'penta.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+'firemaker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/fire_maker?text=${q}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+'mlmaker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaHero = q.substring(0, q.indexOf('|') - 1)
                const teksMl = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${namaHero}&text=${teksMl}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+'balloonmaker':
            case prefix+'blmaker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaKiri = q.substring(0, q.indexOf('|') - 1)
                const namaKanan = q.substring(q.lastIndexOf('|') + 2)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendFileFromUrl(from, `https://api.vhtear.com/balloonmaker?text1=${namaKiri}&text2=${namaKanan}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+'hackersticker':
                case prefix+'hacksticker':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const hacker = q
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, `https://api.vhtear.com/hacker_avatar?text=${hacker}&apikey=${config.vhtear}`)
                    console.log('Success creating image!')
                break
                case prefix+'grafity':
                    case prefix+'gsticker':
                        if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        const graf = q
                        await sociality.reply(from, ind.wait(), id)
                        await sociality.sendFileFromUrl(from, `https://api.vhtear.com/cartoon_graffiti?text=${graf}&apikey=${config.vhtear}`)
                        console.log('Success creating image!')
                    break
            case prefix+'slap':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const slap = arg.split(' ')[0]
                const person = author.replace('@c.us', '')
                await sociality.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
                sociality.sendTextWithMentions(from, '@' + person + ' *slapped* ' + slap)
                console.log('Sukses nampar seseorang!')
            break
            case prefix+'cium':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const cium = arg.split(' ')[0]
                const personn = author.replace('@c.us', '')
                await sociality.sendGiphyAsSticker(from, 'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif')
                sociality.sendTextWithMentions(from, '@' + personn + ' *Kiss* ' + cium)
                console.log('Sukses cium seseorang!')
            break 
            case prefix+'sliding':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendVideoAsGif(from, `https://api.vhtear.com/slidingtext?text=${q}&apikey=${config.vhtear}`, 'sliding.gif', '', id)
                console.log('Success creating GIF!')
            break
            case prefix+'text': // by: irham01
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                try {
                    if (ar[0] === 'burnpaper') {
                        const vfburn = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfburn.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'candlemug') {
                        const vfcandlemug = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfcandlemug.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'lovemsg') {
                        const vflovemsg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vflovemsg.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'mugflower') {
                        const vfmugflower = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfmugflower.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'narutobanner') {
                        const vfnarutobanner = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfnarutobanner.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'paperonglass') {
                        const vfpaperonglass = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfpaperonglass.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'romancetext') {
                        const vfromancetext = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfromancetext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'shadowtext') {
                        const vfshadowtext = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vfshadowtext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'tiktokeffect') {
                        const vftiktokeffect = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text=${args[1]}`)
                        await sociality.sendFileFromUrl(from, vftiktokeffect.data.result.img, `${q}.jpg`, '', id)
                    } else {
                        await sociality.reply(from, ind.menuText(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break // Makasih Free Api nya Bang VideFikri

            // Sticker
            case prefix+'stikernobg':
                case prefix+'nobg':
            case prefix+'stickernobg': //by: VideFrelan
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const q = await uploadImages(mediaData, `stickernobg.${sender.id}`)
                    misc.stickernobg(q)
                    .then(async ({ result }) => {
                        await sociality.sendStickerfromUrl(from, result.image)
                        console.log('Success sending Sticker no background!')
                    })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break

            case prefix+'fotonobg':
                case prefix+'fnobg':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const q = await uploadImages(mediaData, `fnobg.${sender.id}`)
                    misc.stickernobg(q)
                    .then(async ({ result }) => {
                        await sociality.sendFile(from, result.image)
                        console.log('Success sending Sticker no background!')
                    })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'apakah' :
                const apakah = require('node-gtts')('id')
                     const answer = ['iya', 'tidak', 'mungkin', 'bisa jadi', 'coba tanya sekali lagi', 'mungkin saja']
                     if (!q) return await sociality.reply(from, 'apakah apa babi, yang jelas napa', id)
                     let randomAnsw = Math.floor(Math.random() * answer.length)
                     apakah.save('./media/resID.mp3', answer[randomAnsw], () => {
                         sociality.sendPtt(from, './media/resID.mp3', id)
                     })
                     break;
            case prefix+'rate':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (!isGroupMsg) return sociality.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                const rating = args.join(' ')
                const awr = rate[Math.floor(Math.random() * (rate.length))]
                if (!rating) sociality.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
                await sociality.sendText(from, `Berapa persen dari *${rating}* \n\nJawaban: ${awr}`)
                break
            case prefix+'stickerwm': // By Slavyan
            case prefix+'stikerwm':
            case prefix+'stikwm':
            case prefix+'stcwm':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `stc_${sender.id}`)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await sociality.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`stc_${sender.id}`)
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                    } else {
                        await sociality.reply(from, ind.wrongFormat(), id)
                    }
            break
            case prefix+'stickermeme':
            case prefix+'stcmeme':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    if ((isMedia || isQuotedImage) && args.length >= 2) {
                        const top = arg.split('|')[0]
                        const bottom = arg.split('|')[1]
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const getUrl = await uploadImages(mediaData, false)
                        const ImageBase64 = await meme.custom(getUrl, top, bottom)
                        await sociality.sendImageAsSticker(from, ImageBase64)
                            .then(() => {
                                sociality.reply(from, ind.ok(),id)
                            })
                            .catch(() => {
                                sociality.reply(from, 'Ada yang error!')
                            })
                    } else {
                        await sociality.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
                    }
                    break

                    case prefix+'meme':
                            if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                            if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                                await sociality.reply(from, ind.wait(), id)
                                if ((isMedia || isQuotedImage) && args.length >= 2) {
                                    const top = arg.split('|')[0]
                                    const bottom = arg.split('|')[1]
                                    const encryptMedia = isQuotedImage ? quotedMsg : message
                                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                    const getUrl = await uploadImages(mediaData, false)
                                    const ImageBase64 = await meme.custom(getUrl, top, bottom)
                                    await sociality.sendFile(from, ImageBase64)
                                        .then(() => {
                                            sociality.reply(from, ind.ok(),id)
                                        })
                                        .catch(() => {
                                            sociality.reply(from, 'Ada yang error!')
                                        })
                                } else {
                                    await sociality.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
                                }
                                break

            case prefix+'takestick':
            case prefix+'take':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `takestick_${sender.id}`)
                    webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await sociality.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                    }
                                })
                        })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'sticker':
            case prefix+'stiker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (isMedia && isImage || isQuotedImage) {
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await sociality.sendRawWebpAsSticker(from, base64)
                                        await sociality.reply(from, ind.sgroup(), id)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'stickerp':
            case prefix+'stikerp':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (isMedia && isImage || isQuotedImage) {
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize({
                                    width: 512,
                                    height: 512,
                                    fit: 'contain',
                                    background: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await sociality.sendRawWebpAsSticker(from, base64)
                                        await sociality.reply(from, ind.ok(), id)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'sgroup':
                await sociality.reply(from, ind.sgroup(), id)
                break
            case prefix+'ml86':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML86(), id)
                break
            case prefix+'ml172':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML172(), id)
            break
            case prefix+'ml257':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML257(), id)
            break
            case prefix+'ml343':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML343(), id)
            break
            case prefix+'ml429':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML429(), id)
            break
            case prefix+'ml514':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML514(), id)
            break
            case prefix+'ml600':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML600(), id)
            break
            case prefix+'ml706':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML706(), id)
            break
            case prefix+'ml878':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML878(), id)
            break
            case prefix+'ml963':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML963(), id)
            break
            case prefix+'ml1049':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML1049(), id)
            break
            case prefix+'ml1412':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML1412(), id)
            break
            case prefix+'ml2194':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML2194(), id)
            break
            case prefix+'ml3688':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.ML3688(), id)
            break
            case prefix+'stickergif':
            case prefix+'stikergif':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                sociality.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                if (isMedia && type === 'video' || mimetype === 'image/gif') {
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        await sociality.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                    } catch (e) {
                        sociality.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`)
                    }
                } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    await sociality.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                } else {
                    sociality.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik ${prefix}stickergif`, id)
                } 
                break
            case prefix+'ttg':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                await sociality.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${config.vhtear}`)
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break
            case prefix+'stickertoimg':
            case prefix+'stikertoimg':
            case prefix+'toimg':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    const mediaData = await decryptMedia(quotedMsg)
                    sociality.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await sociality.sendFile(from, imageBase64, 'imagesticker.jpg', ind.ok(), id)
                } else if (!quotedMsg) return sociality.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
                break
            case prefix+'emojisticker':
            case prefix+'emojistiker':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const emoji = emojiUnicode(args[0])
                await sociality.reply(from, ind.wait(), id)
                console.log('Creating emoji code for =>', emoji)
                await sociality.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${config.vhtear}`)
                    .then(async () => {
                        await sociality.reply(from, ind.ok(), id)
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Emoji not supported!', id)
                    })
            break

            // NSFW
            case prefix+'lewds':
            case prefix+'lewd':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await sociality.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                } else {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await sociality.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+'xxx':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait() ,id)
                nsfw.xxx(url)
                .then(async ({ result }) => {
                    let xxx = `*「 XXX 」*\n\n➸ *Judul*: ${result.title}`
                    for (let i = 0; i < result.urlVideo.length; i++) {
                        xxx += `\n\n➸Quality:${result.urlVideo[i].quality}\n URL:${result.urlVideo[i].videoUrl} `
                    }
                    xxx += `\n\nBy : Sociality BOT`
                    await sociality.reply(from, xxx, id)
                    console.log('Success sending link xxx')
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
            break
                
            case prefix+'cosplay':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait() ,id)
                misc.cosplay()
                .then(async ({ url }) => {
                    await sociality.sendFileFromUrl(from, url, 'cosplay.jpg', '', id)
                        .then(() => console.log('Success sending cosplay!'))
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
               break

               case prefix+'milf':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait() ,id)
                misc.cosplay()
                .then(async ({ url }) => {
                    await sociality.sendFileFromUrl(from, url, 'milf.jpg', '', id)
                        .then(() => console.log('Success sending cosplay!'))
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
               break

            case prefix+'fetish':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (ar.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                            } else if (ar[0] === 'flat') {
                                nsfw.flat()
                                    .then(async ({ url }) => {
                                        await sociality.sendFileFromUrl(from, url, 'flat.jpg', '', id)
                                            .then(() => console.log('Success sending flat pic!'))
                                    })
                        } else {
                            await sociality.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, err, id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await sociality.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await sociality.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+'nhentai':
            case prefix+'nh':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isNaN(Number(args[0]))) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await sociality.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        }
                    } else {
                        await sociality.reply(from, ind.nhFalse(), id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await sociality.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        }
                    } else {
                        await sociality.reply(from, ind.nhFalse(), id)
                    }
                }
            break
            case prefix+'soundcloud':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                downloader.soundcloud(q)
                .then(async ({ result })  => {
                    const cardSoundcloud = new canvas.Spotify()
                    .setAuthor("Mocha.co.jp")
                    .setAlbum(result.title)
                    .setStartTimestamp(result.duration)
                    .setEndTimestamp(result.duration)
                    .setImage(result.thumbnail)
                    .setTitle(result.title)
                    cardSoundcloud.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_soundcloud.png`)
                        await sociality.sendFile(from, `${sender.id}_soundcloud.png`,'', ind.soundcloud(result), id)
                        fs.unlinkSync(`${sender.id}_soundcloud.png`)
                        await sociality.sendFileFromUrl(from, result.music, `${result.title}.mp3`, '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
                })
                .catch(async (err) => {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                })
        break
        case prefix+'port':
            if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
            if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
            await sociality.reply(from, ind.wait(), id)
            let saldo = 0;
            const getBalanceByWallet = (w) => new Promise((resolve, reject) => {
                fetch(`https://viewblock.io/zilliqa/address/${w}?txsType=tokens&tab=tokens`, {
                    method:'GET'
                })
                .then(res => res.text())
                .then(res => {
                    const $ = cheerio.load(res);
                    const data = $('div.sc-1gnu6p8-0.dXDDNa').text()
                    resolve(data)
                })
                .catch(err => reject(err))
            });
            const w = args.join(' ')
            const sunyouRequestREsult = await getBalanceByWallet(w);
            const res = sunyouRequestREsult.split("Proof Of Receipt Token");
            res.length == 2 ?    await sociality.reply(from, w+" => Landing bos Jajanin lah bang | Balance: "+res[1], id) : await sociality.reply(from, w+" => Sad belum landing", id);
            res.length == 2 ? console.log(w+" => Landing bos | Balance: "+res[1]) : console.log(w+" => Sad belum landing");
            if (res.length == 2){
                const balanceNow = res[1].split("  ")
                saldo += parseFloat(balanceNow[0])
            }
           // await sociality.reply(from, "Total seluruh token kamu:", saldo,"PORT", id)
            console.log("Total seluruh token kamu:", saldo+" PORT");
            break
            case prefix+'nhdl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
               // if (isGroupMsg) return await sociality.reply(from, ind.pcOnly(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.reply(from, ind.wait(), id)
                downloader.nhpdf(q)
                .then(async ({ result })  => {
                    await sociality.sendFileFromUrl(from, result, `hayo.pdf`, id)
                console.log('Success sending nhdl!')
            })
            .catch(async (err) => {
                console.error(err)
                await sociality.reply(from, 'Error!', id)
            })
                break

                case prefix+'pollresult':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    feature.getpoll(sociality, message, pollfile, voterslistfile)
                    break
                
                case prefix+'vote':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    feature.voteadapter(sociality, message, pollfile, voterslistfile)
                    break
                
                case prefix+'addpoll':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    feature.adminpollreset(sociality, message, message.body.slice(9), pollfile, voterslistfile)
                    break
                
                case prefix+'addv':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                    feature.addcandidate(sociality, message, message.body.slice(6), pollfile, voterslistfile)
                    break

                case prefix+'nhsearch':
                    if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (args.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `-----[ *NHENTAI* ]-----\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await sociality.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `-----[ *NHENTAI* ]-----\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await sociality.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                }
            break

            case prefix+'nekopoiapp':
            await sociality.reply(from, ind.wait(), id)
            await sociality.sendFile(from, `./media/nekopoi.apk`, 'SbOT.APK', id)
            await sociality.reply(from, `dosa di tanggung user`, id)
            .then(() => console.log('Success send apk'))
            break  

            case prefix+'nekopoi':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.Nekopoi(q)
                    .then(async ({ result }) => {
                        //let NekopoiInfo = '-----[ *Nekopoi Pencarian* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            await sociality.sendFileFromUrl(from, result[i].thumbnail, `ahayde.jpg`, `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`)
                        }
                       // await sociality.reply(from, NekopoiInfo, id)
                        console.log('Success sending on-going Nekopoi!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            case prefix+'nekopoidl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait(), id)
                weeaboo.Nekopoidl(q)
                    .then(async ({ result }) => {
                     //   let NekopoiInfo = '-----[ *Nekopoi Downloader* ]-----'
                     await sociality.sendFileFromUrl(from, result.thumb, `ahayde.jpg`, `\n\n➸ *Title*: ${result.anime}\n➸ *Deskripsi*: ${result.sinopsis}\n➸ *Ukuran*: ${result.size}\n`)
                        for (let i = 0; i < result.link.length; i++) {
                            await sociality.sendText(from, `➸ *Resolusi*: ${result.link[i].name}\n➸ *URL*: ${result.link[i].link.Racaty}\n${result.link[i].link.ZippyShare}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`)
                        }
                       // await sociality.reply(from, NekopoiInfo, id)
                        console.log('Success sending on-going Nekopoi!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break

            /*case prefix+'spotify':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                misc.Nekopoi()
                    .then(async ({ result }) => {
                        let NekopoiInfo = '-----[ *Nekopoi ON-GOING* ]-----'
                        for (let i = 0; i < result.length; i++) {
                            NekopoiInfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *Upload*: ${result[i].date}\n➸ *URL*: ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, NekopoiInfo, id)
                        console.log('Success sending on-going Nekopoi!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break */

           /* case prefix+'xxx':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.reply(from, ind.wait(), id)
                downloader.xxx(q)
                    .then(async ({ result }) => {
                        let NekopoiInfo = '-----[ *XXX DOWNLOADER* ]-----'
                        for (let i = 0; i < result.urlVideo.length; i++) {
                            NekopoiInfo += `\n\n➸*Judul*: ${result.title}\n➸ *Kualitas*: ${result[i].urlVideo.quality}\n➸ *Download*: ${result[i].urlVideo.videoUrl}\n\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, NekopoiInfo, id)
                        console.log('Success sending on-going Nekopoi!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
            break */

            case prefix+'nekosearch':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '-----[ *NEKOPOI RESULT* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '-----[ *NEKOPOI RESULT* ]-----'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await sociality.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+'waifu18':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await sociality.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                } else {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await sociality.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+'pixivdl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                await sociality.reply(from, ind.wait(), id)
                        await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/pixivdl/${q}?apikey=Ninokutersayang`, 'loli.jpg', 'jangan ciduk owner mz ~', id)
                            .then(() => console.log('Success sending loli!'))
                    .catch(async (err) => {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    })
                break
            case prefix+'loli':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                            await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/loli?apikey=Ninokutersayang`, 'loli.png', 'jangan ciduk owner mz ~', id)
                                .then(() => console.log('Success sending loli!'))
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                } else {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                            await sociality.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/loli?apikey=Ninokutersayang`, 'loli.png', 'jangan ciduk owner mz ~', id)
                                .then(() => console.log('Success sending loli!'))
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                }
            break

            case prefix+'phdl':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (!isUrl(url) && !url.includes('pornhub.com')) return await sociality.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await sociality.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await sociality.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await sociality.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await sociality.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await sociality.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+'yuri':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                }
            break
            case prefix+'lewdavatar':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                }
            break
            case prefix+'femdom':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                } else {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    await sociality.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                }
            break
            case prefix+'cersex':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await sociality.reply(from, ind.notNsfw(), id)
                    await sociality.reply(from, ind.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await sociality.sendFileFromUrl(from, result.image, 'cersex.jpg', `── *「 ${result.judul} 」* ──\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                } else {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    await sociality.reply(from, ind.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await sociality.sendFileFromUrl(from, result.image, 'cersex.jpg', `── *「 ${result.judul} 」* ──\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await sociality.reply(from, 'Error!', id)
                        })
                }
            break

            // Moderation command
            case prefix+'revoke':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return sociality.reply(from, ind.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.revokeGroupInviteLink(groupId);
                sociality.sendTextWithMentions(from, `Group link revoked by @${sender.id.replace('@c.us', '')}`)
            break
            case prefix+'linkgroup':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const gcLink = await sociality.getGroupInviteLink(groupId)
                const linkGc = `Group: *${formattedTitle}*\n\nLink: ${gcLink}`
                sociality.reply(from, linkGc, id)
            break
            case prefix+'setprofilepic':
                if (!isOwner) return sociality.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner Sociality BOT!`, id)
                if (isMedia) {
                    const mediaData = await decryptMedia(message)
                    const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    await sociality.setProfilePic(imageBase64)
                    sociality.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await sociality.setProfilePic(imageBase64)
                    sociality.sendTextWithMentions(from, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
                } else {
                    sociality.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setprofilepic`, id)
                }
                break
            case prefix+'ownergroup':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const ownerGc = chat.groupMetadata.owner
                await sociality.sendTextWithMentions(from, `Owner Group : @${ownerGc}`)
            break
            case prefix+'mutegc':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return sociality.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.setGroupToAdminsOnly(groupId, true)
                    await sociality.sendText(from, ind.gcMute())
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.setGroupToAdminsOnly(groupId, false)
                    await sociality.sendText(from, ind.gcUnmute())
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'add':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 0) {
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        let joingrup = `${mentionedJidList[i]}`
                        await sociality.addParticipant(from, joingrup).then((a)=>{
                            const commands = caption || body || ''
                            const args =  commands.split(' ')
                            console.log(a)
                            const poro = `Okaeri @${args[1].replace('@c.us', '')}`
                            sociality.sendReplyWithMentions(from, poro, id)
                    })
                }
            } else {
                await sociality.addParticipant(from, `${args[1]}@c.us`)
                const dero = `Okaeri @${args[1].replace('@c.us', '')}`
                            sociality.sendReplyWithMentions(from, dero, id)
        }
            break
            case'edotensei':
            if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
            if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
            if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
            if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
            if (mentionedJidList.length === 0) return sociality.reply(from, `Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah ${prefix}edotensei @tagmember`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return sociality.reply(from, ind.error, id)
                if (ownerNumber.includes(mentionedJidList[i])) return sociality.reply(from, ind.error, id)
                await sociality.removeParticipant(groupId, mentionedJidList[i])
                sociality.reply(from, 'EDOTENSEI', id)
                await sociality.sendGiphyAsSticker(from, 'https://media.giphy.com/media/bq6o9H4ryyZzw2WiSA/giphy.gif')
                await sleep(4000)
                await sociality.addParticipant(from,`${mentionedJidList}`)
                await sociality.sendTextWithMentions(from, `Okaeri @${mentionedJidList[i]}` , id)
            } 
            break
            case prefix+'kick':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return await sociality.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.sendTextWithMentions(from, `Dadah Monyet~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i = 0; i < mentionedJidList.length; i++) {
                    if ((ownerNumber).includes(mentionedJidList[i])) return sociality.reply(from, mess.error.Sp, id)
                    await sociality.removeParticipant(groupId, mentionedJidList[i])
                }
                break
            case prefix+'promote':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await sociality.reply(from, ind.adminAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const ambilpic = await sociality.getProfilePicFromServer(mentionedJidList[0])
                if (ambilpic === undefined) {
                    var as = errorImg
                } else {
                    as = ambilpic
                }
                await sociality.promoteParticipant(groupId, mentionedJidList[0])
                const commands = caption || body || ''
                const asu =  commands.split(' ')
                await sociality.sendFileFromUrl(from, as, 'pic.jpg', '', id)
                await sociality.sendTextWithMentions(from,`Hallo ka  ${asu[1]}\n , Senang gak lo naik jabatan ciee.`, id)
            break
            case prefix+'demot':
            case prefix+'demote':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await sociality.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await sociality.reply(from, ind.notAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await sociality.demoteParticipant(groupId, mentionedJidList[0])
                await sociality.reply(from, ind.sipp(), id)
            break
            case prefix+'leave':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins){
                return await sociality.reply(from, ind.adminOnly(), id)
                await sociality.sendText(from, 'Sayounara~ 👋')
                await sociality.leaveGroup(groupId)

                } else if (isOwner){
                    await sociality.sendText(from, 'Sayounara~ 👋')
                    await sociality.leaveGroup(groupId)
                }
            break
            case prefix+'admin':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupAdm = await sociality.getGroupAdmins(groupId)
                const lastAdmin = daily.getLimit(sender.id, _daily)
                if (lastAdmin !== undefined && cd - (Date.now() - lastAdmin) > 0) {
                    const time = ms(cd - (Date.now() - lastAdmin))
                    await sociality.reply(from, ind.daily(time), id)
                } else if (isOwner) {
                tptext = body.slice(6)
                    let txt = `${tptext}\n`
                    txt += '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *S o c i a l i t y  B O T* 〙'
                    await sociality.sendTextWithMentions(from, txt)
                } else {
                    tptext = body.slice(6)
                    let txt = `${tptext}\n`
                    txt += '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *S o c i a l i t y  B O T* 〙'
                    await sociality.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'hidetag':
                /**
                 *             
                 * case prefix+'hidetag':{
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (args.length < 2) return reply(`Masukkan text`)
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                mentions(q, arr, false)
            }
                break
                 */
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupMem = await sociality.getGroupMembers(groupId)
                const lastEveryone = daily.getLimit(sender.id, _daily)
                if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
                    const time = ms(cd - (Date.now() - lastEveryone))
                    await sociality.reply(from, ind.daily(time), id)
                } else if (isOwner) {
                    telasu = body.slice(8)
                   let txt = `‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${telasu}\n`
                   txt +=`╔══✪〘‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎�����‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎•*BROADCAST*• 〙✪══\n`
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S O C I A L I T Y  B O T* 〙'
                    await sociality.sendTextWithMentions(from, txt)
                } else {
                    let txt = ` 
                    ╔══✪〘‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎• _*BROADCAST*_ • 〙✪══\n`
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S O C I A L I T Y  B O T* 〙'
                    options = {
                        coba: telasu,
                       contextInfo: {mentionedJid: jids},
                       quoted: mek
                       }
                    await sociality.sendTextWithMentions(from, options, coba)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'tagall':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const minna = daily.getLimit(sender.id, _daily)
                const gmem = await sociality.getGroupMembers(groupId)
                const tolpo = `@${sender.id.replace('@c.us', '')}`
                if (minna !== undefined && cd - (Date.now() - minna) > 0) {
                    const time = ms(cd - (Date.now() - minna))
                    await sociality.reply(from, ind.daily(time), id)
                } else if (isOwner) {
                    bctxt = body.slice(8)
                   let txt = `Dari : ${tolpo}\nPesan : ${bctxt}\n`
                   txt+=`╔══✪〘 *EVERYONE* 〙✪══\n`
                        for (let i = 0; i < gmem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${gmem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S O C I A L I T Y  B O T* 〙'
                    await sociality.sendTextWithMentions(from, txt)
                } else {
                    bctxt = body.slice(8)
                    let txt = `Dari : ${tolpo}\nPesan : ${bctxt}\n`
                    txt+=`╔══✪〘 Mention All 〙✪══\n`
                        for (let i = 0; i < gmem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${gmem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S O C I A L I T Y  B O T* 〙'
                    await sociality.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'groupicon':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return sociality.reply(from, ind.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await sociality.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await sociality.setGroupIcon(groupId, imageBase64)
                    await sociality.sendText(from, ind.ok())
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'antilink':
            case prefix+'linkanti':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await sociality.reply(from, ind.detectorOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.push(groupId)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await sociality.reply(from, ind.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await sociality.reply(from, ind.detectorOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'leveling':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isLevelingOn) return await sociality.reply(from, ind.levelingOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await sociality.reply(from, ind.levelingOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await sociality.reply(from, ind.levelingOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'welcome':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isWelcomeOn) return await sociality.reply(from, ind.welcomeOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.push(groupId)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await sociality.reply(from, ind.welcomeOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.splice(groupId, 1)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await sociality.reply(from, ind.welcomeOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'autosticker':
            case prefix+'autostiker':
            case prefix+'autostik':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStickerOn) return await sociality.reply(from, ind.autoStikOnAlready(), id)
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    _autosticker.push(groupId)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await sociality.reply(from, ind.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                    _autosticker.splice(groupId, 1)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await sociality.reply(from, ind.autoStikOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'groupinfo':
            if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
            if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
            if (!isGroupMsg) return sociality.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = _welcome.includes(chat.id)
            var ngrp = _nsfw.includes(chat.id)
            var antlink = _antilink.includes(chat.id)
            var antip = _antiporn.includes(chat.id)
            var mutedd =  _mute.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await sociality.getProfilePicFromServer(chat.id)
            var lepel = _leveling.push(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await sociality.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*
*➸ Name : ${groupname}* 
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Porn : ${antip ? 'Aktif' : 'Tidak Aktif'}*
*➸ Mute : ${mutedd ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*
*➸ Leveling : ${lepel ? 'Aktif' : 'Tidak Aktif'}*
*➸ Group Description* 
${desc}`)
break
            case prefix+'cgc':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isPremium) return await sociality.reply(from, ind.notPremium(), id)
                const gcname = arg[1]
                sociality.createGroup(gcname, mentionedJidList)
                sociality.sendText(from, 'Group Created ✨️')
                break
            case prefix+'antinsfw':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorPorn) return await sociality.reply(from, ind.antiNsfwOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await sociality.reply(from, ind.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await sociality.reply(from, ind.detectorOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break

            case prefix+'antipromote':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await sociality.reply(from, ind.botNotAdmin(), id)
                if (ar[0] == 'enable') {
                    if (isPromoteDetector) return await sociality.reply(from, ind.antipromoteOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antipromote.push(groupId)
                    fs.writeFileSync('./database/group/antipromote.json', JSON.stringify(_antipromote))
                    await sociality.reply(from, ind.AntiPromoteOn(name, formattedTitle), id)
                } else if (ar[0] == 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antipromote.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antipromote.json', JSON.stringify(_antipromote))
                    await sociality.reply(from, ind.detectorOffPromote(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break

            // Owner command
            case'setprefix':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q  === 'multi'){
                    multi = true
                    sociality.reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    sociality.reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    sociality.reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
            case prefix+'bc':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                bctxt = body.slice(4)
                txtbc = `*「 Sociality BOT BROADCAST 」*\n\n${bctxt}`
                const semuagrup = await sociality.getAllChatIds();
                if (isMedia && type === 'image' || isQuotedImage) {
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await sociality.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) sociality.sendFile(from, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    sociality.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await sociality.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) sociality.sendText(grupnya, txtbc)
                    }
                            sociality.reply('Broadcast Success!')
                }
                break
            case prefix+'clearall':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                const allChats = await sociality.getAllChats()
                for (let delChats of allChats) {
                    await sociality.deleteChat(delChats.id)
                }
                await sociality.reply(from, ind.doneOwner(), id)
            break
            case prefix+'leaveall':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!q) return await sociality.reply(from, ind.emptyMess(), id)
                const allGroup = await sociality.getAllGroups()
                for (let gclist of allGroup) {
                    await sociality.sendText(gclist.contact.id, q)
                    await sleep(5000)
                    await sociality.leaveGroup(gclist.contact.id)
                }

                await sociality.reply(from, ind.doneOwner())
            break
            case prefix+'getses':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                const ses = await sociality.getSnapshot()
                await sociality.sendFile(from, ses, 'session.png', ind.doneOwner())
            break
            case prefix+'ban':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                            _ban.push(benet)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        }
                        await sociality.reply(from, 'Asiik monyet satu ini gak bisa pake bot\Nuntuk cek lo gak di ban cek di *#banlist*', id)
                    } else {
                        _ban.push(args[1] + '@c.us')
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await sociality.reply(from, 'Lain kali jangan spam ya ngentot', id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                        _ban.splice(mentionedJidList[0], 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await sociality.reply(from, ind.doneOwner(), id)
                    } else{
                        _ban.splice(args[1] + '@c.us', 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await sociality.reply(from, ind.doneOwner(), id)
                    }
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'resetbadword':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!args.length === 1) return sociality.reply(from, 'Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetbadword 6285112554122 / #resetbadword @member') 
                const nomer = args[1]
                let text = nomer.replace(/@c.us/g,'')
                const cus = text + '@c.us'
                    var found = false
                    Object.keys(msgBadword).forEach((i) => {
                        if(msgBadword[i].id == cus){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgBadword[found].msg = 1;
                        const result = 'DB Badword Spam has been reset'
                        console.log(msgBadword[found])
                        fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                        sociality.reply(from, result, from)
                        limitAdd(serial)
                    } else {
                            sociality.reply(from, `${monospace(`Di database ngga ada nomer itu dik`)}`, id)
                    }
            break

                    case'addbadword': 
                    if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                    if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                    if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                    if (!args.length >= 1) return sociality.reply(from, `Masukkan kata kasar yang akan di blacklist `, id) 
                    const word = body.slice(12)
                    var cek = dbbadword.includes(word);
                    if(cek){
                        return sociality.reply(from, `Badword Sudah Ada Di Database`, id)
                    } else { 
                        dbbadword.push(word)
                        fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                        sociality.reply(from, `Success Menambahkan Blacklist Badword\nTotal Data Badword Sekarang : *${dbbadword.length - 1}*`, id)
                    }
                    break
                    

                    case prefix+'delbadword':
                        if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                        if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                        if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                            const delbd = dbbadword.indexOf(body.slice(12))
                            dbbadword.splice(delbd, 1)
                            fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                            sociality.reply(from, `Success Menghapus Badword!`, id)
                        break
                    case prefix+'listbadword':
                        if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                            const bad = fs.readFileSync('./lib/database/katakasar.json')
                            const liste = JSON.parse(bad)
                            let listz = '*「 LIST BADWORD 」*\n'
                            listz += `*Total : ${liste.length}*\n`
                            let nomre = 1
                                 for (let i = 0; i < liste.length; i++){
                                    listz += `\n*${nomre}.* ${liste[i]}`
                                    nomre++
                                }
                                sociality.sendText(from, listz) 
                                break
             /*case prefix+'setprefix':
              if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
              config.push(chatId)
              fs.writeFileSync(`./config.json`, JSON.stringify(config))
              sociality.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
              break*/
              
            case prefix+'antibadword':
                if (!isRegistered) return await sociality.reply(from, ind.registered(), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await sociality.reply(from, ind.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (args[0] == 'enable') {
                    var cek = antibadword.includes(chatId);
                    if(cek){
                        return sociality.reply(from, `*「 ANTI BADWORD 」*\nSudah diaktifkan di grup ini`, id)
                    } else {
                        antibadword.push(chatId)
                        fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                        sociality.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Sociality BOT Akan Kick!`, id)
                    }
                } else if (args[0] == 'disable') {
                    var cek = antibadword.includes(chatId);
                    if(!cek){
                        return sociality.reply(from, `*「 ANTI BADWORD 」*\nSudah dinonaktifkan di grup ini`, id)
                    } else {
                        let nixx = antibadword.indexOf(chatId)
                        antibadword.splice(nixx, 1)
                        fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                        sociality.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nAnti badword telah dimatikan!`, id)
                    }
                } else {
                    sociality.reply(from, `Pilih enable atau disable udin!`, id)
                } 
                break   

            case prefix+'eval':
            case prefix+'ev':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!q) return await sociality.reply(from, ind.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await sociality.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await sociality.reply(from, 'Error!', id)
                }
            break
            case prefix+'shutdown':
            case prefix+'sh':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                await sociality.sendText(from, 'Tolong jangan bunuh saya tuan~')
                    await sleep(5000)
                    await sociality.sendText(from, 'Aaaaaaaaaaaaaaaaa')
                    await sleep(2000)
                    .then(async () => await sociality.kill())
                    .catch(() => new Error('Target closed.'))
            break
            case prefix+'premi':
            case prefix+'premium':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await sociality.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${benet}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await sociality.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await sociality.reply(from, ind.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await sociality.reply(from, ind.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await sociality.reply(from, ind.doneOwner(), id)
                    }
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'setstatus':
            case prefix+'setstats':
            case prefix+'setstat':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!q) return await sociality.reply(from, ind.emptyMess(), id)
                await sociality.setMyStatus(q)
                await sociality.reply(from, ind.doneOwner(), id)
            break
            case prefix+'exif':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!q.includes('|')) return await sociality.reply(from, ind.wrongFormat(), id)
                const namaPack = q.substring(0, q.indexOf('|') - 1)
                const authorPack = q.substring(q.lastIndexOf('|') + 2)
                exif.create(namaPack, authorPack)
                await sociality.reply(from, ind.doneOwner(), id)
            break
            case prefix+'mute':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(pushname), id)
                if (!isGroupMsg) return await sociality.reply(from, ind.groupOnly(), id)
               // if (!isGroupAdmins) return await sociality.reply(from, ind.adminOnly(), id)
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (ar[0] === 'enable') {
                    if (isMute) return await sociality.reply(from, ind.muteChatOnAlready(), id)
                    _mute.push(groupId)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await sociality.reply(from, ind.muteChatOn(), id)
                } else if (ar[0] === 'disable') {
                    _mute.splice(groupId, 1)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await sociality.reply(from, ind.muteChatOff(), id)
                } else {
                    await sociality.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'softban':
                /*                 if(ar[0] === 'add'){
                    if (mentionedJidList.length !== 0) {
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        let unblock = `${mentionedJidList[i]}`
                        await sociality.contactBlock(unblock).then((a)=>{
                            const commands = caption || body || ''
                            const args =  commands.split(' ')
                            console.log(a)
                            sociality.reply(from, `Success block ${args[1]}!`, id)
                    })
                }
            }else {
                let block = `${args[1]}@c.us`
                await sociality.contactBlock(block).then((a) => {
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from,`Sukses blok ${args[1]}!`, id)
                    
                })

        }
        }else if(ar[0] === 'del'){
            if (mentionedJidList.length !== 0) {
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await sociality.contactUnblock(unblock).then((a)=>{
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
        }else {
                let unblock = `${args[1]}@c.us`
                await sociality.contactUnblock(unblock).then((a)=>{
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from,`Sukses blok ${args[1]}!`, id)
            })
        }
    }else {
        await sociality.reply(from, ind.wrongFormat(), id)
    }
                break  */
                break
            case prefix+'softkick':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(pushname), id)
                if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
                    if (!isBotGroupAdmins) return sociality.reply(from, mess.error.Ba, id)
                    if (quotedMsg) {
                        const bgmcomum = quotedMsgObj.sender.id
                        await sociality.sendTextWithMentions(from, `Duuh @${bgmcomum}, Kamu melanggar peraturan, akan saya hubungi lagi!`)
                        await sleep(5000)
                        await sociality.removeParticipant(groupId, bgmcomum)
                        setTimeout(() => {
                            sociality.reply(from, 'Selamat datang kembali.', id)
                            sociality.addParticipant(groupId, bgmcomum)
                        }, 60000) //1 menit
                        await sleep(60000)
                        await sociality.sendTextWithMentions(from, `@${bgmcomum}, Saya harap Anda telah memikirkan kembali tindakan Anda dan menenangkan diri.`)
                    } else {
                        if (mentionedJidList.length == 0) return sociality.reply(from, 'Anda salah mengetik perintah, perbaiki dan kirim dengan benar.', id)
                        await sociality.sendTextWithMentions(from, `Ihhhh ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}, Kamu melanggar peraturan, akan saya hubungi lagi`)
                        for (let i = 0; i < mentionedJidList.length; i++) {
                            if (ownerNumber.includes(mentionedJidList[i])) return sociality.reply(from, 'Duuh , dia ownerku , dia tidak bisa dikeluarkan.', id)
                            if (groupAdmins.includes(mentionedJidList[i])) return sociality.reply(from, `duuh kamu tidak bisa kick admin.`, id)
                            await sociality.removeParticipant(groupId, mentionedJidList[i])
                            setTimeout(() => {
                                sociality.addParticipant(groupId, mentionedJidList[i])
                            }, 60000) //1 menit
                            await sleep(61000)
                            sociality.reply(from, 'Selamat datang kembali.', id)
                            await sociality.sendTextWithMentions(from, `@${mentionedJidList[i]}, Saya harap Anda telah memikirkan kembali tindakan Anda dan menenangkan diri.`)
                        }
                    }
                } else if (isGroupMsg) {
                    await sociality.reply(from, tasu.err.Ga, id)
                } else {
                    await sociality.reply(from, tasu.err.Gp, id)
                }
                break
            case prefix+'setname':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (!q || q.length > 25) return await sociality.reply(from, ind.wrongFormat(), id)
                await sociality.setMyName(q)
                await sociality.reply(from, `Done!\n\nUsername changed to: ${q}`, id)
            break
            case prefix+'give':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                if (args.length !== 2) return await sociality.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList.length !== 0) {
                    for (let give of mentionedJidList) {
                        level.addLevelingXp(give, Number(args[1]), _level)
                        await sociality.reply(from, `Sukses menambah XP kepada: ${give}\nJumlah ditambahkan: ${args[1]}`, id)
                    }
                } else {
                    level.addLevelingXp(args[0] + '@c.us', Number(args[1]), _level)
                    await sociality.reply(from, `Sukses menambah XP kepada: ${args[0]}\nJumlah ditambahkan: ${args[1]}`, id)
                }
            break
            case prefix+'gift':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                const nomerr = arg.split(' ')[0]
                const jmla = arg.split(' ')[1]
                if(!nomerr) return sociality.reply(from, `Masukkan nomor yang akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @6285155139920 15`, id)
                let texta = nomerr.replace(/[-\s+@c.us]/g,'')
                const cusz = texta + '@c.us'
                const sn = createSerial(20)
                if(!jmla) return sociality.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @6285155139920 15`, id)
                if(jmla > 10) return await sociality.reply(from, `Maximal  10!`, id)
                    var found = false
                    Object.keys(_limit).forEach((i) => {
                        if(_limit[i].id == cusz){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _limit[found].limit = Math.max(0, _limit[found].limit);
                        if(_limit[found].limit == 10) return sociality.reply(from, `Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit target sudah habis`, id)
                        if(_limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                           return sociality.reply(from, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                        }
                        else{
                        _limit[found].limit += jmla
                        const updated = _limit[found]
                        
                        const result = `Gift kuota limit sukses dengan \nSN: ${sn} pada ${moment().format('DD/MM/YY HH:mm:ss')}\n
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@c.us','')}
• Limit: ${_limit-updated.limit}`
                        console.log(_limit[found])
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit));
                        sociality.sendTextWithMentions(from, result)
                        }
                    } else {
                           sociality.reply(from, `Maaf, nomor itu tidak terdaftar di database!`, id)
                    }
            break
            case prefix+'donasi':
                if (!isRegistered) return await sociality.reply(from, ind.notRegistered(), id)
                await sociality.sendFileFromUrl(from, `https://i.ibb.co/8K15p66/Donasi.jpg`, '', ind.sumbang(), id)
            break
            case prefix+'reset':
                if (!isOwner) return await sociality.reply(from, ind.ownerOnly(), id)
                const reset = []
                _limit = reset
                console.log('Resetting user\'s limit...')
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                await sociality.reply(from, ind.doneOwner(), id)
                console.log('Success!')
            break
           case prefix+'block':
                if (!isOwner) return sociality.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Sociality BOT!', id)
                if(ar[0] === 'add'){
                    if (mentionedJidList.length !== 0) {
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        let unblock = `${mentionedJidList[i]}`
                        await sociality.contactBlock(unblock).then((a)=>{
                            const commands = caption || body || ''
                            const args =  commands.split(' ')
                            console.log(a)
                            sociality.reply(from, `Success block ${args[1]}!`, id)
                    })
                }
            }else {
                let block = `${args[1]}@c.us`
                await sociality.contactBlock(block).then((a) => {
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from,`Sukses blok ${args[1]}!`, id)
                    
                })

        }
        }else if(ar[0] === 'del'){
            if (mentionedJidList.length !== 0) {
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await sociality.contactUnblock(unblock).then((a)=>{
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
        }else {
                let unblock = `${args[1]}@c.us`
                await sociality.contactUnblock(unblock).then((a)=>{
                    const commands = caption || body || ''
                    const args =  commands.split(' ')
                    console.log(a)
                    sociality.reply(from,`Sukses blok ${args[1]}!`, id)
            })
        }
    }else {
        await sociality.reply(from, ind.wrongFormat(), id)
    }
                break 
            case prefix+'listbanned':
            case prefix+'banlist':
            case prefix+'listban':
                    let bened = `This is list of banned number\nTotal : ${_ban.length}\n`
                    for (let i of _ban) {
                        bened += `➸ ${i.replace(/@c.us/g,'')}\n`
                    }
                    await sociality.reply(from, bened, id)
                    break
            
            default:
                if (isCmd) {
                  const commander = [
                       `Maaf Mas ganteng/Mbak cantik, command itu tidak ada 🥰`,
                       `Baca ${prefix}menu nya ya kamu 😘`,
                       'Di diemin ngelunjak, dipukul koma lu ngentot'
                    ]
                    const coman = commander[Math.floor(Math.random() * (commander.length))]
                    await sociality.reply(from, `*${coman}*`, id)
                    //await sociality.reply(from, ind.cmdNotFound(command), id)
                }
            break
        }
         } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
      }
    }
/********** END OF MESSAGE HANDLER **********/
