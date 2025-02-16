require('dotenv').config();
const { IgApiClient } = require('instagram-private-api');
const { processDM } = require('./services/instaBot');

const ig = new IgApiClient();

(async () => {
    try {
        console.log("🔹 Login ke Instagram...");

        ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);
        await ig.account.login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD);

        console.log(`✅ Berhasil login sebagai ${process.env.INSTAGRAM_USERNAME}`);

        setInterval(async () => {
            await processDM(ig);
        }, 30000);

    } catch (error) {
        console.error("❌ Error saat login:", error.message);
    }
})();
