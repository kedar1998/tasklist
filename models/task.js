import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide task name"],
        minlength: 2,
    }
})

export default mongoose.model("Task", taskSchema)