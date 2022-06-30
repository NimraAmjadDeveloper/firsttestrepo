function evenodd(){
    var no=document.getElementById("txtno").value
    var rem
    rem = no % 2
    if(rem==0){
        alert('number is even')
    }
    else{
        alert('number is odd')
    }
     
}
function pc(){
    var no=document.getElementById("txtno").value
    var rem
    rem = no % 2
for(i=2;i<no;i++){
    rem = no % i
}
    if(rem==0){
        alert('number is composite')
    }
    else{
        alert('number is prime')
    }
     
}