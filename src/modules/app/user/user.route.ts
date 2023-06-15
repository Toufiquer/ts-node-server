import { Router } from 'express'
import { createUserController } from './user.controller'

const router = Router()
router.post('/add', createUserController)

export default router
