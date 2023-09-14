//숫자의 합

/* 
5
54321
*/

/* 
15
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('\n');

let n = input[0];
let numbers = input[1].split('');
// console.log(numbers)
let sum = 0;
for (let i = 0; i < n; i++ ) {
    sum += Number(numbers[i]);
    // console.log(sum)
}
console.log(sum)

