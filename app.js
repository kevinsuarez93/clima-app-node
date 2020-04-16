const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para btener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))

// clima.getClima(11.690000, -84.459999)
//     .then(resp => console.log(resp))
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const cordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `El clima de ${cordenadas.direccion} es de ${temperatura}`
    } catch (error) {
        return `No se pudo determinar el clima de  ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(resp => { console.log(resp) })
    .catch(err => { console.log(err) })