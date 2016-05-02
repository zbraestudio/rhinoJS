# Função zbra.validateCPF

Verifica se o número de CPF informado é válido.

    boolean zbra.device.validateCPF()

## Retorno
Retorna um _boolean_, onde _true_ é um CPF válido.

## Exemplo

    if(zbra.validateCPF('XXX.XXX.XXX-XX)){
        alert('É um CPF válido.');
    } else {
        alert('Não é um CPF válido.');
    }
