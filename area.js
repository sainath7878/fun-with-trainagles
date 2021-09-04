const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector(".output");
const btnArea = document.querySelector(".area");

function calculateArea(){
    if(base.value && height.value){
        let area = 0;
        area = Number(base.value) * Number(height.value) * 0.5;
        output.innerText = "Area of the triangle is " + area;
    }
    else{
        output.innerText = "Please fill all the fields";
    }
}

btnArea.addEventListener("click" , calculateArea);