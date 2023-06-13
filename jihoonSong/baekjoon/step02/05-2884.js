// 알람시계
const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [H, M] = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ').map(num => +num);

if (M >= 45) { //45분 이상일때는 그냥 45분 빼고 출력
  console.log(H, M-45);
} else {
  if (H > 0) {
    console.log(H-1, 60+M-45);
  } else {
    console.log(23, 60+M-45);
  }
}