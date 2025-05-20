let livros = [
  { nome: "o lado feio do amor", idade: 18, categorias: ["fantasia", "aventura"] },
  { nome: "desenfreados", idade: 16, categorias: ["fantasia", "aventura"] },
  { nome: "amor e gelato", idade: 12, categorias: ["drama", "romance"] },
  { nome: "verety", idade: 18, categorias: ["fantasia", "filosofia"] },
  { nome: "o verão que mudou minha vida", idade: 14, categorias: ["comédia", "cotidiano"] },
  { nome: "é assim que acaba", idade: 14, categorias: ["drama", "superação"] },
  { nome: "um de nós está mentindo", idade: 16, categorias: ["fantasia", "romance"] }
];

// Etapa 3 – Preparando variáveis do usuário
let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama, gostaRomance;
let livrosRecomendados = [];

// Etapa 4 – Coletando dados do usuário com prompt
function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de livros de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de livros de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de livros de drama? (sim/não)").toLowerCase() === "sim";
  gostaRomance = prompt("Você gosta de livros de romance? (sim/não)").toLowerCase() === "sim";


  // Etapa 5 – Lógica de recomendação
  for (let livro of livros) {
    if (idadeUsuario >= livro.idade) {
      if (
        (gostaFantasia && livro.categorias.includes("fantasia")) ||
        (gostaAventura && livro.categorias.includes("aventura")) ||
        (gostaDrama && livro.categorias.includes("drama")) ||
        (gostaRomance && livro.categorias.includes("romance"))
      ) {
        livrosRecomendados.push(livro.nome);
      }
    }
  }

  // Etapa 6 – Exibir recomendações na tela
  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, 70);
    for (let i = 0; i < livrosRecomendados.length; i++) {
      text("- " + livrosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum livro disponível para sua idade e preferências.", 20, 70);
  }
}

function draw() {
  // Não precisamos de nada no loop draw para este exemplo estático
}
