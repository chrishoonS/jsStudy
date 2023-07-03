//Case #1: A + B = 합

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');

const T = Number(input[0]);

for(var i=1; i <= T; i++){
    let numbers = input[i].split(' ');
    console.log( "Case #" + String(i)+ ': ' + numbers[0] + ' + ' + numbers[1] + ' = '+ (Number(numbers[0]) + Number(numbers[1])));
}

