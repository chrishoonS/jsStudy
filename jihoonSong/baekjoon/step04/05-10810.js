// 공넣기
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

// 입력 
// 5 4
// 1 2 3 1~2 3번공
// 3 4 4
// 1 4 1 
// 2 2 2 2~2 2번공

// 출력
// 1 2 1 1 0

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
const [n, m] = input[0].trim().split(' ').map(x => parseInt(x));
const ball = [];

for (let i=0; i < n; i++) {
    ball.push(0);
}

for (let i=0; i < m; i++) {
    const [st, ed, num] = input[i+1].trim().split(' ').map(x => parseInt(x));
    for (let j = st - 1; j < ed; j++) {
        ball[j] = num;
    }
}

console.log(ball.join(' '));