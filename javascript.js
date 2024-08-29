function logar(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("MenssagemErro");

    const usario_real = 'Kevyn';
    const senha_real = 'Kevyn123';

    if(username === usario_real && password === senha_real){
        alert("Usario e senha corretos, logado com sucesso!")
        window.location.href = 'https://www.ifpb.edu.br';

    } else {
        error.textContent = 'Senha ou usuario incorretos';
    }
}