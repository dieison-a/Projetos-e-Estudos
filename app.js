const projetos = [
  { titulo: "Desafios de repetição", repositorio: "desafios-de-repeticao", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Laços, contagem crescente e decrescente, pares, ímpares e múltiplos." },
  { titulo: "Aritmética com funções", repositorio: "aritmetica-com-funcoes", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Composição de funções para soma, multiplicação, potência e fatorial." },
  { titulo: "Sequências numéricas", repositorio: "sequencias-numericas", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Geração interativa de sequências com regras de divisibilidade." },
  { titulo: "Números e regras", repositorio: "numeros-e-regras", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Classificação de números por paridade, divisores e padrões." },
  { titulo: "Matriz de multiplicação", repositorio: "matriz-de-multiplicacao", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Construção de uma matriz numérica e exploração de seus resultados." },
  { titulo: "Desafios com vetores", repositorio: "desafios-com-vetores", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Percursos e operações com listas numéricas." },
  { titulo: "Desafios de lógica", repositorio: "desafios-de-logica", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Cálculos demonstrativos de remuneração, estoque, saque e idade." },
  { titulo: "Exercícios de vetores e textos", repositorio: "exercicios-de-vetores-e-textos", area: "Desenvolvimento e lógica", origem: "Exercício redesenhado com IA", resumo: "Transformações numéricas e operações com palavras." },
  { titulo: "Mercado em Java", repositorio: "mercado-em-java", area: "Aplicações e dados", origem: "Protótipo com IA", resumo: "Aplicação de terminal com orientação a objetos, estoque e carrinho em memória." },
  { titulo: "Loja demonstrativa com PHP e SQL", repositorio: "loja-demonstrativa-php-sql", area: "Aplicações e dados", origem: "Protótipo com IA", resumo: "Formulários e carrinho local em PHP, com esquema relacional sem dados pessoais." },
  { titulo: "Descoberta de produto", repositorio: "descoberta-de-produto", area: "Produto e processos", origem: "Protótipo com IA", resumo: "Estudo fictício de evidências, requisitos, priorização e aprendizado." },
  { titulo: "Melhoria de processos", repositorio: "melhoria-de-processos", area: "Produto e processos", origem: "Protótipo com IA", resumo: "Comparação visual entre um fluxo atual e uma proposta de melhoria." },
  { titulo: "Navegação com DOM", repositorio: "navegacao-com-dom", area: "Produto e processos", origem: "Exercício redesenhado com IA", resumo: "Criação de elementos e interações básicas diretamente no navegador." },
  { titulo: "Indicadores de experiência", repositorio: "indicadores-de-experiencia", area: "Dados e experiência", origem: "Protótipo com IA", resumo: "Indicadores e coortes ilustrativas, calculados sobre dados sintéticos." },
  { titulo: "Painel de operações logísticas", repositorio: "painel-de-logistica", area: "Dados e experiência", origem: "Protótipo com IA", resumo: "Busca e filtros em uma lista fictícia de pedidos e situações." },
  { titulo: "Lista de compras", repositorio: "lista-de-compras", area: "Dados e experiência", origem: "Exercício redesenhado com IA", resumo: "Exibição e totalização de itens de uma lista demonstrativa." },
  { titulo: "Catálogo de produtos", repositorio: "catalogo-de-produtos", area: "Dados e experiência", origem: "Exercício redesenhado com IA", resumo: "Organização de produtos fictícios por categoria." },
  { titulo: "Catálogo de mercado", repositorio: "catalogo-de-mercado", area: "Dados e experiência", origem: "Exercício redesenhado com IA", resumo: "Visualização de produtos agrupados para uma mercearia fictícia." },
  { titulo: "Laboratório de redes", repositorio: "laboratorio-de-redes", area: "Infraestrutura e conhecimento", origem: "Protótipo com IA", resumo: "Topologia e indicadores totalmente simulados, sem acesso a redes reais." },
  { titulo: "Catálogo de conhecimento", repositorio: "catalogo-de-conhecimento", area: "Infraestrutura e conhecimento", origem: "Protótipo com IA", resumo: "Busca e classificação local de conteúdos fictícios para equipes digitais." },
  { titulo: "Planejamento de campanhas", repositorio: "planejamento-de-campanhas", area: "Negócios, web e impacto", origem: "Protótipo com IA", resumo: "Simulador de campanha com hipóteses explícitas e números ilustrativos." },
  { titulo: "Plataforma comunitária", repositorio: "plataforma-comunitaria", area: "Negócios, web e impacto", origem: "Protótipo com IA", resumo: "Organização local de solicitações demonstrativas, sem dados pessoais." },
  { titulo: "Loja interativa", repositorio: "loja-interativa", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Catálogo fictício com filtros e carrinho de demonstração." },
  { titulo: "Vitrine digital", repositorio: "vitrine-digital", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Página responsiva de uma loja demonstrativa com conteúdo original." },
  { titulo: "Primeira página web", repositorio: "primeira-pagina-web", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Fundamentos de HTML semântico e estrutura de navegação." },
  { titulo: "Seletor de perfis", repositorio: "seletor-de-perfis", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Interface responsiva com nomes e perfis inteiramente fictícios." },
  { titulo: "Cartão de apresentação", repositorio: "cartao-de-apresentacao", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Composição visual de uma página de apresentação sem imagens externas." },
  { titulo: "Página de apresentação", repositorio: "pagina-de-apresentacao", area: "Negócios, web e impacto", origem: "Exercício redesenhado com IA", resumo: "Exercício de estrutura semântica, tipografia e organização de conteúdo." }
];

const nomesAreas = ["Todas as áreas", ...new Set(projetos.map((projeto) => projeto.area))];
const areaFiltros = document.querySelector("#filtros-areas");
const campoBusca = document.querySelector("#busca-projetos");
const listaProjetos = document.querySelector("#lista-projetos");
const estadoVazio = document.querySelector("#estado-vazio");
const contagem = document.querySelector("#contagem-resultados");
let areaSelecionada = "Todas as áreas";

function criarFiltros() {
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

function renderizarProjetos() {
  const consulta = campoBusca.value.trim().toLocaleLowerCase("pt-BR");
  const encontrados = projetos.filter((projeto) => {
    const correspondeArea = areaSelecionada === "Todas as áreas" || projeto.area === areaSelecionada;
    const textoBusca = `${projeto.titulo} ${projeto.area} ${projeto.resumo} ${projeto.origem}`.toLocaleLowerCase("pt-BR");
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
    seloOrigem.textContent = projeto.origem;
    topo.append(seloArea, seloOrigem);

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;
    const resumo = document.createElement("p");
    resumo.textContent = projeto.resumo;
    const rodape = document.createElement("div");
    rodape.className = "cartao-rodape";
    const instrucao = document.createElement("small");
    instrucao.textContent = "Abrir repositório";
    const link = document.createElement("a");
    link.href = `https://github.com/dieison-a/${projeto.repositorio}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver projeto ↗";
    rodape.append(instrucao, link);
    cartao.append(topo, titulo, resumo, rodape);
    listaProjetos.append(cartao);
  }

  contagem.textContent = encontrados.length === 1
    ? "1 projeto exibido"
    : `${encontrados.length} projetos exibidos`;
  estadoVazio.hidden = encontrados.length > 0;
}

campoBusca.addEventListener("input", renderizarProjetos);
criarFiltros();
renderizarProjetos();
