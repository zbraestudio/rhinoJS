# Instruções de Release

Antes de liberar qualquer release do Z.BRA Framework Javascript leia abaixo as intruções.

## A. Comprimir fontes

1 - Antes de tudo, altera a versão (para a versão que será liberada) no arquivo **zbra.init.php**:

    zbra.version = "X.X.X";
    
_Nota: Respeite SEMPRE a  [nomenclatura](/releases/nomenclatura.md) adotada como padrão para esse projeto._
  
  
2 - Abra o compressor de código fonte: http://refresh-sf.com/.

3 - Adicione todos os arquivos fontes na seguinte ordem:

1.  zbra.init.js
2.  zbra.array.js
3.  zbra.device.js
4.  zbra.functions.js

4 - Abra um editor de texto e salve a versão (não comprimida) com todos os fontes juntos. Salve esse arquivo no diretório ```dist/zbra.js```

5 - Comprima e agora os fontes e salve a versão comprimida como ```dist/zbra.min.js```.

_Nota: Não esqueça de fazer ```commit``` de tudo isso antes de prosseguir._

## B. Branches
Agora é hora de liberarmos a versão no Github. Para isso, crie um branche somente com a versão que está sendo liberada. Por exemplo: ```1.2.3```.

## C. Documentação
Agora só falta você fazer a documentação da liberação.
Faça isso no branche ```master``` no arquivo: **/doc/downloads.md**.

## Pronto!
Opa, versão nova saindo do forno. Parabéns! :)
