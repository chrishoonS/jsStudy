// A+B - 5

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');
for(var i=0; i < input.length; i++){
    let num = input[i].toString().split(' ');

    if(num[0] !== '0' && num[1] !== '0'){
        console.log( (Number(num[0]) + Number(num[1])) );
    }
    
}