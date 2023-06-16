// 빠른 A+B

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
let str = '';
for(var i=0; i < parseInt(input[0]); i++){
    let [a, b] = input[i+1].split(' ');
    str = str + (Number(a) + Number(b)) + '\n';
}
console.log(str);