const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

// Botoes
const botaoIniciar = document.querySelector('.app__card-primary-button');
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

// Onde serão manipulados
const html = document.querySelector('html');
const timer = document.querySelector('#timer');
const image = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    image.setAttribute('src', `/imagens/${contexto}.png`);

    switch(contexto) {
        case 'foco':
            title.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            title.innerHTML = `
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta</strong>
            `;
            break;
        case 'descanso-longo':
            title.innerHTML = `
                Hora de voltar à superfície! <br>
                <strong class="app__title-strong">Faça uma pausa mais longa</strong
            `;
            break;

        default:
            break;
    }
}