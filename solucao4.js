const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    }
    
    return percentuais;
}

const percentuaisFaturamento = calcularPercentuais(faturamentoPorEstado);
console.log('Percentual de faturamento por estado:');
for (const estado in percentuaisFaturamento) {
    console.log(`${estado}: ${percentuaisFaturamento[estado]}`);
}
