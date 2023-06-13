const fs = require('fs');

//파일을 꼭 읽고 와서 실행해야 하는 비동기처리방식의 경우

const input = fs.readFileSync('jitosong/backjoon/11382.txt').toString().trim()
.split(" ").map(Number); //readFileSync('<directory>');

console.log(input.reduce((a, b) => a + b));