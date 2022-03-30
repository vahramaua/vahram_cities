import NotFound from "../Errors/NotFoundError.js";
import City from "../Repositories/CityRepository.js";

class CityService {
    async removeCity(index) {
        const city = new City();
        const getCity = city.getCityDataByZipCode(index)

        return getCity.remove();
    }
    async createCity (data) {
        const city = new City();
        return city.getCityDataByZipCode(data);
    }

    async getAllCities() {
        const city = new City()

        return city.getCityDataByZipCode();
    }

    async getCityByZipCode(zipCode) {
        const city = new City();
        const getCity = city.getCityDataByZipCode(zipCode);
        if (!getCity) {
            throw new NotFound(`No cities found`);
        }
        return getCity;
    }

    async updateCity(zipCode, toUpdate) {
        const city = await this.getCityDataByZipCode(zipCode);
        city.set(toUpdate);
        return city.save();
    }
}
export default CityService
