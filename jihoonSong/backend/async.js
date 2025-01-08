const fs = require("fs");
const filePath = '/Users/song/Desktop/jsStudy/jihoonSong/baekjoon/test.txt';

console.log("11111");

// readFileSync
// console.log("result : %s", fs.readFileSync(filePath));

// readFile을 이용한 비동기
fs.readFile(filePath, (err, data) => console.log("result === %s", data.toString()) );
console.log("22222");
