//main03.js : express 서버
const express = require('express');
const app = express();
//const http = require('http')

app.get('/', (req, res, next) => {
    res.status(201).send('hello world!!'); //메소드 체인링
});

app.get('/send', (req, res, next) => {
    res.status(201).send('<h1>hello world!!</h1>');
});

app.get('/download', (req, res, next) => { //파일 다운로드 가능
    res.download('./test.txt');
});

app.get('/redirect', (req, res, next) => { //강제로 URL 변경
    res.redirect('/send');
});

app.get('/json', (req, res, next) => { //JSON 형식
    res.json({message: 'success', code: 0});
});

// http.createServer(app).listen(3000, () => {
//     console.log('server on: 3000 PORT');
// });

app.listen(3000, function() { //서버 구동
    console.log('Example App listening on port 3000');
});