const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split(" ")

const n = +input;

let data = '';

//     *
//    ***
//   *****
//  *******
// *********
for (let i=0; i<5; i++) {
    for (let a=0; a<(5-i); a++) {
        data += ' ';
    }

    for (let j=0; j < (2 * i + 1); j++) {
        data += '*';
    }
    data += '\n';
}
