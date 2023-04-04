import User from "../model/User.js";


export const AddUser = async (req,res) =>{
    const {firstName, lastName, middleName, suffix, email, type, password} = req.body;

    if(!firstName || !lastName || !email || !type ) 
    return res.status(400).json("Please add all fields")

    try {
        const newUser = new User({
            firstName,
            lastName,
            middleName,
            suffix,
            email,
            type,
            password
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error:error.message});

    }
}

export const GetAllUsers = async (req,res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
