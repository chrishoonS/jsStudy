// 코딩은 체육과목입니다.

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();
let str = 'int';
for(let i=0; i < parseInt(input)/4; i++){
    str = 'long ' + str;
}
console.log(str);