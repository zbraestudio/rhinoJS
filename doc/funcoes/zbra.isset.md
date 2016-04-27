# Função zbra.isset.md

Verifica se variável em questão foi declarada ou se não existe.

##### Retorno
Retorna um _boolean_, onde _true_ significa que variável já foi declarado e _false_ que não foi.

##### Exemplo

    if(zbra.isset(var1)){
        alert('var1 já foi declarada.');
    } else {
        alert('var1 não foi declarada ainda.');
    }
