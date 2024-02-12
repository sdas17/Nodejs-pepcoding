const express = require('express');
let app =express();
app.use(express.json())
app.listen(3000);
let user={}

app.get("/demo",(req,res)=>{
    res.send(user)
})
app.post("/post",(req,res)=>{
    console.log(req.body);
    res.json({
        message:'sucessfull submit',
        user:req.body
    })

})
app.patch("/user",(req,res)=>{
    console.log(req.body);
    let userdemo=req.body;
    for (const key in userdemo) {
        user[key]=userdemo[key]
        
    }
    res.json({
        message:'sucessfull submit',
    })
})
app.delete("/delte",(req,res)=>{
    let user ={}
    res.json({
        message:'sucess fully delteed ',
    })

})