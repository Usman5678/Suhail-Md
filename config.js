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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_18_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjanZ5eDVOT21pUmhTUit1cWtyRHhJRmpUSCtBcEo5YmU0ajg0WXAzRkgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1ZlJwdnVoMlJLR3ZreU5pcnAxcVN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4ZjA2MTdhLTNlMWMtNGVlZC04N2VjLTY3NzlkZjEyZTM0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA4OCxcbiAgICAgIDk1LFxuICAgICAgMjEsXG4gICAgICAzLFxuICAgICAgMjM1LFxuICAgICAgNTMsXG4gICAgICAxOTgsXG4gICAgICAyOSxcbiAgICAgIDIwLFxuICAgICAgMTc2LFxuICAgICAgMTIsXG4gICAgICAyMjYsXG4gICAgICAxMDEsXG4gICAgICAxODksXG4gICAgICAyMjgsXG4gICAgICA3MSxcbiAgICAgIDE1MyxcbiAgICAgIDE2NixcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMyxcbiAgICAgIDExMSxcbiAgICAgIDE3NSxcbiAgICAgIDM2LFxuICAgICAgMjUzLFxuICAgICAgOTMsXG4gICAgICA0NCxcbiAgICAgIDQxLFxuICAgICAgMTk2LFxuICAgICAgMTkwLFxuICAgICAgMjAxLFxuICAgICAgMTg4LFxuICAgICAgMTk1LFxuICAgICAgMjA1LFxuICAgICAgMTkwLFxuICAgICAgNSxcbiAgICAgIDE3NyxcbiAgICAgIDE4MSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1gxWTlaWERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNzQwNzY2OTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmL0g8J2ZhyDwnZi8IPCdmL4g8J2ZhiAg8J2ZhyDwnZmEIPCdmYEg8J2ZgFwiLFxuICAgIFwibGlkXCI6IFwiNzg2NzU0Nzk0MDg3ODA6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hiemJVSEVLUzZ2YlFHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxbHM1eDN6dWE0ak1QcUhDZTc4U0kyWFgzQkpIMG85Y3ZkK3lURjlNTDJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ3dC9JVnlMMUlMMGhnY2hxaCswejJIcFpvL3duMDVhWUFxbTlWVzNuYzdNdndUaDVscWZaUXhpMlVPbDQvUHE0RmFlQWxKd2ZnTEN5WGhFR2Ntd0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjl5VXE4REduUGdEQlpFYXNoWlBhR0VJNTQvL04yNStISWVSQXhtQklUSWZ4N0FCUVZ5dnZyeDM2S3daZ21MamZOcU9aV1V6UHA2OU80b0dDUmp4VkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNzQwNzY2OTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY3MTUyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw3T1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDdPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWU5jeUJwTWNHTjBpbENmSFRLYnRUUHhzNytkVXF4bG1VNEwvV1VqYW8xdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkxNDcwNTYxLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDQsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
