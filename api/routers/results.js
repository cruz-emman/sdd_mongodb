import express from 'express'
import { AddResult, CompletedResults, GetResults, ResultQuestionChart, ResultQuestionChartEssay, ResultQuestionChartSuperAdmin } from '../controllers/results.js'

const router = express.Router()

router.post('/',AddResult )
router.get('/', GetResults)
router.post('/completed', CompletedResults)

//Charts

router.get('/resultChart', ResultQuestionChart)


//SuperAdmin

router.get('/resultChartSuperAdmin', ResultQuestionChartSuperAdmin)


//Get essay 
router.get('/resultEssay', ResultQuestionChartEssay)
export default router