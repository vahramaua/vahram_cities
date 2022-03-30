import Router from 'express'
import CityController from "./src/Controllers/CityController.js";
import CityService from "./src/Services/CityService.js";

const router = new Router()


router.delete('', CityController.delete)
router.post('/:zipCode/', CityController.store)
router.get('', CityController.index)
router.get('/:zipCode/', CityController.show)
router.patch('/:zipCode/', CityController.patch)

export default router
