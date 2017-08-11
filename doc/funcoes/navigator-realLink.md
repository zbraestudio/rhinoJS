# Função navigator.realLink

Retorna a URL final de um link parcial.

    string navigator.realLink(url, link)
    
    
## Parâmetros
* ```url``` - _String_ com a URL da página que contém o link. (Ex.: http://www.tiago.art.br/casa/quarto/cama/)
* ```link``` - _String_ com o valor do Link. (Ex.: ../../teste.html) 

## Retorno
Retorna um _string_, com uma URL completa.

## Exemplo
    
    var url = 'http://www.tiago.art.br/casa/quarto/cama/'
    var link = '../../teste.html';

    alert(navigator.realLink(url, link));
    // retornará: http://www.tiago.art.br/casa/teste.html

Veja uma [demonstração online](https://jsfiddle.net/73mdssnb/2/).