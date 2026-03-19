// 📊 DATA STRUCTURE (Organized by Handout)
const allHandouts = {
    "04_Handout_1":[
        {
            question: "What are the two (2) dimensions that CSS Grid uses to organize content?",
            choices:["Flex and Block", "Rows and Columns", "Vertical and Horizontal", "Inline and Block"],
            answer: "Rows and Columns",
            explanation: "CSS Grid is a modern solution for creating flexible layouts that organizes content into two dimensions: rows and columns."
        },
        {
            question: "Which properties dictate the number of columns and how wide they should be in a CSS Grid?",
            choices:["grid-template-columns and grid-template-rows", "display: grid and grid-gap", "row-gap and column-gap", "width and height"],
            answer: "grid-template-columns and grid-template-rows",
            explanation: "grid-template-columns and grid-template-rows tell the browser the number of columns and rows, and how wide/tall they should be."
        },
        {
            question: "What is a key rule when using the <main> tag in HTML?",
            choices:["It must contain the sidebar", "It should not contain repeated content", "It is used for navigation links only", "It must be placed inside the <head> tag"],
            answer: "It should not contain repeated content",
            explanation: "The <main> tag specifies the main content in HTML, encloses sections/articles, and should not contain repeated content."
        },
        {
            question: "Which HTML tag is used for independent, self-contained content?",
            choices:["<main>", "<aside>", "<article>", "<section>"],
            answer: "<article>",
            explanation: "The <article> tag is used for independent self-content (like headers and paragraphs), while <aside> is used for sidebars."
        },
        {
            question: "In the viewport meta tag, what does 'width=device-width' do?",
            choices:["Sets the initial zoom level to 1.0", "Sets the page width depending on the device", "Prevents the user from zooming in", "Forces the website into landscape mode"],
            answer: "Sets the page width depending on the device",
            explanation: "The viewport is the exact area rendering the site. 'width=device-width' controls the dimension by setting the width to match the specific device."
        },
        {
            question: "What is the purpose of the 'and' keyword in a Media Query?",
            choices:["To combine media types or features", "To stop the media query from running", "To link to an external CSS file", "To define the breakpoint size"],
            answer: "To combine media types or features",
            explanation: "In media queries, 'and' is used to combine media types or features (e.g., @media screen and min-width), applying styles only if all conditions are true."
        },
        {
            question: "What do you call the point when a website layout changes to adjust to the viewport?",
            choices:["Media Query", "Responsive Point", "Breakpoint", "Grid Template"],
            answer: "Breakpoint",
            explanation: "A Breakpoint is the exact moment (often defined by min-width) when the layout changes to appropriately adjust to the viewport."
        },
        {
            question: "Which CSS property helps avoid an image from scaling larger than its original size?",
            choices:["width: 100%", "height: auto", "min-width: 100%", "max-width: 100%"],
            answer: "max-width: 100%",
            explanation: "Using max-width: 100% ensures that a responsive image is scalable down to fit smaller screens, but never stretches larger than its original quality."
        }
    ],
    "05_Handout_1_Part_1": [
        {
            question: "What does JavaScript (JS) primarily do for a website?",
            choices: ["Adds HTML structure", "Applies CSS styling", "Makes the website interactive and complex", "Stores data in a database"],
            answer: "Makes the website interactive and complex",
            explanation: "JS is used to add dynamic behavior and interactivity to static web pages."
        },
        {
            question: "In internal JavaScript, the JS code is placed inside which tag?",
            choices: ["<link>", "<style>", "<script>", "<code>"],
            answer: "<script>",
            explanation: "The <script> tag is used to embed client-side JavaScript in an HTML document."
        },
        {
            question: "In external JavaScript, the separated .js file is linked using the <script> tag with which attribute?",
            choices: ["href", "src", "ref", "link"],
            answer: "src",
            explanation: "The src attribute specifies the URL of an external script file."
        },
        {
            question: "What is a JavaScript comment?",
            choices: ["A line that executes first", "A line browsers ignore, used to add notes", "A required file header", "A special type of variable"],
            answer: "A line browsers ignore, used to add notes",
            explanation: "Comments are used to explain the code and are not executed by the browser."
        },
        {
            question: "Which symbol(s) are used to write a line comment in JavaScript?",
            choices: ["#", "--", "//", "/*"],
            answer: "//",
            explanation: "Double forward slashes are used for single-line comments in JavaScript."
        },
        {
            question: "How do you open a block comment in JavaScript?",
            choices: ["//", "/*", "<!--", "**"],
            answer: "/*",
            explanation: "Block comments start with /* and can span multiple lines."
        },
        {
            question: "How do you close a block comment in JavaScript?",
            choices: ["//", "*/", "-->", "**"],
            answer: "*/",
            explanation: "Block comments are closed with */ to end the commented section."
        },
        {
            question: "What is a JavaScript statement?",
            choices: ["A comment in the code", "An individual line of code enclosed within <script> tags", "The name of a JS function", "A type of variable"],
            answer: "An individual line of code enclosed within <script> tags",
            explanation: "A JavaScript statement is a command that tells the browser what to do."
        },
        {
            question: "What is a JavaScript object?",
            choices: ["A CSS rule", "An HTML element", "Programming code that can be treated as an individual unit or component", "A type of loop"],
            answer: "Programming code that can be treated as an individual unit or component",
            explanation: "Objects are standalone entities that can hold properties and methods."
        },
        {
            question: "What does DOM stand for?",
            choices: ["Data Object Module", "Document Object Model", "Dynamic Output Method", "Document Output Model"],
            answer: "Document Object Model",
            explanation: "DOM is an interface that treats an HTML document as a tree structure of objects."
        },
        {
            question: "What does BOM stand for?",
            choices: ["Basic Object Model", "Browser Output Module", "Browser Object Model", "Binary Object Method"],
            answer: "Browser Object Model",
            explanation: "BOM allows JavaScript to 'talk' to the browser."
        },
        {
            question: "What is console.log used for?",
            choices: ["Display an alert box", "Write text to the console", "Declare a variable", "Create a loop"],
            answer: "Write text to the console",
            explanation: "console.log is a debugging tool used to print messages to the developer console."
        },
        {
            question: "Where is the console.log output visible?",
            choices: ["On the webpage for all visitors", "Only on the server", "In the browser's developer tool console", "In the HTML source"],
            answer: "In the browser's developer tool console",
            explanation: "The console is part of the browser's developer tools and is hidden from the main page."
        },
        {
            question: "What does the alert() method do?",
            choices: ["Writes to the console", "Declares a variable", "Displays an alert box with a message and an OK button", "Create a loop"],
            answer: "Displays an alert box with a message and an OK button",
            explanation: "The alert() method is used to show a popup message to the user."
        },
        {
            question: "In a function, what are parameters?",
            choices: ["The function's name", "Variables used within the function, separated by a comma", "The return value of the function", "The function's output"],
            answer: "Variables used within the function, separated by a comma",
            explanation: "Parameters act as placeholders for values that are passed into a function."
        },
        {
            question: "What is a JavaScript operator?",
            choices: ["A keyword like let or var", "A tool used to perform specific actions on operands", "A type of comment", "An HTML tag"],
            answer: "A tool used to perform specific actions on operands",
            explanation: "Operators are used to manipulate data and perform calculations."
        },
        {
            question: "Which operator category uses the equal sign (=) to assign values to variables?",
            choices: ["Arithmetic", "Logical", "Assignment", "Comparison"],
            answer: "Assignment",
            explanation: "Assignment operators (=, +=, etc.) assign values to JavaScript variables."
        },
        {
            question: "Which operator category includes addition, subtraction, multiplication, and division?",
            choices: ["Logical", "Arithmetic", "Comparison", "Assignment"],
            answer: "Arithmetic",
            explanation: "Arithmetic operators perform mathematical operations like addition and subtraction."
        },
        {
            question: "What does the ++ operator do in JavaScript?",
            choices: ["Subtracts 1 from the operand (decrement)", "Multiplies the operand by 2", "Adds 1 to the operand (increment)", "Divides the operand by 2"],
            answer: "Adds 1 to the operand (increment)",
            explanation: "The ++ operator increases the value of a variable by one."
        },
        {
            question: "What does the -- operator do in JavaScript?",
            choices: ["Adds 1 to the operand", "Subtracts 1 from the operand (decrement)", "Compares two values", "Assigns a value"],
            answer: "Subtracts 1 from the operand (decrement)",
            explanation: "The -- operator decreases the value of a variable by one."
        }
    ],
    "05_Handout_1_Part_2": [
        {
            question: "What does && represent in JavaScript?",
            choices: ["Logical OR", "Logical NOT", "Logical AND", "Bitwise AND"],
            answer: "Logical AND",
            explanation: "The && operator returns true if both operands are true."
        },
        {
            question: "What does || represent in JavaScript?",
            choices: ["Logical AND", "Logical NOT", "Logical OR", "Bitwise OR"],
            answer: "Logical OR",
            explanation: "The || operator returns true if at least one of the operands is true."
        },
        {
            question: "What does ! represent in JavaScript?",
            choices: ["Logical AND", "Logical NOT", "Logical OR", "Assignment"],
            answer: "Logical NOT",
            explanation: "The ! operator reverses the Boolean value of its operand."
        },
        {
            question: "Which comparison operator checks for equal value AND equal type?",
            choices: ["==", "!=", "===", "="],
            answer: "===",
            explanation: "The strict equality operator (===) checks for both value and type matching."
        },
        {
            question: "What is a JavaScript variable?",
            choices: ["A type of function", "The value a program stores in a computer's memory", "A comment in the code", "An HTML element"],
            answer: "The value a program stores in a computer's memory",
            explanation: "Variables are containers for storing data values."
        },
        {
            question: "What is an identifier in JavaScript?",
            choices: ["The value stored in a variable", "The assigned name given to a variable", "A type of operator", "A control flow statement"],
            answer: "The assigned name given to a variable",
            explanation: "Identifiers are unique names used to identify variables, functions, and objects."
        },
        {
            question: "Which data type in JavaScript represents textual data?",
            choices: ["Number", "Boolean", "Null", "String"],
            answer: "String",
            explanation: "The String data type is used to represent and manipulate a sequence of characters."
        },
        {
            question: "Which JavaScript data type contains a logical value that may return TRUE or FALSE?",
            choices: ["String", "Number", "Boolean", "Null"],
            answer: "Boolean",
            explanation: "Booleans represent one of two values: true or false."
        },
        {
            question: "What does a Null value represent in JavaScript?",
            choices: ["A value of zero", "An unknown or missing value", "A textual value", "A false Boolean"],
            answer: "An unknown or missing value",
            explanation: "Null is a special value that represents the intentional absence of any object value."
        },
        {
            question: "What does Undefined mean when referring to a JavaScript variable?",
            choices: ["A variable with no value", "A value of zero", "A false Boolean", "An unknown data type"],
            answer: "A variable with no value",
            explanation: "A variable that has been declared but not assigned a value is undefined."
        },
        {
            question: "Which keywords are used to declare and initialize variables in JavaScript?",
            choices: ["int and string", "let and var", "define and set", "create and assign"],
            answer: "let and var",
            explanation: "Both let and var are used to declare variables, with let having block scope."
        },
        {
            question: "What is an array in JavaScript?",
            choices: ["A type of comment", "A set of data represented by a single variable name", "A control flow statement", "A type of operator"],
            answer: "A set of data represented by a single variable name",
            explanation: "Arrays are used to store multiple values in a single variable."
        },
        {
            question: "What is an if statement in JavaScript?",
            choices: ["A loop that repeats code", "The simplest control flow that checks a Boolean condition and executes or skips a code block", "A method to display output", "A way to declare variables"],
            answer: "The simplest control flow that checks a Boolean condition and executes or skips a code block",
            explanation: "if statements are used to perform different actions based on different conditions."
        },
        {
            question: "What is used to separate the code block in an if statement?",
            choices: ["Parentheses ()", "Square brackets []", "Curly brackets {}", "Angle brackets <>"],
            answer: "Curly brackets {}",
            explanation: "Curly brackets are used to group a block of code to be executed if the condition is true."
        },
        {
            question: "In a while loop, when does the code block stop executing?",
            choices: ["After 10 iterations", "When the condition becomes false", "When the counter reaches 100", "After exactly one execution"],
            answer: "When the condition becomes false",
            explanation: "A while loop repeats a block of code as long as a specified condition is true."
        },
        {
            question: "What is an iteration in the context of JavaScript loops?",
            choices: ["A type of variable", "When a code block is repeated", "A JavaScript comment", "A type of operator"],
            answer: "When a code block is repeated",
            explanation: "Iteration is the process of repeating a set of instructions in a loop."
        },
        {
            question: "What is an infinite loop?",
            choices: ["A loop that runs exactly 100 times", "A loop that has no statement that eventually results in a false condition", "A loop inside another loop", "A loop that runs only once"],
            answer: "A loop that has no statement that eventually results in a false condition",
            explanation: "Infinite loops continue to run forever because the ending condition is never met."
        },
        {
            question: "What is a counter in the context of a loop?",
            choices: ["A type of output method", "A value that changes with each iteration and eventually matches the condition to end the loop", "A type of variable declaration", "A comparison operator"],
            answer: "A value that changes with each iteration and eventually matches the condition to end the loop",
            explanation: "Counters are used to track the number of times a loop has run."
        },
        {
            question: "In a do-while loop, when is the condition evaluated?",
            choices: ["Before the first iteration", "After executing the code block at least once", "At the beginning of every iteration", "Never — it runs indefinitely"],
            answer: "After executing the code block at least once",
            explanation: "A do-while loop always executes the code block once before checking the condition."
        },
        {
            question: "In a for loop, the parentheses contain three fields. How are these fields separated?",
            choices: ["Commas", "Colons", "Semicolons", "Pipes"],
            answer: "Semicolons",
            explanation: "The three parts of a for loop (initialization, condition, increment) are separated by semicolons."
        }
    ]
};

let questionsData = []; 
let currentQuestion = 0;
let score = 0;
let quizFlipCount = 0;

function selectHandout(handoutKey) {
    questionsData = allHandouts[handoutKey];
    document.getElementById('selected-handout-title').innerText = handoutKey.replace(/_/g, ' ');
    showView('home-page');
}

/* 弹出框 (Modal) Functions */
let activeHandout = "";

function showPartModal(handoutKey) {
    activeHandout = handoutKey;
    document.getElementById('modal-handout-name').innerText = handoutKey.replace(/_/g, ' ');
    document.getElementById('part-modal').style.display = 'flex';
}

function hidePartModal() {
    document.getElementById('part-modal').style.display = 'none';
}

function selectPart(partNumber) {
    const handoutKey = `${activeHandout}_Part_${partNumber}`;
    hidePartModal();
    selectHandout(handoutKey);
}

function initApp() {
    resetState();
    showView('landing-page');
}

function goHome() {
    resetState();
    showView('handout-selection-page');
}

function resetState() {
    currentQuestion = 0;
    score = 0;
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function goToMode(mode) {
    resetState();
    if (mode === 'quiz') {
        showView('quiz-page');
        loadQuizQuestion();
    } else if (mode === 'flashcard') {
        showView('flashcard-page');
        loadStudyFlashcard();
    }
}

function nextQuestionIndex() {
    currentQuestion++;
    return currentQuestion < questionsData.length;
}

/* 🟦 QUIZ PAGE FUNCTIONS */
function loadQuizQuestion() {
    const data = questionsData[currentQuestion];
    const qText = document.getElementById('quiz-question-text');
    qText.innerText = data.question;
    qText.style.display = "block"; // Always show at start of question
    
    document.getElementById('quiz-progress').innerText = `Question ${currentQuestion + 1} of ${questionsData.length}`;
    
    // Update visual progress bar
    const progressPercent = ((currentQuestion + 1) / questionsData.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;

    quizFlipCount = 0;

    document.getElementById('quiz-choices').style.display = "block";
    document.getElementById('quiz-flashcard-container').style.display = "none";
    document.getElementById('quiz-next-btn').style.display = "none";
    document.getElementById('quiz-flashcard-inner').classList.remove('flipped');

    const choicesDiv = document.getElementById('quiz-choices');
    choicesDiv.innerHTML = "";

    data.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
        btn.innerText = choice;
        btn.onclick = () => selectAnswer(btn, choice);
        choicesDiv.appendChild(btn);
    });
}

function selectAnswer(btn, selectedChoice) {
    const data = questionsData[currentQuestion];
    const allButtons = document.querySelectorAll('.choice-btn');
    allButtons.forEach(button => button.disabled = true);

    if (selectedChoice === data.answer) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        allButtons.forEach(button => {
            if (button.innerText === data.answer) button.classList.add('correct');
        });
    }

    // After delay, hide top question/choices and show the Flashcard
    setTimeout(() => {
        document.getElementById('quiz-choices').style.display = "none";
        document.getElementById('quiz-question-text').style.display = "none"; // HIDE top question
        
        // Populate flashcard with question INSIDE
        document.getElementById('quiz-card-front').innerText = data.question;
        document.getElementById('quiz-card-answer').innerText = data.answer;
        document.getElementById('quiz-card-explanation').innerText = data.explanation;
        
        document.getElementById('quiz-flashcard-container').style.display = "block";
        document.getElementById('quiz-next-btn').style.display = "block";
    }, 1000);
}

function flipQuizCard() {
    if (quizFlipCount >= 10) return;
    document.getElementById('quiz-flashcard-inner').classList.toggle('flipped');
    quizFlipCount++;
}

function manualNext() {
    if (nextQuestionIndex()) {
        loadQuizQuestion();
    } else {
        showView('result-page');
        showResult();
    }
}

/* 🟩 RESULT PAGE FUNCTIONS */
function showResult() {
    const resultText = document.getElementById('result-score');
    const messageText = document.getElementById('result-message');
    const percentage = score / questionsData.length;
    resultText.innerText = `${score} / ${questionsData.length}`;
    if (percentage === 1) {
        messageText.innerText = "Excellent! Perfect Score! 🏆";
        resultText.style.color = "var(--correct-color)";
    } else if (percentage >= 0.5) {
        messageText.innerText = "Good Job! Keep Practicing! 👍";
        resultText.style.color = "orange";
    } else {
        messageText.innerText = "Try Again! You can do better! 💪";
        resultText.style.color = "var(--wrong-color)";
    }
}

function restartQuiz() {
    resetState();
    showView('quiz-page');
    loadQuizQuestion();
}

/* 🟪 FLASHCARD PAGE FUNCTIONS */
function loadStudyFlashcard() {
    const data = questionsData[currentQuestion];
    document.getElementById('study-card-front').innerText = data.question;
    document.getElementById('study-card-answer').innerText = data.answer;
    document.getElementById('study-card-explanation').innerText = data.explanation;
    document.getElementById('study-flashcard-inner').classList.remove('flipped');
}

function flipStudyCard() {
    document.getElementById('study-flashcard-inner').classList.toggle('flipped');
}

function nextStudyFlashcard() {
    if (nextQuestionIndex()) {
        document.getElementById('study-flashcard-inner').classList.remove('flipped');
        setTimeout(loadStudyFlashcard, 150);
    } else {
        alert("You have finished all flashcards!");
        goHome(); 
    }
}

initApp();
