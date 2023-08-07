var pass = document.getElementById("password");
var msg = document.getElementById("massage");
var pass = document.getElementById("Strength");


pass.addEventListener(`input`,() =>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none"
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak";
    }
    else if(pass.value.length >= 4 && pass.ariaValueMax.length > 8){
        str.innerHTML = "medium";
    }else if(pass.value.length >=8)

    

    
})
