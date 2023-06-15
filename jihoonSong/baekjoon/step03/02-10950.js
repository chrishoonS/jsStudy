// A+B-3

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');

let T = parseInt(input[0]);
for(var i=1; i <= T; i++){
    let [A, B] = input[i].split(' ');
    console.log(Number(A)+Number(B));
}