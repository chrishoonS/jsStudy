var price = 24000; //가격 선언

var sideMenu = document.querySelectorAll(".checkbx"); //클래스명으로 정보 불러와 sideMenu에 저장
var total = document.querySelector("#total"); //id값으로 불러와 total에 저장
total.value = price+"원"; //total의 속성 = 가격(원)

for(i=0; i<sideMenu.length; i++) { //sideMenu의 길이만큼 반복
    sideMenu[i].onclick = function() { //한 요소를 클릭했을 때의 함수
      if(this.checked == true) { //조건1) checked가 true일 때 price 변수에 value를 더한다.
        price += parseInt(this.value);
      }
      else { //예외) price 변수에서 빼준다.
         price -= parseInt(this.value);        
      }
      total.value = price+"원"; //최종 가격을 출력한다.
    } 
}



