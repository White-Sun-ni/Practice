$(window).scoll(function () {
    if ($(document).scollTop() > 50) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
})