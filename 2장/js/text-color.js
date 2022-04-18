  //heading 변수 선언하고 변수에 h1 태그를 저장한 형태.
  var heading = document.querySelector("#heading");

  //h1 태그를 클릭하면 글자색을 붉은색으로 설정. 함수 정의.
  heading.onclick = function(){
      heading.style.color = "red";
  }
