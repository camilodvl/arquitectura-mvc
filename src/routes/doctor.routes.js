import {Router} from 'express'
import doctorController from '../controllers/doctor.controller.js';

const routerDoctor = Router();

routerDoctor.get('/doctores', doctorController.renderDoctor)
routerDoctor.get('/doctor/new', doctorController.renderNew)
routerDoctor.post('/doctor/new', doctorController.createNewDoctor)

export default routerDoctor