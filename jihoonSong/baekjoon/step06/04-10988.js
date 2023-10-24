// 팰린드롬
const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();
let result = 1;
for(let i=0; i<input.length; i++){
    input[i] = input[input.length-i-1]

    result = ( input[i] == input[input.length-i-1] ) ? 1 : 0;
}

console.log(result);