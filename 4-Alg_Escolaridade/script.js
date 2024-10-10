let Serie = parseInt(prompt("insira o número da série escolar em que está: "))

if (Serie >= 1  && Serie <= 5) {
    alert("Você está no Ensino Fundamental I")
} else if ( Serie >= 6 && Serie <= 9) {
    alert("Você está no Ensino Fundamental II")
} else if ( Serie >= 10 && Serie <= 12) {
    alert("Você está no Ensino Médio")
} else if  (Serie > 12) {
    alert("Você está na Educação Superior")
} else {
    alert("Entrada Inválida")
} 

/*
if (serie < 1) { 
    alert("Entrada invalida"); 
} else if (serie <=5) { 
    alert("Ensino Fundamental I"); 
} else if (serie >=6 && serie <=9){ 
    alert("Ensino Fundamental II"); 
} else if (serie >=10 && serie <=12){ 
    alert("Ensino Medio"); 
}else{ alert("Ensino Superior"); }
 */