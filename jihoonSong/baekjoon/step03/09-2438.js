// 별찍기 - 1

let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = +fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();


for(var i=0; i < input; i++){
    var str = "";
    for(var j=0; j < i+1; j++){
        str += '*';
    }
    console.log(str);
}