import { addteacher,gAllTeacher,gsingleTeacher } from "../controller/teacher.js";
import express from "express";

const router = express .Router ()

router.get('/allteacher',gAllTeacher)
router.post('/singletecher',gsingleTeacher)
router.post('/newTeacher',addteacher)

export default router