// Versão do professor

function inverterString (str) {
    // Converte a string em um array, inverte o array e depois junta os caracteres de volta em uma string
    return str.split('').reverse().join('');
}

    // Exemplo de uso
console.log(inverterString("hello")); // "olleh"
 console.log(inverterString("JavaScript")); // "tpircSava"
 console.log(inverterString("12345")); // "54321"