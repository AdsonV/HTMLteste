function adicionar(){

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let dataentrada = document.getElementById('dataEntrada').value.trim();
    let datasaida = document.getElementById('dataSaida').value.trim();
    let obs = document.getElementById('obs').value.trim();
    let adultos = document.getElementById('adultos').value.trim();
    let criancas = document.getElementById('criancas').value.trim();

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
    window.location.href = 'tabela.html';

    var form = document.getElementById("formulario");
    form.reset();
})};