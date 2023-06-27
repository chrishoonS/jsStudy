let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();

let string = 'int';

for(let i=0; i < parseInt(input)/4; i++) { //4의 배수만큼 반복..?
    string = 'long ' + string; //어떻게 long이 반복되는거지!?
}
console.log(string);