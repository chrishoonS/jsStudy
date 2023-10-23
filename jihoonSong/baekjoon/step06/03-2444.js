// 별찍기 - 7
const input = require('fs').readFileSync('/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt').toString();

let N = parseInt(input);

// 별찍기 = 공백 먼저 찍고 별 찍은 후 합쳐서 한줄씩 반복 출력
// 윗 부분 별 = 최대 갯수까지 출력
for(let i=1; i <= N; i++){ 
    let k ='';
    
    for(let j=N; j > i; j-- ) // 공백
        k+=' ';
    
    for(let j=1; j <=2*i-1 ; j++) // 별 홀수개 씩 출력 
        k +='*';

    console.log(k);
}

// 아랫 부분 별 = 최대 갯수 이후부터 출력
for(let i=2; i <= N; i++){
    
    let k ='';
    for(let j=N-i+1; j<N; j++ )
        k+='0';
    
    for(let j = 2*(N-i)+1 ; j >=1 ; j--)
        k +='*';
    
    console.log(k);
}

