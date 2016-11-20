/** Evento que é disparado quando o site é carregado ou a janela muda de tamanho
 *
 * @param fnc
 */
window.change = function(fnc){
  jQuery(document).ready(fnc);
  jQuery(window).resize(fnc);
}
