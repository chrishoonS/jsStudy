// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.
// 입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다.
// 문자열은 알파벳 A~Z 대문자로 이루어지며/ 알파벳 사이에 공백은 없으며/ 문자열의 길이는 1000보다 작다.

// 3: 테스트 케이스의 개수
// ACDKJFOWIEGHE
// O
// AB

const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split('\n');
for (let i = 1; i <= Number(input[0]); i++) { //테스트 케이스의 개수만큼 반복한다.
    console.log(input[i].substring(0, 1) + input[i].substring(input[i].length - 1, input[i].length));
    //1번 문자열의 첫번째 + 1번 문자열의 마지막번째( (전체길이-1) ~ 전체길이)
    //2번 문자열의 경우 동일 적용
    //3번 문자열의 경우 동일 적용
  }