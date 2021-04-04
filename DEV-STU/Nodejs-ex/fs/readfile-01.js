//동기 방식 예제

const fs = require('fs'); //외부 모듈 저장

const file = fs.readFileSync('readme.txt', {
    encoding: 'utf8'
})

console.log(file);