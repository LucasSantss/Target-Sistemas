let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let Outros = 19849.53;
let Total = SP + RJ + MG + ES + Outros;

let percSP = (SP / Total) * 100;
let percRJ = (RJ / Total) * 100;
let percMG = (MG / Total) * 100;
let percES = (ES / Total) * 100;
let percOutros = (Outros / Total) * 100;

console.log("Percentual de representação por estado:");
console.log("SP: " + percSP.toFixed(2) + "%");
console.log("RJ: " + percRJ.toFixed(2) + "%");
console.log("MG: " + percMG.toFixed(2) + "%");
console.log("ES: " + percES.toFixed(2) + "%");
console.log("Outros: " + percOutros.toFixed(2) + "%");
