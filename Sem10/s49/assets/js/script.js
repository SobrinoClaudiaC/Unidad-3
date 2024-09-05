//Recordando los objetos
const perro = {
    nombre: "Copito",
    raza: "Shitzu",
    edad: 4,
    es_adoptado: true,
    actividades: ["correr","comer","pasear","saltar"],
    compañeros: [
        {
            nombre: "Rocky",
            raza: "Salchicha",
        },
        {
            nombre: "Pupi",
            raza: "Labrador",
        },
    ],
};
console.log(perro);
//Accedo a las propiedades de un objeto:
console.log(perro.nombre);
console.log(perro["es_adoptado"]);
console.log(perro.actividades);

console.log(perro.actividades[0]);
console.log(perro.compañeros);

console.log(perro.compañeros[1].raza);
console.log(perro.compañeros[0]["nombre"]);

perro.edad = 3;
perro.compañeros [1]["nombre"]="Pastor Alemán"
console.log(perro);
console.log("");

//Mi ejemplo de objeto:
console.log("Mi ejemplo de objeto :D");
const novela = {
    nombre: "Amor Real",
    productora: "Carla Estrada",
    año: 2002,
    de_época: true,
    es_moderna: false,
    lugaresdefilmación: ["hacienda", "campo", "pueblo",],
    elencoprincipal: [
        {
            nombre: "Fernando",
            apellido: "Colunga",
        },
        {
            nombre: "Helena",
            apellido: "Rojo",
        },
        {
            nombre: "Mauricio",
            apellido: "Islas", 
        },
        {
            nombre: "Adela",
            apellido: "noriega", 
        },
    ],
};
console.log(novela);
//Extraigo datos:
console.log(novela.año);
console.log(novela["de_época"]);
console.log(novela["es_moderna"]);

console.log(novela.lugaresdefilmación);
console.log(novela.lugaresdefilmación[0]);

console.log(novela.elencoprincipal);
console.log(novela.elencoprincipal[1].nombre);
console.log(novela.elencoprincipal[0]["apellido"]);
//Modifico:
novela.capítulos = 93;
novela.año = 2003;
novela.elencoprincipal[2]["apellido"] = "Noriega"
console.log(novela);
console.log("");

















