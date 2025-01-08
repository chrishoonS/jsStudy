const fs = require("fs");
const filePath = '/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt';

console.log("11111");

// readFileSync
// console.log("result == %s", fs.readFileSync(filePath));

// readFile을 이용한 비동기
// fs.readFile(filePath, (err, data) => console.log("result = %s", data.toString()) );
/*
 - err가 null이면 파일 읽기가 성공적으로 완료된 것
 - data는 읽은 파일 내용이 담긴 버퍼 객체로 반환
 - data.toString() 메서드를 사용해 버퍼 데이터를 문자열로 변환하여 출력
 - 파일 경로가 잘못되었거나 파일 접근 권한이 없거나 기타 문제가 발생하면 err에 에러 정보가 담
 - 위 코드에서는 err를 확인하거나 처리하지 않고 바로 data.toString()을 호출하므로, 에러 발생 시 비정상 동작(예: data가 undefined일 경우 예외 발생)이 일어날 수 있음.
*/

// 예외처리 코드로 수정
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error("ERROR :::::::::: ", err);
        return;
    }
    console.log("result = %s", data.toString());
});


console.log("22222");
