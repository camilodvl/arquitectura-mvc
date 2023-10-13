import {Router} from 'express'
import indexController from '../controllers/index.controller.js'

const routerIndex = Router();

routerIndex.get('/', indexController.renderIndex)
routerIndex.get('/new', indexController.renderNew)
routerIndex.post('/new', indexController.saveCita)

export default routerIndex