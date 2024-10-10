// function contarVogais (a) {
//     if (contarVogais == a, e, i, o, u) {
//         a == contarVogais
//     } else if {
//         console.log (a + " É uma vogal") 
//     } else {
//         console.log (a + " É uma consoante")
//     }
// }

// contaVogais (b)

// Versão do professor

function contarVogais(str) {
    let contador = 0; // Inicializa o contador de vogais
    const vogais = 'aeiouAEIOU'; // Define as vogais a serem contadas
 
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) { // Verifica se o caractere atual é uma vogal
            contador++; // Incrementa o contador
        }
    }
    return contador; // Retorna o total de vogais encontradas
}
// Exemplo de uso
console.log(contarVogais("Ola, mundo")); // 4
console.log(contarVogais("JavaScript e divertido")); // 8