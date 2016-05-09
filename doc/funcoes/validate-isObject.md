# Função validate.isObject

Verifica se variável em questão foi declarada como um *objeto* ou não.

    boolean validate.isObject(variavel)

## Parâmetro
* ```variavel``` -  é a variável que será verificada se foi declarada.

## Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarada e é um *objeto*.

## Exemplo

    if(validate.isObject(var1)){
        alert('var1 é um objeto.');
    } else {
        alert('var1 não é um objeto.');
    }
