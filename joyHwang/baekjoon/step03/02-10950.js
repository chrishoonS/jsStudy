//A+B (케이스 개수/ 각 수들의 합)

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');

const T = Number(input[0]);

for(var i = 1; i <= T; i++) { //1부터 5까지 반복
    let numbers = input[i].split(' ');
    console.log(Number(numbers[0]) + Number(numbers[1])); 
}




