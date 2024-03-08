//별 찍기 - 7

/* 
5
*/

/* 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step06/test.txt').toString();
const n = parseInt(input);
let result = [];

//위에 다섯개
for(let i = 1; i <= n; i++) { 
    // console.log(i) //12345
    for(let j = 1; j < n+i; j++) {//5+1, 5+2, 5+3, 5+4, 5+5
        // console.log(j) //12345123456123456712345678123456789
        if(j <= n-i) {//5-1, 5-2, 5-3, 5-4, 5-5
            result += ' ';
        } else {
            result += '*';
        }
    }
    result += '\n';
}
// console.log(result)

//아래 네개
for(let i = n; i > 1; i--) {
    for(j = 1; j < n+i-1; j++) {
        if(j <= n+1-i) {
            result += ' ';
        } else {
            result += '*';
        }
    }
    result += '\n';
}

console.log(result);




//https://luminouswy.tistory.com/entry/%EB%B0%B1%EC%A4%80-2444%EB%B2%88-%EB%B3%84%EC%B0%8D%EA%B8%B0-javascript-nodejs
//https://aiday.tistory.com/114