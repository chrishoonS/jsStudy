//빠른 A+B

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');

const T = Number(input[0]);

/* for(var i = 1; i <= T; i++) { //1부터 5까지 반복
    let numbers = input[i].split(' ');
    console.log(Number(numbers[0]) + Number(numbers[1])); 
} */

let result = '';
for(var i=1; i <= T; i++){
    let numbers = input[i].split(' ');
    result += (Number(numbers[0]) + Number(numbers[1])) + '\n';
}
console.log(result);