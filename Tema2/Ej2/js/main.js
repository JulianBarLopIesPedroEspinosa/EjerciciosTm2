const p = document.getElementById("xor");

let a = prompt("Introduce 0 o 1:");
let b = prompt("Introduce 0 o 1:");

if((a==0 || a==1)&&(b==0||b==1)){
    p.innerHTML = a + " ^ " + b + " = " + (a^b);
}
else
    p.innerHTML = "Error al introducir los datos, han de ser 0 o 1";
