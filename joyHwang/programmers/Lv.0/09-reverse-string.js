// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let reverseText = my_string.toString().split(''); //typeof : object
    let result = reverseText.reverse().join(''); //typeof : string
    //join()을 사용해서 split 되어있던 배열 객체를 string으로 바꿔줘야 정답!

    return result;
    
}

console.log(solution("bread"))
