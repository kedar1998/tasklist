import jwt from 'jsonwebtoken'
import {createCustomError} from '../error/customError.js'


const authenticate = (req,res,next) =>{

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return next(createCustomError('Authentication Invalid', 403))
    }

    const token = authHeader.split(" ")[1]

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next()
    }
    catch(err){
        return next(createCustomError('Authentication Invalid', 403))
    }

}

export default authenticate