import express from 'express'
import { AddResult, CompletedResults, GetResults } from '../controllers/results.js'

const router = express.Router()

router.post('/',AddResult )
router.get('/', GetResults)
router.post('/completed', CompletedResults)


export default router