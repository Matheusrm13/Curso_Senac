// Versão do professor

function fatorial(n) {
    if (n < 0) {
        return "O fatorial não está definido para números negativos."; // Tratamento para números negativos
    }
    if (n === 0 || n === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    }
    let resultado = 1; // Inicializa o resultado
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica os números de 2 até n
    }
    return resultado; // Retorna o fatorial calculado
}
 
// Exemplo de uso
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(-3)); // "O fatorial não está definido para números negativos."