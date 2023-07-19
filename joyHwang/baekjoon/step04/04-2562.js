//최댓값

/* 3
29
38
12
57
74
40
85
61 */

/* 85
8 */

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step04/test.txt').toString().split('\n').map(Number); //[3, 29, 3, 12, 57, 74, 40, 85, 61]



//자연수의 총 개수
//최댓값
//몇 번째 인지
let maxNum = input[0]; //최댓값을 0번째 인덱스로 변수에 담아두기
let maxIdx = 0;

for(let i = 0; i < input.length; i++) {  
    if(maxNum < input[i]) { //i번째 인덱스 값이 앞에 저장된 최댓값보다 크면
        maxNum = input[i]; //그 값을 최댓값으로 저장
        // maxIdx = i;     
        maxIdx = i + 1;     
    }
    // else {
    //     console.log('if문 타지 않음')
    //     console.log(maxNum)
    //     console.log(maxIdx)
    // }
    
}
console.log(maxNum)
// console.log(maxIdx + 1)
console.log(maxIdx)

