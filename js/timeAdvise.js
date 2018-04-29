var boolean_teclando = false;
var tempoSegundos = 0; // 
var tempoPagina = 0; // tempo total na pagina, essa variavel é enviada para o TimeSheetController
var tempoOcioso = 0;
var inativo = 0; // tempo total inativo na pagina
var ativo = 0; // tempo total teclando na pagina, essa variavel é enviada para o TimeSheetController
var w = document.URL;
var fechar = false;


/*window.onbeforeunload = function saindo() {
    setTimeout(function(){
        fechar = true;
    },100);
}*/

setInterval(function (){
    /*if (fechar){
    ativo = tempoPagina - inativo;
    valor = "";
    valor += "endereco="+w;
    valor += "&tempoPagina="+tempoPagina;
    valor += "&tempoAtividade="+ativo;
    $.ajaxSetup({
        headers: {
            // verificacao
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type:'POST',
        url:'/timesheet/',
        data: valor,
        sucess:function(data){
            console.log(data);
        },
        error:function(){
            
        }
    });*/        
}, 100);

/* quando o documento é carregando é chamada a funcao digitando
   e a variavel boolean_teclando obtem o valor return da funcao
   digitando.
*/
$(document).ready(function(){
    setInterval(function (){
        tempoPagina += 1; 
    }, 1000);	// a cada um segundo aumenta em um a variavel tempoPagina
    boolean_teclando = digitando();  
});

$('a').one('click',function (e) {
    w += "/cancelou"
    ajax();
});

$('form').one('submit',function(e){
    ajax();
});

function ajax(){
    ativo = tempoPagina - inativo;
    if (ativo == tempoPagina){ativo = 0;}
    valor = "";
    valor += "endereco="+w;
    valor += "&tempoPagina="+tempoPagina;
    valor += "&tempoAtividade="+ativo;
    $.ajaxSetup({
        headers: {
            // verificacao
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type:'POST',
        url:'/timesheet/',
        data: valor,
        sucess:function(data){
            console.log(data);
        },
        error:function(){
            
        }
    });
}

// se nao estiver teclando entao começa a contagem do tempo
/*
    A cada 5 segundos sem teclar a variavel tempoOcioso é incrementada
    Quando começa a teclar a variavel inativo obtem o valor da tempoOcioso

    A variavel tempoSegundos serve para verificar se está 5 segundos inativo
    e assim começar incrementar o tempo ocioso na página
*/
function digitando(){
    setInterval(function (){
        tempoSegundos += 1;
        if (tempoSegundos > 5){
            tempoOcioso += 1;
            boolean_teclando = false;
        }

        
        $("input,textarea").keypress(function(event){
            if (boolean_teclando == false){
                tempoSegundos = 0;
                inativo += tempoOcioso;
                tempoOcioso = 0;
            }
            boolean_teclando = true; // para parar o contador de tempo
        });
    }, 1000);   

}

