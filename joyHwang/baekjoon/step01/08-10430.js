let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step01/test.txt').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log((a + b) % c);
console.log( ((a % c) + (b % c)) % c); 
console.log( (a * b) % c);
console.log( ((a % c) * (b % c)) % c);