
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (Event) {
    $(this).parent().fadeOut(1000, function () { $(this).remove(); });
    Event.stopPropagation();
});
$('input[type="text"]').keypress(function (event) {

    if (event.which === 13) {
        console.log('enter');
        var todoText = $(this).val();
        $(this).val('')
        $('ul').append('<li><span> <i class="fa fa-trash" aria-hidden="true"></i> </span>' + todoText + '</li>')
    }

});

$('.fa-plus').click(function () {
    $('input[type="text"]').fadeToggle()

});



