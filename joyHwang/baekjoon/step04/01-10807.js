//개수 세기


// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 2

//3

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n');


//정수의 개수
//정수 공백으로 구분
//찾으려는 정수
const totalNum = parseInt(input[0]); //숫자로 변환
const randomNum = input[1].split(' ').map(Number); //1번째 인덱스를 공백 기준으로 구분, 숫자로 변환 ['1 4 1 2 4 2 4 2 3 4 4']
const findNum = parseInt(input[2]) //숫자로 변환
let result = 0;
//console.log(typeof randomNum)

for(let i = 0; i < totalNum; i++) { //totalNum 인 11만큼 반복
    if(randomNum[i] == findNum) { // findNum와 같다면 증감
        result++
    }
}

console.log(result)

//console.log(typeof randomNum[0])


