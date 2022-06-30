 function submit(){
    var no = document.getElementById("txtno").value
    var output = document.getElementById("output")
    var txtfrom = document.getElementById("txtfrom").value
    var txtat = document.getElementById("txtat").value
    console.log(no,output,txtfrom,txtat)
    for ( i = txtfrom; i<=txtat; i++){
        output.innerHTML = output.innerHTML + no + " X " + i +' = ' + no* i + "<br>"
    }
}