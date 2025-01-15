function inverter(str) {
    let Invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        Invertida += str[i];
    }
    return Invertida;
}
let minhaString = "inverso";

let resultado = inverter(minhaString);

console.log("String original: " + minhaString);
console.log("String invertida: " + resultado);
