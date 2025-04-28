// Load all registered users from localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Get the table body element
const userTableBody = document
  .getElementById("user-table")
  .getElementsByTagName("tbody")[0];

// Check if there are no users
if (users.length === 0) {
  const noUsersRow = document.createElement("tr");
  noUsersRow.innerHTML = "<td colspan='2'>No users registered yet.</td>";
  userTableBody.appendChild(noUsersRow);
} else {
  // Iterate through the users and add rows to the table
  users.forEach((user) => {
    const row = document.createElement("tr");

    // User email
    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    // User scores
    const scoresCell = document.createElement("td");
    scoresCell.textContent =
      user.scores && user.scores.length > 0
        ? user.scores.join(", ")
        : "No scores yet";
    row.appendChild(scoresCell);

    // Add the row to the table body
    userTableBody.appendChild(row);
  });
}

const logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click", function (event) {
  // Redirect to quiz page
  window.location.href = "index.html";
});
