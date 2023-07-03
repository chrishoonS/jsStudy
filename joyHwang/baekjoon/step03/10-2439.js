//별 찍기 공백
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();

let number = Number(input);
let star = '';
let blank = '';

for(let i = 1; i <= number; i++) { //쥴 반복 + 별 누적
    star += '*';
    for(let j = 0; j < number - i; j++) { //공백 -1개씩 반복
         blank += ' ';
    }
    console.log(blank + star);
    blank = '';
}

//100% 이해 못함 ㅠㅠ

//https://velog.io/@ho2yahh/%EB%B0%B1%EC%A4%80-2439.-%EB%B3%84-%EC%B0%8D%EA%B8%B0-2feat.-Javascript-node.js-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98


/* 
    * (number)5 - (i)1 = 공백 4개
   ** 4 2
  *** 3 3
 **** 2 4
***** 1 5 
*/