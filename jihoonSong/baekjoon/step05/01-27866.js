// 문자와 문자열

// const fs = require('fs');
// 신기해서 가져와봄
// const filePath = process.platform === 'linux' ? '/dev/stdin':'./input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

const [S, i] = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
console.log(S.charAt(i-1));