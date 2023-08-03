//문자열

/* 
3
ACDKJFOWIEGHE
O
AB
*/

/* 
AE
OO
AB
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('\n'); 
//console.log(input) [ '3', 'ACDKJFOWIEGHE', 'O', 'AB' ]

const num = parseInt(input[0]); //3

for(let i = 1; i <= num; i++) { //1번째 인덱스부터 3번 반복
    let first = input[i];
    let last = input[input.lengh];
}