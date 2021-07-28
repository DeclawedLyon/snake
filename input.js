const { connect } = require("./client");
const {MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, TALK, EFF} = require('./constants');
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data)
  });
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === MOVE_UP.key) {
    connection.write(MOVE_UP.move);
  }
  if (data === MOVE_LEFT.key) {
    connection.write(MOVE_LEFT.move);
  }
  if (data === MOVE_DOWN.key) {
    connection.write(MOVE_DOWN.move);
  }
  if (data === MOVE_RIGHT.key) {
    connection.write(MOVE_RIGHT.move);
  }
  if (data === TALK.q) {
    connection.write(TALK.message);
  }
  if (data === EFF[data]) {
    connection.write(EFF.message);
  }
};


module.exports = {
  setupInput,

}