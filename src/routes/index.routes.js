import {Router} from 'express'
import indexController from '../controllers/index.controller.js'

const router = Router();

router.get('/', indexController.renderIndex)
router.get('/new', indexController.renderNew)

export default router