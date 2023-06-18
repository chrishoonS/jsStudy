//입력 시 공백 자르고, 배열의 숫자로 받아온다.
const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split(" ").map(Number);

const hh = input[0];
const mm = input[1];

//알람 시간 45분 미리 설정
//10 10 => 9 25
//0 30 => 23 45
//23 40 => 22 55

if (mm < 45) {
    //hour가 0일 때
    if (hh === 0) {
        // 입력값 참고: 23시, 전체 분-45분
        console.log(hh + 23, 60 - 45 + mm);
    } else {
        // 자정
        console.log(hh - 1, 60 - 45 + mm);
    }
} else { //45분 이상의 경우
    console.log(hh, mm - 45);
}