//main.js : express 서버
var express = require('express'); //express 모듈 불러오기
var app = express(); //app 객체에 express 모듈 저장

app.get('/', (req, res) => {
    res.send('Hello World'); //화면에 Hello World 출력
});

app.listen(3000, () => {
    console.log('Example App listening on port 3000');
});