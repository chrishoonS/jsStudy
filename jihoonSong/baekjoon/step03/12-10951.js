// A+B - 4

// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().trim().split('\n');

console.log(input.length);

for(var i=0; i < input.length; i++){
    let num = input[i].toString().split(' ');

    console.log( (Number(num[0]) + Number(num[1])) );
    
}