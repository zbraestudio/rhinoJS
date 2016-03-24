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