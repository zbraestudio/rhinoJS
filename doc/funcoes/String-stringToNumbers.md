# Função String.stringToNumbers

Função que trata uma string e retorna ela somente com os números contidos.

    string String.stringToNumbers(text)

## Parâmetro
* ```text``` -  É a string que será convertida somente em números.

## Retorna
Retorna somente os números da *string* enviada.

## Exemplo

    var s = 'Meu pai está fazendo 50 anos.';
    var r = String.stringToNumbers(s);
    alert(r); //Irá retornar 50

