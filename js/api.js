import * as UI from './interfaz.js';
import { mostrarSpinner, limpiarHTML, mostrarMensaje } from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        
        mostrarSpinner();
        fetch(url)
            .then(response => response.json())
            .then(resultado => {
                limpiarHTML();
                if (resultado.lyrics) {
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics
                    UI.headingResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`
                   
                }else{
                    mostrarMensaje('La canción no existe, prueba con otra búsqueda');  
                    UI.headingResultado.textContent = '';                  
                }

            });
    }
}

export default API;