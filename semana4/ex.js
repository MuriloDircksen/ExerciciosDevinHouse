const lista = document.getElementById('lista');
const dados = [
    {
        nome: 'Jonathas',
        imagem: 'https://cdn-icons-png.flaticon.com/512/3658/3658773.png',
        frase: 'Olá, mundo!'
    },
    {
        nome: 'Willian',
        imagem: 'https://cdn-icons-png.flaticon.com/512/3658/3658773.png',
        frase: 'A vingança nunca é plena mata a alma e envenena'
    }];


dados.forEach(element => {
    const item = document.createElement('li');
    const imagem = document.createElement('img');
    const span = document.createElement('p');
    const frase = document.createElement('p');

    imagem.src = 'https://cdn-icons-png.flaticon.com/512/3658/3658773.png';
    imagem.width = 50;
    span.innerText = element.nome;
    frase.innerText = element.frase;
    item.appendChild(imagem);
    item.appendChild(span);
    item.appendChild(frase);
    lista.appendChild(item);
})