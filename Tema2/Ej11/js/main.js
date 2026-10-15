const p = document.getElementById("p")
const p1 = document.getElementById("p1")

let random = 0;

for (let i = 0; i < 100; i++) {
    random = Math.floor(Math.random() * 100);
    if (random % 7 == 0 || Math.abs(random) % 10 == 7) {
        p.innerHTML += "PUM, ";
    }
    else
        p.innerHTML += random + ", ";
}

function* parImparGenerator() {
    let i = 0
    while (i < 100) {
        yield Math.floor(Math.random() * 100);
        i++;
    }
}


let generador = parImparGenerator();

random = generador.next().value;

while (!random.done){
    if (random % 7 == 0 || Math.abs(random) % 10 == 7) {
        p1.innerHTML += "PUM, ";
    }
    else
        p1.innerHTML += random + ", ";
    random = generador.next().value;
}