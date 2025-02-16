require("dotenv").config();
const { IgApiClient } = require("instagram-private-api");
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const ig = new IgApiClient();
ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);

async function login() {
  try {
      await ig.account.login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD);
      console.log(`✅ Berhasil login sebagai ${process.env.INSTAGRAM_USERNAME}`);
  } catch (error) {
      console.error("❌ Error login:", error.message);

      if (error.response && error.response.body && error.response.body.message === "challenge_required") {
          console.log("⚠ Instagram meminta verifikasi. Coba selesaikan manual dulu.");
      }

      process.exit(1);
  }
}

async function processDM() {
    try {
        const inboxFeed = ig.feed.directInbox();
        const threads = await inboxFeed.items();

        for (const thread of threads) {
            const lastMessage = thread.last_permanent_item;
            if (!lastMessage || lastMessage.item_type !== "text") continue;

            const senderId = thread.users[0]?.pk;
            const messageText = lastMessage.text;

            console.log(`📩 DM dari ${senderId}: ${messageText}`);

            const replyText = await getAIResponse(messageText);
            await sendMessage(thread.thread_id, replyText);
        }
    } catch (error) {
        console.error("❌ Error read DM:", error.message);
    }
}

async function getAIResponse(message) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "Kamu adalah asisten Instagram." }, { role: "user", content: message }]
        });

        return response.choices[0]?.message?.content || "maaf, saya tidak mengerti.";
    } catch (error) {
        console.error("❌ Error AI:", error.message);
        return " ada kesalahan.";
    }
}

async function sendMessage(threadId, message) {
    try {
        await ig.directThread(threadId).broadcastText(message);
        console.log(`✅ Balasan terkirim: ${message}`);
    } catch (error) {
        console.error("❌ Gagal mengirim pesan:", error.message);
    }
}

async function startBot() {
    await login();
    console.log("[BOT] Instagram DM Auto-Reply aktif...");
    setInterval(processDM, 10000);
}

startBot();
