function flength(){
var contryName=document.getElementById("txtName").value
var contryNamelength = contryName.length
alert(contryNamelength)
}

function loopon(){
    var contryName=document.getElementById("txtName").value
    var contryNamelength = contryName.length
    for(i = 0; i<contryNamelength; i++){
        console.log(contryName.charAt(i))
    }
}