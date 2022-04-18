function calc(){
    var currentYear = 2022;
    var birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");
    var age = 0;
    age = currentYear - birthYear + 1;

    //document는 현재 웹브라우저의 페이지를 의미.
    //querySelectora() -> id 선택자가 result 인 웹 요소를 가지고 온다.
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세 입니다.";
}