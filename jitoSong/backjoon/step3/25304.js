// 260000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8

// 250000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n') //개행으로 입력 받음
console.log(input)
//split() 사용 시 배열로 만들어짐
let totalPrice = Number(input[0]); //구매한 물건의 총 가격
let itemCount = Number(input[1]); //구매한 물건의 갯수
let sum = 0; //계산 한 금액의 합: 가격 * 갯수

for(let i=2; i<=itemCount+1; ++i){ //0: 가격만 입력, 1: 갯수만 입력, 2: 가격 갯수 => 2부터 반복문을 시작하는 이유
    let newArr = input[i].split(" ").map(item=>Number(item)); //map() 배열 일 때만 사용할 수 있는 메서드
    sum = sum + (newArr[0] * newArr[1]);
}

if (totalPrice === sum) { // 구매한 물건의 총 가격과 계산 한 금액의 합이 일치하여야 함.
    console.log("Yes");
  } else {
    console.log("No");
  }  