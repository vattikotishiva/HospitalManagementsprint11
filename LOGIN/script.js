 var usersData = [
    { username: "admin", password: "password1" },
    { username: "shiva547", password: "Shiva@547" },
    { username: "santhosh", password: "123456.0 " },
];
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    sessionStorage.setItem('username',username)
    var isAuthenticated = usersData.some(function(user) {
        return user.username === username && user.password === password;
    });
    if (isAuthenticated) {
        window.location.href = "../Admin.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
document.getElementById('regisForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username1').value;
    var password = document.getElementById('password1').value;
    sessionStorage.setItem('username',username)
    // if (!validateUsername(username)) {
    //     console.log("hiii")
    //     errorMessage.textContent = 'Username must be at least 8 characters (alphanumeric)';
    //     errorMessage.style.display = 'block';
    //     return;
    //   }
    //   if (!validatePassword(password)) {
    //     errorMessage.textContent = 'Password must be at least 10 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character';
    //     errorMessage.style.display = 'block';
    //     return;
    //   }
    var isAuthenticated = usersData.some(function(user) {
        return user.username === username && user.password === password;
    });
    if(validateUsername(username) && validatePassword(password)){
    if (isAuthenticated) {
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }}else{
        alert("so sepalci");
    }
});
function validateUsername(username) {
    return username.length >= 6 && (username.match(/^[a-zA-Z0-9]+$/));
  }
  function validatePassword(password) {
    return password.length >= 9 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[^a-zA-Z0-9]/.test(password);
  }
  


