//장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
//사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

function solution(hp) {
  const first = parseInt(hp / 5);
  const second = parseInt((hp % 5) / 3); //나머지
  const third = (hp % 5) % 3;
  return first + second + third;
}

// const hp = 999;
// const first = parseInt(hp / 5);
// const second = parseInt((hp % 5) / 3); //나머지
// const third = (hp % 5) % 3;

// console.log(first);
// console.log(second);
// console.log(third);
