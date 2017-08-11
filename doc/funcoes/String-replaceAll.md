# Função String.replaceAll

Função que substitui parte de uma _string_, quantas vezes forem possíveis.

    string String.replaceAll(search, replace, subject)

## Parâmetro
* ```search``` -  É a _string_ que será procurada.
* ```replace``` -  É a _string_ que irá substituir a _string_ encontrada.
* ```subject``` -  Texto original, onde será encontrada e substituída parte do texto.

## Retorna
Retorna uma _string_ já com as substituições.

## Exemplo

    var subject = 'Olá mundo cruel. Mas é cruel mesmo?';
    var r = String.replaceAll('cruel', 'bonito', subject);
    alert(r); //Irá retornar: 'Olá mundo bonito. Mas é bonito mesmo?'

