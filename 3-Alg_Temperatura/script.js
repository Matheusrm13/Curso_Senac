let temperatura = prompt("Insira a temperatura climatica atual: ");

if (temperatura < 0) {
    alert("Muito Frio🥶")
} else if (temperatura >= 0 && temperatura <= 15 ) {
    alert("Frio😬")
} else if (temperatura >= 16 && temperatura <= 25 ) {
    alert("Agradável👌")
} else if (temperatura >= 26 && temperatura <= 35) {
    alert("Quente😎")
} else {
    alert("Muito Quente🥵")
}

