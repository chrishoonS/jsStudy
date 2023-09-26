// 킹, 퀸, 룩, 비숍, 나이트, 폰
// 체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ').map(v => +v);
let chess = [1, 1, 2, 2, 2, 8];
let result = chess.map((piece, i) => piece - input[i]);
console.log(result.join(' '))