// 최댓값

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n').map(n => parseInt(n));

let max = input[0];
let maxIndex = 0;

for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIndex = i;
  }
}

console.log(max + "\n" + (maxIndex + 1));

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