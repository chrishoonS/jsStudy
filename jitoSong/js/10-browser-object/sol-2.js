function changeBg() { //rgb 컬러 만들기 3원색 256*256*256의 조합
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      document.body.style.background = bgColor; //배경색
  }

  changeBg(); //함수 호출