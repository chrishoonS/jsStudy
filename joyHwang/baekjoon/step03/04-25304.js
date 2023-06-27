let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n') ;

let total = parseInt(input[0]); //총 금액
let kind = parseInt(input[1]); //물건 종류
//let sum = 0;

/* for(let i=2; i<kind+1; i++) {
    let newArr = input[i].split(' ').map(item=>Number(item));
    sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');
 */

for(let i=0; i<kind; i++) {
    let [price, num] = input[i+2].split(' '); //왜 2를 더하는 지..
    total = total - (Number(price) * Number(num));
}
console.log(total == 0 ? 'Yes' : 'No')