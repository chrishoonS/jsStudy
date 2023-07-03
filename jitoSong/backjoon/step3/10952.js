// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0

// 2
// 5
// 7
// 17
// 7

//줄바꿈 단위로 나누어 input 받기
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

for (let i=0; i<=input.length; i++) {
    let num1 = +input[i].split(' ')[0]
    let num2 = +input[i].split(' ')[1]
    let sum = num1 + num2

    if (sum === 0) { //합한 값이 0일 때 조건문 탈출
        break;
    } else { //합한 값 출력
        console.log(sum)
    }

}//end
