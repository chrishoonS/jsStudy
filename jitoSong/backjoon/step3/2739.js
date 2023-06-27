const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString()

let dan = Number(input[0]);

for (let i=1; i<10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`)
}