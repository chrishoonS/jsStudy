//X보다 작은 수

// 10 5
// 1 10 4 9 2 3 8 5 7 6

//1 4 2 3

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n');


//정수의 개수
//정수 공백으로 구분
//비교하려는 정수
const fisrtLine = input[0].split(' ').map(Number); //0번째 인덱스를 공백으로 구분, 숫자로 변환 [10, 5]
const randomNum = input[1].split(' ').map(Number); //1번째 인덱스를 공백으로 구분, 숫자로 변환 [1, 10, 4, 9, 2, 3,  8, 5, 7, 6]
const totlaNum = fisrtLine[0];//첫번째 줄에 있는 두 수 중 0번째 인덱스를 정수 개수로 변수 선언 10
const compareNum = fisrtLine[1];//첫번째 줄에 있는 두 수 중 1번째 인덱스를 비교할 정수로 변수 선언 5

let result = '';

// console.log(totalNum)
// console.log(compareNum)
// console.log(randomNum)

for (let i = 0; i < totlaNum; i++) {
    if (randomNum[i] < compareNum) {//정수에서 비교되는 숫자보다 작으면
        result += randomNum[i] + ' ' //결과에 해당 요소만 result변수에 담기
    }
}
console.log(result)


