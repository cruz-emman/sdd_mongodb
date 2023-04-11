import mongoose from "mongoose";
const {Schema} = mongoose;

const CompletedSchema = new Schema({
    email : {type: String},
    category:{
        type:String,
    },
    affiliation:{
        type: String,
    },
},   { timestamps: true },
)

const Completed= mongoose.model('Completed', CompletedSchema)

export default  Completed