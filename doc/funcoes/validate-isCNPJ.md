# Função validate.isCNPJ

Verifica se o número de CNPJ informado é válido.

    boolean validate.isCNPJ()

## Retorno
Retorna um _boolean_, onde _true_ é um CNPJ válido.

## Exemplo

    if(validate.isCNPJ('XX.XXX.XXX/XXXX-XX')){
        alert('É um CNPJ válido.');
    } else {
        alert('Não é um CNPJ válido.');
    }
