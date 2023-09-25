//숫자1 2초, 다음 숫자는 1초씩 늘어남
//숫자에 해당하는 문자로 전화 걸기
//단어 -> 최소 시간
// 번호순: 0012345678 9 0 (2~9)
// 인덱스: 0123456789 10 11 (3~10)

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split(" ");

const dialList = {
    3: "ABC",
    4: "DEF",
    5: "GHI",
    6: "JKL",
    7: "MNO",
    8: "PQRS",
    9: "TUV",
    10: "WXYZ",
}

let result = 0;

for (let i=0; input.length; i++) { //알파벳 문자열 길이만큼 반복
    for (let j=3; j<=10; j++) { //빈칸, 빈칸, 1, 2 순이므로 알파벳이 적힌 2는 인덱스가 3이 된다. 다이얼 반복문 탐색.
        if(dialList[j].includes(input[i])) { //dial 알파벳 문자열에서 입력한 문자열이 포함되어 있는지의 여부를 확인한다. 다이얼 리스트 중 입력값과 일치하는 것만 true로 반환.
            result += j //true로 반환한 값을 받아서 변수에 저장한다.
        }
    }
}
console.log(result)