const areas = {
  "Desenvolvimento e lógica": [
    "aritmetica-com-funcoes", "desafios-com-vetores", "desafios-de-logica",
    "desafios-de-repeticao", "exercicios-de-vetores-e-textos",
    "matriz-de-multiplicacao", "numeros-e-regras", "sequencias-numericas"
  ],
  "Aplicações e dados": [
    "loja-demonstrativa-php-sql", "mercado-em-java"
  ],
  "Desenvolvimento Web": [
    "atendimento-de-clinica-com-mysql", "cadastro-de-alunos", "cadastro-de-alunos-com-mysql",
    "cadastro-de-carros-php", "cadastro-de-cursos-php", "cadastro-de-itens-de-informatica-php",
    "cadastro-de-livros-php", "cadastro-de-pessoas-e-idades", "cadastro-de-produtos-com-mysql",
    "cadastro-de-projetos-com-mysql", "calculadora-de-media", "calculo-de-comissao-de-vendas",
    "calculo-de-compra-com-desconto", "calculo-de-compra-no-supermercado",
    "calculo-de-desconto-na-farmacia", "calculo-de-gasto-com-combustivel",
    "calculo-de-imc-com-funcoes", "calculo-de-medicamentos-na-farmacia",
    "calculo-de-pagamento-de-compra", "calculo-de-venda", "carrinho-de-compras-php",
    "classe-item-php", "conta-bancaria-em-php", "controle-de-estoque-com-mysql",
    "conversao-de-temperatura", "conversor-de-dolares-para-reais",
    "conversor-entre-celsius-e-fahrenheit", "conversor-fahrenheit-para-celsius",
    "farmacia-bem-estar-em-php", "farmacia-popular", "lista-de-produtos-com-filtros",
    "maior-media-da-turma", "media-da-primeira-avaliacao", "media-da-turma",
    "media-de-idades", "media-de-notas-com-funcoes", "media-do-aluno",
    "media-do-aluno-com-funcoes", "notas-de-alunos", "ordenacao-de-notas-de-alunos",
    "ordenacao-de-pessoas-por-nome", "pesquisa-de-aluno", "validacao-de-idade-para-voto",
    "venda-com-comissao-e-frete", "verificacao-de-idade-com-voto"
  ],
  "Dados e experiência": [
    "catalogo-de-mercado", "catalogo-de-produtos", "indicadores-de-experiencia",
    "lista-de-compras", "painel-de-logistica"
  ],
  "Infraestrutura e conhecimento": [
    "catalogo-de-conhecimento", "laboratorio-de-redes"
  ],
  "Negócios, web e impacto": [
    "cartao-de-apresentacao", "loja-interativa", "pagina-de-apresentacao",
    "planejamento-de-campanhas", "plataforma-comunitaria", "primeira-pagina-web",
    "seletor-de-perfis", "vitrine-digital"
  ],
  "Produto e processos": [
    "descoberta-de-produto", "melhoria-de-processos", "navegacao-com-dom"
  ]
};

const nomesAreas = ["Todas as áreas", ...Object.keys(areas)];
const areaFiltros = document.querySelector("#filtros-areas");
const campoBusca = document.querySelector("#busca-projetos");
const listaProjetos = document.querySelector("#lista-projetos");
const estadoVazio = document.querySelector("#estado-vazio");
const contagem = document.querySelector("#contagem-resultados");
const selos = document.querySelector(".selos");
let areaSelecionada = "Todas as áreas";
let projetos = [];

function formatarNome(nome) {
  const titulo = nome
    .replace(/php/g, "PHP")
    .replace(/mysql/g, "MySQL")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letra) => letra.toLocaleUpperCase("pt-BR"))
    .trim();
  return titulo;
}

function criarFiltros() {
  areaFiltros.replaceChildren();
  for (const nomeArea of nomesAreas) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "filtro-area";
    botao.textContent = nomeArea;
    botao.setAttribute("aria-pressed", String(nomeArea === areaSelecionada));
    botao.addEventListener("click", () => {
      areaSelecionada = nomeArea;
      for (const outroBotao of areaFiltros.querySelectorAll("button")) {
        outroBotao.setAttribute("aria-pressed", String(outroBotao === botao));
      }
      renderizarProjetos();
    });
    areaFiltros.append(botao);
  }
}

function criarLink(texto, endereco, classe) {
  const link = document.createElement("a");
  link.className = classe;
  link.href = endereco;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = texto;
  return link;
}

function renderizarProjetos() {
  const consulta = campoBusca.value.trim().toLocaleLowerCase("pt-BR");
  const encontrados = projetos.filter((projeto) => {
    const correspondeArea = areaSelecionada === "Todas as áreas" || projeto.area === areaSelecionada;
    const textoBusca = [
      projeto.nome, projeto.area, projeto.descricao, projeto.repositorio
    ].join(" ").toLocaleLowerCase("pt-BR");
    return correspondeArea && textoBusca.includes(consulta);
  });

  listaProjetos.replaceChildren();
  for (const projeto of encontrados) {
    const cartao = document.createElement("article");
    cartao.className = "cartao-projeto";

    const topo = document.createElement("div");
    topo.className = "cartao-topo";
    const seloArea = document.createElement("span");
    seloArea.className = "selo-area";
    seloArea.dataset.area = projeto.area;
    seloArea.textContent = projeto.area;
    const seloOrigem = document.createElement("span");
    seloOrigem.className = "selo-origem";
    seloOrigem.textContent = projeto.temPagina ? "Disponível online" : "Código no GitHub";
    topo.append(seloArea, seloOrigem);

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.nome;
    const resumo = document.createElement("p");
    resumo.textContent = projeto.descricao;

    const rodape = document.createElement("div");
    rodape.className = "cartao-rodape";
    const acoes = document.createElement("div");
    acoes.className = "acoes-projeto";
    if (projeto.temPagina) {
      acoes.append(criarLink("Abrir página ↗", projeto.temPagina, "link-pagina"));
    }
    acoes.append(criarLink("Ver código", projeto.url, "link-codigo"));
    rodape.append(acoes);

    cartao.append(topo, titulo, resumo, rodape);
    listaProjetos.append(cartao);
  }

  contagem.textContent = encontrados.length === 1
    ? "1 projeto exibido"
    : `${encontrados.length} projetos exibidos`;
  estadoVazio.hidden = encontrados.length > 0;
}

async function carregarPortfólio() {
  try {
    const resposta = await fetch(
      "https://api.github.com/users/dieison-a/repos?per_page=100&type=owner",
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!resposta.ok) throw new Error("Falha ao consultar o GitHub.");

    const repositorios = await resposta.json();
    const porNome = new Map(repositorios.map((repositorio) => [repositorio.name, repositorio]));
    projetos = [];

    for (const [area, nomes] of Object.entries(areas)) {
      for (const nomeRepositorio of nomes) {
        const repositorio = porNome.get(nomeRepositorio);
        if (!repositorio || repositorio.private) continue;
        projetos.push({
          nome: formatarNome(repositorio.name),
          repositorio: repositorio.name,
          area,
          descricao: repositorio.description || "Projeto acadêmico publicado no GitHub.",
          url: repositorio.html_url,
          temPagina: repositorio.has_pages && repositorio.homepage
            ? repositorio.homepage
            : null
        });
      }
    }

    const paginaAula = porNome.get("Aula-GithubPages");
    if (paginaAula && !paginaAula.private) {
      projetos.push({
        nome: "Aula GitHub Pages",
        repositorio: "Aula-GithubPages",
        area: "Desenvolvimento e lógica",
        descricao: "Exercício de publicação de uma página estática com HTML e CSS.",
        url: paginaAula.html_url,
        temPagina: paginaAula.has_pages ? "https://dieison-a.github.io/Aula-GithubPages/" : null
      });
    }

    projetos.sort((a, b) => a.area.localeCompare(b.area, "pt-BR")
      || a.nome.localeCompare(b.nome, "pt-BR"));

    const totalAreas = new Set(projetos.map((projeto) => projeto.area)).size;
    selos.replaceChildren();
    for (const texto of [`${projetos.length} projetos`, `${totalAreas} áreas`, "Português brasileiro"]) {
      const selo = document.createElement("span");
      selo.textContent = texto;
      selos.append(selo);
    }
  } catch (_erro) {
    contagem.textContent = "Não foi possível carregar os projetos pelo GitHub.";
  }

  criarFiltros();
  renderizarProjetos();
}

campoBusca.addEventListener("input", renderizarProjetos);
carregarPortfólio();
