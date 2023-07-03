    // for (let dan=2; dan<10; dan++) { //dan: 2,3,4,5,6,7,8,9
    //     for (let gob=1; gob<10; gob++) { //곱하는 수: 1,2,3,4,5,6,7,8,9
    //         console.log(`${dan} * ${gob} = ${dan * gob}`)
    //     }
    // }

//i,j,k,l,n,m

let result = "";

for (let i=1; i<10; i++) {
    for (let j=2; j<5; j++) { //공통,반복
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
