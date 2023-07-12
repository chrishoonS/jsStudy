// 10 5 //정수N과 정수X, 둘째줄 수열에서 X보다 작은 수를 모두 출력하기 / 5보다 작은 수를 입력받은 순대로 공백으로 구분해 출력한다.
// 1 10 4 9 2 3 8 5 7 6

// 1 4 2 3

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

    
    let jeongsu = input[0].split(' ').map(Number) //[ 10, 5 ]
    let suyeol = input[1].split(' ').map(Number) //[1, 10, 4, 9, 2, 3, 8, 5, 7, 6]
    let result = '' //반복문, 조건문의 값을 담을 변수

    // console.log(jeongsu)
    // console.log(suyeol)

    for (let i=0; i<jeongsu[0]; i++) { //jeongsu[0]:10 / jeongsu[1]:5 로 배열 요소 접근
        if (suyeol[i] < jeongsu[1]) { //수열에서 X보다 작은 수를 출력
            result += suyeol[i] + ' ' //조건식에 해당하는 수열의 배열 요소만 result 변수에 담아서 출력 + 공백
        }
    }
    console.log(result);

