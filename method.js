
let user={}


// app.get("/demo",)
// app.post("/post",)
// app.patch("/user",)


// app.delete("/delte")
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
// let userRouter = express.Router();


// app.use("/user", userRouter);




//query
// app.get("/users", (req, res) => {
//     const userId = req.query.id;
//     const username = req.query.username;
//     console.log(req.query);
//     res.send(users)
//     if (userId) {
//         // Handle user ID query
//         res.send(`Fetching user with ID ${userId}`);
//     } else if (username) {
//         // Handle username query
//         res.send(`Fetching user with username ${username}`);
//     } else {
//         // No query parameters provided
//         res.send("Fetching all users");
//     }
// });


// userRouter.route('/').get(getuser).post(postUser).delete(deletUser).patch(updateUser)

// userRouter.route("/:id").get(getData)
// function getData(req,res){
//     const userId = parseInt(req.params.id); 
//     const user = users.find(u => u.id === userId); 

//     if (user) {
//         res.send(`User found: ${JSON.stringify(user)}`);
//     } else {
//         res.status(404).send("User not found");
//     }
// }

// function getuser(req,res){
//     res.send(users)
//     res.sendFile('./views/index.html',{root:_dirname});
// }
// function postUser(req,res){
//         console.log(req.body);
//         let obj=req.body
//         res.json({
//             message:'sucessfull submit',
//             data:obj
//         })
    
//     }
//     function updateUser(req,res){
//         console.log(req.body);
//         let userdemo=req.body;
//         for (const key in userdemo) {
//             user[key]=userdemo[key]
            
//         }
//         res.json({
//             message:'sucessfull submit',
//         })
//     }
//     function deletUser(req,res){
//         let user ={}
//         res.json({
//             message:'sucess fully delteed ',
//         })
    
//     }
   
   

    //params
// app.get("/users/:id", (req, res) => {
//     const userId = parseInt(req.params.id); 
//     const user = users.find(u => u.id === userId); 

//     if (user) {
//         res.send(`User found: ${JSON.stringify(user)}`);
//     } else {
//         res.status(404).send("User not found");
//     }
// });
const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.json());

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

let authRouter = express.Router();
app.use("/auth", authRouter);

authRouter.route("/signup").post(authUser).get(signup);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function authUser(req, res) {
    const { username, email, password } = req.body;
    res.json({ message: 'Signup successful', user: { username, email, password } });
}

function signup(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
}
