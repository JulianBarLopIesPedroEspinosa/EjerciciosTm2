const piramide = document.getElementById("piramide");

for(let i = 1; i<=50;i++){
    for(let j = 1; j<=i;j++){
        piramide.innerHTML += i;
    }
    piramide.innerHTML += "<br>";
}