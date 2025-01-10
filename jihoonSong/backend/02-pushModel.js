// npm i ws
// npm install -g websocket
/* 테스트 방법
 - 서버 기동 후 개발자도구 창 2개 띄움
 - 콘솔창에 아래 코드 순서대로 입력
  let ws = new WebSocket("ws://localhost:8080");
  ws.onmessage = message => console.log(`${message.data}`);
 - ws.send("입력하고 싶은 메시지") 를 입력하면 채팅기능 가능!

*/ 

// 해당 모듈 가져오기
const http = require("http");
const WebSocketServer = require("websocket").server;

// 현재 연결된 모든 클라이언트 WebSocket 연결 객체를 저장하는 배열
let connections = [];

// HTTP 서버 생성, 데이터 처리는 없고 WebSocket 연결 요청만 처리
const httpserver = http.createServer();

// WebSocket 서버 생성, HTTP 서버를 통해 WebSocket 요청 처리
const websocket = new WebSocketServer({"httpServer" : httpserver});

// http 서버가 포트 8080에서 요청을 수신하도록 설정
// 서버는 비동기적으로 시작, 서버가 성공적으로 시작되면 콜백함수 호출
httpserver.listen(8080, () => console.log("My server is listening on port 8080"));

// WebSocket 연결처리
// 클라이언트가 WebSocket 연결 요청을 보낼때 발생하는 이벤트
websocket.on("request", request => {

    // 반환된 connection 객체는 해당 클라이언트와의 WebSocket 연결을 나타냄
    // request.origin : 클라이언트의 요청 원본 URL
    const connection = request.accept(null, request.origin);

    // 클라이언트가 메시지를 보낼 때 발생하는 이벤트
    // message 객체로 전달되어 메시지 내용은 message.utf8Data에 저장
    connection.on("message", message => {
        // 현재 연결된 모든 클라이언트에 메시지 전송
        // send() 메서드로 각 클라이언트에게 메시지 전송
        connections.forEach(c => c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`) )
    });

    // 새롭게 연결된 클라이언트들 connections 배열에 추가
    connections.push(connection);

    // 현재 연결된 모든 클라이언트에게 새 사용자가 연결되었음을 알림
    connections.forEach(c => c.send(`User${connection.socket.remotePort} just connected!!!!!!`) )
});