// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
// 입력: 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim();

let str = input.toString()
str.charCodeAt(0) //주어진 인덱스에 해당하는 유니코드 값을 리턴한다.
console.log(str.charCodeAt(0))