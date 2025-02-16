// Owner IG: @chrvert_
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../logs/bot.log");

const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  console.log(logEntry);

  // Simpan log ke file
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error("Gagal menyimpan log:", err);
  });
};

module.exports = logMessage;
