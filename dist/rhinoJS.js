var rhinoJS=new Object();rhinoJS.version="1.3beta";rhinoJS.log=function(msg){console.log('rhinoJS Framework Javascript - '+msg);}
rhinoJS.error=function(msg){alert('rhinoJS Framework Javascript - '+msg);rhinoJS.log('Parou!')}
rhinoJS.checking=function(){if(typeof jQuery==='undefined'){rhinoJS.error('o jQuery não foi carregado e é necessário.');return false;}
return true;}
rhinoJS.init=function(){rhinoJS.log('Iniciando...');rhinoJS.log('Fazendo verificação nas dependências de terceiros...');if(!rhinoJS.checking()){return;}
rhinoJS.log('Terceiros verificados.');}
rhinoJS.init();Array.search=function(array,item){var r=false;array.forEach(function(e){if(e==item)
r=true;});return r;}
var Form=new Object();Form.send=function(url,params,method,target){params=typeof params!=='undefined'?params:new Array();method=typeof method!=='undefined'?method:'POST';target=typeof target!=='undefined'?target:'_self';var form=$('<form action="#"></form>');form.attr('action',url);form.attr('method',method);form.attr('target',target);$.each(params,function(key,value){form.append('<input name="'+key+'" type="hidden" value="'+value+'">');});$('body').append(form);form.submit();form.remove();}
navigator.isMobile=function(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))
return true;else
return false;}
navigator.realLink=function(url,link){if(url.substr(-1)=='/')
url=url.substr(0,(url.length-1));var protocolo;if(url.substr(0,5)=='https')
protocolo='https';else
protocolo='http'
url=url.substr(protocolo.length+3);var dominio;var url_niveis=url.split('/');dominio=url_niveis.shift();if(link.indexOf('://')>=0)
return link;if(link.substr(0,2)=='//'){return protocolo+':'+link;}
if(link.substr(0,1)=='/'){return protocolo+'://'+dominio+'/'+link.substr(1);}
var link_niveis=link.split('/');if(link.substr(0,3)=='../'||link.substr(0,5)=='./../'){var retornos_n=0;link_niveis.forEach(function(item){if(item=='.')
retornos_n++;if(item=='..'){retornos_n++;url_niveis.pop();}});link_niveis=link_niveis.slice(retornos_n);if(url_niveis.length>0)
return protocolo+'://'+dominio+'/'+url_niveis.join('/')+'/'+link_niveis.join('/');else
return protocolo+'://'+dominio+'/'+link_niveis.join('/');}
if(link.substr(0,2)=='./'){link=link.substr(2);}
return protocolo+'://'+dominio+'/'+url_niveis.join('/')+'/'+link;}
String.stringToNumbers=function(text){return text.replace(/[^\d]+/g,'');}
String.prototype.replaceAll=function(search,replace){return this.split(search).join(replace);};String.replaceAll=function(search,replace,subject){return subject.replaceAll(search,replace);}
var validate=new Object();validate.isset=function(variavel){if((variavel===undefined)||(variavel===null))
return false;else
return true;}
validate.isCNPJ=function(cnpj){cnpj=String.stringToNumbers(cnpj);if(cnpj=='')return false;if(cnpj.length!=14)
return false;if(cnpj=="00000000000000"||cnpj=="11111111111111"||cnpj=="22222222222222"||cnpj=="33333333333333"||cnpj=="44444444444444"||cnpj=="55555555555555"||cnpj=="66666666666666"||cnpj=="77777777777777"||cnpj=="88888888888888"||cnpj=="99999999999999")
return false;tamanho=cnpj.length-2
numeros=cnpj.substring(0,tamanho);digitos=cnpj.substring(tamanho);soma=0;pos=tamanho-7;for(i=tamanho;i>=1;i--){soma+=numeros.charAt(tamanho-i)*pos--;if(pos<2)
pos=9;}
resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(0))
return false;tamanho=tamanho+1;numeros=cnpj.substring(0,tamanho);soma=0;pos=tamanho-7;for(i=tamanho;i>=1;i--){soma+=numeros.charAt(tamanho-i)*pos--;if(pos<2)
pos=9;}
resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(1))
return false;return true;}
validate.isCPF=function(cpf){var soma=0;var resto;cpf=String.stringToNumbers(cpf);if(cpf=="00000000000")return false;for(i=1;i<=9;i++)soma=soma+parseInt(cpf.substring(i-1,i))*(11-i);resto=(soma*10)%11;if((resto==10)||(resto==11))
resto=0;if(resto!=parseInt(cpf.substring(9,10)))
return false;soma=0;for(i=1;i<=10;i++)
soma=soma+parseInt(cpf.substring(i-1,i))*(12-i);resto=(soma*10)%11;if((resto==10)||(resto==11))
resto=0;if(resto!=parseInt(cpf.substring(10,11)))
return false;return true;}
validate.isMail=function(email){var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;var check=/@[\w\-]+\./;var checkend=/\.[a-zA-Z]{2,3}$/;if(((email.search(exclude)!=-1)||(email.search(check))==-1)||(email.search(checkend)==-1)){return false;}
else{return true;}}
validate.isObject=function(val){return(typeof val=='object');}
validate.isArray=function(val){return(typeof val=='object');}
validate.isString=function(val){return(typeof val=='string');}
validate.isNumber=function(val){return(typeof val=='number');}
validate.isBoolean=function(val){return(typeof val=='boolean');}
var rhinoJS_imgs_preload=new Array();Image.preload=function(url){rhinoJS_imgs_preload.push(url);if(rhinoJS_imgs_preload.length>0){jQuery('#rhinoJS_imgs_preload').remove();var css_script='<style id="rhinoJS_imgs_preload">body:after {content:';rhinoJS_imgs_preload.forEach(function(e){css_script+=' url('+e+')';})
css_script+=';display: none;}</style>';$(css_script).appendTo('head');}}
window.change=function(fnc){jQuery(document).ready(fnc);jQuery(window).resize(fnc);}