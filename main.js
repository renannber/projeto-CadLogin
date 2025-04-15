// implementação de acesso para atela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //implementação estrutura que  testa se todos dos campos 


    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos ");
    } else{
        window.location.href = "cadastro.html";
    }

}
