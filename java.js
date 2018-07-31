 
//CRIANDO UM OBJETO PARA A NOVA REQUISIÇÃO
var requisicao = new XMLHttpRequest();

//PREPARANDO A NOVA REQUISICAO, METODO GET, NA URL JJ/data.json, COM ASSINCRONISMO ATIVADO
requisicao.open('GET', 'data.json', true);

//AO CARREGAR A REQUISICAO ATIVAR A FUNÇAO
requisicao.onload = function(){
        //DADOS RETORNADOS DA REQUISICAO
        var dados = JSON.parse(requisicao.responseText);
        console.log(dados);
        //TITULO RETIRADO DA CHAVE nome_site
        var titulo = dados[0]['nome_site'];

        //LINKS DO MENU PRINCIPAL RETIRADOS DA CHAVE links_menu
        var links_principais = dados[0]['links_menu'];
        console.log(links_principais);
       

        //PARA CADA DA CHAVE links_principais
        for(var i in links_principais){
            console.log(i);
            //ADD OS LIKNS DO MENU PRINCIPAL
            document.getElementById('menu').innerHTML += '<a href="conteudo/' + links_principais[i].toString().toLowerCase() + '/' + links_principais[i].toLowerCase()  + '.html" >' + links_principais[i].toString() + '</a>';
        }


        //POSTS RETIRADOS DO SEGUNDO OBJETO DOS DADOS
        sei = dados[1]['posts'];
        console.log(sei);
        //PARA CADA VALOR DO DICIONARIO dados
        for(var i in sei){

            //BUSCAMOS UM ELEMENTO COM O ID ATUAL
            var elemento = document.getElementById(i);
            console.log(i);
            
            var alt = sei[i]['categoria'];
            console.log(alt);
            //SE O ELEMENTO NAO EXISTIR, OU SEJA, NULO
            if(elemento == null){

                //ADICIONA-LO NO CAMPO AREA SOMADO AO QUE JA EXISTE
                document.getElementById('area').innerHTML += '<a onclick=pegarValor("'+ i.toString() + ',' + alt.toString() +'")' + ' alt="' + alt.toString() + '">' + i.toString() + '</a><br><span>' +sei[i]["Data"].toString()+'<br><br>';            
            }
            
        }
         //BUSCA POR ELEMENTOS NO HTML QUE CONTEM UMA CLASSE nome_site
         var nomes = document.getElementsByClassName('nome_site');
         
    try{         
         //PARA CADA VALOR DA LISTA RETORNADA
         for(var i = 0; i <= nomes.length; i++){
 
             //SERA ADICIONADO O TIULO EM FORMATO DE STRING
             nomes[i].innerHTML = titulo.toString();
         }
        }
    catch(err)
    {
        console.log('Ocorreu algum erro...');
    }
    };
//FAZER A REQUISICAO DE FATO    
requisicao.send(null);
function pegarValor(valor, categoria)
{
    seila = valor.split(',');
    console.log(seila);
    valor = seila[0];
    categoria = seila[1];
  
    console.log(valor.toString());
    console.log('*****************');
    console.log(categoria);
    window.location = "conteudo/"+ categoria + "/"+valor+".html?valor="+valor;
 
}

