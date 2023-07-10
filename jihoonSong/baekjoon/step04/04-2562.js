// 최댓값

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n').map(n => parseInt(n));

let maxValue = input[0];
let maxNo = 0;

for (let i = 0; i < input.length; i++) {
  if (maxValue < input[i]) {
    maxValue = input[i];
    maxNo = i;
  }
}

console.log(maxValue + "\n" + (maxNo+1));

// 예제입력
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61