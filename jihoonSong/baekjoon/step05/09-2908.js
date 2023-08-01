// 상수
let [v1, v2] = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split(' ');

v1 = v1.split("").reverse().join("")
v2 = v2.split("").reverse().join("")

v1>v2 ? console.log(v1) : console.log(v2);


//다른풀이
// const [a, b] = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split(' ').map(v => [...v].reverse().join(''));
// console.log(a > b ? a : b);
// or console.log(Math.max(a, b));

// 2차원 배열 이용
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// let num1 = [];
// let num2 = [];

// for (let i = 0; i < 3; i++) {
//   num1[i] = input[0][2 - i];
//   num2[i] = input[1][2 - i];
// }

// console.log(num1.join('') > num2.join('') ? num1.join('') : num2.join(''));