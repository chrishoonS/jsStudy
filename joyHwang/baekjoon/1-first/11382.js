let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('joyHwang/baekjoon/1-first/test.txt').toString().trim().split(" ").map(Number);

const answer = input.reduce((a, b) => a + b);

console.log(answer)