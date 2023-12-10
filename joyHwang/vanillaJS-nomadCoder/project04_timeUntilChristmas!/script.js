const clockTitle = document.querySelector(".js-clock");

function getDueDate() {
    const christmas = new Date("2023-12-25:00:00:00+0900");
    const today = new Date();
    const msDiff = christmas.getTime() - today.getTime();
    // console.log(msDiff) //1477401329

    //MS 단위로 변환
    const msSeconds = Math.floor(msDiff / 1000); //1초 1000*1
    const msMinutes = Math.floor(msSeconds / 60); //1분 1000*1*60
    const msHours = Math.floor(msMinutes / 60); //1시간 1000*1*60*60
    const days = Math.floor(msHours / 24); //1일 1000*1*60*60*24

    //남은 시간 계산
    seconds = String(msSeconds % 60).padStart(2, "0");
    minutes = String(msMinutes % 60).padStart(2, "0");
    hours = String(msHours % 24).padStart(2, "0");
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getDueDate();
function init () {
    setInterval(getDueDate, 1000)
}
init();
