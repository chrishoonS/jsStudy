//A+B

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().trim().split('\n');

for(var i=0; i<input.length; i++) {
    let numbers = input[i].split(' ');
    console.log(Number(numbers[0]) + Number(numbers[1]));
}