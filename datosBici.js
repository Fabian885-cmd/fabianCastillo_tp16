const fs = require('fs');

const rutaArchivo = './bicicletas.json';

function obtenerBicicletas(){
    try{
        const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
        const bicicletas = JSON.parse(contenido);
        return bicicletas;
    }
    catch(error) {
        console.error('Error al leer el archivo', error);
        return [];
    }
}

module.exports = obtenerBicicletas;