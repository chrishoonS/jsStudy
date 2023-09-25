// 문제
// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 "제출 안 한 학생 2명의 출석번호를 구하는 프로그램"을 작성하시오.

// 입력
// 입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

// 출력
// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n').map(Number)
// console.log(input)

let arr = ""

for (i=0; i<30; i++) { //0~29
    if (input.indexOf(i+1) == -1) { //(1~30)의 문자열이 어느 index에 위치하는지를 찾게 되고 -1인 경우 배열에 저장, -1인 것은 없는 것을 의미, 그렇다면 입력받은 값 중에 없는 값들이 남을 것이다.
        arr += i + 1 + "\n"
    }
}

console.log(arr)

// let arr = []; //배열 선언
// for (let i=1; i<=30; i++) { //30명중 제출 안한 2명을 구분해내야 함.
//     if (!input.includes(i)) arr.push(i); //요소가 배열 안에 존재하지 않을때에 배열에 push. includes()는 배열 요소 값을 true로 반환해주는데 지금은 false인 값 2개만을 반환하도록 했다.
//     if (arr.length === 2) break; //반복문 실컷 돌고 false인 경우 2개로 배열이 채워졌을 때 반복문을 빠져나간다. 
// }
// console.log("#1: "+arr)
// console.log("#3: "+arr) //제출 안 한 학생 2명, false 2개의 값을 얻는다.
// arr.sort((a, b) => a - b);
// console.log(arr.join('\n')); //배열의 모든 요소를 연결해 하나의 문자열로 만드는 join() 함수는 매개변수로 배열의 각 요소를 구분할 문자열을 받는다.