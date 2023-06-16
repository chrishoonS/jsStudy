let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = require('fs').readFileSync('joyHwang/baekjoon/step01/test.txt').toString().split('\n');

let a = input[0].split('');
let b = input[1].split('');

let one = Number(input[0]) * Number(b[2]);   //472 x 5  다른 타입의 값은 Number() 함수를 사용하여 숫자로 바꿀 수 있습니다.
let two = Number(input[0]) * Number(b[1]);   //472 x 8
let three = Number(input[0]) * Number(b[0]); //472 x 3

console.log(one);
console.log(two);
console.log(three);
console.log((three*100) + (two * 10) + one); 

    