
var url = 'http://localhost:2000/student/'

var stdAll = []

function getAll() {
    $.get(url + 'allstd', function (data, status) {
        //console.log(data)
        stdAll = data
        filltable()
    })
}

getAll()

var stdFind = []

function findItem(){
stdFind = []
var ts = document.getElementById('txtsr').value.toUpperCase()
//console.log(ts)
stdAll.forEach((element)=>{
   // console.log(element)   
   var textFromObject = element.Name.toUpperCase()
   //console.log(textFromObject)
    console.log(textFromObject.search(ts))
    if(textFromObject.search(ts)>-1){
        stdFind.push(element)
    }
})
console.log(stdFind)
}

//start filltable

function filltable() {
    var tb = document.getElementById("tb")
    while (tb.rows.length > 0) {
        tb.deleteRow(0)
    }
    stdAll.forEach(element => {
        var tr = document.createElement("tr")

        var td = document.createElement("td")
        td.innerHTML = element.ROLLNo
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerHTML = element.Name
        tr.appendChild(td)


        var td = document.createElement("td")
        td.innerHTML = element.FName
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerHTML = element.GENDER
        tr.appendChild(td)

        var td = document.createElement("td")
        td.innerHTML = element.City
        tr.appendChild(td)

        var td = document.createElement("td")

        //   Edit btn
        var btnEdit = document.createElement("button")
        btnEdit.innerHTML = 'Edit'
        btnEdit.setAttribute("id", element.Key)
        btnEdit.setAttribute("onclick", 'getSinglerecord(this)')
        // btnEdit.addEventListener("click",(e) => {
        //     getSinglerecord(e.target.id)
        // })                   

        td.appendChild(btnEdit)
        tr.appendChild(td)

        // Remove Button
        var td = document.createElement("td")
        var btnRemove = document.createElement("button")
        btnRemove.innerHTML = "Remove"
        btnRemove.setAttribute("id", element.Key)
        btnRemove.setAttribute('onclick','remsing(this)')
        // btnRemove.addEventListener("click", (e) => {
        //     console.log(e.id)
        //     //var newChild = child(dbRef, e.target.id)
        //     //remove(newChild)
        //     getAll()
        // })
        td.appendChild(btnRemove)
        tr.appendChild(td)



        tb.appendChild(tr)
    });
}
//end fill table


function remsing(abc){
    // console.log(abc.id)
    // abc.setAttribute('style','color:red')

    // $.post(url + 'singlestd',{key:keys.id},function (data,status){
    //     singleRecord = data
    //     console.log(singleRecord)
    //     fillSingleRecord()
    // })

    $.post(url +"removeitem",{Key:abc.id},function(data,status){
        alert(data)
        getAll()
    })


}


var singleRecord = {}

function getSinglerecord(keys) {
    ///console.log(keys)
    ///keys.setAttribute('style','color:red')
    $.post(url + 'singlestd',{key:keys.id},function (data,status){
        singleRecord = data
        console.log(singleRecord)
        fillSingleRecord()
    })
    // get(child(dbRefGet, '/school/students/' + key.id)).then((gData) => {
    //     //console.log(gData.val())
    //     singleRecord = gData.val()
    //     fillSingleRecord()
    // })
}

//fill single rec to text boxes

function fillSingleRecord() {
    document.getElementById("lblKey").innerHTML = singleRecord.Key
    document.getElementById('rno').value = singleRecord.ROLLNo
    document.getElementById("name").value = singleRecord.Name
    document.getElementById("fname").value = singleRecord.FName
    document.getElementById("dob").value = singleRecord.DOB
   // document.getElementById("cno").value = singleRecord.CNICNO
    document.getElementById("cellno").value = singleRecord.CELLNO
}

function updateRecord(){
    var objectstudent = {}

    objectstudent.ROLLNo =document.getElementById("rno").value
    objectstudent.Name = document.getElementById("name").value
    objectstudent.FName = document.getElementById("fname").value
    objectstudent.DOB = document.getElementById("dob").value
    // objectstudent.CNICNO = document. getElementById("cno").value
    objectstudent.CELLNO = document.getElementById("cellno").value

    // gender Work
    var gen = ''
    var genderControl = document.getElementsByName("gender")
    for( var i = 0; i < genderControl.length; i++){
        if(genderControl[i].checked){
            gen=genderControl[i].value
        }
    }
    objectstudent.GENDER = gen

    // languge Work
    var languges = []
    var lang = document.getElementsByName("languges")
    for(var i= 0; i < languges.length; i++){
        if (lang[i].checked) {
            languges.push(lang[i].value)
        }
    }
    objectstudent.Languages = languges
    // CITY WORK
    var city = ""
    var selectcity = document.getElementById("selectcity")
    city = selectcity.options[selectcity.selectedIndex].value
    objectstudent.City = city
    objectstudent.Key = document.getElementById("lblKey").innerHTML
    //upSutdent
    $.post(url + "upStudent",objectstudent, function(d, status){
        alert(d)
        getAll()
    })

}

function submit(){
    var objectstudent = {}

    objectstudent.ROLLNo =document.getElementById("rno").value
    objectstudent.Name = document.getElementById("name").value
    objectstudent.FName = document.getElementById("fname").value
    objectstudent.DOB = document.getElementById("dob").value
  //  objectstudent.CNICNO = document. getElementById("cno").value
    objectstudent.CELLNO = document.getElementById("cellno").value

    // gender Work
    var gen = ''
    var genderControl = document.getElementsByName("gender")
    for( var i = 0; i < genderControl.length; i++){
        if(genderControl[i].checked){
            gen=genderControl[i].value
        }
    }
    objectstudent.GENDER = gen

    // languge Work
    var languges = []
    var lang = document.getElementsByName("languges")
    for(var i= 0; i < languges.length; i++){
        if (lang[i].checked) {
            languges.push(lang[i].value)
        }
    }
    objectstudent.Languages = languges
    // CITY WORK
    var city = ""
    var selectcity = document.getElementById("selectcity")
    city = selectcity.options[selectcity.selectedIndex].value
    objectstudent.City = city

    $.post(url + "newStudent",objectstudent, function(d, status){
        alert(d)
        getAll()
    })

       }


