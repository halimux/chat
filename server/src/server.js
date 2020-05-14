const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const io = socket(server);


app.use(cors());

server.listen(3000, () => console.log('listening'));


io.on('connection', (socket)=> {
    console.log('Connection made', socket.id);
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })
})

