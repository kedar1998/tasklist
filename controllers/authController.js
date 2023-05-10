import User from '../models/user.js'


const register = async (req,res) =>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        throw new Error("Please provide all values")
    }

    const userExists = await User.findOne({email})

    if(userExists){
        throw new Error("Email already exists")
    }

    const user = await User.create(req.body)

    res.json({
        user
    })
}

const login = async (req,res) =>{
    const {email, password} = req.body

    if(!email || !password){
        throw new Error("Provide all values")
    }

    const user = await User.findOne({email})

    if(!user){
        throw new Error("Invalid credentials")
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    
    if(!isPasswordCorrect){
        throw new Error("Invalid credentials")
    }

    res.json({
        user
    })
}


export {register, login}