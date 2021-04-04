//1급 객체
var M = {
    v: 'v', //속성
    f: function() { //함수
        console.log(this.v); //출력
    }
}
//객체 실행, M의 f함수 콜
M.f();