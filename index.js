function adicionar(){

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dataentrada = document.getElementById('dataEntrada').value;
    let datasaida = document.getElementById('dataSaida').value;
    let obs = document.getElementById('obs').value;
    let adultos = document.getElementById('adultos').value;
    let criancas = document.getElementById('criancas').value;

    let dados = {
        nome: nome,
        email: email,
        dataentrada: dataentrada,
        datasaida: datasaida,
        obs: obs,
        adultos: adultos,
        criancas: criancas
    };

    fetch('http://localhost:3000/formularios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    localStorage.setItem('dados', JSON.stringify(dados));
    alert("Deu certo!")
    window.location.href = 'tabela.html';

    var form = document.getElementById("formulario");
    form.reset();
})};

function tabela(){
const table = document.getElementById('table');

const dados = JSON.parse(localStorage.getItem('dados'));

const linha = document.createElement('tr');
linha.innerHTML = `
    <td>${dados.nome}</td>
    <td>${dados.email}</td>
    <td>${dados.dataentrada}</td>
    <td>${dados.datasaida}</td>
    <td>${dados.obs}</td>
    <td>${dados.adultos}</td>
    <td>${dados.criancas}</td>
`;

table.appendChild(linha);
}