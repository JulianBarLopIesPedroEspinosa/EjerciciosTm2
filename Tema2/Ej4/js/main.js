const radio = document.getElementById("radio");
const btn1 = document.getElementById("btn1");
const ap = document.getElementById("ap");



/***    FUNCIONES   ***/
radio.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", function(){
    let r = radio.value;
    if(isNaN(r)){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico"
    }
    else{
        ap.innerHTML = "Area: " + (2*Math.PI* r**2).toFixed(4) + "  Perimetro: " + (2*Math.PI*r).toFixed(4);
    }
});