$(document).ready(function() {
    $('p').hide();
    window.addEventListener('scroll', function(e) {
            $('p').fadeIn(3000);
        });

    $(".ligne_logo").hide();
    setTimeout(() => {
        $(".ligne_logo").slideDown(5000);
    }, 2000);
});

window.onload = function(){



    // animation zoom sur le h1
    $("h1").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: 78,
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: 68,
            });
        },
    });

    // zoom pour h2
    $("h2").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: 42,
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: 32,
            });
        },
    });

    // zoom pour h3
    $("h3").on({
        mouseenter: function(){
            $(this).animate({
                fontSize: 36,
            });
        },
        mouseleave: function(){
            $(this).animate({
                fontSize: 26,
            });
        }
    });
}