function parOuImpar (a) {
    if (a %2 == 0) {
        console.log(a + " é par")
    }    else {
        console.log (a + " é impar")
    }
}
 
parOuImpar (3)
parOuImpar (31)
parOuImpar (2)

// Versão do professor

// function ehPar(numero) {
//     return numero % 2 === 0;
// }
// console.log(ehPar(4));
// console.log(ehPar(5));

// com if else

// function parOuImpar (numero) {
//     if (numero % 2 === 0) {
//         return "Par"
//     } else { 
//         return "Impar" }
// }
//     // Exemplo de uso

// console.log(parOuImpar(4)); // true
// console.log(parOuImpar(5)); // false