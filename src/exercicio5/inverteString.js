function inverteString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const textoTeste = "Hello World!";
console.log(`String original: ${textoTeste}`);
console.log(`String invertida: ${inverteString(textoTeste)}`);