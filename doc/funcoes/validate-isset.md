# Função validate.isset.md

Verifica se variável em questão foi declarada ou se não existe.

    boolean validate.isset(variavel)

## Parâmetro
* ```variavel``` -  é a variável que será verificada se foi declarada.

## Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarado e _false_ que não foi.

## Exemplo

    if(validate.isset(var1)){
        alert('var1 já foi declarada.');
    } else {
        alert('var1 não foi declarada ainda.');
    }
