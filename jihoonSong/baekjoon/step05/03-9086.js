// 문자열

const str = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
let result = '';

for(let i=0; i<+str[0]; i++){
    result += str[i+1].charAt(0) + str[i+1].charAt(str[i+1].length-1) + '\n';
}
console.log(result.trim())


// console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) {
//     return (i !== 0); }).map(function(e) {
//         var s = e.split('');
//         return s[0] + s[s.length - 1];
//     }).join('\n'));
  