$(function(){
    $('ul.navbar-nav li a').click(function(){
    //alert($(this).attr('href'));
    var aba = $(this).attr('href');
 
        switch(aba) {
            case "#tab-6368-1": // Apresenta��o
            //alert('Apresenta��o')
            ga('send', 'pageview', '/apresentacao');
            break;
            case "#tab-2756-1": // Compara Unidades Geogr�ficas
            //alert('Compara Unidades Geogr�ficas')
            ga('send', 'pageview', '/compara-u-geo');
            break;
            case "#tab-2756-2": // Compara Indicadores
            // alert('Compara Indicadores')
            ga('send', 'pageview', '/compara-indicadores');
            break;
            case "#tab-6368-2": // Mapas
            // alert('Mapas')
            ga('send', 'pageview', '/mapa');
            break;
            case "#tab-6368-3": // Rela��o entre Indicadores
            //alert('Rela��o entre Indicadores')
            ga('send', 'pageview', '/relacao');
            break;
            case "#tab-6368-4": // Tabela
            //alert('Tabela')
            ga('send', 'pageview', '/tabela');
            break;
            case "#tab-6368-5": // mapa
            //alert('Download')
            ga('send', 'pageview', '/download');
            break;
            default:
            // default code block
        }
    });

     
});