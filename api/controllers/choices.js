import Choices from "../model/Choices.js";

export const getAllChoices = async(req,res) => {
    try {
        const choices = await Choices.find()
        res.status(200).json(choices)
    } catch (error) {
        res.status(404).json(error)
    }
}
