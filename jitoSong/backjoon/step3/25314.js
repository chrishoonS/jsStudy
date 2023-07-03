//입력: 4
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString()

//출력: long int
let output = "";

for (let i=0; i<input/4; i++) { //4입력시 1번 출력, 20입력시 01234 5번 출력 => 4의 배수
    output = output + "long "
}
console.log(output + "int") 