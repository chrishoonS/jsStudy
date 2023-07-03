//A+B 마지막은 0 0 출력 안함

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString().split('\n');

//콘솔에서 맞게 나오지만 백준에서 통과 안된 경우 2
/* for(var i=0; i < input.length; i++){
    let numbers = input[i].split(' ');
    if(numbers[0] !== '0' && numbers[1] !=='0') {
        console.log((Number(numbers[0]) + Number(numbers[1])));
    }
} */

/* let result = '';
for(var i=0; i < input.length; i++){
    let numbers = input[i].split(' ');
    if(numbers[0] !== '0' && numbers[1] !=='0') {
        result += (Number(numbers[0]) + Number(numbers[1])) + '\n';
    }
}
console.log(result) */


//백준에서 통과된 경우
for(var i=0; i < input.length; i++){
    let result = +input[i][0] + +input[i][1] //배열의 첫번째와 두번째
    if(result == 0) {
        break
    }
    console.log(result);
}

//https://rorobin.tistory.com/46