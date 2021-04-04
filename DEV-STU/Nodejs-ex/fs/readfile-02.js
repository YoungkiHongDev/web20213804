//비동기 방식 예제1

const fs = require('fs'); //외부 모듈 저장

const callback = (err, file) => {
    console.log(file)
}

const file = fs.readFile('readme.txt', {
    encoding: 'utf8'
}, callback)

console.log(file);