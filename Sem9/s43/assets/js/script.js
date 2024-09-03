//Modificación de arrays
//.map(función)

let nums = [1,2,3,4,5];
console.log(nums);

let numspordos = nums.map((n)=>n*2);
console.log(numspordos);
console.log(nums);

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
console.log(palabras);

let palabrasSize = palabras.map((p)=>{
    if (p.length>7){
        return "palabra larga";
    }
    return "palabra corta";
});
console.log(palabrasSize);
  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]
const numes = [1,2,3,4,5];
console.log(numes);

let suma = numes.reduce((a,b)=>a+b,0);
console.log(suma);

let multiplicacion = numes.reduce((a,b)=>a*b,1);
console.log(multiplicacion);

let puntos = [11,2,1,21,23,10];
console.log(puntos);

puntos.sort();
console.log("ordenamiento por puntos");
console.log(puntos);

puntos.sort((a,b)=>a-b);
console.log("ordenamiento númerico estricto");
console.log(puntos);

const arr = [true,1,"hola",54.76,"76"];
console.log(arr);

arr.reverse();
console.log(arr);

console.log("Split");
const frase = "Hola buenas tardes a todos";
console.log(frase);

let palabrass = frase.split(" ");
console.log(palabrass);

const csv = "Perú,Argentina,Chile,Colombia";
console.log(csv);

let paises = csv.split(",");
console.log(paises);

console.log("join");
let strpalabras = palabrass.join(" ");
console.log(strpalabras);

let strpaises = paises.join();
console.log(strpaises);













