let btn = document.querySelector('.fa-eye')
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{inputSenha.setAttribute('type', 'password')}
})