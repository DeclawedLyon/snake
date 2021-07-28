const {connect} = require('./client');

// establishes a connection with the game server

const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    }
  };
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data)
  });
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();