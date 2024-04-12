//장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
//사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// function solution(hp) {
//   let answer = 0;
//   return answer;
// }

const hp = 999;
let answer = 0;
let ant5 = 5;
let ant3 = 3;
let ant1 = 1;

if (hp % ant5 !== 0) {
  answer += 5;
} else if (hp % ant3 !== 0) {
  answer += 3;
} else if (hp % ant1 !== 0) {
  answer += 1;
}
console.log(answer);
console.log(Math.floor(hp / ant5));
console.log(Math.floor(hp / ant3));
console.log(Math.floor(hp / ant1));
