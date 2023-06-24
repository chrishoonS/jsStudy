const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString()

let n = input;

let sum = 0;

for (let i=1; i<=n; i++) {    
    sum += i
}

console.log(sum)