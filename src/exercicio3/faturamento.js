const faturamentoDiario = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
];



function analiseFaturamento(faturamentoDiario) {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
    
    const mediaMensal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0) / diasComFaturamento.length;
    
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
    
    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

console.log(analiseFaturamento(faturamentoDiario))