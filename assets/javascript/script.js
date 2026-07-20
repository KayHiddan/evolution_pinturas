$(document).ready(() => {
    $('#mobile_menu_button').click(function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_menu_button').find('i').toggleClass('fa-bars fa-times');
    });
});

