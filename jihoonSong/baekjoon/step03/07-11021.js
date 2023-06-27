// A+B-7

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');

for(var i=0; i < parseInt(input[0]); i++){
    let num = input[i+1].split(' ');
    console.log( "Case #" +String(i+1)+ ': ' + (Number(num[0]) + Number(num[1])) );
}