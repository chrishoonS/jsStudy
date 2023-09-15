//단어의 개수

/* 
The Curious Case of Benjamin Button
*/

/* 
6
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split(' ');
console.log(input[0] ==="" ? 0 : input.length);
//input의 0번째 인덱스가 빈값: ture면 0을 출력, false면 input의 length를 출력

//하지만 해당 문제에는 빈 값만 들어오는 테스트 케이스가 있습니다.
//조건문으로 빈 문자열의 경우에는 0을 반환해주는 예외처리를 해주면 됩니다.

