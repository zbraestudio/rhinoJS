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


/**
 * Verifica item-a-item de array se x valor já está contido neel.
 * @param array [array}
 * @param item
 * @returns {boolean}
 */
function zbra_array_search(array, item){

    array.forEach(function(e){

        if(e == item)
            return true;

    });

    return false;

}