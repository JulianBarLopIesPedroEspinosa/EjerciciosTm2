const numero = document.getElementById("num");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const ap = document.getElementById("ap");
let miArray = new Array()


/***    FUNCIONES   ***/
numero.addEventListener("focus",function(){
    this.value = "";
});

function mostrarLista(){
    ap.innerHTML = "";
    numero.value ="";

    miArray.sort((a,b) => b - a);
    miArray.forEach((elem)=>{
        ap.innerHTML += " >> " + elem
    })
    let contador = 1;
    miArray.forEach((elem,i)=>{
        if(elem == miArray[i+1]){
            contador++;
        }
        else{
            ap.innerHTML += "<br>" + elem + " aparece " + contador + " veces."
            contador = 1;
        }
    })

    ap.innerHTML += "<br><br>El numero mas grande es el " + miArray[0] + " y el mas pequeño es el "
     + miArray[miArray.length-1]; 

}

btn1.addEventListener("click", function(){
    let n1 = Number(numero.value);
    if(isNaN(n1)){
        ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico";
    }
    else if(n1==0){
        mostrarLista();
    }
    else{
        miArray.push(n1);
        numero.value = "";
    }
});

btn2.addEventListener("click", ()=>{
    numero.value = "0";
    mostrarLista();
});