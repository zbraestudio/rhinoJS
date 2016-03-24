zbra.array = new Object();

/**
 * Verifica item-a-item de array se x valor já está contido neel.
 * @param array [array}
 * @param item
 * @returns {boolean}
 */
zbra.array.search = function(array, item){

    array.forEach(function(e){

        if(e == item)
            return true;
    });

    return false;

}