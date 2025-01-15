function Fibonacci(numero) {
    let primeiro = 0;
    let segundo = 1;
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    while (segundo <= numero) {
        let proximo = primeiro + segundo;
        primeiro = segundo; 
        segundo = proximo;
        if (segundo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
    }

    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

let Verificar = 4; 
console.log(Fibonacci(Verificar));