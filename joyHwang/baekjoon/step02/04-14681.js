let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('/n');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split('\n');

/* let x= parseInt(input[0]);
let y= parseInt(input[1]);

if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0 ) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else if (x > 0 && y < 0) {
    console.log(4);
} */


const [x, y] = input;

if ( x > 0 ) 
    console.log( y > 0 ? 1 : 4); //?다음은 조건이 true일 때  :다음은 조건이 false일 때
else ( x < 0 )
    console.log( y < 0 ? 2 : 3)



// ? : 두가지 조건부 연산자. (피연산자가 세 개이기 때문에 '삼항(ternary)연산자라고도 함.)