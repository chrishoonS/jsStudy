// 개수세기

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
let arr = input[1].split(' ');

var cnt = 0;
for(var i=0; i < +input[0]; i++){
    if(input[2] == +arr[i]) cnt++;
}

console.log(cnt);

// 예제입력
// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 2

// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 2




