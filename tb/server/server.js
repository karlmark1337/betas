import apn from "apn";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const apnProvider = new apn.Provider({
  token:{
    key: process.env.APN_KEY_FILE,
    keyId: process.env.APN_KEY_ID,
    teamId: process.env.APN_TEAM_ID
  },
  production:true
});

const DEVICE_TOKEN = process.env.IOS_DEVICE_TOKEN;

function daysLeft(){
  const target = new Date("2026-02-22T07:00:00");
  return Math.max(0,
    Math.ceil((target - Date.now())/86400000)
  );
}

cron.schedule("0 0 * * *", ()=>{
  const note = new apn.Notification({
    alert:{
      title:"⏳ Countdown trả nợ ",
      body:`Còn ${daysLeft()} ngày`
    },
    topic: process.env.APN_TOPIC
  });

  apnProvider.send(note, DEVICE_TOKEN)
    .then(()=>console.log("Push sent"))
    .catch(console.error);
});
