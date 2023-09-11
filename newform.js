const btn=document.querySelector('#btn');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const onclick=(e)=>{
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value==='' ){
        alert('Please fill the fields');
    }else{
        console.log(nameInput.value)
        console.log(emailInput.value)
        nameInput.value='';
        emailInput.value='';
    }
}
const onmouseover=(e)=>{
    btn.style.color = 'red';
}
const onmouseout=(e)=>{
    btn.style.color = 'green';
}

btn.addEventListener('click',onclick);
btn.addEventListener('mouseover',onmouseover);
btn.addEventListener('mouseout',onmouseout);

