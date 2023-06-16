// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 
// 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split(" ").map(Number)

let dice1 = input[0]
let dice2 = input[1]
let dice3 = input[2]

if (dice1 === dice2 && dice2 == dice3) { //주사위눈이 모두 같을 때
    console.log(10000 + dice1 * 1000) //계산식
} else {
    if (dice1 === dice2) { //주사위눈이 2개만 같을 때 case1
        console.log(1000 + dice1 * 100) //계산식
    } else if (dice1 === dice3) { //주사위눈이 2개만 같을 때 case2
        console.log(1000 + dice1 * 100) //계산식
    } else if (dice2 === dice3) { //주사위눈이 2개만 같을 때 case3
        console.log(1000 + dice2 * 100) //계산식
    } else if (dice1 !== dice2 && dice1 !== dice3 && dice2 !== dice3) { //주사위눈이 모두 다를 때
        console.log(Math.max(dice1, dice2, dice3)* 100)
    }
}