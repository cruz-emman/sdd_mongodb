import express from 'express'
import { AddComplete, GetComplete, GetRecentSurvey, GetRecentSurveyByUser, GetTotalByAffilation } from '../controllers/completed.js'

const router = express.Router()

router.post('/', AddComplete)
router.get('/',GetComplete)
router.get('/getTotalAffiliation', GetTotalByAffilation)
router.get('/getRecentSurvey', GetRecentSurvey)
router.get('/getSurveyByUser', GetRecentSurveyByUser)
router.get('/GetComplete',GetComplete)

export default router