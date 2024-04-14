import { users, saveUsers } from './script1.js';

// Function to add a new user
function addUser(username, password, email) {
    if (!users[username]) {
        users[username] = { username, password, email };
        console.log(`User ${username} added successfully.`);
        return true;
    } else {
        console.log(`User ${username} already exists.`);
        return false;
    }
}

// Function to handle form submission
function handleRegistration(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Add user to the system
    const added = addUser(username, password, email);
    console.log(users);
    
    
    if (added) {
        // Clear form inputs after successful registration
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
    }
}

// Add event listener to the form for registration
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', handleRegistration);
