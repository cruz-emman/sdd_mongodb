import express from 'express'
import { AddResult, GetResults } from '../controllers/results.js'

const router = express.Router()

router.post('/',AddResult )
router.get('/', GetResults)


export default router