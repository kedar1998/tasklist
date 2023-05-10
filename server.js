import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

// import 'express-async-errors'

import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
import connect from './db/connect.js'

import notFoundMiddleware from './middleware/notFoundMiddleware.js'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

import authenticate from './middleware/authenticate.js'

// Middleware
app.use(express.json())

// TESTING
app.get("/", (req,res) =>{
    res.send("HOME")
})


// ROUTES
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/task", authenticate, taskRouter)



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 4000
const start = async () =>{
    try{
        await connect(process.env.DATABASE)
        app.listen(PORT, () =>{
            console.log(`Running on ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start()
