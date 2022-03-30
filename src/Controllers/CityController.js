import express from 'express';
import asyncHandler from 'express-async-handler';

import CityService from "../Services/CityService.js";

class CityController {
    async delete(req, res, next) {
        const index = req.params['zipCode'];
        const service = new CityService;
        const result = service.removeCity(index);
        res.send(result);
    }

    async store(req, res) {
        const newCity = new CityService;
        const result = newCity.createCity(req.body);
        res.status(201).send(result);
    }

    async index(req, res) {
        const cities = new CityService;
        const result = cities.getAllCities()
        res.send(result);
    }

    async show(req, res, next) {
        const index = req.params['zipCode'];
        const service = new CityService;
        const result = service.getCityByZipCode(index)
        res.send(result);
    }

    async patch(req, res) {
        const service = new CityService
        const result = service.updateCity(req.params['zipCode'], req.body);
        res.send(result);
    }

}

export default new CityController()
