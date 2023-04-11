import Results from '../model/Result.js'

export const AddResult = async (req,res) =>{
    const {choice, category, part, essay, affiliation,email, question_order} = req.body

    try {
        const newResult = new Results({
            choice,
            category,
            part,
            essay,
            affiliation,
            email,
            question_order
        })
        const savedResult = await newResult.save()
        res.status(200).json(savedResult)
    } catch (error) {
        res.status(400).json(error);
 
    }
}

export const GetResults = async (req,res) =>{
    try {
        const results = await Results.find()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error);
    }
}

export const CompletedResults = async (req,res) =>{
    const email = req.query.email

    try {
        const results = await Results.updateMany({email: email}, {$set: {status: true}})
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
    }
}

//Charts

export const ResultQuestionChart = async (req,res) =>{
    const question_order = req.query.question_order
    const affiliate = req.query.affiliate
    
    try {
        //const results = await Results.find({question_order: question_order, affiliation: affiliate})
        const results = await Results.find({question_order: question_order, affiliation: affiliate})
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)

    }
}