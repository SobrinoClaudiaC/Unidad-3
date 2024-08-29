let nums = [1, 2, 3, 4];

console.log(nums);

nums.push(5);
console.log(nums);
nums.push("pruebasss");
console.log(nums);

nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

console.log("unshift");
nums.unshift(0);
console.log(nums);

console.log("shift");
nums.shift();
console.log(nums);

console.log("arr.slice-begin y end")
let numes = [1, 2, 3, 4, 5];
console.log(numes);

console.log("slice");
let subnums1 = numes.slice(0, 3);
console.log(subnums1);

console.log("Ejercicio");
let numers = [1, 2, 3, 4, 5, 6, 7];
console.log(numers);

let subnums2 = numers.slice(2, 6);
console.log(subnums2);

console.log("arr.splice")
let nmes = [1, 2, 3, 4, 5, 6, 7];
console.log(nmes);

console.log("Solo valor de inicio");
let subarr1 = nmes.splice(2);
console.log(subarr1);
console.log(nmes);

console.log("Reasignamos el array");
nmes = [1, 2, 3, 4, 5, 6, 7];
console.log(nmes);

console.log("Eliminando elementos");
let subarr2 = nmes.splice(2, 3);
console.log(subarr2);
console.log(nmes);

console.log("reasignamos el array");
nmes = [1, 2, 3, 4, 5, 6, 7];
console.log(nmes);

console.log("Agregando elementos");

let subarr3 = nmes.splice(2, 4, "a", "b", true, 12312, "hola");
console.log(subarr3);
console.log(nmes);





