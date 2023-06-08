// 2557
// console.log("Hello World!")

// 1000, 1001, 10998, 1008, 10869
/*
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var i = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(function(e) { return parseInt(e); });
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
*/

/*
// 10926
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
console.log(input[0] + "??!");
*/


/*
// 10926
var fs = require('fs');
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
console.log(input[0] + "??!");
*/

/*
// 18108
var fs = require('fs');
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
console.log(parseInt(input[0]) - 543);
*/

/*
//10430
var fs = require('fs');
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);
*/

const fs = require('fs');
const input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split('\n');

let a = parseInt(input[0]);
let b = input[1].split('');

let one = a * parseInt(b[2]);   //472 x 5
let two = a * parseInt(b[1]);   //472 x 5
let three = a * parseInt(b[0]);   //472 x 5

console.log(one);
console.log(two);
console.log(three);
console.log((three*100) + (two * 10) + one);


/*
// 11382
var fs = require('fs');
var input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString().split(' ');
console.log(parseInt(input[0]) - 543);
*/


/*
// 10171
console.log("\\    /\\\n"+
            " )  ( \')\n"+
            "(  /  )\n"+
            " \\(__)|\n")
*/

/*
// 10172
console.log("|\\_/|\n" +
            "|q p|   /}\n" +
            "( 0 )\"\"\"\\\n" +
            "|\"^\"`    |\n" +
            "||_/=\\\\__|");
*/