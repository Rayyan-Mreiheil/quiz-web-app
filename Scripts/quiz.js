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

if (selectedbtnQu === "htmlbtn") {
  const storedHtmlQuestions = JSON.parse(localStorage.getItem("htmlQuestions"));

  const qu1name = document.getElementById("qu1-name");
  qu1name.textContent = storedHtmlQuestions[0].question;
  const q1opt1 = document.getElementById("qu1option1");
  q1opt1.textContent = storedHtmlQuestions[0].options[0];
  const q1opt2 = document.getElementById("qu1option2");
  q1opt2.textContent = storedHtmlQuestions[0].options[1];
  const q1opt3 = document.getElementById("qu1option3");
  q1opt3.textContent = storedHtmlQuestions[0].options[2];
  const q1opt4 = document.getElementById("qu1option4");
  q1opt4.textContent = storedHtmlQuestions[0].options[3];

  const qu2name = document.getElementById("qu2-name");
  qu2name.textContent = storedHtmlQuestions[1].question;
  const q2opt1 = document.getElementById("qu2option1");
  q2opt1.textContent = storedHtmlQuestions[1].options[0];
  const q2opt2 = document.getElementById("qu2option2");
  q2opt2.textContent = storedHtmlQuestions[1].options[1];
  const q2opt3 = document.getElementById("qu2option3");
  q2opt3.textContent = storedHtmlQuestions[1].options[2];
  const q2opt4 = document.getElementById("qu2option4");
  q2opt4.textContent = storedHtmlQuestions[1].options[3];

  const qu3name = document.getElementById("qu3-name");
  qu3name.textContent = storedHtmlQuestions[2].question;
  const q3opt1 = document.getElementById("qu3option1");
  q3opt1.textContent = storedHtmlQuestions[2].options[0];
  const q3opt2 = document.getElementById("qu3option2");
  q3opt2.textContent = storedHtmlQuestions[2].options[1];
  const q3opt3 = document.getElementById("qu3option3");
  q3opt3.textContent = storedHtmlQuestions[2].options[2];
  const q3opt4 = document.getElementById("qu3option4");
  q3opt4.textContent = storedHtmlQuestions[2].options[3];
} else if (selectedbtnQu === "cssbtn") {
  const storedCssQuestions = JSON.parse(localStorage.getItem("cssQuestions"));

  const qu1name = document.getElementById("qu1-name");
  qu1name.textContent = storedCssQuestions[0].question;
  const q1opt1 = document.getElementById("qu1option1");
  q1opt1.textContent = storedCssQuestions[0].options[0];
  const q1opt2 = document.getElementById("qu1option2");
  q1opt2.textContent = storedCssQuestions[0].options[1];
  const q1opt3 = document.getElementById("qu1option3");
  q1opt3.textContent = storedCssQuestions[0].options[2];
  const q1opt4 = document.getElementById("qu1option4");
  q1opt4.textContent = storedCssQuestions[0].options[3];

  const qu2name = document.getElementById("qu2-name");
  qu2name.textContent = storedCssQuestions[1].question;
  const q2opt1 = document.getElementById("qu2option1");
  q2opt1.textContent = storedCssQuestions[1].options[0];
  const q2opt2 = document.getElementById("qu2option2");
  q2opt2.textContent = storedCssQuestions[1].options[1];
  const q2opt3 = document.getElementById("qu2option3");
  q2opt3.textContent = storedCssQuestions[1].options[2];
  const q2opt4 = document.getElementById("qu2option4");
  q2opt4.textContent = storedCssQuestions[1].options[3];

  const qu3name = document.getElementById("qu3-name");
  qu3name.textContent = storedCssQuestions[2].question;
  const q3opt1 = document.getElementById("qu3option1");
  q3opt1.textContent = storedCssQuestions[2].options[0];
  const q3opt2 = document.getElementById("qu3option2");
  q3opt2.textContent = storedCssQuestions[2].options[1];
  const q3opt3 = document.getElementById("qu3option3");
  q3opt3.textContent = storedCssQuestions[2].options[2];
  const q3opt4 = document.getElementById("qu3option4");
  q3opt4.textContent = storedCssQuestions[2].options[3];
} else {
  const storedSqlQuestions = JSON.parse(localStorage.getItem("sqlQuestions"));

  const qu1name = document.getElementById("qu1-name");
  qu1name.textContent = storedSqlQuestions[0].question;
  const q1opt1 = document.getElementById("qu1option1");
  q1opt1.textContent = storedSqlQuestions[0].options[0];
  const q1opt2 = document.getElementById("qu1option2");
  q1opt2.textContent = storedSqlQuestions[0].options[1];
  const q1opt3 = document.getElementById("qu1option3");
  q1opt3.textContent = storedSqlQuestions[0].options[2];
  const q1opt4 = document.getElementById("qu1option4");
  q1opt4.textContent = storedSqlQuestions[0].options[3];

  const qu2name = document.getElementById("qu2-name");
  qu2name.textContent = storedSqlQuestions[1].question;
  const q2opt1 = document.getElementById("qu2option1");
  q2opt1.textContent = storedSqlQuestions[1].options[0];
  const q2opt2 = document.getElementById("qu2option2");
  q2opt2.textContent = storedSqlQuestions[1].options[1];
  const q2opt3 = document.getElementById("qu2option3");
  q2opt3.textContent = storedSqlQuestions[1].options[2];
  const q2opt4 = document.getElementById("qu2option4");
  q2opt4.textContent = storedSqlQuestions[1].options[3];

  const qu3name = document.getElementById("qu3-name");
  qu3name.textContent = storedSqlQuestions[2].question;
  const q3opt1 = document.getElementById("qu3option1");
  q3opt1.textContent = storedSqlQuestions[2].options[0];
  const q3opt2 = document.getElementById("qu3option2");
  q3opt2.textContent = storedSqlQuestions[2].options[1];
  const q3opt3 = document.getElementById("qu3option3");
  q3opt3.textContent = storedSqlQuestions[2].options[2];
  const q3opt4 = document.getElementById("qu3option4");
  q3opt4.textContent = storedSqlQuestions[2].options[3];
}

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
