function sumMulti(x, y) { //더하기 함수 선언
    if (x == y) return x * y; //두 파라미터가 같을 때 곱한 값을 반환
    else return x + y; //그 외의 경우 더한 값을 반환
}

console.log(sumMulti(5, 10)); //15
console.log(sumMulti(10, 10)); //100