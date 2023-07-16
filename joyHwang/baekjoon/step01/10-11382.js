let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('joyHwang/baekjoon/step01/test.txt').toString().trim().split(' ').map(Number);

const answer = input.reduce((a, b) => a + b); //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

console.log(answer)

//reduce(sum, ele) => expression
//누산값(누적되는 값): 리턴한 값을 저장하는 변수
//현재요소: 1) 77, 2) 77 , 3) 7777

//Number 객체에서 숫자를 입력받고, 누산값에 저장한 뒤, 표현식대로 출력

// 첫 번째 현재요소인 77을 누산값 sum에 저장, 두 번째 현재요소인 77을 누산값 sum에 저장
// 세 번째 현재요소인 7777을 누산값 sum에 저장
// 누산값 변수인 sum에 저장된 77, 77, 7777을 표현식대로 덧셈하여 출력
//console.log(input.reduce((sum, ele) => sum + ele));






//toString() 은 문자열을 반환
//trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환 
//split()은 구분자를 이용하여 여러 개의 문자열을 나눠서 반환

//예시:
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox" 단어별 구분

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k" 문자별 구분

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."] 구분자 없음
