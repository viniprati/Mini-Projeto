const produtos = [
  { nome: "Landing Page Simples", preco: 450, categoria: "Desenvolvimento Web" },
  { nome: "Landing Page Profissional", preco: 900, categoria: "Desenvolvimento Web" },
  { nome: "Bot de Moderacao", preco: 600, categoria: "Bot para Discord" },
  { nome: "Dashboard Administrativo", preco: 1200, categoria: "Sistema Web" },
  { nome: "Manutencao Mensal", preco: 250, categoria: "Suporte" }
];

function criarCard(produto) {
  return `
    <div class="produto-card">
      <h3>${produto.nome}</h3>
      <p>Categoria: ${produto.categoria}</p>
      <p>Preco: R$ ${produto.preco.toFixed(2)}</p>
    </div>
  `;
}

const catalogo = document.getElementById("catalogo");

for (let i = 0; i < produtos.length; i++) {
  catalogo.innerHTML += criarCard(produtos[i]);
}

const botaoExportar = document.getElementById("exportar-json");
const resultadoJson = document.getElementById("resultado-json");


// Exportar o json
botaoExportar.addEventListener("click", function () {
  const json = JSON.stringify(produtos, null, 2);

  console.log(json);
  resultadoJson.textContent = json;
});
