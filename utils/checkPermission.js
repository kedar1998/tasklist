import { createCustomError } from "../error/customError.js"

const checkPermission = (requestUser, resourceUser, next) =>{
    if(requestUser == resourceUser){
        return
    }

    next(createCustomError("Unauthorize", 401))
}

export default checkPermission