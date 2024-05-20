const TelegramBot = require('node-telegram-bot-api');
const token = '7170498337:AAGRPNx27ophewOFTqVu38X84fS_d7-p1cY';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id,"Welcome!");
})

bot.onText(/\/sendpic/, (msg) => {
    bot.sendPhoto(msg.chat.id,"https://img.freepik.com/free-vector/flat-design-forest-landscape_23-2149155031.jpg", {caption: "Here we go! \n This is just a picture!"})
})

bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.from.id, "Hello " + "dear " + msg.from.first_name);
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye) === 0) {
        bot.sendMessage(msg.chat.id, "Bye dear user, come back again!")
    }
    var kitchen = "Cleaning only kitchen";
    if (msg.text.indexOf(kitchen) === 0) {
        bot.sendMessage(msg.chat.id, "Let's clean the kitchen!!!⏲️")
    }
    var house = "Cleaning the house";
    if (msg.text.indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Oh really?🧐 \n Well, in that case let's get the work done!")
    }
    var work = "Going to work";
    if (msg.text.indexOf(work) === 0) {
        bot.sendMessage(msg.chat.id, "OK, start up the car!")
    }
    var rest = "Having rest";
    if (msg.text.indexOf(rest) === 0) {
        bot.sendMessage(msg.chat.id, "OMG😮‍💨, Let's hit the hay, man")
    }
})


bot.onText(/\/options/, (msg) => {
    bot.sendMessage(msg.chat.id, "Here are your options", {
        "reply_markup": {
            "keyboard" : [["Going to work", "Having rest"], ["Cleaning the house", "Cleaning only kitchen"]]
        }
    })
})