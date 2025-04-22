
// Load all registered users from localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Get the table body element
const userTableBody = document.getElementById("user-table").getElementsByTagName("tbody")[0];
