const express = require("express")
const app = express() ;
const PORT = 8080 ;
const mongoose = require("mongoose")
const cors = require("cors")
const model = require("./model/auth")



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://admin:admin@cluster0.tizqsty.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected',()=>{
    console.log('connected')
})
mongoose.connection.on('error',(err)=>{
    console.log('error',err)
})


app.post("/"  , (req,res)=>{

const {email , password} = req.body

   
const userobj = {
    email,
    password
} 

    model.create(userobj , (err,data)=>{
        if(err){
            res.send(err)
            
        }else{
            res.send(data)
        }
    })

})


app.post("/login" , (req,res)=>{

    const {email , password} = req.body
    
   model.findOne({
       email:email
   } , (err,data)=>{
    if(err){
        res.send(err)
        console.log("error")
        
    }else if(data){
        res.send(data)
        console.log("SuccessFul Logged In")
    }
else{
    console.log("invalid user")
}
   })


} )







app.listen(PORT , ()=>{
    console.log(`server is listening on ${PORT}`)
})