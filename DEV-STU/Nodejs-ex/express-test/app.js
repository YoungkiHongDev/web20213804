//app.js
const express = require('express'); //express 객체 만들기
const app = express(); //app 객체 만들기

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => { //사용자가 요청하면 콜백함수 진행되고 화면에 출력
    res.send('<H1>Hello World!!</H1>');
});

app.get('/sayhello/:name', (req, res) => { //URL에 아이디값 적용
    res.status(200);
    let name = req.params.name; //파라메터 name에 넣기
    res.send(`Hello, ${name}`); //변수 넣었으니 백쿼트 쓰기
});

app.listen(port, () => {
    console.log(`Express is running on http://${hostname}:${port}/`);
});