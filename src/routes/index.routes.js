import {Router} from 'express'
import indexController from '../controllers/index.controller.js'

const router = Router();

router.get('/', indexController.renderIndex)
router.get('/testing', indexController.rendertest)

export default router