function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b <= numero) {
        if (b === numero) return true;
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return false;
}

const numeroTeste = 34;
console.log(`O número ${numeroTeste} ${verificaFibonacci(numeroTeste) ? 'pertence' : 'não pertence'} à sequência de Fibonacci`);