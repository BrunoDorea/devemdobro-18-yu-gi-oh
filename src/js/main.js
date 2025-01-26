const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
const cards = document.querySelectorAll(".card")
let cardAtual = 0

btnAvancar.addEventListener("click", function () {
    if (cardAtual === cards.length - 1) return
    esconderCardSelecionado()
    cardAtual++
    mostrarCard(cardAtual)
})

btnVoltar.addEventListener("click", function () {
    if (cardAtual === 0) return
    esconderCardSelecionado()
    cardAtual--
    mostrarCard(cardAtual)
})

function mostrarCard(cardAtual) {
    cards[cardAtual].classList.add("selecionado")
}

function esconderCardSelecionado() {
    const cardSelecionado = document.querySelector(".selecionado")
    cardSelecionado.classList.remove("selecionado")
}