const euros = document.getElementById("euros");
const btn1 = document.getElementById("btn1");
const dolyen = document.getElementById("dolyen");
let dolar = 1.12;
let yen = 177.66;


/***    FUNCIONES   ***/
euros.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", function(){

    if(isNaN(euros.value)){
        dolyen.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico"
    }
    else{
        let euro = euros.value;
        dolyen.innerHTML = "Dolares: " + (euro*dolar).toFixed(2) + ". Yenes: " + (euro*yen).toFixed(2)  + ".";
    }
});