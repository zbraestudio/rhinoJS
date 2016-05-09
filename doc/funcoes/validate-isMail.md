# Função validate.isMail

Verifica se o número de CPF informado é válido.

    boolean validate.isMail()

## Retorno
Retorna um _boolean_, onde _true_ é um E-mail válido.

## Exemplo

    if(validate.isMail('teste@teste.com.br')){
        alert('É um E-mail válido.');
    } else {
        alert('Não é um E-mail válido.');
    }
