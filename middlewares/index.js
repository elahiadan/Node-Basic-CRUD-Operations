const fs = require("fs");
const path = require("path");

const createLog = (logFilePath) => {
  return (req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${
      req.originalUrl
    }\n`;
    fs.appendFile(
      path.join(__dirname, "../", logFilePath),
      logMessage,
      (err) => {
        if (err) {
          console.error("Error writing to log file", err);
        }
      }
    );
    next();
  };
};

module.exports = createLog;
