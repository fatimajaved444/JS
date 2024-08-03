const startbtn=document.querySelector('.startbtn');
const table=document.querySelector('.table');
const count=document.querySelector('.count');
const result=document.querySelector('.result');
const resetdiv=document.querySelector('.reset-btn');
let resetbtn=document.createElement('button');

let lockboard=false;
let wincounter=0;

let moves;
// let cards=[
//     // 1,2,3,4,1,2,3,4,5,5,6,6
    
// ];
let cards = [
   

     '🔨','🔨', '📍', '📍','🧩','🧩',  '🔑',   '🔑', '🔍','🔍', '🧲', '🧲'

];
let selectedcards=[];
   
startbtn.addEventListener('click',startgame);

 
resetbtn.innerHTML = 'Reset';
resetbtn.addEventListener('click', resetgame);
resetbtn.classList.add('resetbutton');

function startgame()
{
    table.innerHTML="";
    shuffle(cards);
    moves=22;
    wincounter = 0;
    selectedcards = []; 
    lockboard = false; 

    const grid=document.createElement('div');
    grid.classList.add('grid');

    
    cards.forEach(element => {
        const card=document.createElement('div');
        card.classList.add('card');
        card.dataset.value=element;
        card.textContent=element;
        grid.appendChild(card);

        card.addEventListener('click',function()
        {
            if(!lockboard&&card.textContent==="" )
            {
                checkcards(card);

            }
        });
       

    });
   table.appendChild(grid);
   setTimeout(() => {
    const cardelement=document.querySelectorAll('.card');
    cardelement.forEach(card => {
        card.textContent="";
    });

   }, 1200);

   
   count.textContent=`Number of moves are ${moves}`;
   resetdiv.appendChild(resetbtn); 
}
function resetgame()
{
    result.innerHTML="";
    startgame();
}

function checkcards(card)
{
  
    if(moves<=0)
    {
        return ;
    }

    card.innerHTML=card.dataset.value;
    console.log(card.innerHTML);
    selectedcards.push(card);
    
    if(selectedcards.length===2)
    {
        lockboard=true;
        if(selectedcards[0].dataset.value===selectedcards[1].dataset.value)
        {
            selectedcards=[];
            lockboard=false;
            wincounter++;
        }
        else{
            setTimeout(() => {
                selectedcards[0].innerHTML="";
                selectedcards[1].innerHTML="";
                selectedcards=[];
                lockboard=false;                

            }, 1000);
        }
    }
    moves--;
    // console.log(moves);
   
    count.textContent=`Number of moves are ${moves}`;
    count.classList.add('numofmoves');
    if(moves===0 && wincounter!==6)
    {
        setTimeout(() => {
            result.innerHTML=`YOU LOST`;
            result.classList.add('result-display');
           

        }, 1000);
    }
    if(wincounter===6)
    {
       setTimeout(() => {
        result.innerHTML=`YOU WON`;
        result.classList.add('result-display');
       }, 1000);
     

    }
}

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}