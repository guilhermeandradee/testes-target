function inverterString(string) {
    let stringInvertida = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    
    return stringInvertida;
}

const entrada = "Hello, World!";
const stringInvertida = inverterString(entrada);

console.log(`Texto original: ${entrada}`);
console.log(`Texto invertido: ${stringInvertida}`);
