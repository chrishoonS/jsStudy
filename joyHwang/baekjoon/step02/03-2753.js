let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split(' ');

let year = parseInt(input[0]);

if (year%4 === 0 && year%100 !== 0 || year%400 === 0) { 
    console.log(1)
} else {
    console.log(0)
}


// ||는 or연산자  &&는 and연산자

