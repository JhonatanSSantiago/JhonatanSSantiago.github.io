$('.menu > div').on('click', function(){
    $('#conteudo > div').removeClass('visivel');
    $('#conteudo > div.' + this.id).addClass('visivel');
});


function MsgError (){
    alert("Desculpe página em Desenvolvimento");
}