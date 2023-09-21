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
// console.log(numbers) [ '5', '4', '3', '2', '1' ]
let sum = 0;
for (let i = 0; i < n; i++ ) {
    sum += Number(numbers[i]);
    // console.log(sum) 5 9 12 14 15
}
console.log(sum)

