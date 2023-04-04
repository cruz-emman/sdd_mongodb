import express from 'express'
import { AddUser, GetAllUsers } from '../controllers/user.js'

const router = express.Router()

router.post('/', AddUser)
router.get('/', GetAllUsers)

export default router