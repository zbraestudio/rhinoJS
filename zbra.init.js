var zbra = new Object();
zbra.version = "1.1.0";

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

