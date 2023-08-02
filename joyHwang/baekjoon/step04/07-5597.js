//과제 안 내신 분..?

/* 
3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30 
*/

/*
2
8
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n').map(Number); 
//['3', '1', '4', '5', '7', '9', '6', '10','11', '12', '13', '14','15', '16', '17', '18','19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']


let answerArr = ""; //정답을 담을 배열은 빈 값으로

for(let i = 0; i < 30; i++) {//출석번호 30개를 반복문으로 돌린다. 0~29
    if(input.indexOf(i + 1) < 0) { //각 출석번호 + 1이 0보다 작을 때를 찾는다. 즉, 예제에 없는 수를 찾는다. 없으면 -1이라 0보다 작기 때문
        answerArr += i + 1 + "\n"; //scope를 0부터 시작했으니 i 값에 +1을 해야 출석번호가 나올 것
    }
}
console.log(answerArr) //i= 1, 7

/* 
0 1
1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
.
.
*/



//indexOf() 내장함수
//문자열에서 원하는 문자열을 검색하여 찾거나, 배열에서 원하는 특정 배열값의 존재여부 등을 확인할 때 사용. 배열의 경우 위치값을 index로 반환하는 함수.
//특정 요소를 찾으면 그 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
//https://webisfree.com/2015-06-22/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-%EB%B0%B0%EC%97%B4-%EB%98%90%EB%8A%94-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%97%90-indexof()-%EC%82%AC%EC%9A%A9%ED%95%9C-%ED%8A%B9%EC%A0%95-%EB%AC%B8%EC%9E%90-%EA%B2%80%EC%83%89