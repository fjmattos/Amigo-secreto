//Cria a variável nome e uma lista para armazenamento
let nomes = [];
const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 
//Cria função adicionar amigo
function adicionarAmigo() {
    const nome = amigoInput.value.trim();
    
    //Verifica e informa se o campo "nome" não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    
    //Verifica se o "nome" já consta na lista e informa
    if (nomes.some(item => item.toLowerCase() === nome.toLowerCase())) {
        alert('Esse nome já foi adicionado!');
        return;
    }
    
    //Adiciona "nome" a lista
    nomes.push(nome);
    
    //Exibi "nome" adicionado à tela
    const itemLista = document.createElement('li');
    itemLista.textContent = nome;
    listaAmigos.appendChild(itemLista);
    
    //Limpa o campo "nome" após adicionado
    amigoInput.value = '';
}
//Sorteia um "nome" da lista
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    
    //Limpa o resultado anterior para um novo sorteio
    resultado.innerHTML = '';
    
    //Sorteia um "nome" aleatório do índice
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
    
    //Adiciona "nome" sorteado a lista para evitar repetição
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo sorteado é: ${nomeSorteado}`;
    resultado.appendChild(itemResultado);
}