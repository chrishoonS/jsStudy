//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n') //개행으로 입력 받음

for (let i=1; i<=input[0]; i++) {
    let num = input[i].split(' '); // 2 3 => 공백 잘라서 입력값 받기
    console.log(Number(num[0]) + Number(num[1])) //string을 숫자로 변환하여 더해주어야 함
}