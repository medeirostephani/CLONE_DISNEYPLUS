document.addEventListener('DOMContentLoaded', function() { //quando o DOM terminou de carregar, executa a função
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todas as tags button

    for (let i = 0; i < buttons.length; i++) //passa por todos os botões selecionados
    buttons[i].addEventListener('click', function(botao) { //quando clicar no botao
        const abaAlvo = botao.target.dataset.tabButton; //obtem o valor do atributo do botao clicado
        const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //seleciona a aba correspondente ao valor obtido
        escondeTodasAbas (); //chama a função que esconde todas as abas
        aba.classList.add('shows__list--is-active'); //add classe is--active à aba correspondente
        removeBotaoAtivo(); //chama a função que remove o botão ativo
        botao.target.classList.add('shows__tabs__button--is-active') //add tag is--active ao botão correspondente
    })
}) 

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todas as tags button

    for (let i = 0; i < buttons.length; i++) //passa por todos os botões selecionados
        buttons[i].classList.remove('shows__tabs__button--is-active');
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]') //seleciona todas os ids

    for (let i = 0; i < tabsContainer.length; i++) { //passa por todas as ids
        tabsContainer[i].classList.remove('shows__list--is-active') //remover tag is-active
    }
}