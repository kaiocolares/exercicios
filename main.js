$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(800);
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp(800);
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoNovaImg = $('#endereco-nova-img').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-img-link">
        <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-img').val('');
    })
})