
const artigos = [
  { nome: "Abandono de Função", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Abuso de Autoridade", meses: 30, multa: 225000, fianca: "Não" },
  { nome: "Ameaça a Terceiros", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Assalto a Civil", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Assalto a Madeireira", meses: 60, multa: 90000, fianca: "Não" },
  { nome: "Assalto a Niobe", meses: 60, multa: 90000, fianca: "Não" },
  { nome: "Assalto a Residência", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Banco Central", meses: 70, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Banco Fleeca ou Banco Pacote", meses: 50, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Ferro Velho", meses: 60, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Galinheiro ou Aquaque", meses: 40, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Hollywood ou Titanic", meses: 50, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Ice Storm", meses: 40, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Joalheiro", meses: 55, multa: 90000, fianca: "Não" },
  { nome: "Assalto ao Navio do Porto", meses: 40, multa: 90000, fianca: "Não" },
  { nome: "Assédio Moral ou Físico", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Calúnia", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Caça Ilegal de Animais", meses: 35, multa: 90000, fianca: "Não" },
  { nome: "Condescendência Criminosa", meses: 30, multa: 135000, fianca: "Não" },
  { nome: "Corrupção Ativa (Suborno)", meses: 35, multa: 150000, fianca: "Não" },
  { nome: "Corrupção Passiva", meses: 30, multa: 150000, fianca: "Não" },
  { nome: "Crimes Cibernéticos", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Desacato ao Servidor Público", meses: 50, multa: 1000000, fianca: "Não" },
  { nome: "Desobediência", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Desobediência ao Servidor Público", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Direção Perigosa", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Direção Sob Efeito de Embriaguez", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Dinheiro Sujo", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Extorsão", meses: 35, multa: 105000, fianca: "Não" },
  { nome: "Falsidade Ideológica", meses: 25, multa: 90000, fianca: "Sim" },
  { nome: "Falso Testemunho", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Formação de Quadrilha", meses: 40, multa: 150000, fianca: "Não" },
  { nome: "Fuga de Abordagem Policial", meses: 35, multa: 90000, fianca: "Sim" },
  { nome: "Furto", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Homicídio", meses: 120, multa: 750000, fianca: "Não" },
  { nome: "Homicídio a Servidor Público em Serviço", meses: 100, multa: 450000, fianca: "Não" },
  { nome: "Homicídio Culposo", meses: 35, multa: 150000, fianca: "Sim" },
  { nome: "Homicídio Doloso", meses: 75, multa: 300000, fianca: "Não" },
  { nome: "Infração de Trânsito", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Inserção de Dados Falsos", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Invasão a Propriedade Privada", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Invasão ao Departamento de Polícia", meses: 140, multa: 750000, fianca: "Não" },
  { nome: "Latrocínio", meses: 75, multa: 300000, fianca: "Não" },
  { nome: "Lesão Corporal", meses: 35, multa: 90000, fianca: "Sim" },
  { nome: "Mal Uso de Arma de Fogo", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Multas Pendentes", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Obstrução de Justiça", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Omissão de Socorro", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Participação de Corridas Clandestinas", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Peculato", meses: 40, multa: 90000, fianca: "Não" },
  { nome: "Perseguição", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Perturbação da Ordem Pública", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Poluição Sonora", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Porte de Algemas (até 3 unidades)", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Porte de Algemas (acima de 3 unidades)", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Porte de Arma Leve", meses: 30, multa: 60000, fianca: "Sim" },
  { nome: "Porte de Arma Pesada", meses: 45, multa: 135000, fianca: "Não" },
  { nome: "Porte de C4", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Porte de Drogas (até 3 unidades)", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Porte de Drogas (acima de 3 unidades)", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Porte de Lockpick (até 3 unidades)", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Porte de Lockpick (acima de 3 unidades)", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Porte de Munição", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Porte de Munição acima do Permitido", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Posse de Itens Ilegais", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Prevaricação", meses: 35, multa: 150000, fianca: "Não" },
  { nome: "Resistência a Prisão", meses: 40, multa: 90000, fianca: "Não" },
  { nome: "Roubo", meses: 35, multa: 105000, fianca: "Sim" },
  { nome: "Sequestro ou Cárcere Privado", meses: 35, multa: 150000, fianca: "Não" },
  { nome: "Tentativa de Furto ou Roubo", meses: 60, multa: 135000, fianca: "Não" },
  { nome: "Tentativa de Homicídio", meses: 40, multa: 150000, fianca: "Não" },
  { nome: "Tráfico de Drogas", meses: 30, multa: 90000, fianca: "Não" },
  { nome: "Tráfico de Material Balístico", meses: 60, multa: 90000, fianca: "Não" },
  { nome: "Trajes do Poder Público", meses: 60, multa: 150000, fianca: "Não" },
  { nome: "Uso de Máscaras", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Utilização de Capacete Balístico", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Utilização de Coldre", meses: 30, multa: 90000, fianca: "Sim" },
  { nome: "Utilização ou Porte do Colete Balístico ", meses: 30, multa: 90000, fianca: "Sim" }
];

artigos.sort((a, b) => a.nome.localeCompare(b.nome));

const lista = document.getElementById("lista-artigos");
const pesquisa = document.getElementById("pesquisa");
const ajustes = document.querySelectorAll(".ajuste");

// Conjunto com índices reais de artigos selecionados (persiste entre re-renderizações)
const selecionados = new Set();

const MAX_ATENUANTES = 80;

function somaAtenuantesSelecionados() {
  return Array.from(document.querySelectorAll('.ajuste[data-tipo="atenuante"]:checked'))
    .reduce((acc, el) => acc + (parseFloat(el.value) || 0), 0);
}

function somaAgravantesSelecionados() {
  return Array.from(document.querySelectorAll('.ajuste[data-tipo="agravante"]:checked'))
    .reduce((acc, el) => acc + (parseFloat(el.value) || 0), 0);
}


function atualizarEstadoAtenuantes() {
  const total = somaAtenuantesSelecionados();
  const restante = Math.max(0, MAX_ATENUANTES - total);

  document.querySelectorAll('.ajuste[data-tipo="atenuante"]').forEach(cb => {
    const val = parseFloat(cb.value) || 0;

    if (cb.checked) {
      // Nunca desabilite os já marcados
      cb.disabled = false;
      cb.parentElement.title = `Selecionado (${val}%)`;
    } else {
      // Só pode marcar se couber no restante
      const podeMarcar = val <= restante;
      cb.disabled = !podeMarcar;
      cb.parentElement.title = podeMarcar
        ? `Disponível: até ${restante}%`
        : `Limite atingido: falta ${restante}% (não cabe ${val}%)`;
    }
  });
}

function onAjusteChange(e) {
  const el = e.target;
  const tipo = el.dataset.tipo;
  const valor = parseFloat(el.value) || 0;

  if (tipo === "atenuante") {
    const totalAntes = somaAtenuantesSelecionados();
    if (el.checked && totalAntes > MAX_ATENUANTES) {
      // Se passou do limite, desfaz e avisa
      el.checked = false;
      const restante = Math.max(0, MAX_ATENUANTES - (totalAntes - valor));
      alert(`Limite de atenuantes é ${MAX_ATENUANTES}%.\nRestante disponível: ${restante}%.`);
    }
    atualizarEstadoAtenuantes();
  }

  atualizarFicha();
}

function atualizarFicha() {
  let somaMeses = 0;
  let somaMulta = 0;
  let existeFiancaSim = false;
  let existeFiancaNao = false;

  // Soma com base no estado, não no DOM
  selecionados.forEach((idx) => {
    const artigo = artigos[idx];
    somaMeses += artigo.meses;
    somaMulta += artigo.multa;
    if (artigo.fianca === "Sim") existeFiancaSim = true;
    if (artigo.fianca === "Não") existeFiancaNao = true;
  });

  let desconto = Math.min(MAX_ATENUANTES, somaAtenuantesSelecionados());
  let acrescimo = somaAgravantesSelecionados();

  const mesesDescontados = somaMeses * (1 - desconto / 100) * (1 + acrescimo / 100);
  const multaDescontada = somaMulta * (1 - desconto / 100) * (1 + acrescimo / 100);

  document.getElementById("meses-sem").textContent = somaMeses;
  document.getElementById("multa-sem").textContent = somaMulta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("meses-com").textContent = Math.round(mesesDescontados);
  document.getElementById("multa-com").textContent = multaDescontada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Se houver algum "Não" entre os selecionados, Afiançável = Não (prioridade)
  document.getElementById("afiançavel").textContent = existeFiancaNao ? "Não" : (existeFiancaSim ? "Sim" : "-");

  document.getElementById("soma-atenuantes").textContent = `${desconto}%`;
  document.getElementById("soma-agravantes").textContent = `${acrescimo}%`;
}

function renderizarArtigos(filtro = "") {
  lista.innerHTML = "";

  const filtrados = artigos.filter(a =>
    a.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach((artigo) => {
    const realIndex = artigos.findIndex(a => a.nome === artigo.nome); // índice original
    const id = `artigo-${realIndex}`;

    const div = document.createElement("div");
    div.className = "artigo";
    div.innerHTML = `
      <input type="checkbox" id="${id}" data-idx="${realIndex}" ${selecionados.has(realIndex) ? "checked" : ""}>
      <label for="${id}">
        <strong>${artigo.nome}</strong><br>
        <small>${artigo.meses} meses • R$ ${artigo.multa.toLocaleString('pt-BR')} • Fiança: ${artigo.fianca}</small>
      </label>
    `;

    const chk = div.querySelector("input");
    chk.addEventListener("change", (e) => {
      const idx = parseInt(e.target.dataset.idx, 10);
      if (e.target.checked) selecionados.add(idx);
      else selecionados.delete(idx);
      atualizarFicha();
    });

    lista.appendChild(div);
  });
}

// Campo de busca
pesquisa.addEventListener("input", (e) => {
  renderizarArtigos(e.target.value);
});

// ====== TROQUE O LISTENER DOS AJUSTES PARA O NOVO HANDLER ======
ajustes.forEach((el) => {
  el.addEventListener("change", onAjusteChange);
});

// Botão limpar
document.getElementById("limpar-ficha").addEventListener("click", () => {
  selecionados.clear();
  document.querySelectorAll(".ajuste").forEach(cb => { cb.checked = false; cb.disabled = false; });

  // Zera ficha
  document.getElementById("meses-sem").textContent = "0";
  document.getElementById("multa-sem").textContent = "R$ 0,00";
  document.getElementById("meses-com").textContent = "0";
  document.getElementById("multa-com").textContent = "R$ 0,00";
  document.getElementById("afiançavel").textContent = "-";
  document.getElementById("soma-atenuantes").textContent = "0%";
  document.getElementById("soma-agravantes").textContent = "0%";

  atualizarEstadoAtenuantes();
  renderizarArtigos(pesquisa.value || "");
});

// Render inicial + aplica estado inicial dos atenuantes
renderizarArtigos();
atualizarEstadoAtenuantes();