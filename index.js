// import http from "http"
// import { WebSocketServer } from "ws";
// // const websocketserver = ws.Server()
// import cors from 'cors'

// const httpserver = http.createServer((req,res)=>{
//     console.log("request recieved")
// })
// httpserver.listen(8080,()=>console.log("server running"))
// const wss = new WebSocketServer({ port: httpserver });

// wss.on("connection",connection=>{
//     // var connection = request.accept(null,request.origin)
//     // console.log(connection)
//     connection.on("message",(message)=>{
//         console.log("message recieved: "+message)
//     })
//    connection.send("hey")
//     connection.on("close",()=>{
//         console.log("closed")
//     })
// })


// const WebSocket = require('ws');

// // Create a WebSocket server instance
// const wss = new WebSocket.Server({ port: 8080 });

// import {WebSocketServer} from 'ws'
// const wss = new WebSocketServer({port:8080})
// // Event listener for when a client connects
// wss.on('connection', function connection(ws) {
// //   console.log('A new client connected');
// ws.send("hey client")
//   // Event listener for when the server receives a message from the client
//   ws.on('message', function incoming(message) {
//     console.log('Received: %s', message);

//     // Send a response back to the client
//     ws.send('Received: ' + message); 
//   });

//   // Event listener for when the client closes the connection
//   ws.on('close', function close() {
//     console.log('Client disconnected');
//   });
// });

import WebSocket, {WebSocketServer} from 'ws'
const wss = new WebSocketServer({port:8080})
wss.on("connection",connection=>{
  console.log("client connected")
  connection.send("hey client")
  console.log(connection)
  connection.on("message",(msg)=>{
    // connection.send("recieved: "+msg.values)
    // console.log(msg)
    //broadcast
    wss.clients.forEach(client=>{
      if(client.readyState===WebSocket.OPEN){
        client.send("received "+ msg)
      }
    })

  })
  connection.on("close",()=>{
    console.log("client logged out")
  })
})