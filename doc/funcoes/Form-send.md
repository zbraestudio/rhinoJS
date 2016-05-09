# Função Form.send

Envia pacote de dados (via ```GET``` ou ```POST```).

    void Form.send(url, params, method, target)

## Parâmetro
* ```url``` -  URL de destino.
* ```params``` -  Array que contém todos os paramêtros que serão enviados.
* ```method``` -  Qual metodo será enviada as informações (```POST``` ou ```GET``` - Padrão é: ```POST```)
* ```target``` -  Destino que será enviada as informações (Padrão é ```_self```)

## Exemplo

    $('#teste').click(function(){

      var parametros = {twet: 'Olá mundo cruéu!'};
      Form.send('http://apps.zbraestudio.com.br/twites', parametros, 'GET', '_blank');

    });
    
Veja uma [demonstração online](https://jsfiddle.net/73mdssnb/).
