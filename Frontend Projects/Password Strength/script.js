let pass = document.getElementById('password');
let message = document.getElementById('message');
let strength = document.getElementById('strength');

pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        message.style.display='block';
    }else{
        message.style.display='none';
    }
    if(pass.value.length < 4){
        strength.innerHTML = 'Weak';
        pass.style.borderColor = '#d2361b';
    }else if(pass.value.length >= 4 && pass.value.length < 8){
        strength.innerHTML = 'Medium';
        pass.style.borderColor = '#f7941d';
    }
    else if(pass.value.length >= 8){
        strength.innerHTML = 'Strong';
        pass.style.borderColor = 'lightgreen';
    }
})
