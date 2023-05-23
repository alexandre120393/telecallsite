function validar(){
    var nome = document.formulario.nome;
    var email = document.formulario.email;
    var dtnasc = document.formulario.dtnasc;
    var sexo = document.formulario.sexo;
    var nomemae = document.formulario.nomemae;
    var cpf = document.formulario.cpf;
    var cel = document.formulario.cel;
    var telfixo = document.formulario.telfixo;
    var end = document.formulario.end;
    var login = document.formulario.login;
    var senha = document.formulario.senha;
    var mensagem=''

    if (nome.value==''){
        mensagem= "Erro!!"
        nome.focus()
    }
    else if (email.value==''){
        mensagem="Erro!!"
        email.focus()
    }
    else if (dtnasc.value=''){
        mensagem="Erro!!"
        dtnasc.focus()
    }
    else{
        document.formulario.submit()
    }
 }