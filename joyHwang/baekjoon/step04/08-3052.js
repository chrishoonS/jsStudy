//나머지

/* 
1
2
3
4
5
6
7
8
9
10
*/

/*
10
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n').map(Number) //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

//방법1
/* let restArr = input.map(input => input % 42); //map함수를 사용해 42를 나눈 나머지들을 새로운 배열에 저장

const set = new Set(restArr);//배열의 중복된 값을 제거하는 표준내장객체인 set객체를 이용해서 서로 다른 값들만 배열로 저장
restArr = [...set];
console.log(restArr.length);//그 길이를 출력 */

//방법2  오답임 ㅠㅠ
let restArr = [];
for(let i = 0; i < input.length; i++) { //input의 길이만큼 반복문을 돌린다.
    console.log(i)
    const restNum = input[i] % 42; //restNum 변수 안에 input 입력 값에서 42를 나눈 값을 저장한다.
    console.log(restNum)
    if(restArr.indexOf(restNum) === -1) { //indexOf 함수로 restArr 배열 안에 restNum을 찾아 없다면(-1이라면), restArr 배열에 넣는다.
        restArr.push(restNum);
        console.log(restArr)
    }
}
console.log(restArr.length) //길이를 출력한다


