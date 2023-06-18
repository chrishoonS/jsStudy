const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else { //A==B
    console.log('==');
}