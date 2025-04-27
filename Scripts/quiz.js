// HTML Questions
const htmlquestions = [
  {
    question: "What does HTML stand for?",
    correctAnswer: "HyperText Markup Language",
    options: [
      "HyperText Machine Language",
      "HyperText and Links Markup Language",
      "HyperText Markup Language",
      "HighText Markdown Language",
    ],
  },
  {
    question: "Which language is used for styling web pages?",
    correctAnswer: "CSS",
    options: ["HTML", "JQuery", "CSS", "XML"],
  },
  {
    question: "Which is not a JavaScript Framework?",
    correctAnswer: "Cassandra",
    options: ["Python Script", "JQuery", "NodeJS", "Cassandra"],
  },
];
// Store it in localStorage
localStorage.setItem("htmlQuestions", JSON.stringify(htmlquestions));

// CSS Questions
const cssquestions = [
  {
    question: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheets",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
  },
  {
    question: "Which CSS property controls the text size?",
    correctAnswer: "font-size",
    options: ["text-style", "font-size", "text-size", "font-weight"],
  },
  {
    question: "How do you make a list not show bullet points?",
    correctAnswer: "list-style-type: none;",
    options: [
      "list: none;",
      "list-type: none;",
      "list-style: no-bullets;",
      "list-style-type: none;",
    ],
  },
];
// Store it in localStorage
localStorage.setItem("cssQuestions", JSON.stringify(cssquestions));

// SQL Questions
const sqlQuestions = [
  {
    question: "Which SQL statement is used to extract data from a database?",
    correctAnswer: "SELECT",
    options: ["SELECT", "GET", "EXTRACT", "OPEN"],
  },
  {
    question: "What does the SQL WHERE clause do?",
    correctAnswer: "Filters records based on a condition",
    options: [
      "Filters records based on a condition",
      "Sorts the result in ascending order",
      "Joins two tables",
      "Deletes records",
    ],
  },
  {
    question: "Which SQL keyword is used to insert new data in a table?",
    correctAnswer: "INSERT INTO",
    options: ["ADD DATA", "INSERT INTO", "NEW RECORD", "ADD INTO"],
  },
];
// Store it in localStorage
localStorage.setItem("sqlQuestions", JSON.stringify(sqlQuestions));

// find selected btn quiz
const htmlbtn = document.getElementById("htmlbtn");
const cssbtn = document.getElementById("cssbtn");
const sqlbtn = document.getElementById("sqlbtn");

let selectedbtnQu = localStorage.getItem("selectedbtnQu");
// console.log(selectedbtnQu);

const quContainer = document.getElementsByClassName("qu-container");

function populateQuestions(selectedbtnQu) {
  let storedQuestions;
  if (selectedbtnQu === "htmlbtn") {
    storedQuestions = JSON.parse(localStorage.getItem("htmlQuestions"));
  } else if (selectedbtnQu === "cssbtn") {
    storedQuestions = JSON.parse(localStorage.getItem("cssQuestions"));
  } else {
    storedQuestions = JSON.parse(localStorage.getItem("sqlQuestions"));
  }

  // Loop through questions to populate the content dynamically
  for (let i = 0; i < 3; i++) {
    const quName = document.getElementById(`qu${i + 1}-name`);
    quName.textContent = storedQuestions[i].question;

    for (let j = 0; j < 4; j++) {
      const option = document.getElementById(`qu${i + 1}option${j + 1}`);
      option.textContent = storedQuestions[i].options[j];
    }
  }
}
populateQuestions(selectedbtnQu);

// Function to mark the selected button
function selectOption(button) {
  // Remove previously selected buttons in the same question
  const buttons = button.closest("section").querySelectorAll(".option");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Mark this button as selected
  button.classList.add("selected");
}

// Event listener to select an option (marks the selected button)
const buttons = document.querySelectorAll(".option");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    selectOption(button); // Mark the clicked button as selected
  });
});

// Function to remove the 'selected' class from all options
function deselectAllOptions() {
  // Find all the options with the 'selected' class
  const allSelectedButtons = document.querySelectorAll(".option.selected");

  // Loop through each selected button and remove the 'selected' class
  allSelectedButtons.forEach((btn) => btn.classList.remove("selected"));
}

// Calculate Score
function findScore() {
  let score = 0;
  if (selectedbtnQu === "htmlbtn") {
    const qu1Option3 = document.getElementById("qu1option3");
    const qu2Option3 = document.getElementById("qu2option3");
    const qu3Option4 = document.getElementById("qu3option4");

    if (qu1Option3.classList.contains("selected")) {
      score++;
    }
    if (qu2Option3.classList.contains("selected")) {
      score++;
    }
    if (qu3Option4.classList.contains("selected")) {
      score++;
    }
  } else if (selectedbtnQu === "cssbtn") {
    const qu1option2 = document.getElementById("qu1option2");
    const qu2option2 = document.getElementById("qu2option2");
    const qu3option4 = document.getElementById("qu3option4");

    if (qu1option2.classList.contains("selected")) {
      score++;
    }
    if (qu2option2.classList.contains("selected")) {
      score++;
    }
    if (qu3option4.classList.contains("selected")) {
      score++;
    }
  } else {
    const qu1option1 = document.getElementById("qu1option1");
    const qu2option1 = document.getElementById("qu2option1");
    const qu3option2 = document.getElementById("qu3option2");

    if (qu1option1.classList.contains("selected")) {
      score++;
    }
    if (qu2option1.classList.contains("selected")) {
      score++;
    }
    if (qu3option2.classList.contains("selected")) {
      score++;
    }
  }

  return score;
}



////// Show the result And Add it to LocalStorage //////
const btnsubmit = document.getElementById("submit");
btnsubmit.addEventListener("click", function () {
  if (
    (qu1option1.classList.contains("selected") == true ||
      qu1option2.classList.contains("selected") == true ||
      qu1option3.classList.contains("selected") == true ||
      qu1option4.classList.contains("selected") == true) &&
    (qu2option1.classList.contains("selected") == true ||
      qu2option2.classList.contains("selected") == true ||
      qu2option3.classList.contains("selected") == true ||
      qu2option4.classList.contains("selected") == true) &&
    (qu3option1.classList.contains("selected") == true ||
      qu3option2.classList.contains("selected") == true ||
      qu3option3.classList.contains("selected") == true ||
      qu3option4.classList.contains("selected") == true)
  ) {
    const result = findScore();
    alert("Your Score is " + result + " out of 3 !");

    // Store Scores in LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Initialize scores if missing
    if (!currentUser.scores) {
      currentUser.scores = []; // initialize if missing
    }

    // Push the new score to currentUser's score array
    currentUser.scores.push(result); // push the new score
    localStorage.setItem("currentUser", JSON.stringify(currentUser)); // save it back

    // Update the user score where the name matches currentUser.name
    users = users.map((user) => {
      if (user.name === currentUser.name) {
        // Update the user's score here, you can add the result to an existing score or replace
        user.scores.push(result); // Assuming you want to add to existing scores
        return user; // Return the updated user
      }
      return user; // Keep other users unchanged
    });

    localStorage.setItem("users", JSON.stringify(users)); // Save updated users array

    console.log(localStorage.getItem("users")); // Log users for debugging
    deselectAllOptions(); // This will remove the 'selected' class from all options
  } else {
    alert("Please Answer All The Questions!");
  }
});

