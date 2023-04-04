import express from 'express'
import { AddQuestion, DeleteQuestion, EditQuestion, GetAllQuestions } from '../controllers/question.js'

const router = express.Router()

router.post('/', AddQuestion)
router.delete('/:id', DeleteQuestion)
router.put('/:id', EditQuestion)
router.get('/', GetAllQuestions)
export default router