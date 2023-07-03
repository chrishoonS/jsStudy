// 별 찍기
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();

let number = Number(input);
let result = '';

for(let i = 1; i <= number; i++) { //줄이 반복
    for(let j = 1; j <= i; j++) { //별이 누적 
        result += '*';     
    }  
    result += '\n';  
}
console.log(result);
