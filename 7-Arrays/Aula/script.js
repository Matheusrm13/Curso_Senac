let fruta = ["abacate", "melão", "kiwi", "maça"];

console.log(fruta);
console.log(fruta[fruta.length -1]); // último elemento array

for(let i = 0; i < fruta.length; i++){
    console.log(fruta[i]);
}

let jogador = ["Cerissete", "Neima", "Mezi", "Cafe", "KK", "Carlos Roberto", "Paul Ocley"];

// for(let J = 0; J < jogador.length; J++){
//     console.log(jogador[J])
// }

// Metodo map criar um novo array que contém o comprimento do array carros

let novoJogadores = jogador.map((jogador) => {
    return jogador.length;
});

console.log(novoJogadores);

let legumes = ["batata", "cenoura,", "beterraba", "beringela", "chuchu"]

// let legumesComB = legumes.find(b => b.startsWith("b"));
let legumesComB = legumes.filter(legume => legume.startsWith("b"));


console.log(legumesComB)

function saudacao () {
    console.log("Olá Jovem!")
}

saudacao ()

function saudacao(nome) {
    console.log(`Olá ${nome}`)
}

saudacao("Matheus")


function despedida(nome) {
    console.log(`Até logo ${nome}`)
}

despedida("Matheus")

function soma ( a, b){
    return a + b;
}

console.log(soma(1, 2))
console.log(soma(5, 9))
console.log(soma(12, 7))
console.log(soma(14, 13))

function multi (a, b){
    const resultado = a * b
    console.log(resultado)
    return resultado;
}

multi(10,2)

let somaAnonima = function(a, b){
    return a + b
}

console.log(somaAnonima(1, 2))