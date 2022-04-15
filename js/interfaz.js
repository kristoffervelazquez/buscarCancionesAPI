export const formulario = document.querySelector('#formulario-buscar'),
    divBuscar = document.querySelector('#buscar'),
    divMensajes = document.querySelector('#mensajes'),
    divResultado = document.querySelector('#resultado'),
    headingResultado = document.querySelector('.letra-resultado h2');
    




export function mostrarMensaje(mensaje) {
    divMensajes.textContent = mensaje;
    divMensajes.classList.add('error');

    setTimeout(() => {
        divMensajes.textContent = ''
        divMensajes.classList.remove('error');
    }, 3000)
}

export function mostrarSpinner() {
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-chase');
    divSpinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `

    divResultado.appendChild(divSpinner);
}

export function limpiarHTML(){
    while(divResultado.firstChild){
        divResultado.removeChild(divResultado.firstChild);
        divResultado.innerHTML = '';
    }
}

