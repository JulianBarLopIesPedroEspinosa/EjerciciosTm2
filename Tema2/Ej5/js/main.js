const var1 = document.getElementById("var1");
const var2 = document.getElementById("var2");
const btn1 = document.getElementById("btn1");
const ap = document.getElementById("ap");



/***    FUNCIONES   ***/
var1.addEventListener("focus",function(){
    this.value = "";
});
var2.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", function(){
    let v1 = Number(var1.value);
    let v2 = Number(var2.value);
    if(isNaN(v1)||isNaN(v2)){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico";
    }
    else if((v1<=-100||v1>5000)||(v2<=-100||v2>5000)){
        ap.innerHTML = "Error al introducir el valor, deben tener tamaños mayores a -100 y menores o igual a 5000";
    }
    else{
        ap.innerHTML="";
        let cont1 = v1;
        if(cont1%2!=0) 
            cont1++;

        while(cont1<v2){
            ap.innerHTML += " - " + cont1;
            cont1 += 2;
        }
    }
});