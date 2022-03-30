import axios from 'axios';
import { get } from 'express/lib/response'

class City {
    async getCityDataByZipCode(zipCode) {
        const city = await axios.get('https://api.zippopotam.us/us/{zipCode}')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () { }
            );
        return city.data;
    }
}

export default City
