// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

// OBJETIVO 1 - Passo 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - Passo 1 - pegar os personagens no JS para poder mostrar ou esconder ele
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // OBJETIVO 1 - Passo 2 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();

        // OBJETIVO 2 - Passo 2 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();

        // OBJETIVO 1 - Passo 3 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");
        // OBJETIVO 2 - Passo 3 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
