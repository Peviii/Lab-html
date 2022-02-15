let btn = document.querySelector('#P');
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#password')
    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type','text');
    }else{inputSenha.setAttribute('type', 'password');}
});
let btnConfirm = document.querySelector('#confP');
btn.addEventListener('click',()=>{
    let inputConfirmSenha = document.querySelector('#confirm-Password')
    if(inputConfirmSenha.getAttribute('type')=='password'){
        inputConfirmSenha.setAttribute('type','text');
    }else{inputConfirmSenha.setAttribute('type', 'password');}
});