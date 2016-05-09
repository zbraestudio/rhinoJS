/**
 * Verifica item-a-item de array se x valor já está contido nele.
 * @param array {array}
 * @param item
 * @returns {boolean}
 */
Array.search = function(array, item){
  var r = false;

  array.forEach(function(e){

    if(e == item)
      r = true;
      
  });

  return r;

}
