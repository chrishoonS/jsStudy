// 입력
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000

// 출력
// 2
// 46
// 505
// 100
// 2000

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let numberInput = Number(input[0]) //input값을 변수로 받는다.
let result = "" //출력할 변수

for (let i=1; i<=numberInput; i++) { //0번째는 두 수가 아니기 때문에 무시
    let num = input[i].split(' ')
    result +=  Number(num[0]) + Number(num[1]) + '\n'
}
console.log(result)