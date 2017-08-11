/**
 * Função que trata uma string e retorna ela somente com os números contidos
 * @param string text
 * @returns string
 * @constructor
 */
String.stringToNumbers = function(text){
    return text.replace(/[^\d]+/g,'');
}

/**
 * Função de String que dá um replace todas as vezes possíveis.
 * @type {Function|*|String.replaceAll|jQuery.replaceAll|replaceAll}
 */
String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
};
String.replaceAll = function(search, replace, subject){
    return subject.replaceAll(search, replace);
}
