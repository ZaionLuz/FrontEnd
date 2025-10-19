let contador = 0;
const botao = document.getElementById('contadorBtn');
const display = document.getElementById('contador');

botao.addEventListener('click', () => {
    contador++;
    display.textContent = contador;
});
