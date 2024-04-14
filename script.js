let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
 function displayUsername() {
    var username = sessionStorage.getItem('username');

    if (username) {
        document.getElementById('user-info').innerHTML = '<p>' +"Mr." + username +" Make Appointment"+ '</p>';
    } 
    // else {
    //     // If username is not available, redirect to login page
    //     window.location.href = "index.html";
    // }
}

window.onload = displayUsername;
function logout() {
    sessionStorage.removeItem('username');
     console.log("hiii")
    window.location.href = "index.html"; 
}
var condition = false;
var usern = sessionStorage.getItem('username');
if(usern!= null){
    condition = true
}
var textElement = document.getElementById("conditionalText");
if (condition) {
    textElement.style.display = "none";
} else {
    textElement.style.display = "block";
}

var textElement = document.getElementById("conditionalText1");
if (condition) {
    textElement.style.display = "block";
} else {
    textElement.style.display = "none";
}