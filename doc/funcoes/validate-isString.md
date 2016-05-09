# Função validate.isString

Verifica se variável em questão foi declarada como uma *string* ou não.

    boolean validate.isString(variavel)

## Parâmetro
* ```variavel``` -  é a variável que será verificada se foi declarada.

## Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarado é uma *string*

## Exemplo

    if(validate.isString(var1)){
        alert('var1 é uma string.');
    } else {
        alert('var1 não é uma string.');
    }
