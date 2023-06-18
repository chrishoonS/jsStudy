// 오븐시계
const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
let [A, B] = input[0].split(' ').map(v => +v);
let C = Number(input[1]);

//분 단위로 먼저 합쳐서 계산
let result = A*60 + B + C;
A = Math.floor(result/60);
B = result%60;

if(A > 23) A -= 24;

console.log(A, B);
