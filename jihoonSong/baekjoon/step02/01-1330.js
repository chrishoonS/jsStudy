let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
if(a > b)
    console.log('>')
else if(a < b)
    console.log('<')
else
    console.log('==')
