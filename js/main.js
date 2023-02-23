// Question array
const question = [
    {question: 'Enter Your First Name'},
    {question: 'Enter Your Last Name'},
    {question: 'Enter Your Email', patters:/^\S+@\S+\.\S+$/},
    {question: 'Create A Password', type: 'password'}
    
];

// Transition Times
const shakeTime = 100;  //Shake Transition Time
const switchTime = 200; //Transition Between Questions

// Init Position At First Question

const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// Events

// Get Question On DOM Lead
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Buttom Click
nextBtn.addEventListener('click',validate);

// Functions
function getQuestion() {
// Get Question From Array & Add To MArkup
inputLabel.innerHTML = questions[position].question;
// Get Current Type
inputField.type = questions[position].type || 'text';
// Get Current Answer
inputField.value = questions[position].anwser || '';
// Focus On Element
inputField.focus();

// Set Progress Bar Width - Variable to the question length
progress.style.width = (position * 100) / questions.length + '%';

// Add User Icon OR Back Arrow Depending on Question
prevBtn.classname = position ? 'fas fa-arrow-left' : 'fas fa-arrow-user';

showQuestion();
}

// Display Question To User

function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';

}

// Hide Question From User
function hideQuestion(){
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width= 0;
    inputProgress.style,transition = 'none';
    inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x,y){
    formBox.style.transform = `translate(${x}px,${y}px)`;

}

// Validate Field
function validate(){
    // Make Sure Pattern Matches If There Is One
    if(!inputField.value.match( question[position].pattern || /.+/ ))
    {
        inputFail();
    } else {
        InputPass();
    }
}

// Field input Fail
function inputFail() {
    formBox.className = 'error';
    // Repeat Shake Motion - Set i to number of shakes

    for (let i = 0; i < 6; i++)

}


// Field input Pass
function inputPass(){
    
}

