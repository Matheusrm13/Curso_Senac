// Versão do professor

function numeroAleatorio(min, max) {
    // Gera um número inteiro aleatório entre min e max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    // Exemplo de uso
    console.log(numeroAleatorio (1, 10)); // Pode retornar qualquer número entre 1 e 10
    console.log(numeroAleatorio (50, 100)); // Pode retornar qualquer número entre 50 e 100