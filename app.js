const obtenerBicicletas = require('./datosBici');

const bicicletas = obtenerBicicletas();

bicicletas.forEach((bici) => {
    console.log(`ID: ${bici.id}`);
    console.log(`Marca: ${bici.marca}`);
    console.log(`Modelo: ${bici.modelo}`);
    console.log(`Rodado: ${bici.rodado}`);
    console.log(`Año: ${bici.anio}`);
    console.log(`Color: ${bici.color}`);
    console.log(`Peso: ${bici.peso} kg`);
    console.log(`Tipo: ${bici.tipo}`);
    console.log(`Precio: $${bici.precio}`);
    console.log(`Vendida: ${bici.vendida ? 'Sí' : 'No'}`);
    console.log('-----------------------------');
});