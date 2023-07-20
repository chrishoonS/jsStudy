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
    let tmpArr = [];
    for ( let j = x-1; j < y; j++ ) {
        tmpArr.push(basket[j]);
    };
    // console.log("tmpArr", tmpArr)

    tmpArr.reverse();
    // console.log("reverse tmpArr", tmpArr)

    // splice : 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체
    // splice(시작 인덱스(index), 삭제할 값의 개수, 추가할 값을 가변 인자로 넘길 수 있으며, 삭제된 값을 담고 있는 배열을 반환
    basket.splice(x-1, y-x+1, ...tmpArr);
    // console.log(i+"번째바뀐 basket", basket, '\n');
}

console.log(basket.join(' '));