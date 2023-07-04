//코딩은 체육과목 입니다
//4는 long 1개, 8은 long 2개

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();

let string = 'int';

for(let i=0; i < parseInt(input)/4; i++) { //4의 배수만큼 반복
    string = 'long ' + string; //==! string += (String +)'long'
}
console.log(string);