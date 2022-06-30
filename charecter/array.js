  var studentlist = []
function push(){
  var studentName=document.getElementById("txtwork").value
  studentlist.push(studentName)
  console.log(studentlist)
}

 function length(){ 
console.log(studentlist.length)
}
function unshift(){
  // var studentName=document.getElementById("txtwork").value
  studentlist.unshift(document.getElementById("txtwork").value)
  console.log(studentlist)
}
function pop(){
  // var studentName=document.getElementById("txtwork").value
  studentlist.pop(document.getElementById("txtwork").value)
  console.log(studentlist)
}
function slice(){
  var ind=document.getElementById("txtslice").value
  console.log(studentlist.slice(ind))
}
function slice2(){
  var ind=document.getElementById("txtslice").value
  var indEnd=document.getElementById("txtSliceEnd").value
  console.log(studentlist.slice(ind,indEnd))
}

// loop
var studentlist = []
function loop(){
  for(j=0;j<studentlist.length;j++){
    console.log(studentlist[j])
  }
}
function loop2(){
  studentlist.forEach((item)=>{
    console.log(item)
  })
}
function splice(){
  var tNAME=document.getElementById("txtwork").value
  var ind=document.getElementById("txtslice").value
  var indEnd=document.getElementById("txtSliceEnd").value
  studentlist.splice(ind,indEnd)
  console.log(studentlist)
}
