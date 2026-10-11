const p = document.getElementById("array");

let alumnos = [
    ["Juan", "García López", "DAW", [7, 8, 7.5]],
    ["María", "Pérez Sánchez", "DAW", [9, 8.5, 8.75]],
    ["Pedro", "Martín Ruiz", "DAM", [6, 7, 6.5]],
    ["Paula", "Barreno Lopez", "DAM", [5, 5, 5.5]],
    ["Lucía", "Fernández Díaz", "DAM", [8, 9, 8.5]]
];

for(let elem of alumnos){
    p.innerHTML += elem;
    if(typeof elem == "object"){
        p.innerHTML += "<br>";
    }
};
