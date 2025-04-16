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
// cria a variavel do tipo array
var dadosLista = [];
function salvarUser(){
 let nomeUser = document.getElementById('nomeUser').value;
 if(nomeUser){
    dadosLista.push(nomeUser);
    console.log(dadosLista);
    criaLista();
    document.getElementById('nomeUser').value = "";
// push é para colocar o valor dentro do array 

 }else{
    alert("por favor informar um nome para o cadastro");

 }
}
// Funçao para preencher a lista de cadastro 

function criaLista(){
    let tabela = "<tr> <th>Nome</th> <th>Ações </th> </tr>";
    for(let i = 0; i <= (dadosLista.length -1);i++){
        tabela += "<tr> <td>" + dadosLista [i] + "</td> <td> <button > <Editar >/button ><Excluir</button ></td> </tr>";
        document.getElementById('tabela').innerHTML = tabela; 
        //+= é para o que tiver dentro da tabela não vai alterar o que tem na tabela e vai adicionar 
        // o + é para juntar tudo 
    }
}