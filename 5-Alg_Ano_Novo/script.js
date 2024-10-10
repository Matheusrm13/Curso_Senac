/* Exemplo 01 - iprimindo cada linha sem loop
console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("Feliz Ano Novo!")

*/

/* Exemplo 02 - Em ordem decrescente imprimindo a linha com While */

/*
let contador = 10;

while (contador > 0 ) {
    console.log(contador);
    contador--;
}

console.log("Feliz Ano Novo!")
*/
/* Exemplo 03 - Em ordem crescente, imprimindo a linha com While */

/* 

let contador = 0;

while (contador <= 10 ) {
    console.log(contador);
    contador += 20;
}

console.log("Feliz Ano Novo!")

*/

let NumInicial = parseInt (prompt("Digite um número para iniciar a contagem crescente de dois em dois: "))

// Verificar se o número é valido

if (!isNaN(NumInicial) && NumInicial >= 0) {

    // Inicia a contagem 
    let contador = NumInicial
    // inciar a contaem crescente de 2 e 2
    while (contador <= 10) {
        console.log(contador);
        contador += 2; //incrementa de dois em dois
    }
//Imprime mensagem de finalização
console.log("Feliz Ano Novo!")
} else 
    // Imprime mensagem de erro
    console.log("Número inválido, Por Favor, Digite um número válido maior ou igual a 0")
