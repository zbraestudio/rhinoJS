//if(!validate.isset(Form))
    var Form = new Object();

/**
 * Envia pacote de dados (via GET ou POST)
 * @param url
 * @param params
 * @param method
 * @param target
 */
Form.send = function(url, params, method, target){

    //defaults
    params =    typeof params !== 'undefined' ? params : new Array();
    method =    typeof method !== 'undefined' ? method : 'POST';
    target =    typeof target !== 'undefined' ? target : '_self';

    //cria formulario
    var form = $('<form action="#"></form>');
    form.attr('action', url);
    form.attr('method', method);
    form.attr('target', target);

    //parâmetros
    $.each(params, function( key, value ) {
        form.append('<input name="' + key + '" type="hidden" value="' + value + '">');
    });

    //anexa do documento, envia e já exclui na sequência
    $('body').append(form);
    form.submit();
    form.remove();

}
