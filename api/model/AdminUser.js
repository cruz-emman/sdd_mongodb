import mongoose from "mongoose";
const {Schema} = mongoose;

const AdminUserSchema = new Schema({
    firstName: {
        type: String, 
        required: [true, 'Please enter your first name']
    },
    middleName: {
        type: String, 
    },
    lastName: {
        type: String, 
        required: [true, 'Please enter your middle name']
    },
    suffix: {
        type: String,
    },
    password: {
        type: String,
        default: 'ChangeMe!23'
    },
    type: {
        type: String,
        enum: ['faculty', 'employee', 'users'],
        required: [true, 'Please select a category type']    
    },
    email: {
        type: String, 
        required: [true, 'Please enter your email address'],
        unique: true,
        index: true
    }, 
    affiliation:{
        type: String,
        enum: ['ppsc_employee','npc_employee','njmpti_employee','nfti_employee','nfsti_employee','ppsa_employee','ppsc_faculty','npc_faculty','njmpti_faculty','nfti_faculty','nfsti_faculty','ppsa_faculty','ppsc_students','npc_students','njmpti_students','nfti_students','nfsti_students','ppsa_students']
    }
})

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);

export default AdminUser;