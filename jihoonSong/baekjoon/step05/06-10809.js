// 알파벳 찾기

let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim();
let arr = new Array(26);

for(let i = 0; i < arr.length; i++) {
    arr[i] = -1;
}

for(let i = 0; i < input.length; i++) {
    //charCodeAt : 해당 문자의 ASCII code 값을 가져온다.
    let ch = input.charCodeAt(i); 
    console.log(ch);
    // 97(ascii code) = 'a'
    // 해당하는 문자의 배열의 요소 값이 -1이면 문자열의 i번째로 값 대치
    if(arr[ch-97] == -1){ 
        arr[ch-97] = i
    }
}

console.log(arr.join(' '));