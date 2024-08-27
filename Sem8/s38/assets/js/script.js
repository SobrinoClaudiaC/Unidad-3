let numsImpares = [1, 3, 5, 7, 9];

console.log("recorrer el array por índices");

for (let i = 0; i < numsImpares.length; i++) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("recorrer el array al revés");

for (let i = numsImpares.length - 1; i >= 0; i--){
    console.log(numsImpares[i]);
}

console.log("");

console.log("recorrer array por elementos");
for (let num of numsImpares){
    console.log(num);
}

console.log("");

let nums = [];
console.log(nums);

nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

nums[2] = 8693;
console.log(nums);

console.log("");

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matriz);
console.log(matriz.length);
console.log("");

console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log(matriz[0][0]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][1]);

let numes = [1, 2, 3, 4, 5];
console.log(numes);

numes.push(6);
numes.push(7);
numes.push("holi");
console.log(numes);

let elementoEliminado = numes.pop();
console.log(numes);

console.log(elementoEliminado);

numes.pop();
numes.pop();
console.log(numes);
