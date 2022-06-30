function printt(){
    var no = document.getElementById("txtno").value
    for(i=1;i<=no;i++){
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+i+"<br>"
    }
    console.log(document.getElementById("result"))
    console.log(document.getElementById("ts"))
}
