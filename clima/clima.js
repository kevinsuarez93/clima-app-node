const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bbcd54929e9618d8a4d730caed266d54&units=metric`)

    return resp.data.main.temp;
}

module.exports = {

    getClima
}