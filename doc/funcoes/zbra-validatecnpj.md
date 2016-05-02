# Função zbra.validateCNPJ

Verifica se o número de CNPJ informado é válido.

    boolean zbra.device.validateCNPJ()

## Retorno
Retorna um _boolean_, onde _true_ é um CNPJ válido.

## Exemplo

    if(zbra.validateCNPJ('XX.XXX.XXX/XXXX-XX')){
        alert('É um CNPJ válido.');
    } else {
        alert('Não é um CNPJ válido.');
    }
