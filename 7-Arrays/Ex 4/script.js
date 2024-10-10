function media (a, b, c){
    return (Math.round ((a + b + c)/3) /100) *100
}

console.log (media(5, 10, 10))

// Versão do professor

// function media (num1, num2, num3) {
//     let soma = num1 + num2 + num3;       // Calcula a soma dos números
//     let media = soma / 3;              // Calcula a média
//     return Math.round (media * 100) / 100;                    // Retorna a média
//     }
   
//     // Exemplo de uso
//     console.log(media (4, 6, 8)); // 6
//     console.log(media (10, 20, 30)); // 20