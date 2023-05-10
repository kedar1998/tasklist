import User from '../models/user.js'
import { createCustomError } from '../error/customError.js'

const register = async (req,res,next) =>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        return next(createCustomError("Please provide all values", 400))
    }

    const userExists = await User.findOne({email})

    if(userExists){
        return next(createCustomError("Email already exists", 400))
    }

    const user = await User.create(req.body)

    const token = user.createJWT()

    res.json({
        user,
        token
    })
}

const login = async (req,res,next) =>{
    const {email, password} = req.body

    if(!email || !password){
        return next(createCustomError("Provide all values", 400))
    }

    const user = await User.findOne({email})

    if(!user){
        return next(createCustomError("Invalid credentials", 401))
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    
    if(!isPasswordCorrect){
        return next(createCustomError("Invalid credentials", 401))
    }

    const token = user.createJWT()

    user.password = undefined

    res.json({
        user,
        token
    })
}


export {register, login}