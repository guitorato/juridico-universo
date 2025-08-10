
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
    { nome: "Invasão a Propriedade Privada", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Invasão ao Departamento de Polícia", meses: 140, multa: 750000, fianca: "Não" },
    { nome: "Latrocínio", meses: 75, multa: 300000, fianca: "Não" },
    { nome: "Lesão Corporal", meses: 35, multa: 90000, fianca: "Sim" },
    { nome: "Mal Uso de Arma de Fogo ráfico de Drogas", meses: 30, multa: 90000, fianca: "Não" },
    { nome: "Multas Pendentes", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Obstrução de Justiça", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Omissão de Socorro", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Participação de Corridas Clandestinas", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Peculato", meses: 40, multa: 90000, fianca: "Não" },
    { nome: "Perseguição", meses: 30, multa: 90000, fianca: "Não" },
    { nome: "Perturbação da Ordem Pública", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Poluição Sonora", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Porte de Algemas", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Porte de Arma Leve", meses: 30, multa: 60000, fianca: "Sim" },
    { nome: "Porte de Arma Pesada", meses: 45, multa: 135000, fianca: "Não" },
    { nome: "Porte de C4", meses: 30, multa: 90000, fianca: "Não" },
    { nome: "Porte de Drogas", meses: 30, multa: 90000, fianca: "Sim" },
    { nome: "Tentativa de Homicidio", meses: 40, multa: 150000, fianca: "Não" }
];

artigos.sort((a, b) => a.nome.localeCompare(b.nome));

const lista = document.getElementById("lista-artigos");
const pesquisa = document.getElementById("pesquisa");
const ajustes = document.querySelectorAll(".ajuste");

function atualizarFicha() {
    const checkboxes = document.querySelectorAll(".artigo input[type='checkbox']");
    let somaMeses = 0;
    let somaMulta = 0;
    let existeFiancaSim = false;
    let existeFiancaNao = false;

    checkboxes.forEach((chk) => {
        if (chk.checked) {
            const idx = parseInt(chk.dataset.idx);
            const artigo = artigos[idx];
            somaMeses += artigo.meses;
            somaMulta += artigo.multa;
            if (artigo.fianca === "Sim") existeFiancaSim = true;
            if (artigo.fianca === "Não") existeFiancaNao = true;
        }
    });

    let desconto = 0;
    let acrescimo = 0;

    ajustes.forEach((ajuste) => {
        if (ajuste.checked) {
            const valor = parseFloat(ajuste.value);
            if (ajuste.dataset.tipo === "atenuante") desconto += valor;
            else if (ajuste.dataset.tipo === "agravante") acrescimo += valor;
        }
    });

    const mesesDescontados = somaMeses * (1 - desconto / 100) * (1 + acrescimo / 100);
    const multaDescontada = somaMulta * (1 - desconto / 100) * (1 + acrescimo / 100);

    document.getElementById("meses-sem").textContent = somaMeses;
    document.getElementById("multa-sem").textContent = somaMulta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("meses-com").textContent = Math.round(mesesDescontados);
    document.getElementById("multa-com").textContent = multaDescontada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("afiançavel").textContent = existeFiancaSim ? "Sim" : (existeFiancaNao ? "Não" : "-");
}

function renderizarArtigos(filtro = "") {
    lista.innerHTML = "";
    const filtrados = artigos
        .filter(artigo => artigo.nome.toLowerCase().includes(filtro.toLowerCase()))
        .slice(0, 5);

    filtrados.forEach((artigo, visualIndex) => {
        const realIndex = artigos.findIndex(a => a.nome === artigo.nome); // índice original
        const div = document.createElement("div");
        div.className = "artigo";
        div.innerHTML = `
            <input type="checkbox" id="artigo-${realIndex}" data-idx="${realIndex}">
            <label for="artigo-${realIndex}">
                <strong>${artigo.nome}</strong><br>
                <small>${artigo.meses} meses • R$ ${artigo.multa.toLocaleString('pt-BR')} • Fiança: ${artigo.fianca}</small>
            </label>
        `;
        div.querySelector("input").addEventListener("change", atualizarFicha);
        lista.appendChild(div);
    });
}

pesquisa.addEventListener("input", (e) => {
    renderizarArtigos(e.target.value);
});

ajustes.forEach((el) => {
    el.addEventListener("change", atualizarFicha);
});

document.getElementById("limpar-ficha").addEventListener("click", () => {
    document.querySelectorAll(".artigo input[type='checkbox']").forEach(cb => cb.checked = false);
    ajustes.forEach(cb => cb.checked = false);
    document.getElementById("meses-sem").textContent = "0";
    document.getElementById("multa-sem").textContent = "R$ 0,00";
    document.getElementById("meses-com").textContent = "0";
    document.getElementById("multa-com").textContent = "R$ 0,00";
    document.getElementById("afiançavel").textContent = "-";
});

renderizarArtigos();