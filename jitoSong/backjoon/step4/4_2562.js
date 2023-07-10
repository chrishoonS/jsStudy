// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61

// 85
// 8

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let numsInput = input.map(Number)
let max = input[0]
let cnt = 0

for (let i=0; i<numsInput.length; i++) { //012345678
    if (max < numsInput[i]) { //3 < input[7] = 85, 가장 큰 숫자가 비교하는 요소의 값보다 항상 크다.
        max = numsInput[i] //max = 85
        cnt = i+1 //cnt = 7
    }
}
  
console.log(`${max}` + '\n' + `${cnt}`)