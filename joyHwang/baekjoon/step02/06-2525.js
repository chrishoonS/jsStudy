let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split('\n');
//console.log(typeof input)

let curHour = parseInt(input[0].split(' ')[0]);
let curMinute = parseInt(input[0].split(' ')[1]);
let runningTime = parseInt(input[1]);

endHour = Math.floor((curHour*60 + curMinute + runningTime) / 60);  //나머지를 버림
endMinute = (curHour*60 + curMinute + runningTime) % 60; //%는 나누기 후 나머지 값
if(endHour >= 24) {
    endHour -= 24;
}


console.log(endHour, endMinute)

//분 단위로 계산하기 위해 endHour에 60을 곱함.
//endHour와 endMinute을 모두 60으로 나눔.

