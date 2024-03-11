let fs = require('fs');
let input = fs.readFileSync('joyHwang/programmers/Lv.0/test.txt').toString().split(' ');


//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//numer1	denom1	numer2	denom2	result
//1	2	3	4	[5, 4]
//9	2	1	3	[29, 6]


//방법 1
let fs = require('fs');
let input = fs.readFileSync('joyHwang/programmers/Lv.0/fraction/test.txt').toString().split(' ');

function solution(numer1, denom1, numer2, denom2) {
    //분자 구하기 (??왜)
    let denum = numer1 * denom2 + numer2 * denom1;
    //분모 구하기
    let num = num1 * num2;
    let a = denum;
    let b = num;
}

//최대공약수 구하기
// 1. a, b를 서로 나눈다. 만약 나누어진다면 b가 최대 공약수이다. (a > b)
// 2. 서로가 나누어지지 않는다면 b 와 a % b (a를 b로 나눈 나머지)로 다시 나눈다.
// 3. 서로가 나누어진다면 a % b 가 최대공약수이다. 만약 나누어지지 않는다면 다시 위 방법을 반복한다.
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

//최대공약수를 분자 분모에 나누고 배열에 넣기
answer[0] = a / gcd(a,b);
answer[1] = b / gcd(a,b);

return answer;

//방법 2
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    let gcd = cal_gcd(denum, num);
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [denum / gcd, num / gcd]
}
//https://luck131313.tistory.com/76
//https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%84%EC%88%98%EC%9D%98-%EB%8D%A7%EC%85%88