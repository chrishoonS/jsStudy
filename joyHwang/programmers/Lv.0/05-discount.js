//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
//구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

//초기 풀이
// function solution(price) {
//     let answer = 0;
//     if(price > 100000) {
//         answer = price - price * 0.05;
//     } else if (price > 300000) {
//         answer = price - price * 0.1;
//     } else if (price > 500000) {
//         answer = price - price * 0.2
//     }    
//     return answer;
// }


function solution(price) {
    if (price >= 500000) {
        return Math.floor(price * 0.8)
    } else if (price >= 300000) {
        return Math.floor(price * 0.9)
    } else if (price >= 100000) {
        return Math.floor(price * 0.95)
    } else return price
}
console.log(solution(580000))


//다른 사람 풀이

// function solution(price) {
//     if (price >= 500000)
//         return parseInt(price*(1-0.2));

//     if (price >= 300000)
//         return parseInt(price*(1-0.1));

//     if (price >= 100000)
//         return parseInt(price*(1-0.05));  

//     return price
// }

