 var url = 'http://localhost:2000/teacher/'

function submit(){
    var objectstudent ={}
    objectstudent.ROLLNo=document.getElementById('rno').value

    objectstudent.Name=document.getElementById("tname").value

    objectstudent.FName=document.getElementById("fname").value

    objectstudent.PHONENO=document.getElementById("pno").value

    objectstudent.CNICNO=document.getElementById("cno").value
    
    console.log(objectstudent)
      //newTeacher
    $.post(url + 'newTeacher' , objectstudent, function(data,status){
        alert(data)
    })

}

var teacher = []
function getAllteacher(){
    console.log('fired')
    $.get(url +'allteacher', function(data, status){
        teacher = data
        console.log(teacher)

    })
}
 getAllteacher()