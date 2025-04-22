
// Show SignUp Form
const notMemberLink = document.getElementById("notMemberLink");
notMemberLink.addEventListener("click", function () {
  document.getElementById("form2-signup").style.display = "block";
});

// Initialize users array in localStorage if not already set
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }