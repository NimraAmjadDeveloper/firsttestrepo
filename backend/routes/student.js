import { addstudent, gAllStudent,gSingleStudent,removeChild, updateStudent } from "../controller/students.js";

import express from "express";

const router = express.Router()


router.get('/allstd', gAllStudent)
router.post("/singlestd",gSingleStudent)
router.post("/newStudent",addstudent)
router.post("/removeitem",removeChild)
router.post("/upStudent",updateStudent)


export default router