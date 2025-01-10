// npm i ws
// npm install -g websocket
/* 테스트 방법
 - 서버 기동 후 개발자도구 창 2개 띄움
 - 콘솔창에 아래 코드 순서대로 입력
  let ws = new WebSocket("ws://localhost:8080");
  ws.onmessage = message => console.log(`${message.data}`);
 - ws.send("입력하고 싶은 메시지") 를 입력하면 채팅기능 가능!   

*/ 

const http = require("http");
const WebSocketServer = require("websocket").server;
let connections = [];

const httpserver = http.createServer();

const websocket = new WebSocketServer({"httpServer" : httpserver});

httpserver.listen(8080, () => console.log("My server is listening on port 8080"));

websocket.on("request", request => {

    const connection = request.accept(null, request.origin);

    connection.on("message", message => {
        connections.forEach(c => c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`) )
    });

    connections.push(connection);
    connections.forEach(c => c.send(`User${connection.socket.remotePort} just connected!!!!!!`) )
});