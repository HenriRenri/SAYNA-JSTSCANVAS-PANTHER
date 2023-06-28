$(document).ready(function(){
    // effet zoom sur l'image de la description
    $("#waka").on({
        mouseenter: function() {
            $(this).animate({ 
                width: 831,
                height: 464,
            });
        },
        mouseleave: function() {
            $(this).animate({
                width: 649,
                height: 362,
            });
        },
    });
});