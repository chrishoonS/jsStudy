// 빠른 A+B
// 로컬에서 정상적으로 작동해도 문제풀이시 메모리 부족할 수 있어서 콘솔 한번만 출력

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