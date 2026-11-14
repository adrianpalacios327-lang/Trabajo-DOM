let numeroClic = 0;

const contadorElemento = document.getElementById('contador');
const btnClic = document.getElementById('btnClic');
const tablaCuerpo = document.getElementById('tablaCuerpo');

btnClic.addEventListener('click', () => {
    numeroClic++;
    
    contadorElemento.textContent = numeroClic;
    
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${numeroClic}</td>
        <td>${horaFormateada}</td>
    `;
    
    tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
});