// === Funções === \\

// Função tradicional
function saudacao(nome: string): string {
    return `Olá, ${nome}`;
}
console.log(saudacao("Matheus"));

// Arrow function
const soma = (x: number, y: number): number => x + y;
console.log(soma(2, 3));

// Função com valor padrão
function mensagem(texto: string = "Bem-vindo(a)!"){
    console.log(texto);
}

// Função com parâmetro opicional
function apresentar(nome?: string){
    if (nome) {
        console.log(`O nome dele é ${nome}`)
    } else {
        console.log("Este é um amigo")
    }
}
