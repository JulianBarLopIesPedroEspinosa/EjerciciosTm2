const lista = document.getElementById("lista") ;

for(let i = 1; i<= 300; i++){
    if((i-1)%10==0){
        lista.innerHTML += "<br>"
    }
    if(i%4==0){
        lista.innerHTML += '<span style="font-size:'+(parseInt(getComputedStyle(lista).fontSize) + 4 ) + "px" + '; '+
        'color:green;">'
        + i + "</span>"; 
    }
    else if(i%9==0){
        lista.innerHTML += '<span style="font-size:'+(parseInt(getComputedStyle(lista).fontSize) + 2 ) + "px" + '; '+
        'color:red;">'
        + i + "</span>"; 
    }
    else{
    lista.innerHTML += i 
    }
}
/* Metodos para copiar cosas
Object.assign //Este es "peor" porque no se mete dentro de todo
obj2 = structuredClone(obj1)
*/