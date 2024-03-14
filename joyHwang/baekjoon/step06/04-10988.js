//팰린드롬인지 확인하기
/* 
level
*/

/* 
1
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(''); 
let input = fs.readFileSync('joyHwang/baekjoon/step06/test.txt').toString().split(''); 

//반복문! 으로 다시!
const first = input[0];
const last = input.reverse()[0];
first === last ? console.log(1) : console.log(0)
