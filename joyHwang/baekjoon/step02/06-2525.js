let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('joyHwang/baekjoon/step02/test.txt').toString().split('\n');

let curHour = parseInt(input[0].split(' ')[0]);
let curMinute = parseInt(input[0].split(' ')[1]);
let runningTime = parseInt(input[1]);

/* let endHour =  */

if (curMinute + runningTime > 60) {
    endHour += 1;
    endMinute = curMinute - 60;
} else {
    endMinute = curMinute + runningTime;
}

if (curHour > 24) {
    endHour = 1;
}


console.log(endHour, endMinute)

