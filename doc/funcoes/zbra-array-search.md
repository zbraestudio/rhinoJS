# Função zbra.array.search

Verifica item-a-item de array se x valor já está contido nele.

## Parâmetros
* **array** - Array que será vistoriado.
* **item** - Valor que será procurado no array.

## Retorno
Retorna um _boolean_, onde _true_ significa que valor já estava contido no array.

## Exemplo

    var A = new Array('Tiago', 'Aline', 'Yuki', 'Alice');
    var B = 'Alice';
    
    if(zbra.array.search(A, B))
      alert('Encontrou!');
    else
      alert('Não encontrou!');

_Nota: o exemplo deve abrir um alerta com "Encontrou!"._

