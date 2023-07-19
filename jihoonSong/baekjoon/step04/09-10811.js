// 바구니 뒤집기

// 입력 
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2

// 출력
// 3 4 1 2 5

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
let result = '';
let [N, M] = input[0].split(' ').map(v => +v);
let basket = [];

// 초기 basket 셋팅
for ( let i = 0; i < N; i++ ) {
    basket.push(i+1);
};
console.log("초기값", basket);

for ( let i = 1; i <= M; i++ ) {
    let [x, y] = input[i].split(' ').map(v => +v);
    let reArr = [];
    for ( let j = x-1; j < y; j++ ) {
        reArr.push(basket[j]);
    };
    console.log("reArr", reArr)

    reArr.reverse();
    console.log("reverse reArr", reArr)
    basket.splice(x-1, y-x+1, ...reArr);
    console.log(i+"번째바뀐 basket", basket, '\n');
}

console.log(basket.join(' '));