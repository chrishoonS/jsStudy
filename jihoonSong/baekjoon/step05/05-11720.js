// 숫자의 합

// const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
// const N = +input[0];
// const arr = input[1].split('').map(v => parseInt(v));
// let result = 0;

// for(let i=0; i<arr.length; i++){
//     result += arr[i];
// }
// console.log(result);

let lines = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
console.log(lines[1].split('').reduce(function(acc, a) { return acc + (+a); }, 0));