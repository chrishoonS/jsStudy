// 다이얼
let dial = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim();
let result = 0;
for(let i=0; i < dial.length; i++){
    switch (dial[i]) {
        case 'A':
        case 'B':
        case 'C':
            result += 3;
          break;
        case 'D':
        case 'E':
        case 'F':
            result += 4;
          break;
        case 'G':
        case 'H':
        case 'I':
            result += 5;
          break;
        case 'J':
        case 'K':
        case 'L':
            result += 6;
          break;
        case 'M':
        case 'N':
        case 'O':
            result += 7;
          break;
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
            result += 8;
          break;
        case 'T':
        case 'U':
        case 'V':
            result += 9;
          break;
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            result += 10;
          break;
      }
}
console.log(result);


// 다른 풀이
// var fs = require('fs');
// var characters = fs.readFileSync('/dev/stdin').toString().trim().split('');

// var characterMap = [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9];
// var offsetCharCode = 'A'.charCodeAt(0);

// console.log(characters.reduce(function(previousValue, currentChar) {
// 	var mappedNum = characterMap[currentChar.charCodeAt(0) - offsetCharCode];
// 	return previousValue + mappedNum;
// }, characters.length));