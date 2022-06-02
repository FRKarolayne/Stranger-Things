alert('Stranger Things :)')

    /* 
     OBEJETIVO 1- Quando a gente passar o mouse sob o personagem ele deve
     aparecer ao lado na sua forma maior. 

     - Assim, a classe selecionado passará para aquele que o mouse 
     está por cima.

     - Retirar a classe selecionado do personagem que está selecionado

     OBJETIVO 2 - Assim que passar o mouse no personagem a imagem e nome
     devem acompanhar o mouse.
     
        -Alterar nome e imagem do personagem / jogador 1
    */

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener ('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'Dustin') return;
     
     
const personagemSelecinado = document.querySelector('.selecionado')
       personagemSelecinado.classList.remove('selecionado')
       
       
        personagem.classList.add('selecionado')


const imagemJogador1 = document.getElementById('personagem-jogador-1');
imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

const nomeJogador1 = document.getElementById('nome-jogador-1');
const nomeSelecionado = personagem.getAttribute('data-name');
nomeJogador1.innerHTML = nomeSelecionado;



    });
 });


