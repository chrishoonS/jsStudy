// 입력1
// 11 //정수의 개수
// 1 4 1 2 4 2 4 2 3 4 4 //공백으로 구분 된 정수
// 2 //찾으려고 하는 정수

// 입력2
// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 5

// 출력
// 3
// 0

//1 <= N <= 100개의 정수중에서 -100 <= v <= 100 정수의 개수를 구한다.
//split()를 사용함으로 string 배열이 된다.
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

// console.log(input) //[ '11', '1 4 1 2 4 2 4 2 3 4 4', '2' ]

    let BefNums = input[1].split(' ') // ['1 4 1 2 4 2 4 2 3 4 4']
    console.log(BefNums)
    let AftNums = BefNums.map(Number) //[1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4] => map()을 사용하여 string 배열을 숫자 배열로 바꾼다.
    let findNum = input[2]

    let cnt = 0;
    
    for (let i=0; i<input[0]; i++) { //정수의 개수 11 범위만큼 반복문이 돈다.
        if (AftNums[i] == Number(findNum)) { //공백으로 구분 된 정수 배열의 요소 중 input[2]와 같은 것이 있다면
            cnt++ //조건식과 같은 것을 카운트
        }
    }
    console.log(cnt) //출력
  

