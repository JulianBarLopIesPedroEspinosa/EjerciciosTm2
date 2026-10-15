const numero = document.getElementById("pi");
const btn1 = document.getElementById("btn1");
const ap = document.getElementById("ap");



/***    FUNCIONES   ***/
numero.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", ()=>{
    let parImpar = (num)=> num%2==0?"par":"impar";
    if(isNaN(Number(numero.value))){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico"
    }
    else{
        ap.innerHTML = "El numero es: " + parImpar(Number(numero.value)) ;
    }
});