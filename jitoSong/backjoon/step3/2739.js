const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString()

let dan = Number(input[0]); //2,3,4,5,6,7,8,9

for (let i=1; i<10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`)
}