# Função navigator.realLink

Retorna a URL final de um link parcial.

    string navigator.realLink(url, link)

## Retorno
Retorna um _string_, com uma URL completa.

## Exemplo
    
    var url = 'http://www.tiago.art.br/casa/quarto/cama/'
    var link = '../../teste.html';

    alert(navigator.realLink(url, link));
    // retornará: http://www.tiago.art.br/casa/teste.html
