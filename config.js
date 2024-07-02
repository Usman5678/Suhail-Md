const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_24_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk5a2lTK2d3WXJiNkg5ZzNkVU1UTDFCZmpWN3ZTZjlQQmNGdEVYMmpBdGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRBalR3V3ZaVGsyTkphaUNnRzFGOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDhlYWI5YWItZTRkNC00OTlkLWIyZWMtMjg3ZmNjMTlkNmU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDIzMSxcbiAgICAgIDE4MSxcbiAgICAgIDIwNixcbiAgICAgIDE4NCxcbiAgICAgIDIxMCxcbiAgICAgIDcwLFxuICAgICAgMTgxLFxuICAgICAgMjMzLFxuICAgICAgOTEsXG4gICAgICA4MSxcbiAgICAgIDE1NixcbiAgICAgIDkzLFxuICAgICAgMTA3LFxuICAgICAgMjAsXG4gICAgICAyMzcsXG4gICAgICA1MyxcbiAgICAgIDExOCxcbiAgICAgIDIxOCxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDg5LFxuICAgICAgMTE4LFxuICAgICAgNjQsXG4gICAgICAxMDgsXG4gICAgICAyMjcsXG4gICAgICAxNDAsXG4gICAgICAxMzcsXG4gICAgICAyMTgsXG4gICAgICAyMTQsXG4gICAgICA2MCxcbiAgICAgIDIyNCxcbiAgICAgIDM0LFxuICAgICAgMjMwLFxuICAgICAgMTgzLFxuICAgICAgMjcsXG4gICAgICAxMDksXG4gICAgICAxMTUsXG4gICAgICAxNzEsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNFE1NFZMVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM3NDA3NjY5OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2YvSDwnZmHIPCdmLwg8J2YviDwnZmGICDwnZmHIPCdmYQg8J2ZgSDwnZmAXCIsXG4gICAgXCJsaWRcIjogXCI3ODY3NTQ3OTQwODc4MDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSGJ6YlVIRU9iOC9iTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFsczV4M3p1YTRqTVBxSENlNzhTSTJYWDNCSkgwbzljdmQreVRGOU1MMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEVBWHRxRGd6MC9vaTFuTC9kWjkwcmJqMjJOOS94WTlDQlVka1dVYjRxSDlDOS9MVXdFU09OR0VoaFBIN28vM0F4dysyMUdvSVJXdmd1enBZUmx3Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVZOcTlFZE1VMCs0d1NoRCs3N0thbEZuU3drTGxlVTlETGJzWHlwNmdpR2dWR0YvYU9nYWNaRUJSdFdsN0VzcjZCUEFDVUUvUmlrNFJ5S3dyc004QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM3NDA3NjY5OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjMxNDY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDdJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMN0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMWmdJU0paUWRtd1FYZXVMSU82cStMMVRDWlpMVUx1UzNaaWVCZHU3dVM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTE0NzA1NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTU5NDA3NTAyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
