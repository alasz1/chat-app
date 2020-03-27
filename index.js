// var app = require('express')();
// const http = require('http').createServer(app);


const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const app = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on("connection", function(socket){
  io.emit('newuser');
  console.log("a user connected");
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

// app.listen(process.env.PORT || 3000);