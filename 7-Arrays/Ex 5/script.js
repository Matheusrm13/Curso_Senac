function ehPalíndromo (a) {
    if (a == ehPalíndromo) {
        console.log (a + " é um Palíndromo")
    } else {
        console.log (a + " não é um Palíndromo")
    }
}

ehPalíndromo ("Apenas")

// Versão do professor


// function ehPalindromo(str) {
//     // Remove espaços e converte para minúsculas
//     let palavra = str.replace(/\s+/g, '').toLowerCase();
//     // Inverte a string
//     let palavraInvertida = palavra.split('').reverse().join('');
//     // Verifica se a string original é igual à invertida
//     return palavra === palavraInvertida;
// }
// // Exemplo de uso
// console.log(ehPalindromo("arara")); // true
// console.log(ehPalindromo("banana")); // false
 