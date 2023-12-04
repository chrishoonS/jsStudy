// 크로아티아 알파벳
let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();

//정규식 replace를 이용해서 1로 바꾸기
input = input.replace(/\n/g, '')
  .replace(/dz=/g, '1')
  .replace(/c=/g, '1')
  .replace(/c-/g, '1')
  .replace(/d-/g, '1')
  .replace(/lj/g, '1')
  .replace(/nj/g, '1')
  .replace(/s=/g, '1')
  .replace(/z=/g, '1');

// console.log(input);
console.log(input.length);