// 첫째줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
// 5
// 20 10 35 30 7

// 7 35

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let jeongsu = Number(input[0])
let nums = input[1].split(' ').map(Number) //[ 20, 10, 35, 30, 7]
let max = nums[0]
let min = nums[0]

for (let i=0; i<jeongsu; i++) { //정수N만큼 num의 배열 요소들을 모두 비교한다.
    if (min < nums[i]) { //첫 번째 요소가 다른 배열 요소보다 작으면, 둘 셋 넷 다섯까지 반복문으로 비교
        min = nums[i] //첫 번째 요소 대신 해당 배열 요소대입
    }

    if (max > nums[i]) { //첫 번째 요소가 다른 배열 요소보다 크면, 둘 셋 넷 다섯까지 반복문으로 비교
        max = nums[i] //첫 번째 요소 대신 해당 배열 요소대입
    }

}//end for

console.log(min + ' ' + max)