/**
 * Verifica se o aparelho é acessado de um Celular
 * @returns {boolean}
 */
navigator.isMobile = function(){

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
 * Retorna a URL final de um link parcial
 * Exemplo: ../../teste.html -> http://www.site.com/teste.html
 *
 * @param url
 * @param link
 * @returns {string}
 */
navigator.realLink = function(url, link){

  //retira ultima barra, se tiver
  if(url.substr(-1) == '/')
    url = url.substr(0, (url.length-1));

  //pega protocolo
  var protocolo;
  if(url.substr(0,5) == 'https')
    protocolo = 'https';
  else
    protocolo = 'http'

  //atualiza a URL sem protocolo
  url = url.substr(protocolo.length + 3);

  //pega dominio e separa níveis de URL num array
  var dominio;
  var url_niveis = url.split('/');
  dominio = url_niveis.shift();

  //LINK: verifica se já é um link absoluto
  if(link.indexOf('://') >= 0)
    return link;


  //LINK: verifica se só falta o protocolo
  if(link.substr(0,2) == '//'){
    return protocolo + ':' + link;
  }

  //LINK: primeiro nível
  if(link.substr(0, 1) == '/'){
    return protocolo + '://' + dominio + '/' + link.substr(1);
  }

  //separa níveis de link num array
  var link_niveis = link.split('/');

  //LINK: retrocesso
  if(link.substr(0, 3) == '../' || link.substr(0, 5) == './../') {

    var retornos_n = 0;
    link_niveis.forEach(function (item) {

      if(item == '.')
        retornos_n++;

      if(item == '..') {
        retornos_n++;
        url_niveis.pop();
      }

    });

    link_niveis = link_niveis.slice(retornos_n);

    if(url_niveis.length > 0)
      return protocolo + '://' + dominio + '/' + url_niveis.join('/') + '/' + link_niveis.join('/');
    else
      return protocolo + '://' + dominio + '/' + link_niveis.join('/');
  }


  //LINK: nível simples
  if(link.substr(0,2) == './'){
    link = link.substr(2);
  }
  return protocolo + '://' + dominio + '/' + url_niveis.join('/') + '/' + link;
}
