// Owner IG: @chrvert_
const dalle = require("../config/dalle");

const generateImage = async (prompt) => {
  try {
    const response = await dalle.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    return response.data.data[0].url;
  } catch (error) {
    console.error("Error in generateImage:", error);
    return null;
  }
};

module.exports = generateImage;
