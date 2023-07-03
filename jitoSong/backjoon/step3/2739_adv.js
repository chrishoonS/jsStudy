//i,j,k,l,n,m

let result = "";

for (let i=1; i<10; i++) {
    for (let j=2; j<5; j++) {
        result += j + " * " + i + " = " + j * i + "\t"
    }
    result += '\n'
}

result += '\n'

for (let k=1; k<10; k++) {
    for (let l=5; l<8; l++) {
        result += l + " * " + k + " = " + l * k + "\t"
    }
    result += '\n'
}

result += '\n'

for (let n=1; n<10; n++) {
    for (let m=8; m<10; m++) {
        result += m + " * " + n + " = " + m * n + "\t"
    }
    result += '\n'
}

console.log(result)