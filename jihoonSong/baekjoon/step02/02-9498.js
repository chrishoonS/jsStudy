let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
let score = parseInt(input[0]);

if(score >= 90) console.log('A')
else if(score >= 80 && score < 90) console.log('B')
else if(score >= 70 && score < 80) console.log('C')
else if(score >= 60 && score < 70) console.log('D')
else console.log('F')