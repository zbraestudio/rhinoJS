var rhinoJS = new Object();
rhinoJS.version = "1.3beta";

/**
 * Cria log no console
 * @param msg
 */
rhinoJS.log = function(msg){
    console.log('rhinoJS Framework Javascript - ' + msg);
}

/**
 * Exibe mensagens de erro do framework
 * @param msg
 */
rhinoJS.error = function(msg){
    alert('rhinoJS Framework Javascript - ' + msg);

    rhinoJS.log('Parou!')
}

/**
 * Faz verificações necessárias para um bom funcionamento do framework
 * @returns {boolean}
 */
rhinoJS.checking = function(){

    //verifica se Jquery está carregado
    if (typeof jQuery === 'undefined') {
        rhinoJS.error('o jQuery não foi carregado e é necessário.');
        return false;
    }

    return true;
}


/**
 * Carrega framework
 */
rhinoJS.init = function(){

    rhinoJS.log('Iniciando...');


    rhinoJS.log('Fazendo verificação nas dependências de terceiros...');
    //verificações...
    if(!rhinoJS.checking()){
        return;
    }
    rhinoJS.log('Terceiros verificados.');


}


//startando zbra!
rhinoJS.init();

