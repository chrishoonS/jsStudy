// 주사위 세개
const fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 구조분해할당
// https://leannet.tistory.com/74

const [a, b, c] = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ').map(v => +v);

let input = fs.readFileSync("/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt").toString().trim().split(" ").map(Number);

console.log(input)
//sort test
input.sort((a,b) => b-a);
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
const [e, f, g] = input;
console.log(e,f,g)

if(a==b && b==c){
    console.log(10000 + a*1000);

}else if(a != b && b != c && c != a){
    var maxValue = Math.max(Math.max(a,b), c);
    console.log(maxValue*100);

}else{
    if(a == b){
        console.log(1000 + a*100);
    }else if(b == c){
        console.log(1000 + b*100);
    }else{
        console.log(1000 + c*100);
    }
}