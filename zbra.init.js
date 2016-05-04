var zbra = new Object();
zbra.version = "1.3.0";

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

    //verifica se RequireJS está carregado
    if (typeof requirejs === 'undefined') {
        zbra.error('o RequireJS não foi carregado e é necessário.');
        return false;
    }

    return true;
}


/**
 * Carrega framework
 */
zbra.init = function(){

    zbra.log('Iniciando...');


    zbra.log('Fazendo verificação nas dependências de terceiros...');
    //verificações...
    if(!zbra.checking()){
        return;
    }
    zbra.log('Terceiros verificados.');

    zbra.log('Carregando toda a biblioteca...');

    var requires = [zbra_path + 'zbra.number',
                    zbra_path + 'zbra.array',
                    zbra_path + 'zbra.device',
                    zbra_path + 'zbra.functions'];

    requirejs(requires, function() {
        zbra.log('Toda biblioteca carregada!');
    });


}


//startando zbra!
zbra.init();

