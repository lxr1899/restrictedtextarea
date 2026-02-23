const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

span1.innerHTML = txt1.value.length + " /250"
span2.innerHTML = txt2.value.length + " /250"
span3.innerHTML = txt3.value.length + " /250"

txt1.addEventListener("input", () => {
    span1.innerHTML = txt1.value.length + " /250"
    if(txt1.value.length == 250) {
        document.getElementById("txtD1").classList.remove("correct");
        document.getElementById("txtD1").classList.add("error");
        document.getElementById("txt1").classList.remove("txt");
        document.getElementById("txt1").classList.add("txtError");
    }
    else{
        document.getElementById("txtD1").classList.remove("error");
        document.getElementById("txtD1").classList.add("correct");
        document.getElementById("txt1").classList.remove("txtError");
        document.getElementById("txt1").classList.add("txt");
    }
})

txt2.addEventListener("input", () => {
    span2.innerHTML = txt2.value.length + " /250"
    if(txt2.value.length == 250) {
        document.getElementById("txtD2").classList.remove("correct");
        document.getElementById("txtD2").classList.add("error");
        document.getElementById("txt2").classList.remove("txt");
        document.getElementById("txt2").classList.add("txtError");
    }
    else{
        document.getElementById("txtD2").classList.remove("error");
        document.getElementById("txtD2").classList.add("correct");
        document.getElementById("txt2").classList.remove("txtError");
        document.getElementById("txt2").classList.add("txt");
    }
})

txt3.addEventListener("input", () => {
    span3.innerHTML = txt3.value.length + " /250"
    if(txt3.value.length == 250) {
        document.getElementById("txtD3").classList.remove("correct");
        document.getElementById("txtD3").classList.add("error");
        document.getElementById("txt3").classList.remove("txt");
        document.getElementById("txt3").classList.add("txtError");
    }
    else{
        document.getElementById("txtD3").classList.remove("error");
        document.getElementById("txtD3").classList.add("correct");
        document.getElementById("txt3").classList.remove("txtError");
        document.getElementById("txt3").classList.add("txt");
    }
})