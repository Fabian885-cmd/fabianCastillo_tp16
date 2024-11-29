const obtenerBicicletas = require('./datosBici');
const bicicletas = obtenerBicicletas();

const dhBici = {
    bicicletas,

    buscarBici(id){
        const biciEncontrada = this.bicicletas.filter((bici) => bici.id === id);
        return biciEncontrada.length > 0 ? biciEncontrada[0] : null;
    },

    venderBici(id) {
        const bici = this.buscarBici(id);
        if(bici){
            bici.vedida = true;
            return bici;
        }
        else{
            return 'Biicicleta no encontrada';
        }
    },

    biciParaLaVenta(){
        return this.bicicletas.filter((bici) => !bici.vendida);
    },

    totalDeVentas(){
        return this.bicicletas
            .filter((bici) => bici.vendida)
            .reduce((acumulador, bici) => acumulador + bici.precio, 0);
    },
};

console.log('Listado de bicicletas:');
console.log(dhBici.bicicletas);
console.log('-----------------------------');

console.log('Buscar bicicleta con ID 2:');
console.log(dhBici.buscarBici(2));
console.log('-----------------------------');

console.log('Vender bicicleta con ID 3:');
console.log(dhBici.venderBici(3));
console.log('-----------------------------');

console.log('Bicicletas para la venta:');
console.log(dhBici.biciParaLaVenta());
console.log('-----------------------------');

console.log('Total de ventas:');
console.log(`$${dhBici.totalDeVentas()}`);