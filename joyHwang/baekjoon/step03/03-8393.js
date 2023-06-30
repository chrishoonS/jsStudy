//n이 주어졌을 때 1~n까지 합

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();
let sum = 0;
for (var i = 1; i <= Number(input); i++) {
    sum += i; //sum = sum + i
} 
console.log(sum);

