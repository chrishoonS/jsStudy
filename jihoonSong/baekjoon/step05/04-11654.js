// X보다 작은 수

// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim();


// charCodeAt 은 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 method,
//   "문자열".charCodeAt([문자열 자릿수]);

// fromCharCode 는 아스키코드번호를 받아 문자열을 구성해주는 함수(<-> charCodeAt)
// String.fromCharCode([아스키코드값]);
console.log(input.charCodeAt(0));