import express from "express"
import cors from "cors"
import dbstudent from "./routes/student.js"
import dbteacher from './routes/teachers.js'

const PORT = 2000
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/student",dbstudent)
app.use('/teacher',dbteacher)

app.listen(PORT, () => {
    
    console.log("sever is running on PORT  " + PORT)
}
)