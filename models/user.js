import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide name"]
    },
    email: {
        type: String,
        require: [true, "Please provide email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please provide password"],
        minlength: 6,
    }
})


export default mongoose.model("User", userSchema)