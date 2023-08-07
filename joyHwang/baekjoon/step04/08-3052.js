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

//방법1
/* let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n').map(Number) //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

let restArr = input.map(input => input % 42); //map함수를 사용해 42를 나눈 나머지들을 새로운 배열에 저장
const set = new Set(restArr);//배열에 고유한 값만 담는 표준내장객체인 set객체를 이용해서 중복되는 값들 제거
restArr = [...set];
console.log(restArr.length);//그 길이를 출력 */


//방법2 
/* let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().trim().split('\n').map(Number) //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

let restArr = [];
for(let i = 0; i < input.length; i++) { //input의 길이만큼 반복문을 돌린다.
    const restNum = input[i] % 42; //restNum 변수 안에 input 입력 값에서 42를 나눈 값을 저장한다.
    if(restArr.indexOf(restNum) === -1) { //indexOf 함수로 restArr 배열 안에 restNum을 찾아 없다면(-1이라면), restArr 배열에 넣는다.
        restArr.push(restNum);
    }
}
console.log(restArr.length) //길이를 출력한다 */


/* 
trim() 을 써야 정답!

for문에서 input의 length만큼 돌아야 하는데, 
input에 공백이나 엔터가 들어 갈 경우에 input의 length가 
달라질 수 있기 때문에 배열의 길이를 이용할 때는 
반드시 trim을 사용해야 함

trim() 문자열 좌우에서 공백을 제거하는 함수
 */



//방법3 (응용)
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().trim().split('\n').map(Number) 

let restArr = [];
for(let i = 0; i < input.length; i++) { 
    const restNum = input[i] % 42;
    restArr.push(restNum);
    const set = new Set(restArr);
    //console.log(set)  Set(0) {}
    restArr = [...set];
    // console.log(restArr) []
}
console.log(restArr.length)