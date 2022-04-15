import API from './api.js';
import * as UI from './interfaz.js';
import {mostrarMensaje} from './interfaz.js'

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // El usuario dejo al menos un campo vacio
        mostrarMensaje('Error... Todos los campos son obligatorios');
        return;
    }
    // Consultar API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}