import socketIO from 'socket.io-client';
const config = require('../config.json');

const socket = socketIO(config.SERVER_URL, {      
    transports: ['websocket'], jsonp: false });   
    socket.connect(); 
    socket.on('connect', () => { 
        const { userId } = store.getState().user;
      console.log('connected to socket server'); 
    }); 