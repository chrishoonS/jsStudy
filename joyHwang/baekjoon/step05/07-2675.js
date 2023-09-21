//문자열 반복

/* 
2
3 ABC
5 /HTP
*/

/* 
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('\n');

const testCase = input.shift(); //2
//shift() 메서드: 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

for (let i = 0; i < testCase; i++) {//테스트 케이스만큼 반복문을 돌린다.

    let answer = '';
    
    const [num, str] = input[i].split(" "); //[ '3', 'ABC' ] [ '5', '/HTP' ]
    console.log(num, str)
    // console.log(str.length)

    for (let j = 0; j < str.length; j++) {//문자열의 길이만큼 돌릴 것 (얼마나?-밑에 참고)
        console.log(str.length)
        for (let k = 0; k < num; k++) {//num만큼 
            answer += str[j];//str의 (반복되는)index들 
        }
    }
    console.log(answer)
}


// 다른 방법: repeat() 메서드!
// for (let i = 0; i < testCase; i++) {
//     let answer = '';
    
//     const [num2, str] = input[i].split(" ");
    
//     for (let j = 0; j < str.length; j++) {
//         answer += str[j].repeat(num2);
//     }
    
//     console.log(answer);
// }
