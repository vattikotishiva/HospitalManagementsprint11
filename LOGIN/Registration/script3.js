function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if password meets the criteria
    if (!isValidPassword(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.');
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // If all validations pass, display success message
    alert('You have successfully registered as an admin!');
    return true;
}

function isValidPassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter, one lowercase letter, and one special character
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);

    return hasUpperCase && hasLowerCase && hasSpecialChar;
}
