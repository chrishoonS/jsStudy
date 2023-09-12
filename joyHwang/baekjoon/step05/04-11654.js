//아스키 코드

/* 
A
*/

/* 
65
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim();

console.log(input.charCodeAt(0));

//charCodeAt: 자바스크립트에서 문자를 아스키코드로 변환하는 메서드
//"문자열".charCodeAt([문자열 자릿수]);