
var rhinoJS_imgs_preload = new Array();
/**
 * Função que adiciona ao navegador um 'preload' das imagens que serão utilizadas mais pra frente
 * @param string url
 */
Image.preload = function(url){

    rhinoJS_imgs_preload.push(url);

    if(rhinoJS_imgs_preload.length > 0) {

        jQuery('#rhinoJS_imgs_preload').remove();

        var css_script = '<style id="rhinoJS_imgs_preload">body:after {content:';

        rhinoJS_imgs_preload.forEach(function(e) {
            css_script += ' url(' + e + ')';
        })

        css_script += ';display: none;}</style>';
        $(css_script).appendTo('head');

    }
}