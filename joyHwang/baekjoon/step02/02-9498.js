let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString();

let score = parseInt(input[0]);
//let score = Number(input) 숫자로 파싱하는 또다른 법

if (score >= 90) { //조건이 하나면 중괄호 안써도 됨.
    console.log('A') 
} else if (score >=80 && score <= 89) { //score < 90
    console.log('B')
} else if (score >=70 && score <= 79) { //score <80
    console.log('C')
} else if (score >=60 && score <=69) { //score < 70
    console.log('D')
} else {
    console.log('F')
}





