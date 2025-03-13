//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "242067274660";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxwK2pJKy84TDlZQWZXYlZLMkIzRnh0WkgwL1ZKQnZ4WkduVVJuVngyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS24yWHc0WWl2SnRCQ3NuNmthV2EvNXF3OGwwa1ZNTkpHeWVQbUhyOWVHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRm03RjRuMzBINW0rbVp3SHhkVXNHbjY5VXdydTNna1hNWmJPQWx5TlU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwN3o0MnByeVVxSXBKcWlHU1dRK2VCcTFrNEdkdGxYS0tvY2ZCdjB0NkFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMVUxMOTQvaHUxSmc2dlBjNngvUjhqOXRLWld6cHdMOE4zaEtsbkZMMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5qQm12SVpGNmxEYzhSdit1SWltRDUyQTNqTzROU1V5ZjI1cWlCUlZTaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZtRHhwSEI4WE5KOWpLSjl0YkRzcURUZjE2OWNOTnozRk84a0QyL2lGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmxHYnhhalRGY0N4YnJCRDJLS293NlNGRnJObDNhTEZCYnI3R2FhZUcxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllzeGUwa1RySWkvVnB1MTIzTEliTm1xL2VxVzdCOXhVSWl1NGRwa0ZVQ29QK3VQbWpOYXljOEdPU1U2ZVUwa0paV3FvZ1JITXF0dUk2cDlzbE9lbERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJRNGQ4ZVRORElieGY1VVQ5V3JKYk1nN0dSUU9XTzIxVHlmOE9FZG95SDA4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiazk4UEJFUFRyUzM0bGdUZktMdzd3IiwicGhvbmVJZCI6IjVmM2FmYzNiLTlmM2QtNDJlNS05ZGRmLTI4ZTI3MTk2OTBmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Wit2WC9iUXBmTzUxd2xLTjFsTFNSeFZLWTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmErWGpYb3huNmtXV29pVXFlejFMOE9jRm5BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5NVE4zSlBSIiwibWUiOnsiaWQiOiIyNjM3ODI4OTYxMjk6MzZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015Z240Y0ZFTmV0ekw0R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1MTzlHdTBnNEZXd3c1MzBrV0luamt2MTIxSVVKRlJKajdNdEUvbFl4UU09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijd2MUJhNnVwOHhpMDh6Qjh4NGFCcmp4QUJXNmVrNURDUkFaNTZuU1NJRUlCQ2FpL2VaK2ZDcXo0clp2OCtINVI0TzI2MEhaTWd6ZHZITWZ6Z3N0QUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBL1dFaU41RHBjMjNFRXFvN0FOUmlkMkc2NGpuOWpVNGNMYXREK2ZOUXBaMEFpUXJka2VObzNpcm41TUxBRjhjQ2tNaE5GS0ZKYVJDOWZGcktaME5BZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4Mjg5NjEyOTozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaaXp2UnJ0SU9CVnNNT2Q5SkZpSjQ1TDlkdFNGQ1JVU1krekxSUDVXTVVEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxODg3MjA2fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
