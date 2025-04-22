// Show SignUp Form
const notMemberLink = document.getElementById("notMemberLink");
notMemberLink.addEventListener("click", function () {
  document.getElementById("form2-signup").style.display = "block";
});

// Initialize users array in localStorage if not already set
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

// Add default admin on first load
const defaultAdmin = {
  name: "Admin",
  email: "admin@quiz.com",
  password: "admin12345",
  scores: [],
};

let users = JSON.parse(localStorage.getItem("users"));
