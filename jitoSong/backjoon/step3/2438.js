const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split(' ')

let num = Number(input)

result = ''

for (let i = 0; i < num; i++) { //입력 수 01234: 5
  for (let j = 0; j <= i; j++) { //i만큼의 01234 반복
    result += '*'//출력
  }
  result += '\n'//개행
}

console.log(result)