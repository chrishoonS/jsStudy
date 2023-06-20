let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split(' ');

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute < 45) { //조건 1: minute에서 45분 뺀 값이 0보다 작으면
    hour -= 1; //hour가 빼는 값은 1이다.  
    minute = 60 + minute - 45;
} else { //조건 2: minute에서 45분 뺀 값이 0보다 크면
    minute = minute - 45;
}
//minute에서 45분을 뺀 값이 0보다 작으면 minute에 60을 더한 값에서 45분을 뺀다.
//hour는 1시간 줄어든다.


if (hour < 0) { //조건 3: hour가 0보다 작을 때 (0시 일 때)
    hour = 23;
}
//1시간이 줄어든 hour가 0보다 작으면 hour는 23이 된다. (0에서 1을 뺀 시간이므로)

console.log(hour, minute)

