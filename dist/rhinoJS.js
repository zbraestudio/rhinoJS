var rhinoJS=new Object
rhinoJS.version="1.1.1.0",rhinoJS.log=function(r){console.log("rhinoJS Framework Javascript - "+r)},rhinoJS.error=function(r){alert("rhinoJS Framework Javascript - "+r),rhinoJS.log("Parou!")},rhinoJS.checking=function(){return"undefined"==typeof jQuery?(rhinoJS.error("o jQuery não foi carregado e é necessário."),!1):!0},rhinoJS.init=function(){rhinoJS.log("Iniciando..."),rhinoJS.log("Fazendo verificação nas dependências de terceiros..."),rhinoJS.checking()&&rhinoJS.log("Terceiros verificados.")},rhinoJS.init(),Array.search=function(r,n){var i=!1
return r.forEach(function(r){r==n&&(i=!0)}),i}
var Form=new Object
Form.send=function(r,n,i,o){n="undefined"!=typeof n?n:new Array,i="undefined"!=typeof i?i:"POST",o="undefined"!=typeof o?o:"_self"
var e=$('<form action="#"></form>')
e.attr("action",r),e.attr("method",i),e.attr("target",o),$.each(n,function(r,n){e.append('<input name="'+r+'" type="hidden" value="'+n+'">')}),$("body").append(e),e.submit(),e.remove()},navigator.isMobile=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},String.stringToNumbers=function(r){return r.replace(/[^\d]+/g,"")}
var validate=new Object
validate.isset=function(r){return void 0!==r&&null!==r},validate.isCNPJ=function(r){if(r=String.stringToNumbers(r),""==r)return!1
if(14!=r.length)return!1
if("00000000000000"==r||"11111111111111"==r||"22222222222222"==r||"33333333333333"==r||"44444444444444"==r||"55555555555555"==r||"66666666666666"==r||"77777777777777"==r||"88888888888888"==r||"99999999999999"==r)return!1
for(tamanho=r.length-2,numeros=r.substring(0,tamanho),digitos=r.substring(tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9)
if(resultado=soma%11<2?0:11-soma%11,resultado!=digitos.charAt(0))return!1
for(tamanho+=1,numeros=r.substring(0,tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9)
return resultado=soma%11<2?0:11-soma%11,resultado==digitos.charAt(1)},validate.isCPF=function(r){var n,o=0
if(r=String.stringToNumbers(r),"00000000000"==r)return!1
for(i=1;i<=9;i++)o+=parseInt(r.substring(i-1,i))*(11-i)
if(n=10*o%11,10!=n&&11!=n||(n=0),n!=parseInt(r.substring(9,10)))return!1
for(o=0,i=1;i<=10;i++)o+=parseInt(r.substring(i-1,i))*(12-i)
return n=10*o%11,10!=n&&11!=n||(n=0),n==parseInt(r.substring(10,11))},validate.isMail=function(r){var n=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/,i=/@[\w\-]+\./,o=/\.[a-zA-Z]{2,3}$/
return-1==r.search(n)&&-1!=r.search(i)&&-1!=r.search(o)},validate.isObject=function(r){return"object"==typeof r},validate.isArray=function(r){return"object"==typeof r},validate.isString=function(r){return"string"==typeof r},validate.isNumber=function(r){return"number"==typeof r},validate.isBoolean=function(r){return"boolean"==typeof r}
var rhinoJS_imgs_preload=new Array
Image.preload=function(r){if(rhinoJS_imgs_preload.push(r),rhinoJS_imgs_preload.length>0){jQuery("#rhinoJS_imgs_preload").remove()
var n='<style id="rhinoJS_imgs_preload">body:after {content:'
rhinoJS_imgs_preload.forEach(function(r){n+=" url("+r+")"}),n+=";display: none;}</style>",$(n).appendTo("head")}}
