import express from 'express';
import Connection from './db/db.js'
import Route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
import path from 'path'
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
// app.use('/',Route);
// ------------------------Deployment -------------------
const isProduction = 'production'
const __dirname1 = path.resolve();
if(isProduction === 'production'){
    app.use(express.static(path.join(__dirname1,"../client/build")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"../client","build","index.html"));
    })
}else{
    
    app.get('/',(req,res)=>{
        res.send("working on it");
    })
}

// ------------------------Deployment -------------------
Connection();
const PORT = 8000;

app.listen(PORT,()=>console.log(`server is running successfully on port ${PORT}`));
