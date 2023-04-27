const btn = document.getElementById("submit");
const body = document.querySelector("body");
const ref = document.getElementById("refresh");
const cap = document.getElementById("cap");
body.addEventListener(onload,generate());
function generate(){
    var temp = "";
    var random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789kugkg"
    for(let i = 0 ; i < 6 ; i++){
        temp += random.charAt(Math.random()*random.length);
    }
    cap.innerText = temp;   
}
function valid(){  
    const val = document.getElementById("captcha");
    if(val.value === cap.innerText){
        console.log(cap.innerText)
    }
    else {
        alert("Enter correct captcha");
        val.value = "";
}
}