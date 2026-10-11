const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const btn1 = document.getElementById("btn1");
const ap = document.getElementById("ap");



/***    FUNCIONES   ***/
nota1.addEventListener("focus",function(){
    this.value = "";
});
nota2.addEventListener("focus",function(){
    this.value = "";
});
nota3.addEventListener("focus",function(){
    this.value = "";
});

btn1.addEventListener("click", function(){
    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);
    if(isNaN(n1)||isNaN(n2)||isNaN(n3)){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico";
    }
    else if((n1<0||n2<0||n3<0)||(n1>10||n2>10||n3>10)){
        ap.innerHTML = "Error al introducir el valor, no puede ser menor que 0 ni mayor que 10";
    }
    else{
        let media = (n1+n2+n3)/3;
        if(media<5){
            ap.innerHTML ="SUSPENSO";
        }
        else if(media<7){
            ap.innerHTML ="APROBADO";
        }
        else if(media<8.5){
            ap.innerHTML ="NOTABLE";
        }
        else{
            ap.innerHTML = "SOBRESALIENTE";
        }
        ap.innerHTML += " => " + media;
    }
});