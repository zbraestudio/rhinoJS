# Função validate.isBoolean

Verifica se variável em questão foi declarada como um *boolean* ou não.

    boolean validate.isBoolean(variavel)

## Parâmetro
* ```variavel``` -  é a variável que será verificada se foi declarada.

## Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarada e é um *boolean*.

## Exemplo

    if(validate.isBoolean(var1)){
        alert('var1 é um boolean.');
    } else {
        alert('var1 não é um boolean.');
    }
