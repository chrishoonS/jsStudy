const fs = require('fs');

//파일을 꼭 읽고 와서 실행해야 하는 비동기처리방식의 경우
//불멸연도 - 서기연도 = 543
//2541 => 1998

const input = fs.readFileSync('jitosong/backjoon/18108.txt').toString().trim(); //readFileSync('<directory>');

console.log(`${input}`-543);