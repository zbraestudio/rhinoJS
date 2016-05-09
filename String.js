/**
 * Função que trata uma string e retorna ela somente com os números contidos
 * @param string text
 * @returns string
 * @constructor
 */
String.StringToNumbers = function(text){
    return text.replace(/[^\d]+/g,'');
}