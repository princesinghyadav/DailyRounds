const express = require("express")
const app= express()
// import cors from 'cors';
const cors =require('cors')
const connectDB =require('./config/db')
const apitodos =require('./routing/api.routing')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,               // if you use cookies / Authorization header
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS']
}));


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