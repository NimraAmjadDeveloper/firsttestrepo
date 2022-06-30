import abc from "./db.js"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get, push, child } from 'firebase/database'

const app = initializeApp(abc)
const db =getDatabase(app)
const dbRef = ref (db,'/school/teachers')
const dbRefGet = ref(db)

export const addteacher =(req,res)=>{
    console.log(req.body)

    var objstudent = req.body
    var key = push(dbRef).key
    objstudent.Key = key

    var newChild = child(dbRef,key)

    set(newChild,objstudent).then(()=>{
        res.json('Record success')
    }).catch((error)=>{
        res.json(error)
    })
}
export const gAllTeacher =(req,res)=>{
    get(child(dbRefGet,'/school/teachers')).then((gg)=>{
        res.json(Object.values(gg.val()))
    })
}

export const gsingleTeacher =(req,res)=>{
    get(child(dbRefGet,'/school/teachers/' +req.body.key)).then((gg)=>{
        
    })
}


