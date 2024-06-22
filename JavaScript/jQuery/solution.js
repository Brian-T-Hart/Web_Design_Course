$('p').addClass('red').on('click', function() {
    $(this).toggleClass('red');
    $(this).toggleClass('blue');
});

$('#grocery-form').on('submit', function(event) {
    event.preventDefault();

    $('<p></p>').addClass('red').text( $('#grocery-input').val() ).on('click', function() {
        $(this).toggleClass('red');
        $(this).toggleClass('blue');
    }).appendTo($('#main-container'));

    $('#grocery-input').val('');
});