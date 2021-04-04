//만든 모듈 경로로 불러오기
//불러온 함수는 part에 저장 (require가 모듈을 결합해줌)
//part의 f함수 호출하면 mpart의 f함수 호출
var part = require('./mpart.js');
part.f();