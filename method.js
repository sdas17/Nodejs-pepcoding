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
let users =[
    {
        "id":1,
        "name":"subham"
    },
    {
        "id":2,
        "name":"karan"
    }

]

//params
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id); 
    const user = users.find(u => u.id === userId); 

    if (user) {
        res.send(`User found: ${JSON.stringify(user)}`);
    } else {
        res.status(404).send("User not found");
    }
});

//query
app.get("/users", (req, res) => {
    const userId = req.query.id;
    const username = req.query.username;
    console.log(req.query);
    res.send(users)
    if (userId) {
        // Handle user ID query
        res.send(`Fetching user with ID ${userId}`);
    } else if (username) {
        // Handle username query
        res.send(`Fetching user with username ${username}`);
    } else {
        // No query parameters provided
        res.send("Fetching all users");
    }
});