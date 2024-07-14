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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_38_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjQ1eExOd3pRK09ZT09BdE1SY2JOQllqUkFOT0N0bUI4U2hvaldMWVUyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicHNmN19HVDVUanVIbmNWc2tNaGdkZ1wiLFxuICBcInBob25lSWRcIjogXCIzNTBhZjgwYS01NWFiLTQ3OTYtOWVlYS0wYjE0YTg2OWY3M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgODcsXG4gICAgICAxODksXG4gICAgICAyNDYsXG4gICAgICAxNixcbiAgICAgIDM1LFxuICAgICAgMixcbiAgICAgIDEwNixcbiAgICAgIDk5LFxuICAgICAgMTY0LFxuICAgICAgNixcbiAgICAgIDEzOCxcbiAgICAgIDQ5LFxuICAgICAgMjMyLFxuICAgICAgMTAxLFxuICAgICAgMTA4LFxuICAgICAgNzUsXG4gICAgICA0NyxcbiAgICAgIDQyLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMTk5LFxuICAgICAgNTgsXG4gICAgICAxMyxcbiAgICAgIDE4LFxuICAgICAgMTQwLFxuICAgICAgMTk5LFxuICAgICAgMTI5LFxuICAgICAgMTE5LFxuICAgICAgMjIsXG4gICAgICAxNTYsXG4gICAgICAyMDEsXG4gICAgICAyMzAsXG4gICAgICA0OSxcbiAgICAgIDUyLFxuICAgICAgMTI4LFxuICAgICAgNzEsXG4gICAgICA2MixcbiAgICAgIDIwNixcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxWExBTTJESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM3NDA3NjY5OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2YvSDwnZmHIPCdmLwg8J2YviDwnZmGICDwnZmHIPCdmYQg8J2ZgSDwnZmAXCIsXG4gICAgXCJsaWRcIjogXCI3ODY3NTQ3OTQwODc4MDo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSGJ6YlVIRU1ubXdyUUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFsczV4M3p1YTRqTVBxSENlNzhTSTJYWDNCSkgwbzljdmQreVRGOU1MMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMEdnT2xtN0FTdlZkdlNwYTNISVRGQkFZb2NzOXdXY3dFVnUvK0RvN2JHRE1wclV1THMzbjJVQ1Y5WXlNTzlXYjJjUFpQV3Q2UUlnMFBsSGZzMUVZQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidlIrUUx1Uk1JYmtWRXl3SFBVc25KaFlXZWZTdjhqOHF0R3FaKyt0NXhUaEY2QW1BN0FxQWJCSTNpVHFKRGVvODhJdTFURkJYcUozTU52dWlqTUdCaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM3NDA3NjY5OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzU5MTE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDdXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMN1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwZnAzU2g0RTVoRVNyWThFYTdtSzdqZ0gwOGFXNHZaTmlETmphUlZ3aEcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTE0NzA1NjEsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMCwxMCwxNF19LFwidGltZXN0YW1wXCI6XCIxNzIwNzU3OTUxMDAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
