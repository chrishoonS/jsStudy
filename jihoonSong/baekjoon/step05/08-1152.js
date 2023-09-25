// 단어의 개수

// 실패했던 코드
// let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split(' ');
// console.log(input.length)


let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split(' ');

let count = 0;

for(let i=0; i<input.length; i++){
    if(input[i] !== '') count++;
}
console.log(count)
