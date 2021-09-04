const side1Value = document.querySelector("#side1");
const side2Value = document.querySelector("#side2");
const btnCheckHypotenuse = document.querySelector(".btn-check-hypotenuse");
const output = document.querySelector(".output");

function calculateHypotenuse(){
    let hypotenuse = 0;
    if(side1Value.value && side2Value.value){
        hypotenuse = Math.sqrt((Number(side2Value.value) * Number(side2Value.value)) + (Number(side1Value.value) * Number(side1Value.value)));
        output.innerText = "Value of Hypotenuse is " + hypotenuse;
    }
    else{
        output.innerText = "Please fill both the fields.";
    }
}

btnCheckHypotenuse.addEventListener("click" , calculateHypotenuse)