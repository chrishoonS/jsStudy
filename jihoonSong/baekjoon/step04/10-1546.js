// 평균

// 입력 
// 3
// 40 80 60
// 4
// 1 100 100 100

const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');
const N = +input[0];
let arr = input[1].split(' ').map(v => +v);
let M = Math.max(...arr);
let result = 0;
for(let i=0; i<N; i++){
    result += arr[i]*100/M;
}
// toFixed 함수를 사용하면 손쉽게 소수점을 만들 수 있다. 여기서 중요한 점은 toFixed 함수는 문자열에 사용하는 것이 아닌 숫자에 사용하여야 한다.
// String.prototype이 아닌 Number.prototype에 있다. 그리고 반환 값은 Number가 아닌 String 타입이다.
// 숫자.toFixed(원하는 소수점 자리)
console.log((result/N).toFixed(6));
