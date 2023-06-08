// 사분면 고르기
const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
const [x, y] = input;

 if (x > 0) {
    console.log(parseInt(y));
   console.log(y > 0 ? 1 : 4);
 } else {
   console.log(y > 0 ? 2 : 3);
 }