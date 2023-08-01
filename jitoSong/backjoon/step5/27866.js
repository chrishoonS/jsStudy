// 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S가 주어진다. 단어의 길이는 최대 1000이다.
// 둘째 줄에 정수 i가 주어진다. (1≤i≤∣S∣)

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split('\n');

let word = input[0].toString();
// console.log(word) //첫째 줄에서 받은 입력값 소문자+대문자 단어
let num = Number(input[1]);
// console.log(num) //둘째 줄에서 입력 받은 입력값 정수 3

console.log(word[num-1]) //인덱스는 0부터 시작하기 때문에 3번째 해당하는 값을 출력하려면 실제수-1을 하여 해당 인덱스의 단어 출력