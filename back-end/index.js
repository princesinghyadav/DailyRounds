const express = require("express")
const app= express()
const connectDB =require('./config/db')
const apitodos =require('./routing/api.routing')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('this is a home page of main  section .'

    )
})

app.use('/api',apitodos)


app.listen(2026,()=>{
    try {
        connectDB()
        console.log('server is listening on port 2026');
    } catch (error) {
        console.log(error)
    }
})