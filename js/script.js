
$('.navbar > div').on('click', function(){
    $('#conteudo > div').removeClass('visivel');
    $('#conteudo > div.' + this.id).addClass('visivel');
});



window.onload = alert("Atenção!! Essa página ainda está em desenvoolvimento");