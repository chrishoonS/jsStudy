// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
// 입력: 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split('\n');

let firstNum = Number(input[0]); //1

let secondNum = input[1]; //1
// console.log(secondNum)
let sum = 0;

for (let i = 0; i < firstNum; i++) { //num: 숫자의 개수만큼 반복
    sum += Number(secondNum[i]); //sum 변수에 두 번째 숫자를 넣고 더하여 저장
}

console.log(sum);