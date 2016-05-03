var zbra = new Object();
zbra.version = "1.2.0";

/**
 * Cria log no console
 * @param msg
 */
zbra.log = function(msg){
    console.log('Z.BRA Framework Javascript - ' + msg);
}

/**
 * Exibe mensagens de erro do framework
 * @param msg
 */
zbra.error = function(msg){
    alert('Z.BRA Framework Javascript - ' + msg);

    zbra.log('Parou!')
}

/**
 * Faz verificações necessárias para um bom funcionamento do framework
 * @returns {boolean}
 */
zbra.checking = function(){

    //verifica se Jquery está carregado
    if (typeof jQuery === 'undefined') {
        zbra.error('o jQuery não foi carregado e é necessário.');
        return false;
    }

    return true;
}

/**
 * Carrega framework
 */
zbra.init = function(){

    zbra.log('Iniciando...');

    //verificações...
    if(!zbra.checking()){
        return;
    }

    zbra.log('Iniciado.');

}

//startando zbra!
zbra.init();

zbra.number = new Object();

zbra.number.StringToNumbers = function(text){
    return text.replace(/[^\d]+/g,'');
}
zbra.array = new Object();

/**
 * Verifica item-a-item de array se x valor já está contido nele.
 * @param array {array}
 * @param item
 * @returns {boolean}
 */
zbra.array.search = function(array, item){
  var r = false;

  array.forEach(function(e){

    if(e == item)
      r = true;
      
  });

  return r;

}
zbra.device = new Object();

/**
 * Verifica se o aparelho é acessado de um Celular
 * @returns {boolean}
 */
zbra.device.isMobile = function(){

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    )
        return true;
    else
        return false;

}/**
 * Verifica se variável foi instanciada antes
 * @param variavel
 * @returns {boolean}
 */
zbra.isset = function(variavel){

    if( (variavel === undefined) || (variavel === null) )
        return false;
    else
        return true;

}

/**
 * Verifica se número de CNPJ é válido
 * (não verifica autenticidade na Receita Federal)
 * @param cnpj
 * @returns {boolean}
 */
zbra.validateCNPJ = function(cnpj) {

    //deixa somente números
    cnpj = zbra.number.StringToNumbers(cnpj);

    //Já elimina se for branco
    if(cnpj == '') return false;

    //Já elimina se não tiver o número de caracteres correto
    if (cnpj.length != 14)
        return false;

    //Já elimina inválidos conhecidos sem perder tempo
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    //Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}

/**
 * Verifica se número de CPF é válido
 * @param cpf
 * @returns {boolean}
 */
zbra.validateCPF = function (cpf) {
    var soma = 0;
    var resto;

    //deixa somente números
    cpf = zbra.number.StringToNumbers(cpf);
    
    //Verifica se veio zeo-zeo-zero..
    if (cpf == "00000000000") return false;
    
    
    for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))
        resto = 0;
    
    if (resto != parseInt(cpf.substring(9, 10)) )
        return false;

    soma = 0;
    
    for (i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))
        resto = 0;

    if (resto != parseInt(cpf.substring(10, 11) ) )
        return false;
    
    return true;
}

/**
 * Verifica se E-mail é de fato um e-mail válido
 * @param email
 * @returns {boolean}
 */
zbra.validateMail = function(email){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}

/**
 * Envia pacote de dados (via GET ou POST)
 * @param url
 * @param params
 * @param method
 * @param target
 */
zbra.send = function(url, params, method, target){

    //defaults
    params =    typeof params !== 'undefined' ? params : new Array();
    method =    typeof method !== 'undefined' ? method : 'POST';
    target =    typeof target !== 'undefined' ? target : '_self';

    //cria formulario
    var form = $('<form action="#"></form>');
    form.attr('action', url);
    form.attr('method', method);
    form.attr('target', target);

    //parâmetros
    $.each(params, function( key, value ) {
        form.append('<input name="' + key + '" type="hidden" value="' + value + '">');
    });

    //anexa do documento, envia e já exclui na sequência
    $('body').append(form);
    form.submit();
    form.remove();

}

