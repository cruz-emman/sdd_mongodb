import express from 'express'
import { AddComplete, GetComplete } from '../controllers/completed.js'

const router = express.Router()

router.post('/', AddComplete)
router.get('/',GetComplete)

export default router