// Owner IG: @chrvert_
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const cleanText = (text) => {
  return text.replace(/[^a-zA-Z0-9 ]/g, "").trim();
};

const isImageRequest = (text) => {
  return text.toLowerCase().includes("gambar");
};

module.exports = { delay, cleanText, isImageRequest };
