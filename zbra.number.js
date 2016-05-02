zbra.number = new Object();

zbra.number.StringToNumbers = function(text){
    return text.replace(/[^\d]+/g,'');
}