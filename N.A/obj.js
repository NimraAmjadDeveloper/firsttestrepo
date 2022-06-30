function submit(){
    var objectstudent={}
    objectstudent.ROLLNo=document.getElementById('rno').value

    objectstudent.Name=document.getElementById("name").value

    objectstudent.FName=document.getElementById("fname").value

    objectstudent.DOB=document.getElementById("dob").value

    objectstudent.CNICNO=document.getElementById("cno").value

    objectstudent.CELLNO=document.getElementById("cellno").value

    //gender work
    var gen =''
    var genderControl = document.getElementsByName('gender')
    for(i = 0 ; i < genderControl.length; i ++){
        if(genderControl[i].checked){
            gen = genderControl[i].value 
        }
    }
    objectstudent.GENDER =gen

   //Language Work
var languages = []
var lang =document.getElementsByName("language")
for(i = 0; i < lang.length ; i ++ ){
    if(lang[i].checked){
        languages.push(lang[i].value)
    }
    }
objectstudent.Languages =languages
// CITY WORK
var city  = ""
var selectcity=document.getElementById("selectcity")
city = selectcity.options[selectcity.selectedIndex].value
objectstudent.City=city
    console.log(objectstudent)

}