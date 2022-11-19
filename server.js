const express = require('express');

const app = express();
const data1 = require('./Route/bollywood');

app.use('/home',data1)

app.get('/',(req,res)=>{
    res.write("hello port");
    res.end()
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server started...")
})
// app.listen(3000,()=>{
//    console.log("hello"); 
// })