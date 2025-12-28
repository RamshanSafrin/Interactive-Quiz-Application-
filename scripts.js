console.log("JS CONNECTED");

const quizData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language"
      ],
      correct: 0
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<h4>", "<h2>", "<h1>"],
      correct: 3
    },
    {
      question: "Which tag is used to insert an image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      correct: 0
    },
    {
      question: "Which attribute provides alternative text for images?",
      options: ["title", "alt", "src", "href"],
      correct: 1
    },
    {
      question: "Which tag is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      correct: 1
    },
    {
      question: "Which tag is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<table>"],
      correct: 1
    },
    {
      question: "Which HTML tag is used to create a form?",
      options: ["<input>", "<form>", "<fieldset>", "<label>"],
      correct: 1
    },
    {
      question: "Which attribute specifies a unique identifier?",
      options: ["class", "id", "name", "key"],
      correct: 1
    },
    {
      question: "Which tag is used to define a paragraph?",
      options: ["<p>", "<para>", "<text>", "<span>"],
      correct: 0
    }
  ],

  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      correct: 2
    },
    {
      question: "Which property changes text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      correct: 2
    },
    {
      question: "Which property sets background color?",
      options: ["bgcolor", "background", "background-color", "color"],
      correct: 2
    },
    {
      question: "Which unit is relative to font size?",
      options: ["px", "cm", "em", "pt"],
      correct: 2
    },
    {
      question: "Which property controls spacing inside elements?",
      options: ["margin", "padding", "border", "spacing"],
      correct: 1
    },
    {
      question: "How do you select a class in CSS?",
      options: [".class", "#class", "class()", "*class"],
      correct: 0
    },
    {
      question: "How do you select an ID?",
      options: ["#id", ".id", "id()", "@id"],
      correct: 0
    },
    {
      question: "Which property rounds corners?",
      options: ["border-style", "corner-radius", "border-radius", "round"],
      correct: 2
    },
    {
      question: "Which display value hides an element?",
      options: ["hidden", "none", "block", "inline"],
      correct: 1
    },
    {
      question: "Which property creates shadow?",
      options: ["shadow", "box-shadow", "element-shadow", "border-shadow"],
      correct: 1
    }
  ],

  javascript: [
    {
      question: "Which keyword declares a variable?",
      options: ["var", "int", "string", "define"],
      correct: 0
    },
    {
      question: "Which symbol is used for comments?",
      options: ["<!-- -->", "//", "#", "**"],
      correct: 1
    },
    {
      question: "Which method selects an element by ID?",
      options: [
        "getElement()",
        "getElementById()",
        "querySelectorAll()",
        "getId()"
      ],
      correct: 1
    },
    {
      question: "Which operator compares value and type?",
      options: ["==", "=", "===", "!="],
      correct: 2
    },
    {
      question: "Which keyword defines a function?",
      options: ["method", "function", "func", "define"],
      correct: 1
    },
    {
      question: "Which event runs on button click?",
      options: ["onhover", "onpress", "onclick", "onchange"],
      correct: 2
    },
    {
      question: "Which method prints output in console?",
      options: ["console.log()", "print()", "log()", "output()"],
      correct: 0
    },
    {
      question: "Which data type stores true/false?",
      options: ["String", "Number", "Boolean", "Object"],
      correct: 2
    },
    {
      question: "Which loop runs a fixed number of times?",
      options: ["while", "do-while", "for", "foreach"],
      correct: 2
    },
    {
      question: "Which keyword stops a loop?",
      options: ["stop", "break", "exit", "return"],
      correct: 1
    }
  ],

  fullstack: [
    {
      question: "What does Full Stack mean?",
      options: [
        "Frontend only",
        "Backend only",
        "Both frontend and backend",
        "Database only"
      ],
      correct: 2
    },
    {
      question: "Which is a frontend language?",
      options: ["HTML", "Node.js", "MongoDB", "Python"],
      correct: 0
    },
    {
      question: "Which is a backend runtime?",
      options: ["React", "CSS", "Node.js", "HTML"],
      correct: 2
    },
    {
      question: "Which database is NoSQL?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correct: 2
    },
    {
      question: "Which protocol is used for web?",
      options: ["FTP", "SMTP", "HTTP", "TCP"],
      correct: 2
    },
    {
      question: "Which tool manages packages?",
      options: ["npm", "git", "vscode", "chrome"],
      correct: 0
    },
    {
      question: "Which framework is frontend?",
      options: ["Django", "Spring", "React", "Express"],
      correct: 2
    },
    {
      question: "Which file stores dependencies?",
      options: ["index.html", "package.json", "server.js", "style.css"],
      correct: 1
    },
    {
      question: "Which method sends data securely?",
      options: ["GET", "POST", "FETCH", "SEND"],
      correct: 1
    },
    {
      question: "Which tool tracks code changes?",
      options: ["npm", "git", "node", "react"],
      correct: 1
    }
  ]
};
let selectedCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];
//choose category
const categoryBtns = document.querySelectorAll(".category-opt");

categoryBtns.forEach(button => {
  button.addEventListener("click", () => {
    categoryBtns.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    selectedCategory = button.innerText.toLowerCase();
    
  });
});

//moving to rules page
const startBtn=document.getElementById("start-button");
const startPage=document.querySelector(".startpage");
const rulesPage = document.getElementById("rulesScreen");

startBtn.addEventListener("click",() =>{
  if(!selectedCategory){
    alert("Please choose a category to proceed.");
    return;
  }
  startPage.style.display="none";
  rulesPage.style.display="block";
});
//continue button action
const continueBtn = document.getElementById("continueBtn");
const questionSection = document.querySelector(".questionSection");
const categoryTitle=document.querySelector(".selected-category");
continueBtn.addEventListener("click", () => {
  rulesPage.style.display = "none";
  questionSection.style.display = "block";

  currentQuestions = quizData[selectedCategory];
  categoryTitle.innerHTML=`Category: <b>${selectedCategory.toUpperCase()}</b>`;
  loadQuestion();
});


//Question loading function
const questionText = document.querySelector(".quiz-Ques");
const answerOptions = document.querySelectorAll(".ans-option p");
const statusblock=document.querySelector(".question-status");
function loadQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];

  questionText.innerText = currentQuestion.question;

  answerOptions.forEach((option, index) => {
    option.innerText = currentQuestion.options[index];
    option.parentElement.style.background="#f3f1ff";
    option.parentElement.style.pointerEvents="auto";
    
  });
  statusblock.innerHTML=`<b>${currentQuestionIndex+1}</b> of <b>${currentQuestions.length}</b> questions`
  if (currentQuestionIndex === currentQuestions.length - 1) {
    nextBtn.innerHTML = `Finish <i class="fa-solid fa-flag-checkered"></i>`;
  } else {
    nextBtn.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
  }

  nextBtn.disabled=true;
  nextBtn.style.opacity="0.5";
}


//Answer correctness checking
const answeritems=document.querySelectorAll(".ans-option");
 answeritems.forEach((item,index) =>{
  item.addEventListener("click",()=>{
    checkAnswer(index);

  });
 });
//checkanswer function
function checkAnswer(selectedIndex){
  const correctIndex=currentQuestions[currentQuestionIndex].correct;
  if(selectedIndex === correctIndex){
    score++;
    answeritems[selectedIndex].style.background = "#c8e6c9"; 
  } else {
    answeritems[selectedIndex].style.background = "#ffcdd2"; 
    answeritems[correctIndex].style.background = "#c8e6c9"; 
  }
  answeritems.forEach(item =>{
    item.style.pointerEvents="none";
  });
  answeritems.forEach(item => {
  item.classList.add("disabled");
});

  nextBtn.disabled=false;
  nextBtn.style.opacity="1";
  }

  //next button
const nextBtn=document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    DisplayResult();
  }
});

//displaying score message
const resultPage=document.querySelector(".result-page");
const scoreMsg=document.querySelector(".score-msg");
const feedbackStmt = document.querySelector(".feedback-stmt");

function DisplayResult() {
  questionSection.style.display = "none";
  resultPage.style.display = "flex";

  scoreMsg.innerHTML = `You answered <b>${score}</b> out of <b>${currentQuestions.length}</b> questions correctly.`;
if (score === currentQuestions.length) {
    feedbackStmt.innerHTML = "<b>Outstanding! Perfect Score!</b>";
  } else if (score >= 7) {
    feedbackStmt.innerHTML = "<b>Excellent Job! </b>";
  } else if (score >= 4) {
    feedbackStmt.innerHTML = "<b>Good Effort! Keep Practicing </b>";
  } else {
    feedbackStmt.innerHTML = "<b>Needs Improvement.  Try Again!</b>";
  }

}

//try again button
const tryAgainBtn= document.querySelector(".try-again");
tryAgainBtn.addEventListener("click",()=>{
  currentQuestionIndex=0;
  score=0;
  selectedCategory="";
  resultPage.style.display="none";
  startPage.style.display="block";
  categoryBtns.forEach(btn =>btn.classList.remove("active"));
});