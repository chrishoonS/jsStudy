let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('joyHwang/baekjoon/1-first/test.txt').toString().trim().split(' ').map(Number);

const answer = input.reduce((a, b) => a + b); //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

console.log(answer)

//toString() 은 문자열을 반환
//trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환 
//split()은 구분자를 이용하여 여러 개의 문자열을 나눠서 반환

//예시:
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox" 공백별 구분

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k" 문자별 구분

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."] 구분자 없음
