var mathB = false
var urduB = false
var englishB = false
var scienceB = false
var islaimatB = false


function submit() {
    console.log(mathB)
    var selectsubject = document.getElementById('subject')
    var tb = document.getElementById('tb')
    var mo = document.getElementById('txtmo').value

    if (mo == "") {
        alert('marks obtain can not be blank please enter marks obtain')
        return
    }

    if (subjectName == 'math') {
        mathB = true
    }


    var tr = document.createElement('tr')

    var td = document.createElement('td')
    td.innerHTML = selectsubject.options[selectsubject.selectedIndex].text

    if (mathB == true && subjectName == 'math') {
        alert('math marks already enterd. you can not enter again')
        return
    }

    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerHTML = selectsubject.options[selectsubject.selectedIndex].value
    tr.appendChild(td)

    var td = document.createElement('td')
    td.innerHTML = mo
    tr.appendChild(td)

    tb.appendChild(tr)

}