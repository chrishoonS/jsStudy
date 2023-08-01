// 공 바꾸기
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

// 입력 
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2

// 출력
// 3 1 4 2 5

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
const [n, m] = input[0].trim().split(' ').map(x => parseInt(x));
const basket = [];

for (let i=0; i < n; i++) {
    basket.push(i+1);
}

// console.log(basket)

for (let i=0; i < m; i++) {
    const [I, J] = input[i+1].trim().split(' ').map(x => parseInt(x));
    // console.log(I, J)
    let temp = basket[I-1];
    basket[I-1] = basket[J-1];
    basket[J-1] = temp;
}
// console.log(...basket) //...(스프레드 연산자) : 복잡한 객체 나열을 단순화하거나 객체의 병합, 그리고 함수의 인자 처리를 아주 단순하게 처리
// https://blogpack.tistory.com/1069
console.log(basket.join(' '));