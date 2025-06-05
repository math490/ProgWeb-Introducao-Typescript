// === Arrays e Métodos de Manipulação === \\

let notas: number[] = [10, 10, 10, 10];

// For Each - Realiza a iteração de coleções como arrays ou listas;
notas.forEach(n => console.log("Nota", n));

// Map - Cria um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

// Filter - Filtra dados com base em uma condição
let aprovados = notas.filter(n => n >= 6);

// Push - Adiciona um elemento no final do array
notas.push(10);

// Pop - Remove um elemento do final do array
notas.pop();