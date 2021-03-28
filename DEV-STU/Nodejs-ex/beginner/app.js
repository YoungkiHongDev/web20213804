//app.js
const http = require('http'); //require로 모듈을 불러와서 http 객체 만들기

const hostname = '127.0.0.1';
const port = 3000; //포트번호가 충돌할 때 이부분을 변경하면 된다.

const server = http.createServer((req, res) => { //웹브라우저에 보여지는 부분 express에서는 메소드가 다르다.
  res.statusCode = 200; //상태코드
  res.setHeader('Content-Type', 'text/plain'); //헤더정보
  res.end('Hello World'); //화면의 바디에 나오는 부분
});

server.listen(port, hostname, () => { //서버구동부분
  console.log(`Server running at http://${hostname}:${port}/`);
});

//server.listen(port, hostname, function() { //펑션대신 화살표로 만들어졌다.
//    console.log(`Server running at http://${hostname}:${port}/`); // `백쿼트키를 써야 $부분이 들어가고 인용부호를 쓰면 문자열이 됨
//  });