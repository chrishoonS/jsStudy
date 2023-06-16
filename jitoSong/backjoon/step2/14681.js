//입력 시 공백 자르고, 배열의 숫자로 받아온다.
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split("\n").map(Number);

const x = input[0];
const y = input[1];

if (x > 0 && y > 0) console.log(1)
else if (x < 0 && y > 0) console.log(2)
else if (x < 0 && y < 0) console.log(3)
else if (x > 0 && y < 0) console.log(4)