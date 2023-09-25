//킹, 퀸, 룩, 비숍, 나이트, 폰

/* 
0 1 2 2 2 7
*/

/* 
1 0 0 0 0 1
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = fs.readFileSync('joyHwang/baekjoon/step06/test.txt').toString().trim().split(' ').map(Number); 
const correctPiece = [1, 1, 2, 2, 2, 8];
const result = [];

//반복문을 돌려 맞는 개수에서 현재 있는 개수를 빼기
for (let i = 0; i < correctPiece.length; i++) {
    result.push(correctPiece[i] - input[i]);
}
console.log(result.join(' '));


//result = correctPiece.map((ele, i) => ele - input[i]);