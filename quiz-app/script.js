const next=document.querySelector('.next-btn');
const reset=document.querySelector('.reset-btn');
const question=document.querySelector('.question');
const answer=document.querySelector('.answer');
const scoreDisplay=document.querySelector('.score');
const start=document.querySelector('.start');

const quesArr = [
    {
        question: 'Q: What does HTML stand for?',
        answer: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hyperlink Text Markup Language', correct: false },
            { text: 'Hypertext Multiple Language', correct: false },
            { text: 'High-Level Text Markup Language', correct: false },
        ]
    },
    {
        question: 'Q: Which language is primarily used for styling web pages?',
        answer: [
            { text: 'JavaScript', correct: false },
            { text: 'CSS', correct: true },
            { text: 'Python', correct: false },
            { text: 'HTML', correct: false },
        ]
    },
    {
        question: 'Q: What does CSS stand for?',
        answer: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Cascading System Sheets', correct: false },
        ]
    },
    {
        question: 'Q: Which of these is a front-end web development technology?',
        answer: [
            { text: 'Node.js', correct: false },
            { text: 'React', correct: true },
            { text: 'MongoDB', correct: false },
            { text: 'MySQL', correct: false },
        ]
    },
    {
        question: 'Q: What does URL stand for?',
        answer: [
            { text: 'Uniform Resource Locator', correct: true },
            { text: 'Universal Resource Locator', correct: false },
            { text: 'Uniform Resource Link', correct: false },
            { text: 'Universal Resource Link', correct: false },
        ]
    }
];


let index;
let score;

start.addEventListener('click',startQuiz);
next.addEventListener('click',showNextQuestion);
reset.addEventListener('click',startQuiz);



function startQuiz()
{
    index=0;
    score=0;
    scoreDisplay.innerHTML="";

    question.innerHTML="";
    answer.innerHTML="";
    showQuestion(quesArr[index]);
    next.classList.add('hidden');
    reset.classList.remove('hidden');
    start.classList.add('hidden');

}

function selectAnswers(e,button)
{
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
    if(e.correct)
    {
        score++;
        // scoreDisplay.textContent=`score: ${score} out of 5`;

    }
    next.classList.remove('hidden');  
}

function showQuestion(e)
{
    question.innerHTML=e.question;
    answer.innerHTML="";
    e.answer.forEach(el => {
        const button = document.createElement('button');
        button.textContent=el.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswers(el,button));
        answer.appendChild(button);

    });
}


function showNextQuestion(e)
{
    index++;
    if(index<quesArr.length)
    {
        showQuestion(quesArr[index]);
        next.classList.add('hidden');
    }
    else{
        question.innerHTML="";
        answer.innerHTML="";
        scoreDisplay.classList.remove('hidden');
        scoreDisplay.innerHTML=`SCORE IS: ${score} out of 5`;
        next.classList.add('hidden');
        reset.classList.add('hidden');
        start.classList.remove('hidden');

    }
}
