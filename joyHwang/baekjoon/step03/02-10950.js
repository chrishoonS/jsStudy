let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');

const T = Number(input[0]);

for(var i = 1; i <= T; i++) { //1부터 5까지 반복..?
    let numbers = input[i].split(' '); //input[i]가 정확히 뭐지..? 뭘 반복한다는 건 지 모르겠다..
    console.log(Number(numbers[0]) + Number(numbers[1])); 
}




