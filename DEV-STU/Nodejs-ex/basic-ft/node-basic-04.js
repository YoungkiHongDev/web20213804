//논블록킹 예제

function longRunningTask() {
    //오래 걸리는 작업
    console.log('작업 끝');
}

console.log('시작');
setTimeout(longRunningTask, 0); //setTimeout(콜백함수, 0)
console.log('다음 작업');

//시작 -> 다음 작업 -> 작업 끝