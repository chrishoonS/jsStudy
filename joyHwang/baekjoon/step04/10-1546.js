//평균

/* 
3
40 80 60
*/

/*
75.0
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n'); //[ '3', '40 80 60' ]

//과목 개수
//가장 높은 점수 M

const subject = parseInt(input[0]); //3
const score = input[1].split(" "); //[ '40', '80', '60' ]
//console.log(typeof score) 여기서는 object

const maxNum = Math.max(...score); //Math 함수 쓰면 자동으로 숫자형이 되는군!
//console.log(typeof score) 여기서는 number

let sum = 0; //합산 값 0으로 저장

for(let i = 0; i < subject; i++) {
    //console.log(i) 0, 1, 2
    sum += score[i] / maxNum * 100; //score 배열의 인덱스를 돌며 최댓값을 나누고 100을 곱한 것을 sum에 누적
    //console.log(sum)  50 (+100) 150 (+75) 225
}

console.log(sum / subject)