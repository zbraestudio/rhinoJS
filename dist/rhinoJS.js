var rhinoJS=new Object
rhinoJS.version="1.0.0",rhinoJS.log=function(n){console.log("rhinoJS Framework Javascript - "+n)},rhinoJS.error=function(n){alert("rhinoJS Framework Javascript - "+n),rhinoJS.log("Parou!")},rhinoJS.checking=function(){return"undefined"==typeof jQuery?(rhinoJS.error("o jQuery não foi carregado e é necessário."),!1):!0},rhinoJS.init=function(){rhinoJS.log("Iniciando..."),rhinoJS.log("Fazendo verificação nas dependências de terceiros..."),rhinoJS.checking()&&rhinoJS.log("Terceiros verificados.")},rhinoJS.init(),Array.search=function(n,r){var i=!1
return n.forEach(function(n){n==r&&(i=!0)}),i}
var Form=new Object
Form.send=function(n,r,i,t){r="undefined"!=typeof r?r:new Array,i="undefined"!=typeof i?i:"POST",t="undefined"!=typeof t?t:"_self"
var o=$('<form action="#"></form>')
o.attr("action",n),o.attr("method",i),o.attr("target",t),$.each(r,function(n,r){o.append('<input name="'+n+'" type="hidden" value="'+r+'">')}),$("body").append(o),o.submit(),o.remove()},navigator.isMobile=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},String.stringToNumbers=function(n){return n.replace(/[^\d]+/g,"")}
var validate=new Object
validate.isset=function(n){return void 0!==n&&null!==n},validate.isCNPJ=function(n){if(n=String.stringToNumbers(n),""==n)return!1
if(14!=n.length)return!1
if("00000000000000"==n||"11111111111111"==n||"22222222222222"==n||"33333333333333"==n||"44444444444444"==n||"55555555555555"==n||"66666666666666"==n||"77777777777777"==n||"88888888888888"==n||"99999999999999"==n)return!1
for(tamanho=n.length-2,numeros=n.substring(0,tamanho),digitos=n.substring(tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9)
if(resultado=soma%11<2?0:11-soma%11,resultado!=digitos.charAt(0))return!1
for(tamanho+=1,numeros=n.substring(0,tamanho),soma=0,pos=tamanho-7,i=tamanho;i>=1;i--)soma+=numeros.charAt(tamanho-i)*pos--,pos<2&&(pos=9)
return resultado=soma%11<2?0:11-soma%11,resultado==digitos.charAt(1)},validate.isCPF=function(n){var r,t=0
if(n=String.stringToNumbers(n),"00000000000"==n)return!1
for(i=1;i<=9;i++)t+=parseInt(n.substring(i-1,i))*(11-i)
if(r=10*t%11,10!=r&&11!=r||(r=0),r!=parseInt(n.substring(9,10)))return!1
for(t=0,i=1;i<=10;i++)t+=parseInt(n.substring(i-1,i))*(12-i)
return r=10*t%11,10!=r&&11!=r||(r=0),r==parseInt(n.substring(10,11))},validate.isMail=function(n){var r=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/,i=/@[\w\-]+\./,t=/\.[a-zA-Z]{2,3}$/
return-1==n.search(r)&&-1!=n.search(i)&&-1!=n.search(t)},validate.isObject=function(n){return"object"==typeof n},validate.isArray=function(n){return"object"==typeof n},validate.isString=function(n){return"string"==typeof n},validate.isNumber=function(n){return"number"==typeof n},validate.isBoolean=function(n){return"boolean"==typeof n}
