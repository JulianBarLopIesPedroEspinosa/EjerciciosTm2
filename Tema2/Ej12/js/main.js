const lista = document.getElementById("lista") ;

for(let i = 1; i<= 300; i++){
    if((i-1)%10==0){
        lista.innerHTML += "<br>"
    }
    if(i%4==0){
        lista.innerHTML += '<span style:"'+(parseInt(getComputedStyle(lista).fontSize) + 4 ) + "px"
    }


    lista.innerHTML += i 
}

Object.assign
structuredClone
