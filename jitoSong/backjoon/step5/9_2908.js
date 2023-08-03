// 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split(" ");

// 1) split('')을 사용하여 입력 받은 문자열 배열로 변환 
// 2) reverse()로 배열 순서 뒤집기
// 3) join()으로 다시 합쳐서 문자열로 변환
// 4) 숫자형으로 변환
let num1 = Number(input[0].split('').reverse().join('')); //[734] -> [437]
console.log(num1)
let num2 = Number(input[1].split('').reverse().join('')); //[893] -> [398]
console.log(num2)

console.log(num1 > num2 ? num1 : num2); //첫째줄의 상수의 답을 출력해야하므로 437 > 398일때 437 출력.