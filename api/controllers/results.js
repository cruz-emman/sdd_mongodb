import Results from '../model/Result.js'

export const AddResult = async (req,res) =>{
    const {choice, category, part, essay, affiliation,email} = req.body

    try {
        const newResult = new Results({
            choice,
            category,
            part,
            essay,
            affiliation,
            email
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