import express from 'express'
import {getHome} from '../controller/index.controller.js'
import userRoutes from './user.routes.js'

const router = express.Router()

router.get('/',getHome)
router.use('/user',userRoutes)

export default router