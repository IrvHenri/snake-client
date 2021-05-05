const { keyMaps } = require("./constants");
let connection;

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (keyMaps[data]) {
    connection.write(keyMaps[data]);
  } else {
    return;
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
