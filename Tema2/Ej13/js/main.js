const p = document.getElementById("p");
let sumaDados = new Array(11).fill(0);
let numRandom1 = 0;
let numRandom2 = 0;


for(let i = 0; i<36000;i++){
    numRandom1= Math.floor(Math.random()*6) + 1;
    numRandom2= Math.floor(Math.random()*6) + 1;

    sumaDados[(numRandom1+numRandom2)-2]++;
}

sumaDados.forEach((elem,i) =>{
    p.innerHTML += "La suma " + (i+2) + " salio " + elem + " veces. <br>"
})