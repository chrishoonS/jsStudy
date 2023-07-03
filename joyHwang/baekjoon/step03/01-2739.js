//구구단

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();


for(var i = 1; i <=9; i++) {
    console.log(+input, '*', i, '=', +input*i)
}




