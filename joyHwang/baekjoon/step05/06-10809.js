//알파벳 찾기

/* 
baekjoon
*/

/* 
1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('');
const result = [];
for (i = 97; i <= 122; i++) {//알파벳만큼 반복 a=97, z=122
    result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));

//indexOf: 값이 있다면 그 값의 index를, 없다면 -1을 출력하는 메서드!
//String.fromCharCode: 숫자(i)에서 알파벳 문자를 생성하는 메서드 