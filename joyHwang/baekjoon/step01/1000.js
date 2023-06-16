 // 2557
console.log("Hello World!")

// 1000
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step01/test.txt').toString().split(' ');
let a = parseInt(input[0]); //parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
let b = parseInt(input[1]);
console.log(a+b);



