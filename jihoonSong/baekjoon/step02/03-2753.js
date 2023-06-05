let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
let year = parseInt(input[0]);

if(year%4 === 0 && (year%100 !== 0 || year%400 === 0)) console.log(1);
else console.log(0);