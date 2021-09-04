const angleValues = document.querySelectorAll(".angle-value");
const btnCheck = document.querySelector(".btn-check");
const output = document.querySelector("#output");

function checkTraingle(){
    var sum = 0;
    for(let i=0;i<angleValues.length;i++){
        sum = sum + Number(angleValues[i].value) ;
    }
    if( sum === 180){
        output.innerText = "It's a Traingle";
    }
    else{
        output.innerText = "It's not a Traingle";
    }
}


btnCheck.addEventListener("click" ,function checkInput(){
    if(angleValues.length === 3){
        checkTraingle();
    }
    else{
        output.innerText = "Fill all the fields";
    }
});

