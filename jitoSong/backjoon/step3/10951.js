// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

// 2
// 5
// 7
// 17
// 7

//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split('\n') //개행으로 입력 받음

for (let i=0; i<input.length; i++) {
    let num = input[i].split(' ')
    console.log(Number(num[0]) + Number(num[1]))
}//end