const net = require("net");
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: DOB");
    conn.write('Move: up');
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
}