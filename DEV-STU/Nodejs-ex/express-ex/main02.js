//main02.js : express 서버
var express = require('express'); //express 모듈 불러오기
var app = express(); //app 객체에 express 모듈 저장

app.get('/', (req, res) => {
    res.send('<h1><u>Hello World!</u></h1>'); //화면에 Hello World 출력
});

app.get('/user/:id', (req, res) => {
    res.send('Received a GET request, param:' + req.params.id);
});

app.post('/user', (req,res) => {
    res.json({success: true});
});

app.put('/user', (req, res) => {
    res.status(400).json({message: 'Hey, you. Bad Request!'});
});

app.delete('/user', (req, res) => {
    res.send('Received a DELETE request');
});

app.listen(3000, () => {
    console.log('Example App listening on port 3000');
});