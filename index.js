// server express
const express = require('express');

const app = express();
const server = require('http').createServer(app);
// socket server
const io = require('socket.io')(server);

//desplegar el directorio public
app.use(express.static(__dirname + '/public'));

io.on('connection', () => {
  console.log('new connection');
});
server.listen(3002, () => {
  console.log('listening on 3002');
});