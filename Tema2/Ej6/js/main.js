const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn1 = document.getElementById("btn1");
const ap = document.getElementById("ap");



/***    FUNCIONES   ***/
num1.addEventListener("focus",function(){
    this.value = "";
});
num2.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", function(){
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    if(isNaN(n1)||isNaN(n2)){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico";
    }
    else if(n1==0||n2==0){
        ap.innerHTML = "Error al introducir el valor, no puede valer 0";
    }
    else{
        ap.innerHTML = "<br>Suma: "+(n1+n2) + "<br>Resta: " +(n1-n2) + "<br>Multiplicacion: "+(n1*n2)
        + "<br>Division: " + (n1/n2) + "<br>Resto: " + (n1%n2);
    }
});