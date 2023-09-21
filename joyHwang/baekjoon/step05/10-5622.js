//다이얼

/* 
WA
*/

/* 
13
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split("");
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split("");

let phone = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
}; //다이얼 번호: 알파벳 문자열로 객체 만들어 두기

let count = 0;

for(let i = 0; i < input.length; i++) { //[ 'W', 'A' ]
    for(let j = 2; j <= 9; j++) {
        if(phone[j].includes(input[i])) {//phone의 index 값의 input의 index 값이 있다면
            count += j + 1;  // +1씩 누적 (다이얼을 돌리는데 한 칸 당 1초씩 걸리니까)
        } 
    }
}

console.log(count)


//switch() case 