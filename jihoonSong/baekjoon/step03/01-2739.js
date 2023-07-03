// 구구단

// let fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

// let input = fs.readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();
// for(var i=1; i<=9; i++)
// console.log(+input, '*', i, '=', +input*i);


    for (let dan=2; dan<10; dan++) { //dan: 2,3,4,5,6,7,8,9
        for (let gob=1; gob<10; gob++) { //곱하는 수: 1,2,3,4,5,6,7,8,9
            console.log(`${dan} * ${gob} = ${dan * gob}`.trim())
        }
    }

