
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
