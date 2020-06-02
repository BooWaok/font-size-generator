function onlyNumber() {
    if ((event.keyCode < 48) || (event.keyCode > 57))
        event.returnValue = false;
    else {
        document.getElementById("button").innerHTML = "클립보드에 저장하기"
    }
}