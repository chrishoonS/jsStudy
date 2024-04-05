// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]]; // 2 3
  }

  return answer;
}

console.log(solution(23));

//https://ella951230.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-lv0-%EC%99%B8%EA%B3%84%ED%96%89%EC%84%B1%EC%9D%98-%EB%82%98%EC%9D%B4
