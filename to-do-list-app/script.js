let userinput=document.querySelector('.userinput');
const button=document.querySelector('.btn');

button.addEventListener('click',addtask);

function addtask(event)
{

    event.preventDefault();

    let userinput2=userinput.value.trim();
    if(userinput2==="")
    {
        alert("enter a valid task");
        return;
    }
    
    const newtask=document.createElement('li');
    newtask.classList.add('task-item');

    newtask.textContent=userinput2;


    const delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.classList.add('del-btn');
    newtask.appendChild(delbtn);

    
    const editbtn=document.createElement('button');
    editbtn.innerText='edit';
    editbtn.classList.add('edit-btn');
    newtask.appendChild(editbtn);
    

    const tasklist=document.getElementById('tasklist');
    tasklist.appendChild(newtask);

    userinput.value='';

    delbtn.addEventListener('click',()=>
    {
        tasklist.removeChild(newtask);
    })

    editbtn.addEventListener('click',()=>
    {
          const editinput=document.createElement('input');
          editinput.type='text';
          editinput.value=newtask.firstChild.textContent;
          editinput.classList.add('edit-input');

        const savebtn=document.createElement('button');
        savebtn.innerText='save';
        savebtn.classList.add('save-btn');
        
        newtask.innerHTML='';
        newtask.appendChild(editinput);
        newtask.appendChild(savebtn);
        newtask.appendChild(delbtn);

        savebtn.addEventListener('click',()=>{
            const updatedtask=editinput.value.trim();
            if(updatedtask==="")
                {
                    alert("enter valid task");
                    return;
                }

            newtask.innerHTML = updatedtask;
            newtask.appendChild(editbtn);
            newtask.appendChild(delbtn);
            
        });


    });
    
}






