import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide task name"],
        minlength: 2,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide user']
    }
}, {timestamps: true})

export default mongoose.model("Task", taskSchema)