import express from 'express'
const app = express()

app.get("/", (req,res) =>{
    res.send("HOME")
})

const PORT = 4000
app.listen(PORT, () =>{
    console.log(`Running on ${PORT}`);
})