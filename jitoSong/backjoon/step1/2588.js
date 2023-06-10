// const fs = require('fs');

// //파일을 꼭 읽고 와서 실행해야 하는 비동기처리방식의 경우

// const input = fs.readFileSync('jitosong/backjoon/2588.txt').toString().trim().split("\n").substring;

// let first = input.substring()
// let second = 

// console.log();

const input = require('fs').readFileSync('jitosong/backjoon/2588.txt').toString().split('\n');

let a = Number(input[0]); //472
let b = input[1]; //385

let one = a * Number(b.substring(2,3));   //472 x 5
let two = a * Number(b.substring(1,2));   //472 x 8
let three = a * Number(b.substring(0,1)); //472 x 3

console.log(one);
console.log(two);
console.log(three);
console.log((three*100) + (two * 10) + one);