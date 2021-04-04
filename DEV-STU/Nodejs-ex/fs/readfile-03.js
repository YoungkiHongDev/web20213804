//비동기 방식 예제2

const fs = require('fs'); //외부 모듈 저장

const file = fs.readFile('readme.txt', {
    encoding: 'utf8'
}, (err, file) => console.log(file) )