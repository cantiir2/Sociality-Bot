/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.owner = () => {
    return`
╭ஜ۩۞ Biografi Owner ۞۩ஜ══
║
║══════════════════════
║Nama : Mochamad Alifian
║           Hedardi Kadarusman
║
║Asal : Bekasi
║
║Umur : 20 tahun
║
║Golongan darah : -
║
║Punya cewek    : Tidak
║
║Hobby         : Kadang bermain games
║
║Moto hidup  : 
║Hidup tidak
║semulus Paha ueno
║tidak secantik Itsuki
║
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══`

}
exports.perkenalan = () => {
    return `Perkenalkan nama ownerku
    Nama saya : Mochamad Alifian Hedardi Kadarusman
    Saya asal : Bekasi 
    Umur saya : 20 tahun
    
    Salam kenal . Oh ya kalau sesama region Bekasi bisa sharing ilmu kok atau apapun 👉👈`
}
exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Terimakasih sudah menggunakan bot owner saya, silahkan join ke group owner saya di *https://tinyurl.com/SBGrup* `
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Command ${prefix}${cmd} tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Perintah ini hanya untuk Owner Sociality BOT!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Tuan!`
}
exports.WikiFound = (result) => {
    return `Info : ${result}`
}

exports.sbaik2 = () => {
    return `Asiiik monyet satu ini gak bisa pake bot!!`
}

exports.sipp = () => {
    return `asiiik di demot si kontol ini`
}

exports.baiklah = () => {
    return `Senang gak lo jadi admin hah`
}

exports.sbaik = () => {
    return `Udah gw unban , jangan spam makanya ngentot`
}

exports.groupOnly = () => {
    return `Perintah ini hanya bisa digunakan di dalam grup!`
}

exports.sgroup = () => { 
    return 'Silahkan join ke group kami di *https://tinyurl.com/SBGrup* '
}

exports.ML86 = () => { 
    return `
    *「 DIAMOND ML86 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=944ae733-ac71-4ca8-9592-35871b8115b9]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML172 = () => { 
    return `
    *「 DIAMOND ML172 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=dccaa100-3aec-48b2-aedf-dffbb792e334]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML257 = () => { 
    return `
    *「 DIAMOND ML257 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=9ae96d3f-5339-40b1-a97c-7fdf667f0cc3]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML343 = () => { 
    return `
    *「 DIAMOND ML343 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=73db3ed0-d1c7-479b-96d5-4920a9ebecca]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML429 = () => { 
    return `
    *「 DIAMOND ML429 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=5bcfd958-9957-4f74-9a58-70d4840288a5]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML514 = () => { 
    return `
    *「 DIAMOND ML514 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=3d7c8afa-ca31-4914-ae33-858ebf015a13]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML600 = () => { 
    return `
    *「 DIAMOND ML514 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=2001b672-9dc3-4cdf-bb21-8b895572860c]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML600 = () => { 
    return `
    *「 DIAMOND ML514 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=2001b672-9dc3-4cdf-bb21-8b895572860c]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML706 = () => { 
    return `
    *「 DIAMOND ML514 」*
Untuk melakukan pembayaran Bisa melalui Qris 
diatas Untuk Pembayaran luar dana, Atau bisa juga dengan Link dana berikut :\n https://link.dana.id/p2m?params=[orderId=210d66d9-5970-4b21-8396-55da240925f0]\n
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML878 = () => { 
    return `
    *「 DIAMOND ML878 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.191.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML963 = () => { 
    return `
    *「 DIAMOND ML963 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.210.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML1049 = () => { 
    return `
    *「 DIAMOND ML1049 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.239.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML1412 = () => { 
    return `
    *「 DIAMOND ML1412 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.319.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML2194 = () => { 
    return `
    *「 DIAMOND ML2194 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.450.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.ML3688 = () => { 
    return `
    *「 DIAMOND ML3688 」*
Untuk melakukan pembayaran ini jumlah yang harus kamu baya sebesar *Rp.710.000*\n
Bisa melalui Qris  diatas Untuk Pembayaran Dana maupun diluar dana seperti : \n1.Gopay\n2.Shopee\n3.Ovo
Setelah itu kirim bukti transaksi ke owner bot ini akan saya proses dalam 1x24jam
`
}

exports.adminOnly = () => {
    return `Perintah ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan Daftar dengan cara ketik:\n*${prefix}REGISTER* nama | umur\n\n _Contoh:_  *${prefix}register* Nino | 17`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ BLOCK LIST ]------\n\nTotal diblokir: *${blockNumber.length}* user\n`
}

exports.listunblock = (mention) => {
    return `------[ UNBLOCK ]------\n\nUser : *${mention.length}* telah di unblock\n`
}

exports.notPremium = () => {
    return `Maaf! Perintah ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `Kamu bukan seorang admin group!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi Owner Sociality bot.`
}

exports.botNotAdmin = () => {
    return `Silahkan jadikan bot admin terlebih dahulu!`
}

exports.ytFound = (result) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Upload*: ${result.uploader}\n➸ *Deskripsi*:${result.description}\n➸ *Ukuran*:${result.link.size}\n➸ *Durasi*: ${result.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.ytFoundv3video = (result) => {
        return `*Video ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Upload*: ${result.uploader}\n➸ *Deskripsi*:${result.description}\n➸ *Ukuran*:${result.link.size}\n➸ *Durasi*: ${result.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.ytPlayv2 = (result) => {
    for (let i = 0; i < result.audio.length; i++) {
        if (result.audio[i].bitrate === '320 kbps'){
    return `*「 𝗠𝘂𝘀𝗶𝗸 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 」*\n\n➸ *Judul*: ${result.info.title}\n➸ *Deskripsi*:${result.info.description}\n➸ *Bitrate*:${result.audio[i].bitrate}\n➸ *Ukuran*:${result.audio[i].size}\n➸ *Durasi*: ${result.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}}}
exports.Fbdownloader = (result) => {
    return `*「 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 」*\n\n➸ *Judul*: ${result.title}\n➸ *Deskripsi*:${result.description}\n\nMedia sedang dikirim, mohon tunggu...`
}


exports.ytFoundv2 = (result) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Ukuran*:${result.size}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.scFound = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Genre*:${result.genre}\n➸ *Ukuran*:${result.filesize}\n➸ *Durasi*: ${result.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}


exports.ytFound2 = (result) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Ukuran*:\n${result.size}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.kusonime = (result) =>{
    ini_txt = ''
    for(var i=0 in result.link_dl){
        ini_txt += `➸\n${i}\n`
        for (var y=0 in result.link_dl[i]) {
            ini_txt += `➸${y} - ${result.link_dl[i][y]}\n`
        }
    }
    return `*「 𝐊𝐮𝐬𝐨𝐧𝐢𝐦𝐞 𝐅𝐨𝐮𝐧𝐝 」*\n\n➸ *Judul*: ${result.title}\n➸ *Sinopsis*:\n${result.desc}\n➸ *Genre*: ${result.genre}\n➸ *Download*:\n${ini_txt}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.otakudesu = (result) =>{
    ini_txt = ' '
    get_link = result.link_dl
    for (var x=0 in get_link) {
        ini_txt += `\n\n*${get_link[x].title}*\n`
        for (var y=0 in get_link[x].link_dl) {
            ini_info = get_link[x].link_dl[y]
            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
            ini_txt += `\`\`\`Link : \`\`\`\n`
            down_link = ini_info.link_dl
            for (var z=0 in down_link) {
                ini_txt += `${z} - ${down_link[z]}\n`
            }
        }
    }
    return `*「 Otakudesu 𝐅𝐨𝐮𝐧𝐝 」*\n\n➸ *Judul*: ${result.title}\n➸ *Total Episode*:\n${result.episodes}\n➸ *Genre*: ${result.genres}\n➸ *Download*:\n${ini_txt}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.tiktokFound = (result) => {
    return `*「 𝐓𝐢𝐤𝐭𝐨𝐤 𝐅𝐨𝐮𝐧𝐝 」*\n\n➸ *Username*: ${result.author.username}\n➸ *Nickname*: ${result.author.nickname}\n➸ *Deskripsi*:\n${result.description}\n\n *_Media sedang dikirim_* ...`
}

exports.notRegistered = () => {
    return `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}Register* nama | umur\n contoh  *${prefix}Register Nino | 20* \n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`
}

exports.registered = ( name, age, userId, time, serial , jmlhuser) => {
    return `
_______________________________________
*「 REGISTRATION 」*
Akun kamu telah terdaftar dengan data:
    ➸ *Nama*: ${name}
    ➸ *Umur*: ${age}
    ➸ *ID*: ${userId}
    ➸ *Waktu pendaftaran*: ${time}
    ➸ *Serial*: ${serial}
    ➸ *Total Daftar*: ${jmlhuser}

Note:
Jangan Share data *serial* ke pada siapapun!
Ketik *${prefix}rules* terlebih dahulu ya~
_______________________________________
`
}

exports.registeredAlready = () => {
    return `Kamu sudah terdaftar sebelunya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.\N atau berlangganan menjadi premium untuk\Ntanpa batas limit lohh`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result.info.singer}\n➸ *Judul*: ${result.info.song}\n➸ *Album*: ${result.info.album}\n➸ *Durasi*: ${result.info.duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.jooxv2 = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result.singer}\n➸ *Judul*: ${result.title}\n➸ *Album*: ${result.album}\n➸ *Size*: ${result.size}\n➸ *Durasi*: ${result.duration}\n➸ *Lirik*: ${result.lyric}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.spotify = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result.artists}\n➸ *Judul*: ${result.title}\n➸ *Album*: ${result.id}\n➸ *Size*: ${result.size}\n➸ *Populer*: ${result.popularity}n\nMedia sedang dikirim, mohon tunggu...`
}

exports.soundcloud = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Judul*: ${result.title}\n➸ *Genre*: ${result.genre}\n➸ *Rilis*: ${result.published_at}\n➸ *Size*: ${result.filesize}\n➸ *Durasi*: ${result.duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.AntiPromoteOn = (name, formattedTitle) => {
    return `*「 ANTI Promote LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-Promote link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.BukberDetector = (name, formattedTitle) => {
    return `*「 Bukber 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini Telah mengaktifkan fitur pengingat Berbuka.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}
exports.detectorOffPromote = () => {
    return `Fitur anti-Promote link berhasil *dinonaktifkan*!`
}

exports.detectorBukberOff = () => {
    return `Fitur Bukbernya berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.antipromoteOnAlready = () => {
    return `Fitur anti-Promote link telah diaktifkan sebelumnya.`
}

exports.FiturBukberOn = () => {
    return `Fitur Bukber telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengeluarkan mu...\nSelamat tinggal~`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nHanya admin yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nSekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 YTMP3 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.igpost = (result) => {
    return `*「 INSTAGRAM DOWNLOADER 」*\n\n➸ *Username*: ${result.account.username}\n➸ *Full Name*: ${result.account.full_name}\n➸ *Captoion*: ${result.caption}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKamu telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}

exports.menuText = () => {
    return `
╭ஜ۩۞ Text Maker ۞۩ஜ══
║
║ Untuk Spasi Teks menggunakan *+*
║ contoh : ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
_*Assalamu'alaikum wr. wb.*_

*Daftar hadis*:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${prefix}hadis bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${prefix}hadis muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${prefix}hadis tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${prefix}hadis nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${prefix}hadis ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${prefix}hadis abudaud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${prefix}hadis malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${prefix}hadis ibnumajah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${prefix}hadis darimi 3

*Semoga bermanfaat*
_*Wassalam*_
    `
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_* ❏
Atau dengan cara donasi dengan ketik
*${prefix}donasi*
    `
}

exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.exxp = (level, xp, requiredXp,  role )=>{
return `
───❉ 𝗜𝗻𝗶 𝗮𝗱𝗮𝗹𝗮𝗵 𝗹𝗲𝘃𝗲𝗹 𝗸𝗮𝗺𝘂 ❉──\n
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, timeer, premium) => {
    return `
╭ஜ۩۞ INFORMATION ۞۩ஜ══
║
║════════════════════
║ Hallo 🙌${pushname}
║
║ _𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢 𝐝𝐢𝐫𝐢 𝐀𝐧𝐝𝐚_ :
║➸ *Level*: ${level}
║➸ *XP*: ${xp} / ${requiredXp}
║➸ *Role*: ${role}
║➸ *Premium*: ${premium}
║➸ *Waktu*: ${timeer}
║➸ *BOT VERSION*: 28.03.21
║════════════════════
║
║Total pendaftar: *${jumlahUser}*
║
║Berikut adalah menu yang tersedia:
║
║➸ *Prefix*: ${prefix}
╟⊱ *꒰1꒱* Downloader
╟⊱ *꒰2꒱* Bot
╟⊱ *꒰3꒱* Misc
╟⊱ *꒰4꒱* Sticker
╟⊱ *꒰5꒱* Weeaboo
╟⊱ *꒰6꒱* Fun
╟⊱ *꒰7꒱* Moderation
╟⊱ *꒰8꒱* Warung SBot
╟⊱ *꒰9꒱* NSFW
╟⊱ *꒰10꒱* Owner
╟⊱ *꒰11꒱* Leveling
║Ketik *${prefix}menu* angka 
║untuk membuka menu. 
║yang dipilih.
║Contoh : *${prefix}Menu 1*
║
║Catatan:
║Perlakukan bot secara baik, dev 
║akan bertindak tegas apabila
║user melanggar rules.
║Bot ini terdapat anti-spam yang
║berupa anti spam selama
║ *5 detik*
║setiap kali pemakaian.
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══`
}

exports.menuDownloader = () => {
    return `
╭ஜ۩۞ Downloader ۞۩ஜ══
║
╟⊱1. *${prefix}facebook*
║Download Facebook video.
║Aliases: *fb*
║Usage: *${prefix}facebook* link_video
║════════════════════════
╟⊱2. *${prefix}ytmp3*
║Download YouTube audio.
║Aliases: -
║Usage: *${prefix}ytmp3* link
║════════════════════════
╟⊱3. *${prefix}ytmp4*
║Download YouTube video.
║Aliases: -
║Usage: *${prefix}ytmp4* link
║════════════════════════
╟⊱4. *${prefix}joox*
║Mencari dan men-download lagu dari Joox.
║Aliases: -
║Usage: *${prefix}joox* judul_lagu
║════════════════════════
╟⊱5. *${prefix}tiktok*
╟⊱Mendownload video TikTok.
║Aliases: -
║Usage: *${prefix}tiktok* link_video
║════════════════════════
╟⊱6. *${prefix}twitter*
║Download Twitter media.
║Aliases: *twt*
║Usage: *${prefix}twiter* link
║════════════════════════
╟⊱7. *${prefix}tiktokpic*
║Download profile pic user
║Aliases: -
║Usage: *${prefix}tiktokpic* username
║════════════════════════
╟⊱8. *${prefix}tiktoknowm*
║Download video TikTok tanpa WM.
║Aliases: *tktnowm*
║Usage: *${prefix}tiktoknowm* link_video
║════════════════════════
╟⊱9. *${prefix}moddroid*
║Cari APK mod dari moddroid.
║Aliases: -
║Usage: *${prefix}moddroid* nama_APK
║════════════════════════
╟⊱10. *${prefix}happymod*
║Cari APK mod dari happymod.
║Aliases: -
║Usage: *${prefix}happymod* nama_APK
║════════════════════════
╟⊱11. *${prefix}linedl*
║Stiker Line downloader.
║Aliases: -
║Usage: *${prefix}linedl* link_stiker
║════════════════════════
╟⊱12. *${prefix}ig*
║Download IG post.
║Aliases: -
║Usage: *${prefix}IG* Link untuk post BANYAK
║Atau *${prefix}igv1* untuk post dikit
║════════════════════════
╟⊱13. *${prefix}555555dds*
║Download IG Profile.
║Aliases: -
║Usage: *${prefix}igp* username
║════════════════════════
╟⊱14. *${prefix}igs*
║Download IG Story.
║Aliases: -
║Usage: *${prefix}igs* username
║════════════════════════
╟⊱15. *${prefix}Soundcloud*
║Download lagu soundcloud.
║Aliases: -
║Usage: *${prefix}Soundcloud* Judul lagu
║
║════════════════════════
╟⊱16. *${prefix}ytplay*
║Download musik youtube.
║Aliases: -
║Usage: *${prefix}ytplay* Judul lagu
║════════════════════════
╟⊱16. *${prefix}gdbypass*
║Bypass file Google Drive.
║Aliases: -
║Usage: *${prefix}gdbypass* link_GD
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuBot = () => {
    return `
╭ஜ۩۞ Fitur BOT ۞۩ஜ══
║
╟⊱1. *${prefix}rules*
║Wajib baca.
║Aliases: *rule*
║Usage: *${prefix}rules*
║
╟⊱2. *${prefix}menu*
║Menampilkan commands yang tersedia.
║Aliases: *help*
║Usage: *${prefix}menu* angka_index
║
╟⊱3. *${prefix}status*
║Menampilkan status bot.
║Aliases: *stats*
║Usage: *${prefix}status*
║
╟⊱4. *${prefix}listblock*
║Cek nomor yang diblokir.
║Aliases: -
║Usage: *${prefix}listblock*
║
╟⊱5. *${prefix}ping*
║Cek speed bot.
║Aliases: *p*
║Usage: *${prefix}ping*
║
╟⊱6. *${prefix}delete*
║Hapus pesan dari bot.
║Aliases: *del*
║Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.
║
╟⊱7. *${prefix}report*
║Laporkan bug ke dev.
║Aliases: -
║Usage: *${prefix}report* pesan
║
╟⊱8. *${prefix}tos*
║Syarat dan ketentuan. (TOS)
║Aliases: -
║Usage: *${prefix}tos*
║
╟⊱10. *${prefix}ownerbot*
║Mengirim kontak owner.
║Aliases: -
║Usage: *${prefix}ownerbot*
║
╟⊱11. *${prefix}getpic*
║Mengirim foto profil user.
║Aliases: -
║Usage: *${prefix}getpic* @user/62812xxxxxxxx
║
╟⊱12. *${prefix}premiumcheck*
║Cek masa aktif premium.
║Aliases: *cekpremium*
║Usage: *${prefix}premiumcheck*
║
╟⊱13. *${prefix}premiumlist*
║Cek list user premium.
║Aliases: *listpremium*
║Usage: *${prefix}premiumlist*
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuMisc = () => {
    return `
╭ஜ۩۞ Fitur BOT 2 ۞۩ஜ══
║
╟⊱1. *${prefix}say*
║Bot akan mengulang pesan mu.
║Aliases: -
║Usage: *${prefix}say* teks
║════════════════════════
╟⊱2. *${prefix}lirik*
║Mencari lirik lagu.
║Aliases: -
║Usage: *${prefix}lirik* judul_lagu
║════════════════════════
╟⊱3. *${prefix}shortlink*
║Membuat shortlink.
║Aliases: -
║Usage: *${prefix}shortlink* link
║════════════════════════
╟⊱4. *${prefix}wikipedia*
║Mengirim Wikipedia dari teks yang diberikan.
║Aliases: *wiki*
║Usage: *${prefix}wikipedia* teks
║════════════════════════
╟⊱5. *${prefix}kbbi*
║Mengirim definisi kata dari KBBI.
║Aliases: -
║Usage: *${prefix}kbbi* teks
║════════════════════════
╟⊱6. *${prefix}igstalk*
║Stalk akun Instagram.
║Aliases: -
║Usage: *${prefix}igstalk* username
║════════════════════════
╟⊱7. *${prefix}gsmarena*
║Mengirim info spesifikasi HP dari GSMArena.
║Aliases: -
║Usage: *${prefix}gsmarena* model_hp
║════════════════════════
╟⊱8. *${prefix}receipt*
║Mengirim resep makanan.
║Aliases: *resep*
║Usage: *${prefix}receipt* nama_makanan
║════════════════════════
╟⊱9. *${prefix}ytsearch*
║Mengirim hasil pencarian di YouTube.
║Aliases: *yts*
║Usage: *${prefix}ytsearch* query
║════════════════════════
╟⊱10. *${prefix}tts*
║Membuat Text to Speech. Kalian perlu kode bahasa
║setiap menggunakan, cek di sini
║https://redirect.is/8khohts
║Aliases: -
║Usage: *${prefix}tts* kode_bahasa | teks
║════════════════════════
╟⊱11. *${prefix}afk*
║Set akun kamu ke mode AFK.
║Aliases: -
║Usage: *${prefix}afk* alasan.
║════════════════════════
╟⊱12. *${prefix}distance*
║Untuk mengetahui jarak dari 
║kotamu ke kota yang kamu tuju
║Aliases: -
║Usage: *${prefix}distance* kota_asal | kota_tujuan
║════════════════════════
╟⊱13. *${prefix}findsticker*
║Untuk mencari sticker yang kamu cari
║Aliases: *findstiker*
║Usage: *${prefix}findsticker* teks
║════════════════════════
╟⊱14. *${prefix}math*
║Kalkulator.
║* = Perkalian
║+ = Pertambahan
║- = Pengurangan
║/ = Pembagian
║Aliases: -
║Usage: *${prefix}math* 12*12
║════════════════════════
╟⊱15. *${prefix}listsurah*
║Melihat list surah Al-Qur'an.
║Aliases: -
║Usage: *${prefix}listsurah*
║════════════════════════
╟⊱16. *${prefix}surah*
║Mengirim surah Al-Qur'an.
║Aliases: -
║Usage: *${prefix}surah* nomor_surah
║════════════════════════
╟⊱17. *${prefix}js*
║Mengetahui jadwal shalat di daerah kalian
║Aliases: - 
║Usage: *${prefix}js* namadaerah
║════════════════════════
╟⊱18. *${prefix}mutual*
║Dapatkan kontak WA random.
║Aliases: -
║Usage: *${prefix}mutual*
║════════════════════════
╟⊱19. *${prefix}whois*
║IP look-up.
║Aliases: -
║Usage: *${prefix}whois* ip_address
║════════════════════════
╟⊱20. *${prefix}sms*
║Mengirim SMS secara anonymous. (SMS gateway)
║Aliases: -
║Usage: *${prefix}sms* pesan | nomor_penerima
║════════════════════════
╟⊱21. *${prefix}toxic*
║Random toxic.
║Aliases: -
║Usage: *${prefix}toxic*
║════════════════════════
╟⊱22. *${prefix}tafsir*
║Tafsir ayat surah Al-Qur'an.
║Aliases: -
║Usage: *${prefix}tafsir* nama_surah  ayat
║════════════════════════
╟⊱23. *${prefix}motivasi*
║Kata-kata motivasi.
║Aliases: -
║Usage: *${prefix}motivasi*
║════════════════════════
╟⊱24. *${prefix}linesticker*
║Sticker Line terbaru.
║Aliases: *linestiker*
║Usage: *${prefix}linesticker*
║════════════════════════
╟⊱25. *${prefix}alkitab*
║Al-Kitab search.
║Aliases: -
║Usage: *${prefix}* nama_injil
║════════════════════════
╟⊱26. *${prefix}cekongkir*
║Cek ongkos kirim.
║Aliases: -
║Usage: *${prefix}ongkir* kurir | asal | tujuan
║════════════════════════
╟⊱27. *${prefix}movie*
║Cari film.
║Aliases: -
║Usage: *${prefix}movie* judul
║════════════════════════
╟⊱28. *${prefix}reminder*
║Pengingat. 
║*s* - detik
║*m* - menit
║*h* - jam
║*d* - hari
║Aliases: -
║Usage: *${prefix}reminder* 10s | pesan_pengingat
║════════════════════════
╟⊱29. *${prefix}imagetourl*
║Image uploader.
║Aliases: *imgtourl*
║Usage: *${prefix}imagetourl* atau reply gambar
║════════════════════════
╟⊱30. *${prefix}infohoax*
║Cek update info hoax.
║Aliases: -
║Usage: *${prefix}infohoax*
║════════════════════════
╟⊱31. *${prefix}trending*
║Cek trending di Twitter.
║Aliases: -
║Usage: *${prefix}trending*
║════════════════════════
╟⊱32. *${prefix}jobseek*
║Mencari info lowongan kerja.
║Aliases: -
║Usage: *${prefix}jobseek*
║════════════════════════
╟⊱33. *${prefix}spamcall*
║Spam call.
║Aliases: -
║Usage: *${prefix}spamcall* 812xxxxxxxx
║════════════════════════
╟⊱34. *${prefix}email*
║Mengirim email secara anonymous.
║Aliases: -
║Usage: *${prefix}email* email_target | subjek | pesan_email
║═══════════════════════
╟⊱35. *${prefix}quotes*
║Random quotes bahasa indonesia.
║Aliases: -
║Usage: *${prefix}quotes*
║════════════════════════
╟⊱36. *${prefix}genshininfo*
║Kirim info karakter Genshin Impact.
║Aliases: *genshin*
║Usage: *${prefix}genshininfo* nama_karakter
║════════════════════════
╟⊱37. *${prefix}translate*
║Terjemahkan teks.
║Aliases: *trans*
║Usage: *${prefix}translate* teks | kode_bahasa
║════════════════════════
╟⊱38. *${prefix}hadis*
║Info hadis.
║Aliases: -
║Usage: *${prefix}hadis* kitab_hadis | nomor_hadis
║════════════════════════
╟⊱39. *${prefix}asmaulhusna*
║Asmaul husna.
║Aliases: -
║Usage: *${prefix}asmaulhusna* nomor_asmaulhusna
║════════════════════════
╟⊱40. *${prefix}randomquran*
║Kirim surah Al-Qur'an secara random.
║Aliases: -
║Usage: *${prefix}randomquran*
║════════════════════════
╟⊱41. *${prefix}coronavirus*
║Cek kasus COVID-19.
║Aliases: *corona*
║Usage: *${prefix}coronavirus* negara
║════════════════════════
╟⊱42. *${prefix}tomp3*
║Format video ke MP3.
║Aliases: -
║Usage: Kirim video dengan *${prefix}tomp3* atau reply.
║════════════════════════
╟⊱43. *${prefix}ttp*
║Buat teks menjadi stiker.
║Aliases: -
║UsageL *${prefix}ttp* teks
║════════════════════════
╟⊱44. *${prefix}transvoice*
║Terjemahkan teks dalam voice.
║Aliases: -
║Usage: *${prefix}translate* teks | kode_bahasa
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuSticker = () => {
    return `
╭ஜ۩۞ Sticker ۞۩ஜ══
║
╟⊱1. *${prefix}sticker*
║Membuat stiker dari gambar yang dikirim atau di-reply.
║Aliases: *stiker*
║Usage: Kirim gambar dengan caption 
║*${prefix}sticker* atau reply gambar 
║dengan caption *${prefix}sticker*.
║════════════════════════
╟⊱2. *${prefix}stickergif*
║Membuat stiker dari video MP4 atau GIF 
║yang dikirim atau di-reply.
║Aliases: *stikergif*
║Usage: Kirim video/GIF dengan caption *${prefix}stickergif* 
║atau reply video/GIF dengan caption *${prefix}stickergif*.
║════════════════════════
╟⊱3. *${prefix}ttg*
║Membuat stiker text to GIF.
║Aliases: -
║Usage: *${prefix}ttg* teks
║════════════════════════
╟⊱4. *${prefix}stickertoimg*
║Konversi stiker ke foto.
║Aliases: *stikertoimg toimg*
║Usage: Reply sticker dengan 
║caption *${prefix}stickertoimg*.
║════════════════════════
╟⊱5. *${prefix}emojisticker*
║Konversi emoji ke stiker.
║Aliases: *emojistiker*
║Usage: *${prefix}emojisticker* emoji
║════════════════════════
╟⊱6. *${prefix}stickerwm*
║Buat stiker dengan WM.
║Aliases: *stcwm*
║Usage: Kirim gambar dengan caption 
║*${prefix}stickerwm* pack_name | author_name 
║atau reply gambar dengan caption 
║*${prefix}stickerwm* pack_name | author_name.
║════════════════════════
╟⊱7. *${prefix}stickermeme*
║Buat sticker meme.
║Aliases: *stcmeme*
║Usage: Kirim gambar dengan 
║caption *${prefix}stickermeme* teks_atas | teks_bawah 
║atau reply gambar dengan 
║caption *${prefix}stickermeme* teks_atas | teks_bawah.
║════════════════════════
╟⊱8. *${prefix}takestick*
║Merubah watermark sticker.
║Aliases: -
║Usage: Reply stiker dengan caption 
║*${prefix}takestick* pack_name | author_name
║════════════════════════
╟⊱9. *${prefix}stickerp*
║Menjadi stiker dengan reso asli
║Aliases: *${prefix}stikerp*
║ [ *Premium Only* ]
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuWeeaboo = () => {
    return `
╭ஜ۩۞ Area WEABOO ۞۩ஜ══
║
╟⊱1. *${prefix}neko*
║Mengirim foto neko girl.
║Aliases: -
║Usage: *${prefix}neko*
║════════════════════════
╟⊱2. *${prefix}wallpaper*
║Mengirim wallpaper anime.
║Aliases: *wp*
║Usage: *${prefix}wallpaper*
║════════════════════════
╟⊱3. *${prefix}kemono*
║Mengirim foto kemonomimi girl.
║Aliases: -
║Usage: *${prefix}kemono*
║════════════════════════
╟⊱4. *${prefix}kusonime*
║Mencari info anime dan link download batch di Kusonime.
║Aliases: -
║Usage: *${prefix}kusonime* judul_anime
║════════════════════════
╟⊱5. *${prefix}kiryuu*
║Mendownload manga sub indo.
║Aliases: -
║Usage: *${prefix}kiryuu* link
║════════════════════════
╟⊱6. *${prefix}wait*
║Mencari source anime dari screenshot scene.
║Aliases: -
║Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.
║════════════════════════
╟⊱7. *${prefix}source*
║Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
║Aliases: *sauce*
║Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.
║════════════════════════
╟⊱8. *${prefix}waifu*
║Mengirim random foto waifu.
║Aliases: -
║Usage: *${prefix}waifu*
║════════════════════════
╟⊱9. *${prefix}anitoki*
║Cek update terbaru Anitoki.
║Aliases: -
║Usage: *${prefix}anitoki*
║════════════════════════
╟⊱10. *${prefix}neonime*
║Cek update terbaru Neonime.
║Aliases: -
║Usage: *${prefix}neonime*
║════════════════════════
╟⊱11. *${prefix}anoboy*
║Cek on-going anime dari Anoboy.
║Aliases: -
║Usage: *${prefix}anoboy*
║════════════════════════
╟⊱12. *${prefix}loli*
║Mengirim foto loli.
║Aliases: -
║Usage: *${prefix}loli*
║
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuFun = () => {
    return `
╭ஜ۩۞ Ruang Bersama ۞۩ஜ══
║
╟⊱1. *${prefix}hartatahta*
║Membuat gambar Harta Tahta Nama.
║Aliases: -
║Usage: *${prefix}hartatahta* nama
║════════════════════════
╟⊱2. *${prefix}partner*
║Weton jodoh.
║Aliases: *pasangan*
║Usage: *${prefix}partner* nama | pasangan
║════════════════════════
╟⊱3. *${prefix}zodiac*
║Ramalan zodiak Mingguan.
║Aliases: *zodiak*
║Usage: *${prefix}zodiac* zodiak
║════════════════════════
╟⊱4. *${prefix}write*
║Membuat catatan tulisan di buku.
║Aliases: *nulis*
║Usage: *${prefix}write* teks
║════════════════════════
╟⊱5. *${prefix}glitchtext*
║Membuat gambar teks glitch.
║Aliases: *glitext*
║Usage: *${prefix}glitchtext* teks1 | teks2
║════════════════════════
╟⊱6. *${prefix}simi*
║Chat SimiSimi.
║Aliases: -
║Usage: *${prefix}simi* teks
║════════════════════════
╟⊱7. *${prefix}blackpink*
║Membuat teks dengan style logo Blackpink.
║Aliases: -
║Usage: *${prefix}blackpink* teks
║════════════════════════
╟⊱8. *${prefix}phmaker*
║Membuat teks dengan style logo Pornhub.
║Aliases: -
║Usage: *${prefix}phmaker* teks_kiri | teks_kanan
║════════════════════════
╟⊱9. *${prefix}galaxy*
║Membuat gambar teks galaxy.
║Aliases: -
║Usage: *${prefix}galaxy* teks
║════════════════════════
╟⊱10. *${prefix}tod*
║Bermain truth or dare.
║Aliases: -
║Usage: *${prefix}tod*
║════════════════════════
╟⊱11. *${prefix}weton*
║Kirim ramalan weton.
║Aliases: -
║Usage: *${prefix}weton* tanggal | bulan | tahun
║════════════════════════
╟⊱12. *${prefix}triggered*
║Membuat efek triggered.
║Aliases: -
║Usage: Kirim gambar dengan caption *${prefix}triggered* 
║atau reply pesan orang dengan *${prefix}triggered*.
║════════════════════════
╟⊱13. *${prefix}kiss*
║Kiss someone ( ͡° ͜ʖ ͡°).
║Aliases: -
║Usage: Kirim gambar dengan caption *${prefix}kiss* 
║atau reply gambar dengan *${prefix}kiss*.
║════════════════════════
╟⊱14. *${prefix}citacita*
║Meme cita-cita.
║Aliases: -
║Usage: *${prefix}citacita*
║════════════════════════
╟⊱15. *${prefix}phcomment*
║Membuat capton ala PH comment.
║Aliases: -
║Usage: *${prefix}phcomment* username | teks
║════════════════════════
╟⊱16. *${prefix}ffbanner*
║Membuat banner Free Fire.
║Aliases: -
║Usage: *${prefix}ffbanner* teks1 | teks2
║════════════════════════
╟⊱17. *${prefix}fflogo*
║Membuat logo karakter Free Fire.
║Aliases: -
║Usage: *${prefix}fflogo* teks1
║════════════════════════
╟⊱18. *${prefix}neontext*
║Membuat gambar neon teks.
║Aliases: *neon*
║Usage: *${prefix}neontext* teks_atas | teks_tengah | teks_bawah
║════════════════════════
╟⊱19. *${prefix}firemaker*
║Membuat gambar teks fire.
║Aliases: -
║Usage: *${prefix}firemaker* teks
║════════════════════════
╟⊱20. *${prefix}mlmaker*
║Membuat gambar karakter hero ML dengan teks.
║Aliases: -
║Usage: *${prefix}mlmaker* nama_hero | teks
║════════════════════════
╟⊱21. *${prefix}balloonmaker*
║Membuat gambar couple balloon.
║Aliases: *blmaker*
║Usage: *${prefix}balloonmaker* nama1 | nama2
║════════════════════════
╟⊱22. *${prefix}sliding*
║Membuat GIF sliding text.
║Aliases: -
║Usage: *${prefix}sliding* teks
║════════════════════════
╟⊱23. *${prefix}wasted*
║Membuat gambar wasted.
║Aliases: -
║Usage: Upload foto dengan caption *${prefix}wasted*
║════════════════════════
╟⊱24. *${prefix}caklontong*
║Bermain kuis caklontong.
║Aliases: -
║Usage: *${prefix}caklontong*
║════════════════════════
╟⊱25. *${prefix}hilih*
║Replace beberapa huruf menjadi i.
║Aliases: -
║Usage: *${prefix}hilih* teks
║════════════════════════
╟⊱26. *${prefix}tebakgambar*
║Bermain kuis tebak gambar.
║Aliases: -
║Usage: *${prefix}tebakgambar*
║════════════════════════
╟⊱27. *${prefix}slap*
║untuk menampar seseorangr.
║Aliases: -
║Usage: *${prefix}slap*
║════════════════════════
╟⊱28. *${prefix}rate*
║untuk menampar seseorangr.
║Aliases: -
║Usage: *${prefix}rate*
║════════════════════════
╟⊱29. *${prefix}apakah*
║untuk menampar seseorangr.
║Aliases: -
║Usage: *${prefix}apakah*
║════════════════════════
╟⊱30. *${prefix}fami*
║bermain famili100
║bersama-sama
║Aliases: -
║Usage: *${prefix}fami*
║════════════════════════
╟⊱31. *${prefix}artinama*
║Mencari arti namamu
║
║Aliases: -
║Usage: *${prefix}artinama*
║════════════════════════
╟⊱32. *${prefix}ktpmaker*
║Membuat fake ktp
║
║Aliases: -
║Usage: *${prefix}ktpmaker*
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuModeration = () => {
    return `
╭ஜ۩۞ Menu Moderator ۞۩ஜ══
║
╟⊱1. *${prefix}add*
║Menambah user ke dalam group.
║Aliases: -
║Usage: *${prefix}add* 628xxxxxxxxxx
║════════════════════════
╟⊱2. *${prefix}kick*
║Mengeluarkan member dari grup.
║Aliases: -
║Usage: *${prefix}kick* @member1
║════════════════════════
╟⊱3. *${prefix}promote*
║Promote member menjadi admin.
║Aliases: -
║Usage: *${prefix}promote* @member1
║════════════════════════
╟⊱4. *${prefix}demote*
║Demote member dari admin.
║Aliases: -
║Usage: *${prefix}demote* @member1
║════════════════════════
╟⊱5. *${prefix}leave*
║Bot akan meninggalkan grup.
║Aliases: -
║Usage: *${prefix}leave*
║════════════════════════
╟⊱6. *${prefix}tagall*
║Mention semua member group.
║Aliases: -
║Usage: *${prefix}tagall* text
║════════════════════════
╟⊱7. *${prefix}nsfw*
║Mematikan/menyalakan mode NSFW.
║Aliases: -
║Usage: *${prefix}nsfw* enable/disable
║════════════════════════
╟⊱8. *${prefix}groupicon*
║Mengganti icon grup.
║Aliases: -
║Usage: Kirim gambar dengan caption *${prefix}groupicon* 
║atau reply gambar dengan caption *${prefix}groupicon*.
╟⊱9. *${prefix}antilink*
║Mematikan/menyalakan fitur anti-group link.
║Aliases: -
║Usage: *${prefix}antilink* enable/disable
║════════════════════════
╟⊱10. *${prefix}welcome*
║Mematikan/menyalakan fitur welcome 
║untulmenyambut setiap kedatangan member.
║Aliases: -
║Usage: *${prefix}welcome* enable/disable
║════════════════════════
╟⊱11. *${prefix}autosticker*
║Mematikan/menyalakan fitur auto-stiker. 
║Setiap foto yang dikirim akan selalu diubah ke stiker.
║Aliases: *autostiker autostik*
║Usage: *${prefix}autostiker* enable/disable
║════════════════════════
╟⊱12. *${prefix}antinsfw*
║Mematikan/menyalakan fitur anti-NSFW link.
║Aliases: -
║Usage: *${prefix}antinsfw* enable/disable
║════════════════════════
╟⊱13. *${prefix}mutegc*
║Set group hanya admin yang bisa mengirim pesan.
║Aliases: -
║Usage: *${prefix}mutegc* enabled/disable
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuJual = () => {
    return `
╭ஜ۩۞ Menu Harga ۞۩ஜ══
║
║ *Berikut warung Sbot*
║
╟⊱1. ${prefix}hargaml
║ *Melihat list harga DM ML*
║Aliases: ${prefix}DM
║usage: *${prefix}hargaml*
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}


exports.menuML = () => {
    return `
╭ஜ۩۞ Menu Harga ۞۩ஜ══
║
║ *Harga DM ML*
║
╟⊱1. *${prefix}ML86*
║Untuk membeli harga diamond
║Sebanyak 89DM seharga 20k
║Aliases: -
║Usage: *${prefix}ML86*
║════════════════════════
╟⊱2. *${prefix}ML172*
║Untuk membeli harga diamond
║Sebanyak 172DM seharga 38k
║Aliases: -
║Usage: *${prefix}ML172*
║════════════════════════
╟⊱3. *${prefix}ML257*
║Untuk membeli harga diamond
║Sebanyak 257DM seharga 57k
║Aliases: -
║Usage: *${prefix}ML257*
║════════════════════════
╟⊱4. *${prefix}ML343*
║Untuk membeli harga diamond
║Sebanyak 343DM seharga 76k
║Aliases: -
║Usage: *${prefix}ML89*
║════════════════════════
╟⊱5. *${prefix}429*
║Untuk membeli harga diamond
║Sebanyak 429DM seharga 95k
║Aliases: -
║Usage: *${prefix}ML429*
║════════════════════════
╟⊱6. *${prefix}ML514*
║Untuk membeli harga diamond
║Sebanyak 514DM seharga 114k
║Aliases: -
║Usage: *${prefix}ML514*
║════════════════════════
╟⊱7. *${prefix}ML600*
║Untuk membeli harga diamond
║Sebanyak 600DM seharga 133k
║Aliases: -
║Usage: *${prefix}ML600*
║════════════════════════
╟⊱8. *${prefix}ML706*
║Untuk membeli harga diamond
║Sebanyak 706DM seharga 152k
║Aliases: -
║Usage: *${prefix}ML706*
║════════════════════════
╟⊱9. *${prefix}ML878*
║Untuk membeli harga diamond
║Sebanyak 878DM seharga 191k
║Aliases: -
║Usage: *${prefix}ML878*
║════════════════════════
╟⊱10. *${prefix}ML963*
║Untuk membeli harga diamond
║Sebanyak 963DM seharga 210k
║Aliases: -
║Usage: *${prefix}ML963*
║════════════════════════
╟⊱11. *${prefix}ML1049*
║Untuk membeli harga diamond
║Sebanyak 1049DM seharga 239k
║Aliases: -
║Usage: *${prefix}ML1049*
║════════════════════════
╟⊱12. *${prefix}ML1412*
║Untuk membeli harga diamond
║Sebanyak 1412DM seharga 319k
║Aliases: -
║Usage: *${prefix}ML1412*
║════════════════════════
╟⊱13. *${prefix}ML2194*
║Untuk membeli harga diamond
║Sebanyak 2194DM seharga 450k
║Aliases: -
║Usage: *${prefix}ML2194*
║════════════════════════
╟⊱14. *${prefix}ML3688*
║Untuk membeli harga diamond
║Sebanyak 3688 seharga 710k
║Aliases: -
║Usage: *${prefix}ML3688*
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuNsfw = () => {
    return `
╭ஜ۩۞ Menu ( ͡° ͜ʖ ͡°). ۞۩ஜ══
║
╟⊱1. *${prefix}lewds*
║Mengirim pict anime lewd.
║Aliases: *lewd*
║Usage: *${prefix}lewds*
║════════════════════════
╟⊱2. *${prefix}nhentai*
║Mengirim info doujinshi dari nHentai.
║Aliases: *nh*
║Usage: *${prefix}nhentai* kode
║════════════════════════
╟⊱3. *${prefix}nhdl*
║Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
║Aliases: -
║Usage: *${prefix}nhdl* kode
║════════════════════════
╟⊱4. *${prefix}nekopoi*
║Mengirim video link Nekopoi terbaru.
║Aliases: -
║Usage: *${prefix}nekopoi*
║════════════════════════
╟⊱5. *${prefix}waifu18*
║Mengirim random foto waifu NSFW.
║Aliases: -
║Usage: *${prefix}waifu18*
║════════════════════════
╟⊱6. *${prefix}fetish*
║Mengirim fetish pics.
║Aliases: -
║Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao
║════════════════════════
╟⊱7. *${prefix}phdl*
║Download video dari Pornhub.
║Aliases: -
║Usage *${prefix}phdl* link
║════════════════════════
╟⊱8. *${prefix}yuri*
║Mengirim random foto lewd yuri.
║Aliases: -
║Usage: *${prefix}yuri*
║════════════════════════
╟⊱9. *${prefix}lewdavatar*
║Mengirim random avatar lewd.
║Aliases: -
║Usage: *${prefix}lewdavatar*
║════════════════════════
╟⊱10. *${prefix}femdom*
║Mengirim random foto ero femdom.
║Aliases: -
║Usage: *${prefix}femdom*
║════════════════════════
╟⊱11. *${prefix}nhsearch*
║nHentai search.
║Aliases: -
║Usage: *${prefix}nhsearch* query
║════════════════════════
╟⊱12. *${prefix}nekosearch*
║Nekopoi search.
║Aliases: -
║Usage: *${prefix}nekosearch* query
║════════════════════════
╟⊱13. *${prefix}cersex*
║Random cerita sex.
║Aliases: -
║Usage: *${prefix}cersex*
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuOwner = () => {
    return `
╭ஜ۩۞ Fitur Owner ۞۩ஜ══
║Halo Owner Sociality BOT
║Berikut adalah Command khusus owner bot!
║
╟⊱1. *${prefix}bc*
║Membuat broadcast.
║Aliases: -
║Usage: *${prefix}bc* <teks> 
║═══════════════════════
╟⊱2. *${prefix}clearall*
║Menghapus semua chat di akun bot.
║Aliases: -
║Usage: *${prefix}clearall*
║═══════════════════════
╟⊱3. *${prefix}getses*
║Mengambil screenshot sesi dari akun bot.
║Aliases: -
║Usage: *${prefix}getses*
║═══════════════════════
╟⊱4. *${prefix}ban*
║Menambah/menghapus user yang diban.
║Aliases: -
║Usage: *${prefix}ban* add/del
║@user/62812xxxxxxxx
║═══════════════════════
╟⊱5. *${prefix}leaveall*
║Keluar dari semua grup.
║Aliases: -
║Usage: *${prefix}leaveall*
║═══════════════════════
╟⊱6. *${prefix}eval*
║Evaluate kode JavaScript.
║Aliases: *ev*
║Usage: *${prefix}eval*
║═══════════════════════
╟⊱7. *${prefix}shutdown*
║Men-shutdown bot.
║Aliases: -
║Usage: *${prefix}shutdown*
║═══════════════════════
╟⊱8. *${prefix}premium*
║Menambah/menghapus user premium.
║*s* - detik
║*m* - menit
║*h* - jam
║*d* - hari
║Aliases: -
║Usage: *${prefix}premium* add/del 
║@user/62812xxxxxxxx 30d
║═══════════════════════
╟⊱9. *${prefix}setstatus*
║Mengganti status about me.
║Aliases: *setstats setstat*
║Usage: *${prefix}status* teks
║═══════════════════════
╟⊱10. *${prefix}serial*
║Cek pendaftaran akun via serial.
║Aliases: -
║Usage: *${prefix}serial* serial_user
║═══════════════════════
╟⊱11. *${prefix}exif*
║Atur WM stiker bot.
║Aliases: -
║Usage: *${prefix}exif* pack_name | author_name
║═══════════════════════
╟⊱12. *${prefix}mute*
║Mute semua user.
║Aliases: -
║Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.
║═══════════════════════
╟⊱13. *${prefix}setname*
║Mengganti username bot. Maksimal 25 huruf.
║Aliases: -
║Usage: *${prefix}name* username_baru
║═══════════════════════
╟⊱14. *${prefix}join*
║Join grup via link.
║Aliases: -
║Usage: *${prefix}join* link_group
║═══════════════════════
╟⊱9. *${prefix}listgroup*
║Melihat group dengan bot.
║Aliases: lgc
║Usage: *${prefix}join* link_group
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.menuLeveling = () => {
    return `
╭ஜ۩۞ Leveling ۞۩ஜ══
║
╟⊱1. *${prefix}level*
║Untuk melihat level kamu.
║Aliases: -
║Usage: *${prefix}level*
║
╟⊱2. *${prefix}leaderboard*
║Untuk melihat leaderboard.
║Aliaases: -
║Usage: *${prefix}leaderboard*
║
╰ஜ۩۞ Sociality BOT۞۩ஜ══
    `
}

exports.rules = () => {
    return `
╭ஜ۩۞ Peraturan ۞۩ஜ══
║
╟⊱1. Jangan spam bot. 
║Sanksi: *WARN/SOFT BLOCK*
║
╟⊱2. Jangan telepon bot.
║Sanksi: *SOFT BLOCK*
║
╟⊱3. Jangan mengeksploitasi bot.
║Sanksi: *PERMANENT BLOCK*
║
║Jika sudah dipahami rules-nya.
║silakan ketik *${prefix}menu* untuk memulai!
║
╰ஜ۩۞ Sociality BOT ۞۩ஜ══`
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
Syarat dan Ketentuan Bot *Sociality BOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
7. Dosa ditanggun pengguna
Thanks !

╭ஜ۩۞ Hubungi owner BOT ۞۩ஜ══
║Contact person:
║wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster) 
║
╠➥ *OVO : 085155139920*
╠➥ *DANA : 081414252501*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
║
╰ஜ۩۞ Terima kasih! ۞۩ஜ══
`
}
exports.sumbang = () => {
    return `
╭ஜ۩۞ DONATE ۞۩ஜ══
║
╠➥Bantu Bot ini dengan cara
║  Membeli premium seharga 15k/bulan
╠➥ *DONASI BISA MELALUI :*
╠➥ *OVO : 085155139920*
╠➥ *DANA : 081414252501*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
╰ஜ۩۞ Sociality BOT ۞۩ஜ══
`
}