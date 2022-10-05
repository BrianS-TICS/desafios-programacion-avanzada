
const contadorBtn = document.querySelector('#contador-btn');
contadorBtn.addEventListener('click', () => {
    const contadorH2 = document.querySelector('#contador-h2');
    let numero = Number(contadorH2.textContent);
    contadorH2.textContent = generarContador(numero);
});

function generarContador(valor) {
    return valor += 1;
}

// Aleternativa usando clousure
// function generarContador(valor) {
//     return () => valor += 1;
// }