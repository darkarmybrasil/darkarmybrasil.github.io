 
function lerURL(string)
{
    var parametros = false;
    //GUARDA, A PARTIR DO PONTO DE INTERROGAÇÃO, A STRING DO INTERVALOR 1 ATÉ O INTERVALO DO TAMANHO DA STRING APOS O "?"
    var local = location.search.substring(1, location.search.length);
    var valor_parametro = false;
    
    //PEGA A STRING LOCAL E TRANSFORMA EM  LISTA
    var parametros = local.split('&');
    
    
    //FAZEMOS UM LOOPING PERCORRENDO A LISTA
    for(var i =0; i < parametros.length; i++)
    {

        nome_parametro = parametros[i].substring(0, parametros[i].indexOf('='));
        if(nome_parametro == string)
        {
            valor_parametro = parametros[i].substring(parametros[i].indexOf('=')+1);
        }
    }

    if(valor_parametro)
    {
        return valor_parametro;
    }
    else
    {
        return undefined;
    }        
    
}

var valor = lerURL('valor');

var objeto = new XMLHttpRequest();
objeto.open('GET', '../../data.json', true);
objeto.onload = function()
{
    var resposta = JSON.parse(objeto.responseText);
    var titulos = resposta[0]['nome_site'];
    var titulo_post = resposta[1]['posts'][valor]['title'];
    var post = resposta[1]['posts'][valor]['conteudo'];
    var data = resposta[1]['posts'][valor]['Data'];
    var menu_links = resposta[0]['links_menu'];
    for(i in menu_links)
    {
        if(menu_links[i].toLowerCase() == 'redes')
        {
            document.getElementById('menu').innerHTML += "<a href='' onclick=redes() >" + menu_links[i].toString() + "</a>";
        }
        if(menu_links[i].toLowerCase() == 'desafios')
        {
            document.getElementById('menu').innerHTML += "<a href='' onclick=desafios() >" + menu_links[i].toString() + "</a>";
        }
         if(menu_links[i].toLowerCase() == 'hacking')
        {
            document.getElementById('menu').innerHTML += "<a href='' onclick=hacking() >" + menu_links[i].toString() + "</a>";
        }
        if(menu_links[i].toLowerCase() == 'deep web')
        {
            document.getElementById('menu').innerHTML += "<a href='' onclick=deep() >" + menu_links[i].toString() + "</a>";
        }
    }
    var nomes = document.getElementsByClassName('nome_site');
    for(var i =0; i < nomes.length; i++)
    {
        nomes[i].innerHTML = titulos.toString();    
    }
    
    document.getElementById('nome_post').innerHTML = titulo_post.toString();
    document.getElementById('data').innerHTML = data.toString();
    //PREENCHIMENTO DO POST
    document.getElementById('area').innerHTML += post.toString();
      
};

objeto.send(null);

function home()
{
    window.location = "https://darkarmybrasil.github.io/index.html";
}
function redes ()
{
    window.location = "https://darkarmybrasil.github.io/conteudo/redes/redes.html";
}
function desafios ()
{
    window.location = "https://darkarmybrasil.github.io/conteudo/desafios/desafios.html";
}
function deep ()
{
    window.location = "https://darkarmybrasil.github.io/conteudo/deep%20web/deep%20web.html";
}
function hacking ()
{
    window.location = "https://darkarmybrasil.github.io/conteudo/hacking/hacking.html";
}
