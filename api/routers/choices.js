import express from 'express'
import { getAllChoices } from '../controllers/choices.js'

const router = express.Router()

router.get('/', getAllChoices)

export default router