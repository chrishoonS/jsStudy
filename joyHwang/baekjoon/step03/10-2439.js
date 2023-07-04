//별 찍기 공백
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();

let number = Number(input);
let star = '';
let blank = '';

for(let i = 1; i <= number; i++) { // 별 누적
    star += '*';
    for(let j = 0; j < number - i; j++) { //공백 -i개씩 반복
         blank += ' ';
    }
    console.log(blank + star);
    blank = '';
}


//https://velog.io/@ho2yahh/%EB%B0%B1%EC%A4%80-2439.-%EB%B3%84-%EC%B0%8D%EA%B8%B0-2feat.-Javascript-node.js-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98


/* 
    * 5 1 (number)5 - (i)1 = 공백 4개
   ** 4 2 (number)5 - (i)2 = 공백 3개
  *** 3 3 (number)5 - (i)3 = 공백 2개
 **** 2 4 (number)5 - (i)4 = 공백 1개
***** 1 5 (number)5 - (i)5 = 공백 0개
*/