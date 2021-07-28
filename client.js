const net = require("net");

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
    setTimeout(() => {
      conn.write('Move: Up')
    }, 100)
    setTimeout(() => {
      conn.write('Move: left')
    }, 200)
    setTimeout(() => {
      conn.write('Move: left')
    }, 300)
    setTimeout(() => {
      conn.write('Move: left')
    }, 400)
    setTimeout(() => {
      conn.write('Move: left')
    }, 500)
    setTimeout(() => {
      conn.write('Move: left')
    }, 600)
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
}