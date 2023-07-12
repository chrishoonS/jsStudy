// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

// Case #1: 1 + 1 = 2
// Case #2: 2 + 3 = 5
// Case #3: 3 + 4 = 7
// Case #4: 9 + 8 = 17
// Case #5: 5 + 2 = 7


const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let numberInput = Number(input[0]) //input값을 변수로 받는다.
// let result = "" //출력할 변수

for (let i=1; i<=numberInput; i++) { //0번째는 두 수가 아니기 때문에 무시
    let num = input[i].split(' ')
    console.log( `Case #${i}: ${num[0]} + ${num[1]} = ${Number(num[0]) + Number(num[1])}`) 
}
