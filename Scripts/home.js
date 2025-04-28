
// show user name
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const username = currentUser.name;
document.getElementById("player-name").textContent = username;

const btnStart = document.getElementsByClassName("btnStart");

Array.from(btnStart).forEach((button) => {
  button.addEventListener("click", function (event) {
    // find current clicked btn
    const clickedId = event.target.id; // or use this.id
    // Store clicked ID in localStorage
    localStorage.setItem("selectedbtnQu", clickedId);
    // Redirect to quiz page
    window.location.href = "quiz.html";
  });
});

const logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click", function (event){
  // Redirect to quiz page
  window.location.href = "index.html";
});