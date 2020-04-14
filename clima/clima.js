const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cca5869d54f305883f9a3d15adfdbbcb&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}