# Função validate.isNumber

Verifica se variável em questão foi declarada como um *número* ou não.

    boolean validate.isNumber(variavel)

## Parâmetro
* ```variavel``` -  é a variável que será verificada se foi declarada.

## Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarada e é um *número*.

## Exemplo

    if(validate.isNumber(var1)){
        alert('var1 é um número.');
    } else {
        alert('var1 não é um número.');
    }
