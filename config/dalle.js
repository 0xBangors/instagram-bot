// Owner IG: @chrvert_
require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API Key
});

const generateImage = async (prompt) => {
  try {
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024", // Ukuran gambar
    });

    return response.data[0].url;
  } catch (error) {
    console.error("Gagal membuat gambar:", error.response ? error.response.data : error.message);
    return null;
  }
};

module.exports = generateImage;
