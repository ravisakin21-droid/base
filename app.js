const input = document.querySelector('#inputTarefa');
const btnAdicionar = document.querySelector('#btnAdicionar');
const lista = document.querySelector('#listaTarefas');

btnAdicionar.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    // Criar o item da lista
    const li = document.createElement('li');
    
    // Criar o span com o texto
    const spanTexto = document.createElement('span');
    spanTexto.className = 'texto-tarefa';
    spanTexto.textContent = texto;

    // Container para os botões
    const divAcoes = document.createElement('div');
    divAcoes.className = 'acoes';

    // Botão de Riscar/Concluir
    const btnConcluir = document.createElement('button');
    btnConcluir.className = 'btn-acao';
    btnConcluir.textContent = '✔️';
    btnConcluir.addEventListener('click', () => {
        spanTexto.style.textDecoration = 
            spanTexto.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        spanTexto.style.color = 
            spanTexto.style.textDecoration === 'line-through' ? '#888' : '#000';
    });

    // Botão de Remover
    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-acao';
    btnRemover.textContent = '❌';
    btnRemover.addEventListener('click', () => {
        li.remove();
    });

    // Montar a estrutura na tela
    divAcoes.appendChild(btnConcluir);
    divAcoes.appendChild(btnRemover);
    li.appendChild(spanTexto);
    li.appendChild(divAcoes);
    lista.appendChild(li);

    // Limpar o input
    input.value = '';
});

// Permite adicionar a tarefa ao pressionar a tecla Enter
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btnAdicionar.click(); // Simula o clique no botão de adicionar
    }
});

// Permite editar o texto ao dar duplo clique na tarefa
spanTexto.addEventListener('dblclick', () => {
    const novoTexto = prompt('Edite sua tarefa:', spanTexto.textContent);
    
    // Se o usuário digitou algo e não cancelou
    if (novoTexto !== null && novoTexto.trim() !== '') {
        spanTexto.textContent = novoTexto.trim();
    }
});

const btnClique = document.querySelector('#meuBotao');
const container = document.querySelector('.container');

// Duplo clique altera a cor do container
btnClique.addEventListener('dblclick', () => {
    container.style.backgroundColor = '#e8f5e9'; // Fica verde claro
    
    // Volta para a cor original depois de 1.5 segundos
    setTimeout(() => {
        container.style.backgroundColor = '#ffffff';
    }, 1500);
});