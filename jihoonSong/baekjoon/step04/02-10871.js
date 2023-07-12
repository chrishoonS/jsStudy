// X보다 작은 수

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
let num = input[0].split(' ');
let arr = input[1].split(' ');
let str = '';

for(var i=0; i < +num[0]; i++){
    if(+num[1] > +arr[i])
        str += arr[i] + ' ';
}
console.log(str.trim());

// 예제입력
// 10 5
// 1 10 4 9 2 3 8 5 7 6
