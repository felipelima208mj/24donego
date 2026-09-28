// ================================
// ABRIR CONVITE
// ================================

const abrirConvite = document.getElementById("abrirConvite");
const telaInicial = document.getElementById("telaInicial");
const conteudo = document.getElementById("conteudo");
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");

abrirConvite.addEventListener("click", () => {

    telaInicial.style.display = "none";

    conteudo.classList.add("ativo");

    musica.play()
        .then(() => {
            botaoMusica.innerHTML = "🔊";
        })
        .catch(() => {
            botaoMusica.innerHTML = "🔇";
        });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// CONTROLE DA MÚSICA
// ================================

botaoMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();

        botaoMusica.innerHTML = "🔊";

    } else {

        musica.pause();

        botaoMusica.innerHTML = "🔇";

    }

});


// ================================
// CONTAGEM REGRESSIVA
// 24/10/2026 às 16:00
// Horário de Brasília
// ================================

const dataFesta = new Date("2026-10-24T16:00:00-03:00");

function atualizarContagem() {

    const agora = new Date();

    const diferenca = dataFesta - agora;

    if (diferenca <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


atualizarContagem();

setInterval(atualizarContagem, 1000);