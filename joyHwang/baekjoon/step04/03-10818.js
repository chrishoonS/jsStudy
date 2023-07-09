//최소, 최대

// 5
// 20 10 35 30 7

// 7 35

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n');

//정수의 개수
//최솟값, 최댓값

const totalNum = parseInt(input[0]); //0번째 인덱스를 정수의 총 개수 변수에 저장, 숫자로 변환 5
const randomNum = input[1].split(' ').map(Number); //1번째 인덱스의 배열을 수열 변수에 저장, 공백으로 구분, 숫자로 변환 [ 20, 10, 35, 30, 7 ]
let min = randomNum[0];
let max = randomNum[0];
let result = '';

for(let i = 0; i < totalNum; i++) { //*230709스터디 --- randomNum.length로 해도됨 
    if (min > randomNum[i]) { //현재 저장된 min값보다 다른 인덱스가 작으면
        min = randomNum[i] // 그 값을 저장
    }
    if (max < randomNum[i]) {//현재 저장된 max값보다 다른 인덱스가 크면
        max = randomNum[i] //그 값을 저장
    }
}
result += `${min} ${max}`;
console.log(result)


/* sort() 메서드 써도 됨 */
