//문자와 문자열

/* 
Sprout
3
*/

/* 
r
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('\n'); 
//[ 'Sprout', '3' ]

const word = input[0].split(''); //[ 'S', 'p', 'r', 'o', 'u', 't' ]
// const word = input[0].toString();
const num = parseInt(input[1]); //3 number

console.log(word[num-1]) // 3번째면 사실 상 2번째 index값이기 때문에 -1


