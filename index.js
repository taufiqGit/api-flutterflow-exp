import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv"
const app = express()
dotenv.config()

app.use(express.json())
const dataPost = [
    {
        title: "heheh",
        body: "hahah",
        userId: 3,
        id: "hsdsgdydg"
    }
]

app.get("/posts", (req, res)=>{
    res.json({ status: 1, data : dataPost})
})

app.post("/posts", (req, res)=>{
    console.log(req.body);
    const data = { ...req.body, id: nanoid()}
    dataPost.unshift(data)
    res.json({ status: 1, msg : "tambah data berhasil"})
})
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('server runnn');
})