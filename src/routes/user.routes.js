import express from 'express'
import userController from '../controller/user.controller.js'

const router = express.Router()

router.get('/getAllUsers',userController.getAllUsers)
router.get('/getUserById/:id',userController.getUserById)
router.post('/createUser',userController.createUser)
router.delete('/deleteUserById/:id',userController.deleteUserById)
router.put('/editUserById/:id',userController.editUserById)


export default router