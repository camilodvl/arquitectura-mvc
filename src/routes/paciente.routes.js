import {Router} from 'express'
import pacienteController from '../controllers/paciente.controller.js';

const routerPaciente = Router();

routerPaciente.get('/paciente', pacienteController.renderPaciente)
routerPaciente.get('/paciente/new', pacienteController.renderNew)
routerPaciente.post('/paciente/new', pacienteController.createNewPaciente)

export default routerPaciente