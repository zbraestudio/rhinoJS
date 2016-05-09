# Função validate.isCPF

Verifica se o número de CPF informado é válido.

    boolean validate.isCPF()

## Retorno
Retorna um _boolean_, onde _true_ é um CPF válido.

## Exemplo

    if(validate.isCPF('XXX.XXX.XXX-XX')){
        alert('É um CPF válido.');
    } else {
        alert('Não é um CPF válido.');
    }
