const express=require('express')
const cors=require('cors')
const bcrypt =require('bcrypt')
const { MongoClient }=require('mongodb')



const app =new express();
app.use(express.json());
const client =new MongoClient('mongodb+srv://admin:admin@cluster0.yrri2g9.mongodb.net/?retryWrites=true&w=majority')
client.connect();
const db=client.db("Website")
const col=db.collection("users")
//third pary applications can be served
app.use(cors());
//from browser default url trigerring
// localhost:8081/home
app.get('/home',(req,res)=>{
    res.send("Hello World")
})



//insert the register
app.post('/insert',async (req,res)=>{
    req.body.password=await bcrypt.hash(req.body.password,5)
    console.log(req)
    col.insertOne(req.body)
    res.send("Data received");
});


app.post('/check', async (req, res) => {
    console.log(req.body);
    var result = await col.findOne({"username": req.body.un});
    console.log('User document from the database:', result);

    if (result != null) {
        if (await bcrypt.compare(req.body.ps, result.password)) {
            res.send(result);
            console.log("correct")
        } else {
            res.send("Password incorrect");
        }
    } else {
        res.send("User not found");
    }
});



//consolelog
app.listen(8081);
console.log("It is Working")