// 합

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();
let sum = 0;
for(var i=1; i <= parseInt(input); i++){
    sum += i;
}
console.log(sum);
// console.log(input*(input+1)/2) : 등차수열의 합 공식;
