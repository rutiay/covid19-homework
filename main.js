window.setInterval(printTime,1000)
function printTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;;
}



var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var birthYear = document.getElementById("birth");
var city = document.getElementById("userCity");
var userId = document.getElementById("userId");
var button = document.getElementById("Btn");
var myPara = document.getElementById("message");
var myDiv = document.getElementById("content");
var myTable = document.getElementById("table");
var coronaSubjectsArray = [];

button.onclick = function () {
    var subject = {};
    subject.firstName = firstName.value;
    subject.lastName = lastName.value;
    subject.Birth = birthYear.value;
    subject.ID = userId.value;
    subject.city = city.value;
    var date = new Date();
    subject.date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    subject.hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    for (var i = 0; i < coronaSubjectsArray.length; i++) {
        if (coronaSubjectsArray[i].ID == userId.value) {
            alert("This Id number is already on the list.");
            return;
        }
    }
    coronaSubjectsArray.push(subject);
    myTable.innerHTML += `<tr><td>${subject.firstName}</td><td>${subject.lastName}</td>
    <td>${subject.Birth}</td><td>${subject.ID}</td><td>${subject.city}</td><td>${subject.date}</td>
    <td>${subject.hour}</td></tr>`;
}

firstName.oninput = function () {
    firstName.value = firstName.value.toUpperCase();
}

lastName.oninput = function () {
    lastName.value = lastName.value.toUpperCase();
}

city.oninput = function () {
    city.value = city.value.toUpperCase();
}

document.getElementById("nameSearchBtn").onclick = function () {
    var found = false;
    var userName = document.getElementById("nameSearch").value.toUpperCase();
    for (var i = 0; i < coronaSubjectsArray.length; i++){
        if(coronaSubjectsArray[i].firstName == userName){
            myDiv.innerHTML += `<p><strong>Name:</strong> ${coronaSubjectsArray[i].firstName} ${coronaSubjectsArray[i].lastName} 
            <strong>Birth Year:</strong> ${coronaSubjectsArray[i].Birth} <strong>ID:</strong> ${coronaSubjectsArray[i].ID} <strong>City:</strong> ${coronaSubjectsArray[i].city} 
            <strong>Day of test:</strong> ${coronaSubjectsArray[i].date} <strong>Hour of test:</strong> ${coronaSubjectsArray[i].hour}</p>`;
            found = true;
        }
    }
    if (!found){
        myPara.innerText = "The name is not on the list.";
    }
}

document.getElementById("searchByIdBtn").onclick = function (){
    var searchId = document.getElementById("idSearch").value;
    for (var i = 0; i < coronaSubjectsArray.length; i++){
        if(coronaSubjectsArray[i].ID == searchId){
            myDiv.innerHTML += `<p><strong>Name:</strong> ${coronaSubjectsArray[i].firstName} ${coronaSubjectsArray[i].lastName} 
            <strong>Birth Year:</strong> ${coronaSubjectsArray[i].Birth} <strong>ID:</strong> ${coronaSubjectsArray[i].ID} <strong>City:</strong> ${coronaSubjectsArray[i].city} 
            <strong>Day of test:</strong> ${coronaSubjectsArray[i].date} <strong>Hour of test:</strong> ${coronaSubjectsArray[i].hour}</p>`;
            return;
        }
    }
    alert("This ID number is not on the list.");
}

