let randomnumber=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessfield');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastresult');
const loworhigh=document.querySelector('.loworhigh');
const startover=document.querySelector('.resultparas');

const p=document.createElement('p');
let preguess=[];
let numguess=1;

let playgame=true;

if(playgame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess=parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);

    });
}

function validateguess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number');
    }
    else if(guess<0)
    {
        alert('Please enter a positive number');
    }
    else if(guess>100)
    {
        alert('Please enter a number smaller than 100');
    }
    else{
        preguess.push(guess);
        if(numguess===11)
        {
            displayguess(guess);
            displaymessage(`Game Over. random number was ${randomnumber}`);
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess)
{
    if(guess===randomnumber)
    {
        displaymessage('you guessed right number');
        endgame();
    }
    else if(guess<randomnumber){
        displaymessage(`numer is too low`);
    }
    else if(guess>randomnumber){
        displaymessage(`numer is too high`);
    }
}


function displayguess(guess)
{
    userinput.value='';
    guessslot.innerHTML +=`${guess}  `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
}

function displaymessage(message)
{
    loworhigh.innerHTML=`<h2>${message}</h2>`;
}

function endgame()
{
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">start new game</h2>`;
    startover.appendChild(p);
    playgame=false;
    newgame();
}

function newgame()
{
    const newgamebutton=document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function(e)
    {
        randomnumber=parseInt(Math.random()*100 +1);
        preguess=[];
        numguess=1;
        guessslot.innerHTML='';
        remaining.innerHTML=`${11-numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame=true;
    })
}

