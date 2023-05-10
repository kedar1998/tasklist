import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide name"]
    },
    email: {
        type: String,
        require: [true, "Please provide email"],
        unique: true,
        validate: {
            validator: validator.isEmail,
            msg: 'Please provide valid email'
        }
    },
    password: {
        type: String,
        require: [true, "Please provide password"],
    }
})

userSchema.pre("save", async function(){
    let salt = await bcrypt.genSalt(8)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(providedPassword){
    return await bcrypt.compare(providedPassword, this.password)
}


export default mongoose.model("User", userSchema)