let estaDigitando = false;
let cliqueParaAvancar = false;
let textoCompleto = "";
let digitarTimer = null;
let avancarCallback = null;

function resetarJogo() {
  if (confirm("Tem certeza que deseja apagar o progresso e reiniciar o jogo?")) {
    localStorage.removeItem("nomeJogador");
    localStorage.removeItem("sobrenomeJogador");
    localStorage.removeItem("cenaAtual");
    localStorage.removeItem("afinidade");
    localStorage.removeItem("malicia");
    localStorage.removeItem("forca");
    location.reload();
  }
}

let nomeJogador = localStorage.getItem("nomeJogador");
let sobrenomeJogador = localStorage.getItem("sobrenomeJogador");
let cenaAtual = localStorage.getItem("cenaAtual") || "inicio";

let afinidade = JSON.parse(localStorage.getItem("afinidade")) || {
  Sara: 0,
  Juliana: 0,
  Amanda: 0,
  Renata: 0,
  Carlos: 0,
  Eduardo: 0,
  Bruno: 0,
  Alfreda: 0,
  Marcos: 0
};

let malicia = JSON.parse(localStorage.getItem("malicia")) || { malicia: 0 };
let forca = JSON.parse(localStorage.getItem("forca")) || { forca: 0 };

function alterarAfinidade(personagem, valor) {
  if (afinidade[personagem] !== undefined) {
    afinidade[personagem] += valor;
    localStorage.setItem("afinidade", JSON.stringify(afinidade));
  }
}

const imagemCena = document.getElementById("imagem-cena");
const textoDiv = document.getElementById("texto");
const opcoesDiv = document.getElementById("opcoes");
const telaNome = document.getElementById("tela-nome");
const game = document.getElementById("game");

if (!nomeJogador || !sobrenomeJogador) {
  telaNome.style.display = "block";
  game.style.display = "none";
} else {
  telaNome.style.display = "none";
  iniciarJogo();
}

function salvarNome() {
  const inputNome = document.getElementById("input-nome");
  const inputSobrenome = document.getElementById("input-sobrenome");

  const nome = inputNome.value.trim();
  const sobrenome = inputSobrenome.value.trim();

  const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
  const sobrenomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(sobrenome);

  if (!nomeValido || !sobrenomeValido) {
    alert("Digite nome e sobrenome válidos, apenas com letras.");
    return;
  }

  nomeJogador = nome;
  sobrenomeJogador = sobrenome;

  localStorage.setItem("nomeJogador", nome);
  localStorage.setItem("sobrenomeJogador", sobrenome);

  telaNome.style.display = "none";
  iniciarJogo();
}

function iniciarJogo() {
  game.style.display = "flex";
  mostrarCena(cenaAtual);
}

function mostrarCena(id) {
  const cena = cenas.find(c => c.id === id);
  if (!cena) return;

  localStorage.setItem("cenaAtual", id);

  imagemCena.src = cena.imagem || "";
  imagemCena.style.display = cena.imagem ? "block" : "none";

  textoDiv.innerHTML = "";
  opcoesDiv.innerHTML = "";
  estaDigitando = true;

  const blocos = Array.isArray(cena.texto) ? cena.texto : [cena.texto];
  let indice = 0;

  if (cena.som) {
    const audio = new Audio(cena.som);
    audio.play();
  }

  if (cena.tempo && cena.proxima) {
    setTimeout(() => mostrarCena(cena.proxima), cena.tempo);
    return;
  }

  function mostrarProximoBloco() {
    if (indice < blocos.length) {
      textoDiv.innerHTML = "";
      const texto = blocos[indice++]
        .replace(/\{\{nome\}\}/g, nomeJogador)
        .replace(/\{\{sobrenome\}\}/g, sobrenomeJogador);
      digitarTexto(texto, textoDiv, 20, mostrarProximoBloco);
    } else {
      estaDigitando = false;
      mostrarOpcoes(cena.opcoes);
    }
  }

  mostrarProximoBloco();
}

function mostrarOpcoes(opcoes) {
  opcoesDiv.innerHTML = "";
  opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = typeof opcao === "string" ? opcao : opcao.texto;

    botao.onclick = () => {
      if (estaDigitando) return;
      if (typeof opcao !== "string" && opcao.acao) {
        opcao.acao();
      }
      const proxima = typeof opcao === "string" ? cena.proxima : opcao.proxima;
      mostrarCena(proxima);
    };

    opcoesDiv.appendChild(botao);
  });
}

function digitarTexto(texto, elemento, delay = 20, callback = null) {
  estaDigitando = true;
  cliqueParaAvancar = false;
  textoCompleto = texto;
  avancarCallback = callback;
  let i = 0;
  elemento.innerHTML = "";

  function digitar() {
    if (i < texto.length) {
      elemento.innerHTML += texto[i++];
      digitarTimer = setTimeout(digitar, delay);
    } else {
      estaDigitando = false;
      cliqueParaAvancar = true;
    }
  }

  digitar();
}

function mostrarTextoExtra(blocos, proximaCenaId) {
  estaDigitando = true;
  textoDiv.innerHTML = "";
  opcoesDiv.innerHTML = "";

  let indice = 0;

  function mostrarProximoBloco() {
    if (indice < blocos.length) {
      textoDiv.innerHTML = "";
      const texto = blocos[indice++]
        .replace(/\{\{nome\}\}/g, nomeJogador)
        .replace(/\{\{sobrenome\}\}/g, sobrenomeJogador);
      digitarTexto(texto, textoDiv, 20, mostrarProximoBloco);
    } else {
      estaDigitando = false;
      setTimeout(() => mostrarCena(proximaCenaId), 300);
    }
  }

  mostrarProximoBloco();
}

document.addEventListener("click", avancarTexto);
document.addEventListener("touchstart", avancarTexto);

function avancarTexto() {
  if (estaDigitando) {
    clearTimeout(digitarTimer);
    textoDiv.innerHTML = textoCompleto;
    estaDigitando = false;
    cliqueParaAvancar = true;
  } else if (cliqueParaAvancar && avancarCallback) {
    cliqueParaAvancar = false;
    avancarCallback();
  }
}
