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
/* força da sennha*/

function verificaForcaSenha() 
{
	var numeros = /([0-9])/;
	var alfabeto = /([a-zA-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

	if($('#password').val().length<6) 
	{
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
	} else {  	
		if($('#password').val().match(numeros) && $('#password').val().match(alfabeto) && $('#password').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
		} else {
			$('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
		}
	}
}
