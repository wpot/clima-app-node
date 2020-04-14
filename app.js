const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para aobtener clima',
        demand: true
    }
}).argv;

// getLugarLatLng(argv.direccion)
//     .then(console.log)

// getClima(11.900000, -86.290001)
//     .then(console.log)
//     .catch(console.log);




const getInfo = async(direccion) => {

    try {
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    // let datos = await getLugarLatLng(direccion)
    //     .then(data => {

    //         let lat = data.lat;
    //         let lng = data.lng;
    //         let ciudad = data.direccion;
    //         let clima = getClima(lat, lng)


    //         return `El clima de ${ciudad} es de ${clima}`;
    //     })
    //     .catch(err => {
    //         return `No se pudo determinar el clima de ${direccion}`;
    //     })

    // return datos;




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)