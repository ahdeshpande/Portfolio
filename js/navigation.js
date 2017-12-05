/**
 * Created by ahdeshpande on 5/19/16.
 */

$(document).ready(function () {

    $('#top-navigation').removeClass("hidden");
    $('#top-navigation').hide();

    $(window).scroll(function() {
        if ($(window).scrollTop() > ($( window ).height() * 0.7)) {
            $('#top-navigation').fadeIn();
        }
        else {
            $('#top-navigation').fadeOut();
        }
    });

});

$(window).load(function () {

    $('.outer-container').css("position","inherit");
    setTimeout(function(){$(".outer-container").css("position","relative");}, 1000);
});