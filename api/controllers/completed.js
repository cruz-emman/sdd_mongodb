import Completed from "../model/CompletedSurvey.js";

export const AddComplete = async (req,res) =>{
    const {email, affiliation, category} = req.body

    try {
        const newCompleted = new Completed({
            email,
            affiliation,
            category,
        })
        
        const savedNewCompleted = await newCompleted.save()
        res.status(200).json(savedNewCompleted)
    } catch (error) {
        res.statusd(400).json({error})
    }

}

export const GetComplete = async (req,res) =>{
    try {
        const completed = await Completed.find()
        res.status(200).json(completed)
    } catch (error) {
        res.status(400).json(error)
    }
}