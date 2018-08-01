 var objeto = new XMLHttpRequest();
objeto.open('GET', 'https://darkarmybrasil.github.io/data.json', true);

objeto.onload = function()
{
    console.log('asdasdasd');
    var resposta = JSON.parse(objeto.responseText);
    console.log(resposta[0]);
    var titulos = resposta[0]['nome_site'];
    console.log(titulos);
    var items = resposta[1]['posts'];
//     var menu_links = resposta[0]['links_menu'];
//     for(i in menu_links)
//     {
//         if(menu_links[i].toLowerCase() == 'redes')
//         {
//             document.getElementById('menu').innerHTML += '<a href="" onclick=redes() >' + menu_links[i].toString() + '</a>';
//         }
//         if(menu_links[i].toLowerCase() == 'desafios')
//         {
//             document.getElementById('menu').innerHTML += "<a href='' onclick=desafios() >" + menu_links[i].toString() + "</a>";
//         }
        
//         if(menu_links[i].toLowerCase() == 'deep web')
//         {
//             document.getElementById('menu').innerHTML += "<a href='' onclick=deep() >" + menu_links[i].toString() + "</a>";
//         }

//         if(menu_links[i].toLowerCase() == 'hacking')
//         {
//             document.getElementById('menu').innerHTML += "<a href='' onclick=hacking() >" + menu_links[i].toString() + "</a>";
//         }
//        //document.getElementById('menu').innerHTML += "<a href=" + menu_links[i].toString().toLowerCase() + ".html>" + menu_links[i].toString() + "</a>";
//     }    
document.getElementById('menu').innerHTML +=    '<li><a href="https://darkarmybrasil.github.io/conteudo/deep web/deep web.html"> Deep web</a></li><li><a href="https://darkarmybrasil.github.io/conteudo/hacking/hacking.html"> Hacking</a></li><li><a href="https://darkarmybrasil.github.io/conteudo/desafios/desafios.html"> Desafios</a></li><li><a href="https://darkarmybrasil.github.io/conteudo/redes/redes.html"> Redes</a></li>';

    
    //LENDO A URL PARA PEGAR O NOME DA CATEGORIA ATUAL
    var link = /\w+.html/;
    var local = window.location.toString();
    var resultado = local.match(link).toString();
    console.log(local, resultado);

    var catName = resultado.substring(0, resultado.indexOf('.'));
    console.log(catName);
    console.log(" ");
    
     for(var i in items)
    {
        //console.log(i);
        if(items[i]['categoria'] == catName)
        {
            var alt = items[i]['categoria'];
            console.log('asdasd');
            document.getElementById('area').innerHTML += '<a onclick=pegarValor("'+ i.toString() + '")' + ' alt="' + alt.toString() + '">' + i.toString() + '</a><br><span>' +items[i]["Data"].toString()+'<br><br>'; 
        }
    }
    var nomes = document.getElementsByClassName('nome_site');
             
    try{         
         //PARA CADA VALOR DA LISTA RETORNADA
         for(var i = 0; i < nomes.length; i++){
 
             //SERA ADICIONADO O TIULO EM FORMATO DE STRING
             nomes[i].innerHTML = titulos.toString();
         }
        }

    catch(err)
    {
        console.log('Ocorreu algum erro...');
    }
    
   
    //PREENCHIMENTO COM OS ITEMS RELACIONADOS
    //document.getElementById('area').innerHTML = post.toString();
      
}; 

objeto.send(null);
console.log('asdasd');
function pegarValor(valor)
{
    window.location = valor+".html?valor="+valor;
 
}

 function home()
{
    window.location = "https://darkarmybrasil.github.io";
}
// function redes ()
// {
//     window.location = "https://darkarmybrasil.github.io/conteudo/redes/redes.html";
// }
// function desafios ()
// {
//     window.location = "https://darkarmybrasil.github.io/conteudo/desafios/desafios.html";
// }
// function deep ()
// {
//     window.location = "https://darkarmybrasil.github.io/conteudo/deep%20web/deep%20web.html";
// }
// function hacking ()
// {
//     window.location = "https://darkarmybrasil.github.io/conteudo/hacking/hacking.html";
// }
