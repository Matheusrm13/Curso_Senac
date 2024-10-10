/*
Título: Tela Inicial de um Sistema
Objetivo: Criar uma interação simples com o usuário em um sistema.
Descrição:
O programa deve solicitar ao usuário que insira seu nome.
Após a entrada do nome, deve exibir uma mensagem de boas-vindas personalizada, utilizando um alert, que inclua o nome fornecido.
Requisitos:
Use a função prompt() para capturar o nome do usuário.
Utilize alert() para mostrar a mensagem de boas-vindas.
O programa deve ser claro e amigável, proporcionando uma boa experiência ao usuário.
*/
 

// Solicitar nome de usuário
const nome = prompt("Digite seu nome:")

// Exibir mensagens de boas-vindas
alert(`Bem-vindo(a), ${nome}!`);