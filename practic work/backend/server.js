import express from "express";
import cors from "cors"
//import { urlencoded } from "express";
const PORT = 20001
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(PORT,()=>{console.log("server is runing on PORT" + PORT)
}
)

