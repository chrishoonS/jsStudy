const fs = require('fs');

//파일을 꼭 읽고 와서 실행해야 하는 비동기처리방식의 경우

const input = fs.readFileSync('jitosong/backjoon/11382.txt').toString().trim()
.split(" ").map(Number);

//reduce(sum, ele) => expression
//누산값(누적되는 값): 리턴한 값을 저장하는 변수
//현재요소: 1) 77, 2) 77 , 3) 7777

//Number 객체에서 숫자를 입력받고, 누산값에 저장한 뒤, 표현식대로 출력

// 첫 번째 현재요소인 77을 누산값 a에 저장, 두 번째 현재요소인 77을 누산값 a에 저장
// 세 번째 현재요소인 7777을 누산값 a에 저장
// 누산값 변수인 a에 저장된 77, 77, 7777을 표현식대로 덧셈하여 출력
console.log(input.reduce((sum, ele) => sum + ele));