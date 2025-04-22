
// show user name
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const username = currentUser.name;
document.getElementById("player-name").textContent = username;