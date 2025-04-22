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

// Check if admin is already there
if (!users.some((user) => user.email === defaultAdmin.email)) {
  // Checks if any user in the users array has the same email as the defaultAdmin
  users.push(defaultAdmin);
  localStorage.setItem("users", JSON.stringify(users));
}
// ### Testing ###
// console.log(users);
// localStorage.clear();

// ==== Handle Register Form Submission ====

document
  .getElementById("form2-signup")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("pass-signup").value.trim();

    // Basic validation
    if (email === "" || password === "" || name === "") {
      alert("Please fill in all fields.");
      return;
    }

    users = JSON.parse(localStorage.getItem("users"));

    // Check if email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("This email is already registered.");
      document.getElementById("name-signup").value = "";
      document.getElementById("email-signup").value = "";
      document.getElementById("pass-signup").value = "";
      return;
    }

    // Add new user
    const newUser = {
      name: name,
      email: email,
      password: password,
      scores: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    document.getElementById("name-signup").value = "";
    document.getElementById("email-signup").value = "";
    document.getElementById("pass-signup").value = "";
    // Redirect to login page
    window.location.href = "index.html";
  });


  
// ==== Handle Login Form Submission ====

document.getElementById("form1-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("pass-login").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    alert("Invalid email or password.");
    return;
  }

  // Save current user info
  localStorage.setItem("currentUser", JSON.stringify(foundUser));


});
