function grade(){
    var mo=document.getElementById("txtmo").value
    var tm=document.getElementById("txttm").value
    var percentage=mo/tm*100
    var result=document.getElementById("result")
    result.innerHTML='<b>' +percentage+ '</b>'+ '<br>'
    if(percentage >=80){
        result.innerHTML=result.innerHTML+"your grade is A+"
    }
    else if(percentage >=70){
        result.innerHTML=result.innerHTML+"your grade is A"
    }
    else if(percentage >=60){
        result.innerHTML=result.innerHTML+"your grad is B"
    }
    else if(percentage >=50){
        result.innerHTML=result.innerHTML+"your grade is C"
    }
    else if(percentage >=40){
        result.innerHTML=result.innerHTML+"your grade is D"
    }
    else{
        result.innerHTML=result.innerHTML+"sorry to try again"
    }

    
}

