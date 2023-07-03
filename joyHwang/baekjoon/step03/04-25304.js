//구매한 물건들의 총 금액이 맞는 지(가격, 개수)

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');


let total = parseInt(input[0]); //총 금액
let kind = parseInt(input[1]); //물건 종류
//let sum = 0;

/* for(let i=2; i<kind+1; i++) {
    let newArr = input[i].split(' ').map(item=>Number(item)); 배열에 있는 string을 숫자로 바꿔주는 것
    sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');
 */

for(let i=0; i<kind; i++) {
    let [price, num] = input[i+2].split(' '); //2번째 인덱스부터 가져온다
    total = total - (Number(price) * Number(num));
}
console.log(total == 0 ? 'Yes' : 'No')

/* 230703 스터디 */
//split: split을 쓰면 배열이 됨.
//map: 배열에서 쓸 수 있음 (item: 별도의 예약어 없이 변수가 됨. 람다식)