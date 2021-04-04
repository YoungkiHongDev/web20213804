function first() {
    second();
    console.log('첫 번째');
};

function second() {
    third();
    console.log('두 번째');
};

function third() {
    console.log('세 번째');
};

first();

//first 호출 (스택에 first)
//first에서 second 호출 (스택에 first-second)
//second에서 third 호출 (스택에 first-second-third)
//스택에서 팝업 third-second-first
//세 번째-두 번째-첫 번째 순서로 출력