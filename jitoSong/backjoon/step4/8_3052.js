// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

// 출력
// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let arr = input.map(Number) //숫자 배열
let newArr = [] //새로운 배열

for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i]%42) //배열의 요소들을 각각 42로 나눈 나머지값
    // console.log(newArr.push(arr[i]%42)) //2 4 6 8 10 12 14 16 18 20
                                           //0 1 2 3  4  5  6  7  8  9
                                           //42 84 252 420 840 126 42 84 420 126
                                           // 0  1  2   3   4   5   6  7  8  9

}

// filter(): 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용하는 편. 배열 안에 중복된 숫자들을 제거.
// 파라미터로 val, idx를 받아서 indexOf()를 통해 가장 첫 번째 요소와 인덱스가 같지 않을 때 제거.
let result = newArr.filter((val, idx) => newArr.indexOf(val) === idx)
console.log(result.length)