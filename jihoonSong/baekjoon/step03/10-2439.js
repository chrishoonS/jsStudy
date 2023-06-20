// 별찍기 - 1

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = +fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();

var str = '';
for(var i=1; i <= input; i++){

    for(var j=input-i; j > 0; j--){
        str += ' ';
    }
    
    for(var k = 0; k < i; k++){
        str += '*';
    }
    str += '\n';
}

console.log(str);