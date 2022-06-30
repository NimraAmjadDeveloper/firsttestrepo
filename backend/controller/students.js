import abc from "./db.js"

import { initializeApp } from 'firebase/app'

import { getDatabase, ref, set, get, push, child,remove } from 'firebase/database'

//import res from "express/lib/response"

const app = initializeApp(abc)
const db = getDatabase(app)
const dbRef = ref(db, "/school/students")
const dbRefGet = ref(db)


export const removeChild = (req,res) => {
    var nChild =  child(dbRef,req.body.Key)
    remove(nChild).then(()=>{
        res.json('Remove Sucessful')
    }).catch((error)=>{
        res.json('Can not Remove')
    })
}

export const addstudent = (req, res) => {
    console.log(req.body)

    var objstudent = req.body
    var key = push(dbRef).key
    objstudent.Key = key
    
    var newChild = child(dbRef,key)

    set(newChild, objstudent).then(()=>{
        res.json('Record success')
    }).catch((error)=>{
        res.json(error)
    })

}
// UPDATESTudent
export const updateStudent = (req,res) =>{
    console.log(req.body)

    var objstudent = req.body

    var upStudent  = child(dbRef,req.body.Key)

    set(upStudent,objstudent).then(()=>{
        res.json('Record succeess')
    }).catch((error)=>{
        res.json(error)
    })
}




export const gAllStudent = (req, res) => {
    get(child(dbRefGet, '/school/students')).then((gg) => {
        res.json(Object.values(gg.val()))
    })

}

export const gSingleStudent = (req, res) => {
    get(child(dbRefGet, '/school/students/' + req.body.key)).then((gg) => {
        res.json(gg.val())
    })

}

        