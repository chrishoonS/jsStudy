// 나머지

// 입력 
// 42
// 84
// 252
// 420
// 840
// 126
// 42
// 84
// 420
// 126

// 출력
// 1

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n').map(x => parseInt(x));
var result = []

for (i = 0; i < 10; i++) {
    if (!result.includes(input[i] % 42)) // result 배열에 없으면 추가
        result.push(input[i] % 42)
}

console.log(result.length)