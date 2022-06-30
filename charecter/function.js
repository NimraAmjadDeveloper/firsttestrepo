
function length(){
    var txtname=document.getElementById("txtname").value
    alert(txtname.length)
    console.log(txtname.length)
}

function charAt(){
    var txtname=document.getElementById("txtname").value
    var txtstartindex=document.getElementById('txtstartindex').value    
    alert(txtname.charAt(txtstartindex))
}

function slice(){
    var txtname=document.getElementById("txtname").value
    var txtstartindex=document.getElementById('txtstartindex').value
    alert(txtname.slice(txtstartindex))
}

function slice2(){
    var txtname=document.getElementById("txtname").value
    var txtstartindex=document.getElementById('txtstartindex').value
    var  txtendindex=document.getElementById('txtendindex').value
    alert(txtname.slice(txtstartindex,txtendindex))
}

function indexOf(){
    var txtname=document.getElementById("txtname").value
    console.log(txtname)
    var txtstartindex=document.getElementById('txtstartindex').value
    console.log(txtstartindex)
alert(txtname.indexOf(txtstartindex))
}

function lastindex(){
    var txtname=document.getElementById("txtname").value
    var lastchar=document.getElementById('txtstartindex').value
    alert(txtname.lastIndexOf(lastchar))
}

function serch(){
    var txtname=document.getElementById("txtname").value
    var serch=document.getElementById('txtstartindex').value
    alert(txtname.lastIndexOf(serch))
}