// 영수증

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
let sum = Number(input[0]); // 총합
let N = Number(input[1]); // 물건 갯수

for(let i=0; i < N; i++){
    let [price, cnt] = input[i+2].split(' ');
    sum = sum - (Number(price) * Number(cnt));
}
if(sum == 0) console.log('Yes');
else console.log('No');
