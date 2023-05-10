import { customError } from "../error/customError.js"

const errorHandlerMiddleware = (err,req,res,next) =>{

    if(err instanceof customError){
        return res.status(err.statusCode).json({
            msg: err.message
        })
    }
    
    return res.status(500).json({
        msg: "Something went wrong"
    })

}

export default errorHandlerMiddleware