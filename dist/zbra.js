var zbra = new Object();
zbra.version = "1.0.1";

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

}
/**
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
