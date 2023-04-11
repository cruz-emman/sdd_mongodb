import express from 'express'
import { AddResult, CompletedResults, GetResults, ResultQuestionChart } from '../controllers/results.js'

const router = express.Router()

router.post('/',AddResult )
router.get('/', GetResults)
router.post('/completed', CompletedResults)

//Charts

router.get('/resultChart', ResultQuestionChart)
export default router