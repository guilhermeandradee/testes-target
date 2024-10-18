const sequenciaFibonacci = (pararSequencia) => {
    let sequenciaF = [0, 1];

    while (true) {
        let proximoNumero = sequenciaF[sequenciaF.length - 1] + sequenciaF[sequenciaF.length - 2]; 

        if (proximoNumero > pararSequencia) break; 

        sequenciaF.push(proximoNumero);
    }
    
    return sequenciaF; 
}

const verificarSeEstaPresente = (numero) => {
    const numeroGerado = fibonacciSequence(numero);
    if(numeroGerado.includes(numero)){
        return `O número ${numero} está presente na sequencia`
    } else {
        return `O número ${numero} não está presente na sequencia`
    }
}

