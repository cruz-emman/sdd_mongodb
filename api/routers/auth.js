import express from 'express'
import { LoginAdmin } from '../controllers/auth.js'

const router = express.Router()

router.post('/', LoginAdmin)


export default router