//블록킹 예제

//오래 걸리는 작업 처리 함수
function longRunningTask() {
    //오래 걸리는 작업
    console.log('작업 끝');
}

console.log('시작');
longRunningTask(); //시작 후 작업이 끝날 때 까지 기다림
console.log('다음 작업'); //오래 걸리는 작업이 끝나야 다음 작업

//시작 -> 작업 끝 -> 다음 작업