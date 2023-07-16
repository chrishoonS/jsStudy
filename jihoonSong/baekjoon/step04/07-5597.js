// 과제 안 내신 분..?
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

// 입력 
// 3
// 1
// 4
// 5
// 7
// 9
// 6
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30

// 출력
// 2 8

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n').map(x => parseInt(x));
let str = ''
let student = [];

let std1 = 0;
let std2 = 0;

for(let i=0; i < 30; i++){
    student[i] = i+1;

    for(let j=0; j < input.length; j++){
        if(input[j] === student[i]){
            student[i] = 0;
            break;
        }
    }

    if(student[i] != 0){
        str = str + student[i] + '\n';
    }

}
    
console.log(str.trim());