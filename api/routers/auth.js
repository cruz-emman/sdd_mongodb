import express from 'express'
import { LoginAdmin, LoginUser } from '../controllers/auth.js'

const router = express.Router()

router.post('/', LoginAdmin)
router.post('/user', LoginUser)


export default router