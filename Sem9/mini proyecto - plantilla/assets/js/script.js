const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

let btnPush = document.getElementById("btn_push");

btnPush.onclick = funcionPush;

function funcionPush(){
    cars.push("lexus");
    mostrarImagenes();
}

function mostrarImagenes(){
let text = "";

for (let car of cars){
    text += `<img src="./assets/img/${car}.png" alt="${car}" width="100"/>`;
}

document.getElementById("demo").innerHTML = text;
}

mostrarImagenes();