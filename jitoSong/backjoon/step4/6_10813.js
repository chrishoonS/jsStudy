// 문제
// 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
// 도현이는 앞으로 M번 공을 바꾸려고 한다. 도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
// 공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
// 둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N)
// 도현이는 입력으로 주어진 순서대로 공을 교환한다.

// 출력
// 1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().split('\n')

let [n,m] = input[0].split(" ").map(Number) //[5,4] 첫째줄: 5개의 바구니와 총 4번 공을 바꿀 것이다.

let basket = []

for (let i=1; i<=n; i++) { //바구니 n개만큼 반복, 1 2 3 4 5를 0 1 2 3 4 배열 인덱스에 담는다.
    basket.push(i) //n개만큼 바구니 생성, 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
}
//console.log(basket)

// 공을 교환할 방법 둘째줄: 1 2 => 1번 바구니와 2번 바구니에 들어있는 공을 교환한다.
for (let i=1; i<=m; i++) { //m(1~4)번만큼 공을 교환하게 된다.
    let numArr = input[i].split(" ").map(Number) //[ 1, 2 ] [ 3, 4 ] [ 1, 4 ] [ 2, 2 ]
    // console.log(numArr)
    // console.log(numArr[0]) //1 3 1 2
    // console.log(numArr[1]) //2 4 4 2
    let first = numArr[0]-1 //배열 요소값이 아니라 배열의 인덱스로 접근해야하므로 -1
//    console.log("###"+first)
    let second = numArr[1]-1 //배열 요소값이 아니라 배열의 인덱스로 접근해야하므로 -1
    // console.log("$$$"+second)

    //1번째 요소와 그 다음
    let temp = basket[first]
    basket[first] = basket[second]
    basket[second] = temp

    // console.log(numArr)                                                                                               
}
console.log(basket.join(' ')) //배열 요소를 문자열로 합치기
