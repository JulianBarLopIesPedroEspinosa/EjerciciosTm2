const pbMañana = 25;
const pbTarde = 30;
const pbNoche = 35;

const ap = document.getElementById("ap");
const horas = document.getElementById("horas");
const mañana = document.getElementById("mañana");
const tarde = document.getElementById("tarde");
const noche = document.getElementById("noche");
const fin = document.getElementById("fin");

let salarBruto = 0;

fin.addEventListener("click", ()=>{
    salarBruto = salarioBruto();
    ap.innerHTML = salarBruto;
});


function salarioBruto() {
    let h = Number(horas.value);
    if (isNaN(h)) {
        return ap.innerHTML = "Error al introducir el valor, tienes que introducir un valor numerico";
    }
    else if (mañana.checked) {
        return h * pbMañana;
    }
    else if (tarde.checked) {
        return h * pbTarde;
    }
    else if (noche.checked) {
        return h * pbNoche;
    }
    else{
        return "No se ha seliccionado ningun horario";
    }
}

