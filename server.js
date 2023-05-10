import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

// import 'express-async-errors'

import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
import connect from './db/connect.js'

// Middleware
app.use(express.json())

// TESTING
app.get("/", (req,res) =>{
    res.send("HOME")
})


// ROUTES
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/task", taskRouter)

const start = async () =>{
    try{
        await connect(process.env.DATABASE)
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () =>{
            console.log(`Running on ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start()
