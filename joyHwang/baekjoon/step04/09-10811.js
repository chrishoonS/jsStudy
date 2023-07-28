//바구니 뒤집기

/* 
5 4
1 2
3 4
1 4
2 2
*/

/*
3 4 1 2 5
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n');

const [n, m] = input[0].split(" ").map(Number) //[5, 4]
//console.log([n, m])

