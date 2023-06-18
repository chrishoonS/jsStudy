let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let numbers = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split(' ').map(Number);


const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

let money = 0;
let largerNumber = 0;

if ( a === b && a === c) {
    money = 1000*a + 10000;
} else if ( a === b || a === c || b === c ) {
    if (a === b || a === c) {
        money = 100*a + 1000;
    } else {
        money = 100*b + 1000;
    }
    
} else {
    largerNumber = Math.max(numbers);  //Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환.
    money = largerNumber*100;
}

console.log(money)
