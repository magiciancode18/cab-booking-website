const btn = document.querySelector("#t-1");
const btn1 = document.querySelector("#t-2");
const inel = document.getElementById("in-1");
const inel1 = document.getElementById("in-2");
    

function call1(){
    inel.style.fontSize = "1.1rem";
    btn1.style.opacity = "0.7";
}
function call2(){
    inel1.style.fontSize = "1.1rem";
    btn.style.opacity = "0.7";
}
function call3(){
    inel.style.fontSize = "1rem";
    btn1.style.opacity = "1";
}

function call4(){
    inel1.style.fontSize = "1rem";
    btn.style.opacity = "1";
}

btn.onclick = () => {
      call1(); 
}
btn1.onclick = () => {
    call2(); 
}
btn.ondblclick = () => {
    call3(); 
}

btn1.ondblclick = () => {
    call4(); 
}