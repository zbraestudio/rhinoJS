//if(!validate.isset(validate))
    var validate = new Object();

/**
 * Verifica se variável foi instanciada antes
 * @param variavel
 * @returns {boolean}
 */
validate.isset = function(variavel){

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
validate.isCNPJ = function(cnpj) {

    //deixa somente números
    cnpj = String.stringToNumbers(cnpj);

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
validate.isCPF = function (cpf) {
    var soma = 0;
    var resto;

    //deixa somente números
    cpf = String.stringToNumbers(cpf);
    
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
validate.isMail = function(email){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}

/**
 * Verifica de variável foi instanciada como um objeto
 * @param val
 * @returns {boolean}
 */
validate.isObject = function(val) {
    return (typeof val == 'object');
}

/**
 * Verifica de variável foi instanciada como um array
 * @param val
 * @returns {boolean}
 */
validate.isArray = function(val) {
    return (typeof val == 'object');
}

/**
 * Verifica de variável foi instanciada como uma string
 * @param val
 * @returns {boolean}
 */
validate.isString = function(val) {
    return (typeof val == 'string');
}

/**
 * Verifica de variável foi instanciada como é um número
 * @param val
 * @returns {boolean}
 */
validate.isNumber = function(val) {
    return (typeof val == 'number');
}

/**
 * Verifica de variável foi instanciada como um boolean
 * @param val
 * @returns {boolean}
 */
validate.isBoolean = function(val) {
    return (typeof val == 'boolean');
}
