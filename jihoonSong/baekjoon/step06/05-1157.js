// 단어공부
// 가장 많이 나온 알파벳 대문자로 출력
// 가장 많은 알파벳이 2개 이상이면 ? 출력
const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();
// 우선 대문자
const upper = input.toUpperCase();
// 알파벳 갯수만큼 길이의 배열 생성
let countArr = new Array(26).fill(0);

for(let i=0; i < upper.length; i++){
    // 해당 문자에 대한 인덱스 위치에 +1
    countArr[upper.charCodeAt(i)-65]++;
}

// 제일 많이 나온 알파벳 갯수
const maxCnt = Math.max(...countArr);
// 제일 많이 나온 알파벳의 인덱스
const idx = countArr.indexOf(maxCnt);
console.log(maxCnt, idx)

let isValid = true;

for (let j = 0; j < 26; j++) {
    // 
	if ( (countArr[j] == maxCnt) && (idx != j) ) {
		isValid = false;
		break;
	}
}

console.log(isValid ? String.fromCharCode(idx + 65) : "?");