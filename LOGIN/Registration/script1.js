// Function to load user data from localStorage
function loadUsers() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : {};
}

// Function to save user data to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Initialize users object from localStorage or empty object
const users = loadUsers();

// Make the functions and object available for use in other scripts
window.loadUsers = loadUsers;
window.saveUsers = saveUsers;
window.users = users;

// Export the users object and saveUsers function
export { users, saveUsers };
