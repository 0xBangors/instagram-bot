// Owner IG: @chrvert_
const openai = require("../config/openai");

const chatAI = async (message) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error in chatAI:", error);
    return "Maaf, terjadi kesalahan dalam sistem.";
  }
};

module.exports = chatAI;
