//상수
/* 
734 893
*/

/* 
437
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split(" ")/* .map(Number) */ //[ '734', '893' ]

let a = Number(input[0].split('').reverse().join(''));
let b = Number(input[1].split('').reverse().join(''));

//let [a, b] = Number(input.split('').reverse().join(''))

// const [a, b] = input.map(v => [...v].reverse().join(''));

console.log(a > b ? a : b);

//reverse(): 배열의 순서를 뒤집는 메서드

