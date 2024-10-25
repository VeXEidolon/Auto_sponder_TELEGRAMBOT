require('dotenv').config(); // Load environment variables
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_API_KEY);

// Set to keep track of users who have sent a message
const users = new Set();

// Start command handler
bot.start((ctx) => {
    ctx.reply('به پشتیبانی ### خوش آمدید 💖 ، لطفا سوال خود را اینجا پرسیده و منتظر پاسخ تیم پشتیبانی باشید');
    ctx.reply('لطفا صبورباشید تا پشتیبان های ما پاسخگوی شما باشند');
});

// Handle first-time message
bot.on('text', (ctx) => {
    const userId = ctx.from.id;

    if (!users.has(userId)) {
        users.add(userId);
        ctx.reply('پیام شما دریافت شد لطفا تا پاسخ تیم ما شکیبا باشید 😊❤️');
    }
});





bot.launch();
