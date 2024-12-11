const {cmd , commands} = require('../command')
const fg = require("api-dylux")
const yts = require("yt-search")


cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please giveme a url or title")  
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

let desc = `
👽 *SHEHA OFC2004 SONG DOWNLOADER* 👽

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY SHEHA OFC2004 🫀📍
´
await conn.sendMessage(from,{image:{url: data.thumbnail},cption:desc},{quoted:mek}):

//download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio+ document message
await conn.sendMessage(from.{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from.{document: {url:downloadurl},mimetype:"audio/mpeg",filrName:dats.title + ".mp3",caption:"MADE BY SHEHA OFC2004 🫀📍"},{quoted:mek})






}catch(e){
console.log(e)
reply("${e}"  
}
}}
  
//==========video-dl==========

cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please giveme a url or title")  
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

let desc = `
👽 *SHEHA OFC2004 VIDEO DOWNLOADER* 👽

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY SHEHA OFC2004 🫀📍
´
await conn.sendMessage(from,{image:{url: data.thumbnail},cption:desc},{quoted:mek}):

//download video

let down = await fg.ytav(url)
let downloadurl = down.dl_url

//send video+ document message
await conn.sendMessage(from.{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from.{document: {url:downloadurl},mimetype:"video/mp4",filrName:dats.title + ".mp4",caption:"MADE BY SHEHA OFC2004 🫀📍"},{quoted:mek})





}catch(e){
console.log(e)
reply("${e}"  
}
}}
  
