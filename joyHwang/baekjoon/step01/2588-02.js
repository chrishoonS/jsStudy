let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('joyHwang/baekjoon/step01/test.txt').toString().split('\n');


//substring() - (문자열 자르기)로 푸는 방법
let a = input[0]; //472
let b = input[1]; //385

let one = Number(a) * Number(b.substring(2)); //472 X 5  
let two = Number(a) * Number(b.substring(1,2)); //472 X 8 앞에는 포함, 뒤에는 포함하지 않음
let three = Number(a) * Number(b.substring(0,1)); // 472 X 3

console.log(one);
console.log(two);
console.log(three);
console.log(one + (two * 10) + (three * 100));
