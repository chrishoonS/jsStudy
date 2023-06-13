// 오븐시계
const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
let [A, B] = input[0].split(' ').map(v => +v);
let C = Number(input[1]);
let hh, mm;

//여기서부터 시작
if(B+C >= 60){
  console.log(A+1, B+C-60);

}else{
  console.log(A, B+C);
}