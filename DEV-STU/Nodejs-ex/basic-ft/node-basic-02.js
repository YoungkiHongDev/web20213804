function run() {
    console.log('3초 후 실행');  
};

console.log('시작');
setTimeout(run, 3000);
console.log('끝');

//비동기 방식
//시작 출력
//setTimeout 매개변수 run 함수 3초 후 호출 (콜백함수)
//끝 출력
//3초 후 실행 출력